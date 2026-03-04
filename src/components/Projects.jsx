import React from 'react'

const projects = [
    {
        number: '01',
        title: 'E-Commerce Core',
        description:
            'A scalable full-stack shopping platform engineered with microservices architecture. Features real-time inventory tracking via WebSockets and seamless Stripe payment integration.',
        tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
        image: '/project-01.jpg',
        sourceUrl: '#',
        demoUrl: '#',
    },
    {
        number: '02',
        title: 'Crypto Analytics',
        description:
            'Real-time cryptocurrency tracking dashboard visualizing market trends. Implements heavy data visualization using D3.js and efficient state management with Redux Toolkit.',
        tags: ['Vue.js', 'D3.js', 'Firebase'],
        image: '/project-02.jpg',
        sourceUrl: '#',
        demoUrl: '#',
    },
    {
        number: '03',
        title: 'Neural Chat Bot',
        description:
            "An intelligent conversational agent powered by OpenAI's GPT-4 API. Includes context retention, custom persona settings, and a sleek, terminal-inspired user interface.",
        tags: ['TypeScript', 'Next.js', 'OpenAI API'],
        image: '/project-03.jpg',
        sourceUrl: '#',
        demoUrl: '#',
    },
    {
        number: '04',
        title: 'Task Master CLI',
        description:
            'A high-performance command-line task manager written in Rust. Features cloud synchronization, priority queues, and a plugin system for extending functionality.',
        tags: ['Rust', 'PostgreSQL', 'AWS'],
        image: '/project-04.jpg',
        sourceUrl: '#',
        demoUrl: '#',
    },
]

function ProjectCard({ project }) {
    return (
        <article className="group relative flex w-[340px] md:w-[420px] flex-shrink-0 flex-col overflow-hidden rounded-xl border border-primary/20 bg-card-dark transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            {/* Image Container */}
            <div className="relative h-[240px] w-full overflow-hidden bg-black/40">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-60"></div>
                {/* Number Badge */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background-dark/80 backdrop-blur-sm border border-primary/30">
                    <span className="text-primary font-bold text-sm">{project.number}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6 border-t border-white/10 pt-4">
                        <a
                            className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium group/link"
                            href={project.sourceUrl}
                        >
                            <span className="material-symbols-outlined text-[20px] group-hover/link:animate-pulse">code</span>
                            <span>Source Code</span>
                        </a>
                        <a
                            className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium group/link"
                            href={project.demoUrl}
                        >
                            <span className="material-symbols-outlined text-[20px] group-hover/link:animate-pulse">open_in_new</span>
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default function Projects() {
    return (
        <section className="relative flex w-full flex-col justify-center py-10 md:py-20">
            {/* Header */}
            <div className="mx-auto px-6 md:px-12 mb-12 flex flex-col items-center text-center">
                <p className="text-primary/80 text-sm font-medium tracking-widest mb-3 uppercase font-display">
                    01 / Projects
                </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                    Selected Work
                </h2>
                <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
            </div>

            {/* Horizontal Scroll */}
            <div className="w-full overflow-x-auto scrollbar-hide px-6 md:px-12 pb-12">
                <div className="flex gap-8 w-max mx-auto md:mx-0">
                    {projects.map((project) => (
                        <ProjectCard key={project.number} project={project} />
                    ))}

                    {/* View All Card */}
                    <a
                        className="group relative flex w-[100px] md:w-[120px] flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-card-dark transition-all hover:bg-primary/5"
                        href="#"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <span className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary">
                            View All
                        </span>
                    </a>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="mx-auto px-6 md:px-12 w-full max-w-7xl mt-4 flex justify-end">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-widest animate-pulse">
                    <span>Scroll</span>
                    <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </div>
            </div>
        </section>
    )
}
