// import euSemBg from '../assets/eu-sem-bg.png';

export default function Hero(){
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#080e1d]">
            {/* Blur */}
            <div className='absolute top-35 right-65 h-120 w-120 rounded-full bg-cyan-500/20 blur-[120px]'></div>

            {/* Conteúdo */}
            <div className="max-w-7xl text-left text-white flex flex-col gap-6">
                <p className="text-[#3bbffa] text-sm">FRONTEND ENGINEER & AI SCIENTIST</p>
                <h1 className="text-7xl font-bold text-white">
                    Desenvolvendo a <br />
                    <span className="text-[#3bbffa]">
                        sua presença 
                    </span>
                    <span> digital</span>
                </h1>
                <p>I'm a software developer passionate about creating innovative solutions.</p>
                <div className="flex gap-4">
                    <button className="bg-[#ff6f7e] hover:scale-95 hover:cursor-pointer transition-all duration-300 text-white font-bold py-2 px-4 rounded">See my work</button>
                    <button className="border border-[#3bbffa] text-[#3bbffa] font-bold py-2 px-4 rounded hover:cursor-pointer hover:scale-95 transition-all duration-300">My development stack</button>
                </div>
            </div>
            <div className="relative">
                {/* Adicionar card da foto */}
                {/* <img src={euSemBg} alt="Lucas Orleans" className="w-125 h-auto"/> */}
                <img src="/" className="w-125 h-auto"/>
            </div>
        
        </section>
    )
}