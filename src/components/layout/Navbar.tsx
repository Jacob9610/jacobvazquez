"use client";

import Link from "next/link";
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
        <Link href="/" className="text-lg font-semibold tracking-tight">
          JV
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground">
              Projects <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Featured</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/projects/flyshock">FlyShock</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/projects/robocam">RoboCam</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/projects/line-racer">Line Racer</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/projects">All projects →</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/Updates" className="text-sm text-muted-foreground hover:text-foreground">
            Updates
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
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
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                <Link href="/">Home</Link>
                <div>
                  <div className="mb-2 text-xs font-medium text-muted-foreground">Projects</div>
                  <div className="flex flex-col gap-2 pl-2 text-sm">
                    <Link href="/projects/flyshock">FlyShock</Link>
                    <Link href="/projects/robocam">RoboCam</Link>
                    <Link href="/projects/line-racer">Line Racer</Link>
                    <Link href="/projects">All projects →</Link>
                  </div>
                </div>
                <Link href="/#about">About</Link>
                <Link href="/#contact">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
