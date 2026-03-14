import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const whoamiRef = useRef(null)
  const heroSectionRef = useRef(null)
  const whoamiTimelineRef = useRef(null)

  useEffect(() => {
    const line1Text = 'Kavishka'
    const line2Text = 'Venuka'

    // Clear initial content
    line1Ref.current.textContent = ''
    line2Ref.current.textContent = ''
    gsap.set(dotRef.current, { opacity: 0 })

    // Blinking cursor animation
    const cursorBlink = gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'steps(1)',
    })

    const tl = gsap.timeline({
      delay: 0.6,
      onComplete: () => {
        // Hide cursor after animation
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 })
        cursorBlink.kill()
      },
    })

    // Type each character of line 1
    line1Text.split('').forEach((char, i) => {
      tl.to(line1Ref.current, {
        duration: 0.06,
        ease: 'none',
        onComplete: () => {
          line1Ref.current.textContent += char
        },
      })
      // Small random pause between characters for realism
      if (i < line1Text.length - 1) {
        tl.to({}, { duration: Math.random() * 0.04 + 0.02 })
      }
    })

    // Pause between lines
    tl.to({}, { duration: 0.4 })

    // Move cursor to second line (handled by DOM position)
    tl.set(cursorRef.current, { /* cursor will follow DOM flow */ })

    // Type each character of line 2
    line2Text.split('').forEach((char, i) => {
      tl.to(line2Ref.current, {
        duration: 0.06,
        ease: 'none',
        onComplete: () => {
          line2Ref.current.textContent += char
        },
      })
      if (i < line2Text.length - 1) {
        tl.to({}, { duration: Math.random() * 0.04 + 0.02 })
      }
    })

    // Reveal the dot
    tl.to(dotRef.current, { opacity: 1, duration: 0.15, ease: 'power2.out' })

    return () => {
      tl.kill()
      cursorBlink.kill()
    }
  }, [])

  // Looping typewriter for the terminal whoami text
  useEffect(() => {
    const whoamiText = 'Beyond syntax: Architecting robust systems and intuitive designs.'
    const el = whoamiRef.current
    const heroEl = heroSectionRef.current
    if (!el || !heroEl) return

    const buildTimeline = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })

      // Start empty
      tl.set(el, { textContent: '' })

      // Type each character
      whoamiText.split('').forEach((char, i) => {
        tl.to(el, {
          duration: 0.04,
          ease: 'none',
          onComplete: () => {
            el.textContent = whoamiText.substring(0, i + 1)
          },
        })
      })

      // Hold the complete text
      tl.to({}, { duration: 3 })

      // Erase each character in reverse
      for (let i = whoamiText.length; i >= 0; i--) {
        tl.to(el, {
          duration: 0.02,
          ease: 'none',
          onComplete: () => {
            el.textContent = whoamiText.substring(0, i)
          },
        })
      }

      // Pause before restarting
      tl.to({}, { duration: 0.08 })

      return tl
    }

    let whoamiTl = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!whoamiTl) {
            whoamiTl = buildTimeline()
            whoamiTimelineRef.current = whoamiTl
          } else {
            whoamiTl.play()
          }
        } else {
          if (whoamiTl) whoamiTl.pause()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(heroEl)

    return () => {
      observer.disconnect()
      if (whoamiTl) whoamiTl.kill()
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-primary/20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" data-gsap="logo-reveal">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-108 transition-transform duration-500">terminal</span>
            <span className="text-xl font-bold tracking-tight">&lt;PORTFOLIO/&gt;</span>
          </div>
          <nav className="hidden md:flex items-center gap-10" data-gsap="nav-links">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Work</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Resume</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-4" data-gsap="nav-cta">
            <button className="hidden md:flex items-center justify-center h-10 px-6 rounded bg-primary text-background-dark text-sm font-bold hover:bg-white hover:text-background-dark transition-all duration-300 transform hover:scale-105">
              Let's Talk
            </button>
            <button className="md:hidden text-primary">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main ref={heroSectionRef} className="flex-grow flex items-center justify-center pt-20 px-6 relative">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[96px] pointer-events-none"></div>
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-0 min-h-[calc(100vh-80px)]">
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:pr-12 order-2 lg:order-1">
            <div className="flex items-center gap-2" data-gsap="hero-label">
              <span className="h-px w-8 bg-primary/50"></span>
              <span className="font-mono text-primary/80 text-sm tracking-wider uppercase">Software Engineer Under-Graduate</span>
            </div>
            <div className="space-y-4" data-gsap="hero-text">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
                <span ref={line1Ref}>Kavishka</span>
                <br />
                <span className="inline-flex items-baseline">
                  <span ref={line2Ref}>Venuka</span>
                  <span ref={dotRef} className="text-primary">.</span>
                  <span
                    ref={cursorRef}
                    className="inline-block w-[3px] md:w-[4px] lg:w-[5px] h-[0.85em] bg-primary ml-[2px] translate-y-[0.05em]"
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                I build things for the web — <span className="text-slate-800 dark:text-slate-200 font-medium">and beyond</span>.
              </p>
            </div>
            <div className="font-mono text-xs text-primary/60 flex items-center gap-2 py-2" data-gsap="hero-location">
              <span className="material-symbols-outlined text-base">location_on</span>
              <span>6°51′11″N, 79°54′14″E</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4" data-gsap="hero-ctas">
              <button className="h-12 px-8 rounded border border-primary text-primary font-bold text-sm uppercase tracking-wide hover:bg-primary hover:text-background-dark transition-all duration-300 flex items-center gap-2 group">
                View Projects
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="h-12 px-8 rounded border border-slate-700 text-slate-400 font-medium text-sm uppercase tracking-wide hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                Download CV
                <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end order-1 lg:order-2" data-gsap="hero-visual">
            <div className="w-full max-w-md bg-[#141414] rounded-lg border border-slate-800 shadow-2xl overflow-hidden relative group/terminal hover:border-primary/30 transition-colors duration-500">
              <div className="h-9 bg-[#1f1f1f] border-b border-slate-800 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">code</span>
                  <span>bash — 80x24</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-6 text-slate-300 min-h-[320px] relative">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-primary">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-400">whoami</span>
                  </div>
                  <div ref={whoamiRef} className="pl-4 text-emerald-100/90 mb-4">Beyond syntax: Architecting robust systems and intuitive designs.</div>
                  <div className="flex gap-2">
                    <span className="text-primary">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-400">cat</span>
                    <span className="text-purple-400">skills.json</span>
                  </div>
                  <div className="pl-4 text-slate-400">
                    <span className="text-yellow-300">{`{`}</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-300">"ci/cd"</span>: [<span className="text-orange-300">"Git"</span>, <span className="text-orange-300">"Docker"</span>, <span className="text-orange-300">"Jenkins"</span>]
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-300">"frontend"</span>: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Next"</span>, <span className="text-orange-300">"Tailwind"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-300">"backend"</span>: [<span className="text-orange-300">"Node.js"</span>, <span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"PostgreSQL"</span>],
                    <br />
                    <span className="text-yellow-300">{`}`}</span>
                  </div>
                  <div className="flex gap-2 mt-4 items-center">
                    <span className="text-primary">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="typing-cursor w-2 h-5 bg-primary/80 animate-pulse block"></span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="hidden md:flex fixed bottom-6 left-26 z-40 flex-col items-center gap-4 text-slate-500" data-gsap="social-vertical">
        <a className="flex items-center justify-center w-6 h-6 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="kavishkadealwiss@gmail.com"><span className="material-symbols-outlined text-[24px] leading-none">mail</span></a>
        <a className="flex items-center justify-center w-6 h-6 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="https://github.com/KavishkaVenuka">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.185 1.065 1.815 2.805 1.29 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
        </a>
        <a className="flex items-center justify-center w-6 h-6 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="https://www.linkedin.com/in/kavishka-venuka-de-alwis-31140a27b/">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
        </a>
        <div className="h-16 w-px bg-slate-700 mx-auto mt-2"></div>
      </div>
    </>
  )
}
