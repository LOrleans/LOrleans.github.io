export default function AboutMe(){
    const technologies = [
        { name: 'React', category: 'Front-end' },
        { name: 'HTML', category: 'Front-end' },
        { name: 'CSS', category: 'Front-end' },
        { name: 'JavaScript', category: 'Front-end' },
        { name: 'TypeScript', category: 'Front-end' },
        { name: 'Node.js', category: 'Back-end' },
        { name: 'Python', category: 'Back-end' },
        { name: 'Django', category: 'Back-end' },
        { name: 'Firebase', category: 'Back-end' },
        { name: 'Git', category: 'Tools' },
    ]

    return (
        <section className="h-screen bg-[#011627] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center h-3/5 w-auto">
                <div className="flex flex-col max-w-3xl w-full gap-10 justify-center items-center">
                    <h1 className="text-4xl text-center pt-20 text-[#f0f0f0]">About Me</h1>
                    <p className="text-center mt-10 text-[#f0f0f0] text-lg px-10">
                        Hello! I'm a passionate software developer with a love for creating innovative solutions. With a background in computer science, I have experience in various programming languages and frameworks. I enjoy working on both front-end and back-end development, and I'm always eager to learn new technologies. In my free time, I like to contribute to open-source projects and explore the latest trends in the tech industry.
                    </p>
                </div>
                {/* Reta vertical que divide a tela */}
                <div className="w-1 bg-[#f0f0f0] h-full"></div>
                <div className="text-center mt-10 text-[#f0f0f0] text-lg px-10">
                    {/* Substituir por svg das tecnologias */}
                    <h1>Technologies & Tools</h1>
                    <h2>Front-end</h2>
                    <p>React, HTML, CSS, JavaScript, TypeScript</p>
                    <h2>Back-end</h2>
                    <p>Node.js, Python, Django, Firebase</p>
                    <h2>Tools</h2>
                    <p>Git</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <img src="https://duolingo-stats-card.vercel.app/api?username=lucas_orleans_&theme=nightowl" alt="Duolingo Stats" />
            </div>
        </section>
    )
}