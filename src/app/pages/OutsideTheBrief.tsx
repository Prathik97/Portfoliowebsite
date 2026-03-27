import { useState } from 'react';
import { Link } from 'react-router';
const coin1 = '/coin1.png';
const coin2 = '/coin2.png';

export default function OutsideTheBrief() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const places = [
    {
      year: '2017',
      place: 'Tokyo & Kyoto, Japan',
      description: 'Ancient temples next to tech districts - the only place I\'ve felt like the future and the past exist at the same time.'
    },
    {
      year: '2022',
      place: 'Dubai, UAE',
      description: 'Skydiving over Palm Jumeirah. Ticked the box. Wouldn\'t do it again :P'
    },
    {
      year: '2022',
      place: 'Istanbul, Turkey',
      description: 'Ottoman history, ancient bazaars, and the best food I\'ve eaten in a non-Indian city.'
    },
    {
      year: '2023',
      place: 'England, Wales & Scotland',
      description: 'Scottish Highlands on a clear day is the kind of thing you don\'t find a filter for.'
    },
    {
      year: '2024',
      place: 'USA Cross-Country Road Trip',
      description: 'National parks to tech hubs. Drove more than I planned, saw more than I expected.'
    },
    {
      year: '2025',
      place: 'Bali, Indonesia',
      description: 'Snorkeling at Gili T, rice terraces, the slow pace. Good reset.'
    }
  ];



  const investmentApproaches = [
    {
      title: 'Diversification',
      description: 'Concentrated enough to matter, spread enough to survive. High conviction on sectors, not individual bets.'
    },
    {
      title: 'Growth & Learning',
      description: 'Actively studying US markets. Currently allocating 10% to international exposure. The learning is as intentional as the allocation.'
    },
    {
      title: 'Techniques',
      description: 'Delivery and intraday on equity. Derivatives for hedging and volatility plays. Signals from Bollinger Bands, Fair Value Gaps, Fibonacci, Screener.in.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0F0E0B] text-[#F0EDE6]">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-[#0F0E0B] border-b border-[#C8953A]/15 px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg md:text-xl text-[#F0EDE6]">Prathik.</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 text-[13px] text-[#A09880]">
            <Link to="/" className="cursor-pointer hover:text-[#C8953A] transition-colors">Home</Link>
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#C8953A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 text-[13px] text-[#A09880]">
            <Link to="/" className="cursor-pointer hover:text-[#C8953A] transition-colors">Home</Link>
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="px-6 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16 text-center">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl text-[#F0EDE6] leading-tight tracking-tight mb-6">
            Outside the Brief
          </h1>
          <p className="text-[17px] text-[#BFBAB0] leading-[1.7]">
            Work tells you what I can do. This tells you who I am when I'm not doing it.
          </p>
        </div>
      </section>

      {/* Money & Markets */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[11px] text-[#C8953A] uppercase tracking-wide font-medium mb-4">
              Money & Markets
            </h2>
            <p className="text-[16px] text-[#BFBAB0] leading-[1.7] mb-8">
              I approach investing the same way I approach product - data first, conviction-based decisions, long-term thinking. Beating the benchmark since July 2022.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">4+ Years</div>
                <div className="text-[12px] text-[#A09880]">Actively investing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">↑</div>
                <div className="text-[12px] text-[#A09880]">Outperforming benchmark</div>
              </div>
            </div>

            {/* Portfolio Allocation */}
            <div className="mb-8">
              <h3 className="text-[13px] text-[#F0EDE6] font-medium mb-4 uppercase tracking-wide">Portfolio Allocation</h3>
              <div className="h-14 flex rounded-lg overflow-hidden">
                <div className="bg-[#C8953A] flex flex-col items-center justify-center text-[#0F0E0B] text-[11px] font-medium" style={{width: '57.14%'}}>
                  <span className="font-semibold">57.14%</span>
                  <span className="text-[10px]">Direct Indian Equity</span>
                </div>
                <div className="bg-[#C8953A]/80 flex flex-col items-center justify-center text-[#0F0E0B] text-[10px] font-medium" style={{width: '14.29%'}}>
                  <span className="font-semibold">14.29%</span>
                  <span className="text-[9px]">Mutual Funds</span>
                </div>
                <div className="bg-[#C8953A]/65 flex flex-col items-center justify-center text-white text-[10px] font-medium" style={{width: '17.14%'}}>
                  <span className="font-semibold">17.14%</span>
                  <span className="text-[9px]">Gold</span>
                </div>
                <div className="bg-[#C8953A]/50 flex flex-col items-center justify-center text-white text-[10px] font-medium" style={{width: '7.14%'}}>
                  <span className="font-semibold text-[9px]">7.14%</span>
                  <span className="text-[8px]">US Equity</span>
                </div>
                <div className="bg-[#C8953A]/35 flex flex-col items-center justify-center text-white text-[10px] font-medium" style={{width: '4.29%'}}>
                  <span className="font-semibold text-[9px]">4.29%</span>
                  <span className="text-[8px]">Unlisted</span>
                </div>
              </div>
            </div>

            {/* Top Sector Bets */}
            <div className="mb-8">
              <h3 className="text-[13px] text-[#F0EDE6] font-medium mb-3 uppercase tracking-wide">Top Sector Bets</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#C8953A]/10 border border-[#C8953A]/25 rounded-md text-[12px] text-[#F0EDE6]">
                  Software & IT — 25%
                </span>
                <span className="px-3 py-1.5 bg-[#C8953A]/10 border border-[#C8953A]/25 rounded-md text-[12px] text-[#F0EDE6]">
                  Engineering — 23%
                </span>
                <span className="px-3 py-1.5 bg-[#C8953A]/10 border border-[#C8953A]/25 rounded-md text-[12px] text-[#F0EDE6]">
                  Financial Services — 17%
                </span>
              </div>
            </div>

            {/* How I Invest */}
            <div>
              <h3 className="text-[13px] text-[#F0EDE6] font-medium mb-5 uppercase tracking-wide">How I Invest</h3>
              <div className="grid md:grid-cols-3 gap-5">
                {investmentApproaches.map((approach, index) => (
                  <div key={index} className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/30 transition-all">
                    <h4 className="text-[15px] text-[#F0EDE6] font-medium mb-3">{approach.title}</h4>
                    <p className="text-[13px] text-[#A09880] leading-relaxed">{approach.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[13px] text-[#8A8575] mt-6 italic">
              Trading activity tracked across Equity Segment and Futures & Options - active, disciplined risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Places & Perspectives */}
      <section className="px-6 md:px-12 py-20 md:py-24 bg-[#141310]/30">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-8">
            <h2 className="text-[11px] text-[#C8953A] uppercase tracking-wide font-medium mb-3">
              Places & Perspectives
            </h2>
            <p className="text-[16px] text-[#BFBAB0] leading-[1.7] mb-8">
              6 countries, 15+ Indian states, and a growing list of things I didn't expect to do - but did anyway.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">6</div>
                <div className="text-[12px] text-[#A09880]">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">10+</div>
                <div className="text-[12px] text-[#A09880]">Experiences worth mentioning</div>
              </div>
            </div>

            {/* Places Timeline */}
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {places.map((place, index) => (
                <div key={index} className="bg-[#0F0E0B] border border-[#C8953A]/15 rounded-lg p-5 hover:border-[#C8953A]/30 transition-all">
                  <div className="text-[13px] text-[#C8953A] font-medium mb-3">{place.year}</div>
                  <h3 className="text-[16px] text-[#F0EDE6] font-medium mb-2">{place.place}</h3>
                  <p className="text-[14px] text-[#A09880] leading-relaxed">{place.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coins & Currencies */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[11px] text-[#C8953A] uppercase tracking-wide font-medium mb-4">
              Coins & Currencies
            </h2>
            <p className="text-[16px] text-[#BFBAB0] leading-[1.7] mb-6">
              Every coin is a compressed history lesson. I collect the ones that have a story worth keeping.
            </p>
            <p className="text-[15px] text-[#A09880] leading-[1.7] mb-10">
              It started as curiosity - unusual coins you don't see in circulation anymore. Now it's a practice in noticing what gets forgotten. Old Indian coins, foreign currency from places I've been - each one has a context that most people walk past.
            </p>

            {/* Collection */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Card 1 — update image, title, year, description here */}
              <div className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/30 transition-all">
                <div className="w-full h-52 bg-[#0F0E0B] rounded-lg mb-4 overflow-hidden">
                  <img
                    src={coin1}
                    alt="Coin 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[15px] text-[#F0EDE6] font-medium mb-1">2 Annas</h3>
                <p className="text-[11px] text-[#C8953A] mb-3 uppercase tracking-wide">1841 · East India Company</p>
                <p className="text-[13px] text-[#A09880] leading-relaxed">
                  Oldest silver coin from the collection.
                </p>
              </div>

              {/* Card 2 — update image, title, year, description here */}
              <div className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/30 transition-all">
                <div className="w-full h-52 bg-[#0F0E0B] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src="/coin2.png"
                    alt="Coin 2"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-[15px] text-[#F0EDE6] font-medium mb-1 text-center">Special Coins</h3>
                <p className="text-[11px] text-[#C8953A] mb-3 uppercase tracking-wide text-center">1841 · 1936 · 1944</p>
                <p className="text-[13px] text-[#A09880] leading-relaxed text-center">
                  Top 3 loved coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[#141310] border border-[#C8953A]/20 rounded-2xl p-10 md:p-12 text-center">
            <p className="text-[17px] text-[#BFBAB0] mb-6">
              Curious about the work behind the person?
            </p>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-[#C8953A] text-[16px] hover:gap-3 transition-all font-medium"
            >
              <span>See my projects</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0E0B] border-t border-[#F5F3ED]/10 px-6 md:px-12 py-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 flex-wrap">
          <div className="text-center md:text-left">
            <div className="text-[14px] text-[#F0EDE6]">Prathik Kumar MP</div>
            <div className="text-[12px] text-[#6B6455] mt-0.5">Product Leader</div>
          </div>
          
          <div className="flex gap-5.5 text-[12px] text-[#A09880]">
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        </div>
        
        <div className="w-full text-center mt-4 text-[11px] text-[#6B6455]">
          Designed and built by Prathik Kumar MP · 2026
        </div>
      </footer>
    </div>
  );
}