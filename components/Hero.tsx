import { site } from "@/content/site";

const stack = ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "React Native", "Next.js"];

export default function Hero() {
    return (
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
            <p className="font-mono text-sm text-accent">hello, I&apos;m</p>
            <h1 className="mt-2 text-4xl font-medium">{site.name}</h1>
            <p className="mt-2 text-muted">Backend-leaning full-stack developer</p>

            <ul className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
                {stack.map((s) => (
                    <li
                        key={s}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                    >
                        {s}
                    </li>
                ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                    href="#projects"
                    className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition hover:opacity-90"
                >
                    View projects

                </a>
                <a
                    href={site.cv}
                    className="rounded-md border border-border bg-surface px-5 py-2.5 text-sm transition hover:border-accent hover:text-accent"
                >
                    Download CV
                </a>
                <a
                    href={site.github}
                    className="px-2 py-2.5 text-sm text-muted transition hover:text-fg"
                >
                    Github ↗
                </a>
            </div>

            <p className="mt-10 font-mono text-xs text-muted">
                Nairobi, Kenya · USIU-Africa, expected 2027
             </p>
        </section>
    )
}