"use client";

import { Github, Linkedin, Mail, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <a href="#home" className="text-lg font-semibold tracking-tight">JV</a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm text-muted-foreground hover:text-foreground">Home</a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground">
              Projects <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Featured</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><a href="#projects-flyshock">FlyShock</a></DropdownMenuItem>
              <DropdownMenuItem asChild><a href="#projects-robocam">RoboCam</a></DropdownMenuItem>
              <DropdownMenuItem asChild><a href="#projects-line-racer">Line Racer</a></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><a href="#projects-all">All projects →</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
        </div>

        {/* Socials (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:hello@yourdomain.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader><SheetTitle>Menu</SheetTitle></SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                <a href="#home">Home</a>
                <div>
                  <div className="mb-2 text-xs font-medium text-muted-foreground">Projects</div>
                  <div className="flex flex-col gap-2 pl-2 text-sm">
                    <a href="#projects-flyshock">FlyShock</a>
                    <a href="#projects-robocam">RoboCam</a>
                    <a href="#projects-line-racer">Line Racer</a>
                    <a href="#projects-all">All projects →</a>
                  </div>
                </div>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
