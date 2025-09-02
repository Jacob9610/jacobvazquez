"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ContactForm from "./ContactForm";
import CalendlyEmbed from "./CalendlyEmbed";


export default function ContactTabs() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Tabs defaultValue="meet" className="w-full">
        {/* Tab Switcher */}
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="meet">Meet</TabsTrigger>
          <TabsTrigger value="message">Message</TabsTrigger>
        </TabsList>

        {/* Meet → Calendly */}
        <TabsContent value="meet">
          <CalendlyEmbed />
        </TabsContent>

        {/* Message → Form */}
        <TabsContent value="message">
          <ContactForm />
        </TabsContent>

      </Tabs>

    </div>
  );
}
