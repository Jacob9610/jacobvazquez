"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          JV
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">

          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
          Projects
          </Link>
          <Link href="/updates" className="text-sm text-muted-foreground hover:text-foreground">
            Feeds
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          {/* <Link href="/education" className="text-sm text-muted-foreground hover:text-foreground">
            Education
          </Link> */}
           <Link href="/resume" className="text-sm text-muted-foreground hover:text-foreground">
            Resume
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>

        {/* Socials (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://https://github.com/Jacob9610" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/jacob-vazquez-831460270/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:vazquezjake@live.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
              
                <Link href="/projects">Projects →</Link>
                <Link href="/updates">Feeds</Link>
                <Link href="/about">About</Link>
                {/* <Link href="/education">Education</Link> */}
                <Link href="/resume">Resume</Link>
                <Link href="/#contact">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
