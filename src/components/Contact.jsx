import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set("[data-gsap='fade-up']", { y: 50, opacity: 0 });
      gsap.set("[data-gsap='scale-in']", { scale: 0.9, opacity: 0 });
      gsap.set("[data-gsap='stagger-up'] > *", { y: 30, opacity: 0 });
      gsap.set("[data-gsap='fade-up-delayed'] > *", { y: 30, opacity: 0 });

      // Create scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });

      tl.to("[data-gsap='fade-up']", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to("[data-gsap='scale-in']", {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to("[data-gsap='stagger-up'] > *", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.2")
      .to("[data-gsap='fade-up-delayed'] > *", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col relative w-full border-t border-border-dark">
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-3xl w-full z-10 flex flex-col items-center">
          {/* Hero Text */}
          <div className="text-center mb-12 space-y-4" data-gsap="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">Let's build something.</h1>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative injection, let's connect.
            </p>
          </div>
          
          {/* Email Highlight */}
          <div className="mb-16 w-full text-center" data-gsap="scale-in">
            <a className="inline-block text-xl md:text-3xl lg:text-4xl font-mono text-primary font-bold hover:text-white transition-colors border-b-2 border-primary/30 hover:border-primary pb-1 break-all" href="mailto:kavishkadealwiss@gmail.com">
              kavishkadealwiss@gmail.com
            </a>
          </div>
          
          {/* Contact Form */}
          <form className="w-full max-w-lg space-y-6" data-gsap="stagger-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="name">Name</label>
                <input className="w-full bg-surface-dark border border-slate-700 rounded p-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 h-12" id="name" placeholder="John Doe" type="text"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="email">Email</label>
                <input className="w-full bg-surface-dark border border-slate-700 rounded p-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 h-12" id="email" placeholder="john@example.com" type="email"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="message">Message</label>
              <textarea className="w-full bg-surface-dark border border-slate-700 rounded p-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all duration-300" id="message" placeholder="Tell me about your project..." rows="5"></textarea>
            </div>
            <div className="pt-4 flex justify-end">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded bg-primary px-8 font-medium text-background-dark transition-all hover:bg-white hover:text-background-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" type="button">
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
                <span className="relative flex items-center gap-2">
                  Send Message
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </span>
              </button>
            </div>
          </form>
          
          {/* Social Links */}
          <div className="mt-20 flex items-center justify-center gap-8" data-gsap="fade-up-delayed">
            <a className="text-slate-400 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300" href="https://github.com/KavishkaVenuka">
              <span className="sr-only">GitHub</span>
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300" href="https://www.linkedin.com/in/kavishka-venuka-de-alwis-31140a27b/">
              <span className="sr-only">LinkedIn</span>
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300" href="#">
              <span className="sr-only">Twitter</span>
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border-dark py-6 px-6 bg-background-dark/50 z-10 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} KAVISHKA VENUKA. ALL RIGHTS RESERVED.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs text-primary font-bold hover:text-white transition-colors flex items-center gap-1 group">
            BACK TO TOP 
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-y-1">arrow_upward</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
