import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    
    return (
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-sm text-accent">projects</p>
            <h2 className="mt-1 text-2xl font-medium sm:text-3xl">Selected work</h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                {featured.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </section>
    );
}