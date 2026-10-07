import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { projects } from "@/content/projects";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects
        .filter((p) => p.caseStudy)
        .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return { title: `${project.title} | Elie Banga-Bothy`, description: project.tagline };
}

export default async function CaseStudy({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project || !project.caseStudy) notFound();

    const { caseStudy } = project;

    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-3xl px-6 py-16">
                <Link href="/#projects" className="font-mono text-sm text-muted transition hover:text-accent">
                    &larr; all projects
                </Link>

                <header className="mt-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-3xl font-medium sm:text-4xl">{project.title}</h1>
                        <span className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted">
                            {project.status} · {project.year}
                        </span>
                    </div>
                    <p className="mt-3 text-lg text-muted">{project.tagline}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                            <li key={s} className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-muted">
                                {s}
                            </li>
                        ))}
                    </ul>
                </header>

                <Section label="overview">
                    <p>{caseStudy.overview}</p>
                </Section>

                <Section label="the problem">
                    <p>{caseStudy.problem}</p>
                </Section>

                <Section label="what I built">
                    <ul className="space-y-2">
                        {project.highlights.map((h) => (
                            <li key={h} className="flex gap-2">
                                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                <span>{h}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section label="key decisions">
                    <div className="space-y-5">
                        {caseStudy.decisions.map((d) => (
                            <div key={d.title} className="rounded-xl border border-border bg-surface p-5">
                                <h3 className="font-medium">{d.title}</h3>
                                <p className="mt-1.5 text-sm text-muted">{d.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener nonreferrer"
                        className="mt-12 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition hover:opacity-90"
                    >
                        View repository ↗
                    </a>
                )}
            </main>
            <Footer />
        </>
    );
}

function Section({ label, children }: { label: string; children: React.ReactNode}) {
    return (
        <section className="mt-12">
            <p className="font-mono text-sm text-accent">{label}</p>
            <div className="mt-3 text-fg/90 leeading-relaxed">{children}</div>
        </section>
    );
}