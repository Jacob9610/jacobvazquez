import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jacob Vazquez
        </span>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Jacob9610" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/jacob-vazquez-831460270/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:Vazquezjake@live.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
