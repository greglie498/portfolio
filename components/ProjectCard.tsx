import type { Project } from "@/content/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-accent/60">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="shrink-0 rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted">
                    {project.status}
                </span>
            </div>

            <p className="mt-2 text-sm text-muted">{project.tagline}</p>

            <ul className="mt-4 space-y-2 text-sm text-fg/90">
                {project.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                    </li>
                ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                    <li
                        key={s}
                        className="rounded-md bg-bg px-2 py-0.5 font-mono text-xs text-muted"
                    >
                        {s}
                    </li>
                ))}
            </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm">
                    {project.caseStudy && (
                        <Link
                            href={`/projects/${project.slug}`}
                            className="text-accent transition hover:underline"
                        >
                            Read case study →
                        </Link>
                    )}
                    {project.repo ? (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted transition hover:text-fg"
                        >
                            Repository ↗
                        </a>
                        ) : (
                        <span className="text-muted">Private repository</span>
                    )}
                </div>
        </article>
    );
}