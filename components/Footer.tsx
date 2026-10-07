import { site } from "@/content/site";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-muted">
                <span>
                    &copy; 2026 {site.name}. All rights reserved.
                </span>
                <span>Built with Next.js and tailwind CSS</span>
            </div>
        </footer>
    );
}