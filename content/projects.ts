export type Project = {
    slug: string;
    title: string;
    tagline: string;
    status: "In progress" | "Complete" | "Client work" | "Team project";
    year: string;
    stack: string[];
    highlights: string[];
    repo?: string;
    featured: boolean;
    caseStudy?: {
        overview: string;
        problem: string;
        decisions: { title: string; description: string }[];
    };
};

export const projects: Project[] = [
    {
        slug: "panwallet",
        title: "PanWallet",
        tagline:"Multi-provider mobile money wallet for Africa",
        status: "In progress",
        year: "2026",
        stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "React Native", "Expo"],
        highlights: [
            "Integrated M-Pesa Daraja and MTN MoMo behind an extensible provider layer (sandbox)",
            "Enforced idempotency on wallet operations to prevent duplicate transactions on unreliable networks",
            "JWT sessions with hashed refresh tokens and family-based reuse detection",
            "Clean-architecture backend with repository interfaces and Zod-validated config",
        ],
        repo: "https://github.com/greglie498/Pan-Wallet",
        featured: true,
            caseStudy: {
      overview:
        "PanWallet is a wallet backend and mobile app that lets one user move money across mobile money providers from a single place. It runs against provider sandboxes.",
      problem:
        "Mobile money in Africa is split across providers, each with its own API and failure modes. Networks are unreliable, so a retried request must never move money twice.",
      decisions: [
        {
          title: "Provider layer instead of hard-coded integrations",
          description:
            "M-Pesa Daraja and MTN MoMo sit behind a shared interface, so adding a provider means adding an adapter rather than changing wallet logic.",
        },
        {
          title: "Idempotent wallet operations",
          description:
            "Wallet operations are idempotent so a retry after a dropped connection returns the original result instead of creating a duplicate transaction.",
        },
        {
          title: "Refresh token reuse detection",
          description:
            "Refresh tokens are stored hashed and grouped into families, so reuse of an old token can be detected and the session revoked.",
        },
        {
          title: "Clean architecture with repository interfaces",
          description:
            "Business logic depends on repository interfaces rather than Prisma directly, and configuration is validated with Zod at startup.",
        },
      ],
    },
    },
     {
        slug: "nini-assists",
        title: "Nini Assits",
        tagline:"Business website for a US-based concierge company",
        status: "Client work",
        year: "2026",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Cloudfare"],
        highlights: [
           "Took the engagement from requirements through wireframes to visual design",
            "Phased delivery with a client sign-off gate before development",
            "Source code is private; case study only",
        ],
        featured: true,
    },
     {
        slug: "skilllink",
        title: "SkillLink",
        tagline:"Marketplace connecting students with SMEs for paid short-term work",
        status: "In progress",
        year: "2026",
        stack: ["React", "TypeScript", "Vite", "PostgreSQL", "Prisma"],
        highlights: [
            "Wrote the requirements, user stories, and a deliberately scoped MVP",
            "Low-fidelity Figma wireframes, now moving to high-fidelity UI",
            "Frontend flows validated first, backend and M-Pesa payments in later phases",
        ],
        repo: "https://github.com/greglie498/SkillLink",
        featured: true,
    },
     {
        slug: "lost-and-found",
        title: "Lost & Found",
        tagline:"Searchable digital workflow for lost and found items",
        status: "Complete",
        year: "2026",
        stack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
        highlights: [
            "JWT authentication with protected routes and role-based access control",
            "CRUD workflows for reporting, searching, and claiming items",
            "React frontend wired to a REST API",
        ],
        repo: "https://github.com/greglie498/LostAndFound",
        featured: true,
    },
    {
        slug: "smart-campus",
        title: "Smart Campus Navigation",
        tagline: "Mobile-first wayfinding app for students, staff, and visitors",
        status: "Team project",
        year: "2026",
        stack: ["React", "Interactive mapping"],
        highlights: [
            "Lead engineer on a four-member university team: split tasks, reviewed and integrated code",
            "Built React interface components and the interactive campus map",
            "Worked on the search-to-navigation user journey for locating campus facilities",
            "Contributed to requirements, use cases, accessibility considerations, and prototyping",
        ],
        repo: "https://github.com/greglie498/Smart_Campus",
        featured: false,
    },
];