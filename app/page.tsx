import React from 'react';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="overflow-y-scroll snap-y snap-mandatory min-h-[calc(100vh-70px)] h-screen">
      {/* Home Hero Section */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-fade-in">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
          Hi, I&apos;m Danish
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6 drop-shadow-lg">
            MERN Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto">
            I build modern, scalable web applications using MongoDB, Express, React, and Node.js. Passionate about clean code, beautiful UI, and seamless user experiences.
          </p>
          <a
            href="#connect"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Home Skills Section */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-slide-up">
        <div className="w-full max-w-4xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">⚛️</span>
              <span className="mt-2 font-semibold text-white">React</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🟢</span>
              <span className="mt-2 font-semibold text-white">Node.js</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🍃</span>
              <span className="mt-2 font-semibold text-white">MongoDB</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🌐</span>
              <span className="mt-2 font-semibold text-white">Express</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">💻</span>
              <span className="mt-2 font-semibold text-white">Full Stack</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🟦</span>
              <span className="mt-2 font-semibold text-white">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Profile Card */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-fade-in">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center border border-white/10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 flex items-center justify-center shadow-lg mb-4 animate-logo-bounce">
            <span className="text-4xl font-extrabold text-white select-none">D</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Danish</h1>
          <h2 className="text-lg text-white/80 mb-2">Third Year CS Student & MERN Stack Developer</h2>
          <p className="text-center text-white/70 max-w-md">
            Started my coding journey on <span className="font-semibold text-cyan-300">14 March</span>. Since then, I've been passionate about building, learning, and growing every day. I love turning ideas into reality with code and exploring new technologies.
          </p>
        </div>
      </section>

      {/* About Journey Timeline */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-slide-up">
        <div className="w-full max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">My Journey</h3>
          <ol className="relative border-l-2 border-cyan-400 ml-4">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full -left-3 ring-8 ring-white/10"></span>
              <h4 className="text-lg font-semibold text-white">14 March 2025</h4>
              <p className="text-white/70">Started my coding journey, diving into the world of programming and web development.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-400 rounded-full -left-3 ring-8 ring-white/10"></span>
              <h4 className="text-lg font-semibold text-white">march to april - Frontend</h4>
              <p className="text-white/70">Learned HTML, CSS, JavaScript, and mastered modern frontend frameworks like React. Built beautiful and responsive user interfaces.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-400 rounded-full -left-3 ring-8 ring-white/10"></span>
              <h4 className="text-lg font-semibold text-white"> may to july - Backend</h4>
              <p className="text-white/70">Explored backend development with Node.js and Express, built robust APIs, and worked with databases like MongoDB.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-400 rounded-full -left-3 ring-8 ring-white/10"></span>
              <h4 className="text-lg font-semibold text-white">2025 - WEB3</h4>
              <p className="text-white/70">Discovered Docker and containerization, learned to deploy and manage applications efficiently.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* About Fun Facts / Quick Stats */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-fade-in">
        <div className="w-full max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Fun Facts & Quick Stats</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[140px]">
              <span className="text-2xl mb-2">📅</span>
              <span className="font-semibold text-white">Coding Since</span>
              <span className="text-cyan-300 mt-1">14 March 2025</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[140px]">
              <span className="text-2xl mb-2">🧑‍💻</span>
              <span className="font-semibold text-white">Projects Built</span>
              <span className="text-cyan-300 mt-1">3</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[140px]">
              <span className="text-2xl mb-2">🎓</span>
              <span className="font-semibold text-white">3rd Year</span>
              <span className="text-cyan-300 mt-1">CS Student</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Tech I Love */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-slide-up">
        <div className="w-full max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Tech I Love</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">⚛️</span>
              <span className="mt-2 font-semibold text-white">React</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🟢</span>
              <span className="mt-2 font-semibold text-white">Node.js</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🍃</span>
              <span className="mt-2 font-semibold text-white">MongoDB</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🌐</span>
              <span className="mt-2 font-semibold text-white">Express</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">💻</span>
              <span className="mt-2 font-semibold text-white">Full Stack</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[120px]">
              <span className="text-3xl">🟦</span>
              <span className="mt-2 font-semibold text-white">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-fade-in">
        <div className="w-full ">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-17  justify-center">
            {/* Project Card 1 */}
            <div className= "bg-white/10 col-span-5 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex flex-col items-center  transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up w-full min-w-[400px] min-h-[480px]">
              <div className="w-full  h-64 bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                <Image src="/assets/ytImage.png" alt="Project 1" className="w-full h-full rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300 object-cover" width={800} height={400} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Project One</h4>
              <p className="text-white/70 text-center text-lg">A short description of your amazing project. Built with React, Node.js, and MongoDB.</p>
            </div>
            <span className='col-span-1'></span>
            {/* Project Card 2 */}
            <div className="bg-white/10 col-span-5 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up w-full min-w-[400px] min-h-[480px]">
              <div className="w-full h-64 bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                <Image src="/assets/ecommerce.png" alt="Project 2" className="w-full h-full rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300 object-cover" width={800} height={400} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Project Two</h4>
              <p className="text-white/70 text-center text-lg">Another awesome project. Features TypeScript, Docker, and modern deployment.</p>
            </div>
            <span className='col-span-1'></span>
            {/* Project Card 3 */}
            <div className="bg-white/10 col-span-5 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up w-full min-w-[400px] min-h-[480px]">
              <div className="w-full h-64 bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                <Image src="/project3.png" alt="Project 3" className="object-cover w-full h-full rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300" width={800} height={400} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Project Three</h4>
              <p className="text-white/70 text-center text-lg">A cool project with a focus on UI/UX and performance. Built with the MERN stack.</p>
            </div>
          </div>
          <p className="text-white/50 text-center mt-8">Add your own project images to <span className="font-semibold">/public/assets/ytImage.png</span>, <span className="font-semibold">/public/project2.png</span>, <span className="font-semibold">/public/project3.png</span></p>
        </div>
      </section>

      {/* About Skills & Values */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-fade-in">
        <div className="w-full max-w-4xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Drives Me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[160px]">
              <span className="text-2xl mb-2">🚀</span>
              <span className="font-semibold text-white">Curiosity</span>
              <span className="text-white/70 text-center mt-1">Always eager to learn new things and explore new tech.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[160px]">
              <span className="text-2xl mb-2">💡</span>
              <span className="font-semibold text-white">Developing thought process</span>
              <span className="text-white/70 text-center mt-1">Love to solve problems and build beautiful, functional apps.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[160px]">
              <span className="text-2xl mb-2">🤝</span>
              <span className="font-semibold text-white">Collaboration</span>
              <span className="text-white/70 text-center mt-1">Enjoy working with others and contributing to open source.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[160px]">
              <span className="text-2xl mb-2">🌱</span>
              <span className="font-semibold text-white">Growth</span>
              <span className="text-white/70 text-center mt-1">Believe in continuous improvement and lifelong learning.</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Connect with Me */}
      <section id="connect" className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-slide-up">
        <div className="w-full max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Connect with Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/dvansari65"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.813 1.104.813 2.226 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Motivational Quote */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 animate-fade-in">
        <div className="w-full max-w-2xl text-center">
          <blockquote className="text-xl italic text-cyan-200 mb-2">&quot;The best way to predict the future is to invent it.&quot;</blockquote>
          <span className="text-white/60">— Alan Kay</span>
        </div>
      </section>
    </main>
  );
}

// Add to globals.css for animations:
// .animate-fade-in { animation: fadeIn 1.2s both; }
// .animate-slide-up { animation: slideUp 1.2s both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
