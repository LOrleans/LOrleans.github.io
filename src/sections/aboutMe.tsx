import { BrainCircuitIcon } from '../assets/icons';

export default function AboutMe() {
    const techCategories = [
        { title: 'Front-end', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
        { title: 'Back-end', techs: ['Node.js', 'Python', 'Django', 'Firebase'] },
        { title: 'Tools', techs: ['Git', 'Docker', 'Figma', 'Linux'] },
    ];

    return (
        <section className="min-h-screen bg-[#080e1d] py-20 xl:py-10 px-4 lg:px-[8vw] flex flex-col items-center">
            
            {/* Título no mobile */}
            <div className="flex items-center gap-2 w-[80vw] mb-24 xl:mb-16 mt-10">
                <div className="h-[6px] w-full bg-[#3bbffa] rounded-full shadow-[0_0_20px_rgba(59,191,250,1)]"></div>
                <h2 className="animate-shimmer text-5xl md:text-6xl lg:text-4xl font-black text-[#3bbffa] tracking-tighter whitespace-nowrap px-2 bg-clip-text text-transparent bg-linear-to-r from-[#3bbffa] via-white/80 via-50% to-[#3bbffa] bg-size-[200%_100%] drop-shadow-[0_0_10px_rgba(59,191,250,0.5)]"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(59, 191, 250, 0.8))' }}>
                    ABOUT ME
                </h2>
                <div className="h-[6px] w-full bg-[#3bbffa] rounded-full shadow-[0_0_20px_rgba(59,191,250,1)]"></div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 max-w-7xl w-full px-4">
                
                {/* Card de Texto Principal */}
                <div className="lg:col-span-7 w-full">
                    <div className="p-12 lg:p-8 rounded-[50px] lg:rounded-3xl bg-[#080e1d] border-4 lg:border-2 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col">
                        
                        <div className="flex lg:flex-row items-center gap-8 mb-12 lg:mb-8">
                            <div className="w-fit p-6 lg:p-3 rounded-3xl bg-white/10 border-2 border-[#3bbffa] text-[#3bbffa]">
                                <BrainCircuitIcon className='w-16 h-16 lg:w-10 lg:h-10'/>
                            </div>
                            <h3 className="text-[#3bbffa] text-6xl md:text-5xl lg:text-3xl font-black leading-none">
                                Personal Profile
                            </h3>
                        </div>

                        <div className="space-y-12 lg:space-y-6 text-white">
                            <div className="relative">
                                <p className="text-4xl md:text-4xl lg:text-xl leading-[1.3] font-medium">
                                    Hello! I'm a <span className="text-[#3bbffa] underline decoration-4 underline-offset-8">Software Developer</span> passionate about tech.
                                </p>
                            </div>
                            
                            <p className="text-[#f0f0f0] text-3xl md:text-3xl lg:text-lg pl-8 border-l-8 border-[#3bbffa] leading-relaxed py-2">
                                I specialize in <span className="text-white font-bold">AI and Frontend Engineering</span>, building high-performance apps.
                            </p>
                        </div>

                        {/* Duolingo - Zoom Máximo */}
                        <div className="mt-20 lg:mt-12 flex flex-col items-center">
                            <div className="w-full overflow-visible flex justify-center">
                                <img 
                                    src="https://duolingo-stats-card.vercel.app/api?username=lucas_orleans_&theme=nightowl" 
                                    alt="Duolingo Stats" 
                                    className="w-full scale-125 md:scale-110 lg:scale-100 origin-center rounded-3xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack - Card Lateral */}
                <div className="lg:col-span-5 w-full">
                    <div className="p-12 lg:p-8 rounded-[50px] lg:rounded-3xl bg-[#080e1d] border-4 lg:border-2 border-white/20 shadow-2xl">
                        <div className="flex items-center gap-8 mb-12 lg:mb-8">
                            <div className="p-6 lg:p-3 rounded-3xl bg-white/10 border-2 border-[#3bbffa] text-[#3bbffa]">
                                <code className="text-4xl lg:text-xl font-black">{"</>"}</code>
                            </div>
                            <h3 className="text-[#3bbffa] text-5xl lg:text-2xl font-black">Tech Stack</h3>
                        </div>

                        <div className="flex flex-col space-y-4">
                            {techCategories.map((cat, index) => (
                                <div key={cat.title} className="py-10 lg:py-4">
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="w-6 h-6 rounded-full bg-[#3bbffa] shadow-[0_0_20px_rgba(59,191,250,1)]"></div>
                                        <h4 className="text-white text-4xl lg:text-xl font-black uppercase tracking-tighter italic">
                                            {cat.title}
                                        </h4>
                                    </div>
                                    <p className="text-white text-3xl md:text-3xl lg:text-lg pl-12 font-medium leading-normal opacity-90">
                                        {cat.techs.join(', ')}
                                    </p>
                                    {index !== techCategories.length - 1 && (
                                        <div className="h-px w-full bg-white/10 mt-10"></div>
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