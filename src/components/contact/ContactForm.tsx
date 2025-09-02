"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setLoading(false);

      if (res.ok) {
        alert("Message sent! ✅ Check your inbox.");
        form.reset();
      } else {
        const err = await res.json();
        console.error("Send failed:", err);
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error ❌");
      setLoading(false);
    }
  }

  return (
    <div className="bg-muted rounded-2xl shadow-md p-6 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
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
            required
            className="bg-background focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="reason" className="text-muted-foreground">Reason</Label>
          <Select name="reason">
            <SelectTrigger className="bg-background focus:ring-2 focus:ring-primary focus:border-primary">
              <SelectValue placeholder="Select reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="collab">Collaboration</SelectItem>
              <SelectItem value="speaking">Speaking</SelectItem>
              <SelectItem value="hi">Just Saying Hi</SelectItem>
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
      </form>
    </div>
  );
}
