export default function AboutMe() {
    const techCategories = [
        { title: 'Front-end', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
        { title: 'Back-end', techs: ['Node.js', 'Python', 'Django', 'Firebase'] },
        { title: 'Tools', techs: ['Git', 'Docker', 'Figma', 'Linux'] },
    ];

    return (
        <section className="min-h-screen bg-[#080e1d] py-12 px-[8vw] flex flex-col items-center">
            {/* Título com brilho */}
            <div className="flex items-center gap-6 w-[80vw] mb-16">
                <div className="h-[3px] w-full bg-[#3bbffa] rounded-full shadow-[0_0_15px_rgba(59,191,250,0.8)] opacity-80"></div>
                <h2 className="text-4xl font-bold text-[#3bbffa] tracking-wider whitespace-nowrap"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(59, 191, 250, 0.6))' }}>
                    ABOUT ME
                </h2>
                <div className="h-[3px] w-full bg-[#3bbffa] rounded-full shadow-[0_0_15px_rgba(59,191,250,0.8)] opacity-80"></div>
            </div>

            {/* Grid Principal - Adicionado items-stretch para garantir que as colunas tenham a mesma altura */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl w-full items-stretch">
                
                {/* Card de Texto Principal */}
                <div className="lg:col-span-7 flex">
                    {/* h-full garante que este card acompanhe a altura da maior coluna */}
                    <div className="p-8 h-full rounded-3xl bg-[#080e1d] border border-white/10 shadow-2xl flex flex-col justify-between backdrop-blur-md hover:border-[#3bbffa]/30 transition-colors group">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#3bbffa] shadow-[0_0_15px_rgba(59,191,250,0.2)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 12h.01"/><path d="M16 6V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2"/><path d="M16 18v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2"/><path d="M8 12H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"/><path d="M18 12h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"/><path d="M12 12v6"/><path d="M12 6v6"/></svg>
                                </div>
                                <h3 className="text-white text-2xl font-bold tracking-tight">Personal & Professional Profile</h3>
                            </div>

                            <div className="space-y-3 text-[#f0f0f0]">
                                <p className="text-xl leading-relaxed">
                                    <span className="text-[#3bbffa] font-medium font-mono text-base tracking-widest uppercase block mb-1">Introduction_</span>
                                    Hello! I'm a passionate <span className="text-[#3bbffa] font-semibold drop-shadow-[0_0_10px_rgba(59,191,250,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(59,191,250,0.8)] transition-all">Software Developer</span> with a love for creating innovative solutions. 
                                    With a background in computer science at <span className="italic text-white">UFRN</span>, I specialize in building 
                                    high-performance web applications.
                                </p>
                                <p className="text-[#f0f0f0]/80 text-lg pl-6 border-l-2 border-[#3bbffa]/30 group-hover:border-[#3bbffa] transition-colors leading-relaxed">
                                    I thrive at the intersection of design and logic, always seeking to implement the latest trends 
                                    in AI and Frontend Engineering.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 group/duo">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#3bbffa]"></div>
                                    <p className="text-[#3bbffa] font-mono text-xs tracking-widest uppercase">Language Skills Accomplishment</p>
                                </div>
                                <img 
                                    src="https://duolingo-stats-card.vercel.app/api?username=lucas_orleans_&theme=nightowl" 
                                    alt="Duolingo Stats" 
                                    className="rounded-xl scale-95 opacity-80 group-hover/duo:scale-100 group-hover/duo:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(59,191,250,0.1)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack - Envolvido em flex para esticar */}
                <div className="lg:col-span-5 flex">
                    <div className="p-8 h-full w-full rounded-3xl bg-[#080e1d] border border-white/10 shadow-2xl backdrop-blur-md hover:border-[#3bbffa]/30 transition-colors group flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#3bbffa]">
                                <code className="text-xl font-bold">{"</>"}</code>
                            </div>
                            <h3 className="text-[#3bbffa] text-2xl font-bold">Technologies & Tools</h3>
                        </div>

                        {/* flex-grow faz com que a lista ocupe todo o espaço disponível para alinhar com o card da esquerda */}
                        <div className="flex flex-col flex-grow justify-between">
                            {techCategories.map((cat, index) => (
                                <div key={cat.title} className="group">
                                    <div className="flex flex-col gap-4 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#3bbffa] shadow-[0_0_10px_rgba(59,191,250,0.8)]"></div>
                                            <h4 className="text-white text-xl font-bold tracking-wide">{cat.title}</h4>
                                        </div>
                                        <p className="text-white/70 text-lg pl-6 leading-relaxed group-hover:text-white transition-colors">
                                            {cat.techs.join(', ')}
                                        </p>
                                    </div>
                                    {index !== techCategories.length - 1 && (
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}