import { site } from "@/content/site";

export default function Contact(){
    return (
        <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-sm text-accent">contact</p>
            <h2 className="mt-1 text-2xl font-medium sm:text-3xl">Let&apos;s talk!</h2>
            <p className="mt-3 max-w-xl text-muted">
                Open to freelance projects and backend or fullstack software development opportunities. The
                fastest way to reach me is email.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                    href={`mailto:${site.email}`}
                    className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition hover:opacity-90"
                >
                    {site.email}
                </a>
                <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border px-5 py-2.5 text-sm transition hover:border-accent hover:text-accent"
                >
                    GitHub ↗
                </a>
                {site.linkedin && (
                    <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-border px-5 py-2.5 text-sm transition hover:border-accent hover:text-accent"
                    >
                        LinkedIn ↗
                    </a>
                )}
                <a
                    href={site.cv}
                    className="px-2 py-2.5 text-sm text-muted transition hover:text-fg"
                >
                    Download CV
                </a>
            </div>
        </section>
    )
}