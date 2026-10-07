import Link from "next/link";
import { site } from "@/content/site";

const links = [
    { href: "/#projects", label: "Projects"},
    { href: "/#contact", label: "Contact"},
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-mono text-sm text-accent">
                    eliebothy<span className="text-muted">.dev</span> {/* To be replace with real domain name */}
                </Link>
                <ul className="flex items-center gap-6 text-sm">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className="text-muted transition hover:text-fg">
                                {l.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href={site.cv}
                            className="rounded-md bordewr border-border px-3 py-1.5 text-fg transition hover:border-accent hover:text-accent"
                        >
                            CV
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}