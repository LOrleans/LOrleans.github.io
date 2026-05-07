import eu from '../assets/eu.png';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden min-h-screen max-w-full flex-col xl:flex lg:flex-row items-center justify-center bg-[#080e1d] xl:gap-14">
            
            {/* Seletor de Idioma */}
            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50">
                <LanguageSelector />
            </div>

            {/* Blur */}
            <div className='absolute top-200 lg:top-150 xl:top-70 right-65 h-150 w-150 lg:h-120 lg:w-120 rounded-full bg-cyan-500/20 blur-[120px]'></div>

            {/* Conteúdo */}
            <div className="max-w-7xl h-[40vh] text-left text-white flex flex-col lg:gap-6 xl:gap-8 justify-evenly items-center px-[8vw] xl:px-0">
                <p className="text-[#3bbffa] text-3xl lg:text-2xl xl:text-lg">{t.hero.role}</p>
                <h1 className="text-8xl lg:text-8xl xl:text-7xl text-center font-bold text-white">
                    {t.hero.titlePart1} <br />
                    <span className="animate-shimmer bg-clip-text text-transparent bg-linear-to-r from-[#3bbffa] via-white/80 via-50% to-[#3bbffa] bg-size-[200%_100%] drop-shadow-[0_0_10px_rgba(59,191,250,0.5)]">
                        {t.hero.titleHighlight}
                    </span>
                    <p className='text-3xl mt-10 xl:text-xl'>{t.hero.description}</p>
                </h1>
                <div className="flex gap-4">
                    <button className="bg-[#ff6f7e] hover:scale-95 hover:cursor-pointer transition-all duration-300 text-white font-bold lg:py-2 py-4 px-4 rounded-2xl text-4xl lg:text-3xl xl:text-xl">{t.hero.btnWork}</button>
                    <button className="border border-[#3bbffa] text-[#3bbffa] font-bold lg:py-2 py-2 px-4 rounded-2xl hover:cursor-pointer hover:scale-95 transition-all  duration-300 text-4xl lg:text-3xl xl:text-xl">{t.hero.btnStack}</button>
                </div>
            </div>
            <div className="relative flex items-center justify-center -mt-20 lg:mt-0 animate-float">
                {/* Elipse Roxa (Parte de TRÁS) */}
                <div className="absolute -bottom-70 w-[120%] h-320 lg:h-225 border-50 lg:border-50 border-[#3bbffa] rounded-[100%] opacity-80 blur-[2px] 
                    transform rotateX(70deg) translateZ(-10px)"
                    style={{
                        transform: 'perspective(1000px) rotateX(75deg)',
                        filter: 'drop-shadow(0 0 15px rgba(59, 191, 250, 0.6))'
                    }}>
                </div>

                <img src={eu} alt="Lucas Orleans" className="relative z-10 w-250 lg:w-170 xl:w-140 h-auto" />

                {/* Elipse Roxa (Parte de FRENTE) */}
                {/* Usamos o clip-path para mostrar apenas a metade de baixo, criando a ilusão de que ela abraça a foto */}
                <div className="absolute -bottom-70 w-[120%] h-320 lg:h-225 border-50 border-[#3bbffa] rounded-[100%] z-20 
                    transform rotateX(70deg) animate-flow"
                    style={{
                        transform: 'perspective(1000px) rotateX(75deg)',
                        clipPath: 'inset(35% 0 0 0)',
                        filter: 'drop-shadow(0 0 7px rgba(59, 191, 250, 0.6))'
                    }}>
                </div>
            </div>
        </section>
    )
}
