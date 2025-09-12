"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Normalize/trim values
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      // prefer the controlled Select value; fall back to hidden input value
      reason: reason || String(formData.get("reason") ?? "").trim() || "Contact form",
      message: String(formData.get("message") ?? "").trim(),
    };

    // Minimal client validation
    if (!payload.name || !payload.email || !payload.message) {
      alert("Please fill in Name, Email, and Message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Send failed:", json);
        alert(`Something went wrong ❌ ${json?.error ? `\n${json.error}` : ""}`);
        return;
      }

      alert("Message sent! ✅ Check your inbox.");
      form.reset();
      setReason(""); // reset the Select
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-muted rounded-2xl shadow-md p-6 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset disabled={loading} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-muted-foreground">Name</Label>
            <Input
              id="name"
              name="name"
              required
              className="bg-background focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-muted-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-background focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-muted-foreground">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="(Optional)"
              className="bg-background focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <Label className="text-muted-foreground">Reason</Label>
            {/* Hidden input so the value is included in FormData */}
            <input type="hidden" name="reason" value={reason} />
            <Select value={reason} onValueChange={setReason}>
              <SelectTrigger className="bg-background focus:ring-2 focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Select reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Collaboration">Collaboration</SelectItem>
                <SelectItem value="Speaking">Speaking</SelectItem>
                <SelectItem value="Just saying hi">Just Saying Hi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-muted-foreground">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              className="bg-background focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
