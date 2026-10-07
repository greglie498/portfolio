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
        title: "Nini Assists",
        tagline: "Business website for a US-based concierge company",
        status: "Client work",
        year: "2026",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Cloudflare"],
        highlights: [
            "Took the engagement from requirements through wireframes to visual design, with a client sign-off gate before development",
            "Designed the Supabase data model covering service tiers, event types, portfolio, inquiries, tutoring, and translation",
            "Next.js build planned after client sign-off; source code is private",
        ],
        featured: true,
        caseStudy: {
        overview:
            "Nini Assists is a business website for a US-based boutique concierge company offering event coordination, tutoring, and translation. I'm running the engagement as a freelancer, from requirements and wireframes through visual design and the data model. The build follows client sign-off on the design.",
        problem:
            "The business sells three very different things: tiered event packages, subject-based tutoring, and per-page translation. Each has its own buying flow, but visitors needed one clear site, and the client needed every inquiry to land in one place and to update content later without a developer.",
        decisions: [
            {
            title: "Restructured the events model to match the approved design",
            description:
                "The first schema had one table of event types, each with its own page. The approved design instead had three bookable service levels with real detail pages, plus five event types that are purely descriptive. I split the table into service_levels and event_types, and made the change before any data had been seeded, so the migration was safe.",
            },
            {
            title: "One page template, content driven by database rows",
            description:
                "The three service-level pages share a single template component. Each page's content comes from its row in the database and its URL from a slug, so adding or editing a tier doesn't need new code.",
            },
            {
            title: "One inquiries table for three kinds of inquiry",
            description:
                "Event, tutoring, and translation inquiries all write to one table. An inquiry_type field decides which optional foreign key applies, and a shared form wrapper swaps in the matching fields component. A status field (new, contacted, booked) tracks each lead.",
            },
            {
            title: "Deferred scope explicitly instead of absorbing it",
            description:
                "Online payment for translation and a dark mode were both kept out of the current scope and flagged as separately quoted future work. I checked that the palette extends to a dark variant, so dark mode would be an addition rather than a redesign.",
            },
        ],
        },
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
            caseStudy: {
      overview:
        "SkillLink is my capstone project at USIU-Africa: a marketplace connecting students and early-career professionals with small and medium businesses for paid short-term work. It aligns with the UN goals for decent work, quality education, and reduced inequalities. It's currently in the requirements and design phase.",
      problem:
        "Students and recent graduates struggle to get practical work experience, while small businesses need affordable access to skilled people but can't hire full-time. SkillLink connects the two through skill-based profiles, project postings, applications, reviews, and eventually M-Pesa payments.",
      decisions: [
        {
          title: "A scoped MVP instead of an Upwork clone",
          description:
            "The requirements document defines functional and non-functional requirements, user stories, and an MVP. Escrow, dispute resolution, tax handling, multi-currency payouts, advanced invoicing, native mobile apps, and complex automated matching are explicitly out of scope for the first release.",
        },
        {
          title: "User flows first, backend second",
          description:
            "The frontend workflows are designed and validated first, and the backend and database are built afterwards around confirmed requirements, so the data model follows real needs instead of guesses.",
        },
        {
          title: "Out-of-scope screens kept, but labeled",
          description:
            "The wireframes include messaging, payments and earnings, and a business-side match-score feature that go beyond the MVP. Rather than delete them or quietly expand scope, I kept them in the design file marked as future-phase, so they're documented without committing the build to them.",
        },
        {
          title: "Planned stack",
          description:
            "React, TypeScript, Vite, and Tailwind on the frontend; Node.js, Express, PostgreSQL with Prisma, and JWT authentication on the backend, deployed to Vercel and Render. This is the stack set out in the requirements document, and implementation follows the frontend phase.",
        },
      ],
    },
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