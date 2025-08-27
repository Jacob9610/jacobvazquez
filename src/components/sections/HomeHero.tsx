"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Building systems, not just code.
        </h1>
        <p className="mt-4 text-muted-foreground">
          I design hardware-software interfaces, research tools, and clean web apps.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg"><a href="#projects-all">View Projects</a></Button>
          <Button asChild size="lg" variant="outline"><a href="#contact">Contact Me</a></Button>
        </div>
      </motion.div>
    </section>
  );
}
