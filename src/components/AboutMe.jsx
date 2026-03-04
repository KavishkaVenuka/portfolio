import React from 'react'

export default function AboutMe() {
    return (
        <section className="py-16 px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Column: Text & Stats */}
                <div className="flex flex-col gap-10" data-gsap="fade-up">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-primary text-sm font-bold uppercase tracking-widest">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                            The engineer <br />
                            <span className="text-text-dim">behind the work.</span>
                        </h2>
                        <div className="space-y-4 text-slate-300 text-lg leading-relaxed max-w-xl">
                            <p>
                                I am a passionate software engineering undergraduate with a knack for building scalable applications. My journey involves rigorous problem-solving and a dedication to open-source contributions.
                            </p>
                            <p>
                                I thrive in collaborative environments and am always eager to learn new technologies. From backend architecture to frontend finesse, I love the full spectrum of development.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border-dark/30">
                        <div className="flex flex-col gap-1">
                            <span className="text-4xl font-bold text-primary tabular-nums">3+</span>
                            <span className="text-text-dim text-sm font-medium uppercase tracking-wide">Years Coding</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-4xl font-bold text-primary tabular-nums">30+</span>
                            <span className="text-text-dim text-sm font-medium uppercase tracking-wide">Projects</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-4xl font-bold text-primary tabular-nums">3</span>
                            <span className="text-text-dim text-sm font-medium uppercase tracking-wide">Real-world-solutions</span>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a className="group flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 w-fit" href="#">
                            <span>Read Full Story</span>
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Image & Tags */}
                <div className="relative flex flex-col items-center lg:items-end gap-6" data-gsap="fade-in">
                    {/* Image Container with decorative elements */}
                    <div className="relative w-full max-w-md aspect-[3/4] group">
                        {/* Decorative border frame offset */}
                        <div className="absolute inset-0 border-2 border-border-dark translate-x-4 translate-y-4 rounded-lg -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                        {/* Main Image */}
                        <div className="w-full h-full rounded-lg overflow-hidden bg-card-dark border border-border-dark relative shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
                            <img
                                alt="Portrait of a software engineer working on a laptop in a modern dark office"
                                className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                                src="/portrait-2.jpg"
                            />
                            {/* Floating Code Snippet Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 z-20 bg-background-dark/90 backdrop-blur-sm p-3 rounded border border-border-dark shadow-lg">
                                <div className="flex gap-1.5 mb-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                                <code className="text-xs font-mono text-text-dim block">
                                    <span className="text-primary">const</span> dev = {'{'}<br />
                                    &nbsp;&nbsp;passion: <span className="text-yellow-300">'problem-solving in technical manner'</span>,<br />
                                    &nbsp;&nbsp;status: <span className="text-yellow-300">'open-to-work'</span><br />
                                    {'}'};
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Tags Cluster */}
                    <div className="flex flex-wrap justify-center lg:justify-end gap-3 max-w-md">
                        <div className="flex items-center gap-2 rounded-full border border-border-dark bg-card-dark px-4 py-1.5 transition-colors hover:border-primary/50">
                            <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                            <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">Problem Solver</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-border-dark bg-card-dark px-4 py-1.5 transition-colors hover:border-primary/50">
                            <span className="material-symbols-outlined text-primary text-sm">public</span>
                            <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">Open Source</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-border-dark bg-card-dark px-4 py-1.5 transition-colors hover:border-primary/50">
                            <span className="material-symbols-outlined text-primary text-sm">auto_fix_high</span>
                            <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">Automation</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-border-dark bg-card-dark px-4 py-1.5 transition-colors hover:border-primary/50">
                            <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                            <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">Full Stack</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
