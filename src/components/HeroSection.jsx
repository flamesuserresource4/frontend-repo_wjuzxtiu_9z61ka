import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-4">
              Built for Schools • Secure • Real-Time
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540]">Monitor Student Progress in Real-Time.</h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-xl">
              G7KAIH is a digital journal for schools to log daily activities, track academic performance, and share insights with stakeholders with ease and confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#091e33] shadow-sm transition">
                Request a Free Demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-[#0A2540] bg-white border border-slate-200 hover:border-[#0A2540]/30 hover:bg-slate-50 transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="rounded-xl bg-[#0A2540] p-3 text-white text-xs inline-block">App Preview</div>
              <div className="mt-3 aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 overflow-hidden">
                <div className="h-full w-full grid place-items-center">
                  <div className="w-9/12 rounded-2xl border border-slate-300 bg-white p-4 shadow">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-10 rounded bg-slate-200" />
                      <div className="h-2 w-16 rounded bg-slate-200" />
                    </div>
                    <div className="mt-4 h-24 rounded-lg bg-slate-100" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-md bg-slate-100" />
                      <div className="h-20 rounded-md bg-slate-100" />
                      <div className="h-20 rounded-md bg-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">Placeholder tablet mockup</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-center text-sm font-medium text-slate-500">Trusted by forward-thinking schools</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
            {['Northview High','Greenwood Academy','Stellar Prep','Hillside School','Riverside Int’l'].map((name) => (
              <div key={name} className="h-10 rounded-md border border-slate-200 bg-white text-slate-400 grid place-items-center text-xs font-semibold">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
