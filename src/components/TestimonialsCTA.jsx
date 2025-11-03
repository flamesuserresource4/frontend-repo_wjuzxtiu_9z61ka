import React from 'react'

const TestimonialCard = ({ name, title, quote }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-slate-200" />
      <div>
        <p className="text-[#0A2540] font-semibold">{name}</p>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </div>
    <p className="mt-4 text-slate-700 italic">“{quote}”</p>
  </div>
)

const TestimonialsCTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2540]">What Educators Say</h2>
          <p className="mt-3 text-slate-600">Trusted by teachers and school leaders for clarity, transparency, and results.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="A. Ramirez"
            title="Principal, Northview High"
            quote="G7KAIH has transformed how we monitor student progress. Our meetings are now data-driven and focused."
          />
          <TestimonialCard
            name="J. Chen"
            title="Grade 6 Teacher"
            quote="Logging daily activities is effortless, and the automated reports save me hours every week."
          />
          <TestimonialCard
            name="S. Patel"
            title="Vice Principal"
            quote="Real-time notifications keep parents in the loop. Engagement has never been higher."
          />
        </div>

        <div id="pricing" className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-[#0A2540] to-[#0A2540] p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Start Monitoring Your Students' Progress Today</h3>
          <p className="mt-3 text-white/80">Simple school-wide pricing. Request a demo to get a tailored plan.</p>
          <a href="#signup" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#2ECC71] px-6 py-3 text-sm font-semibold text-[#0A2540] shadow-sm hover:bg-[#29b866] transition">
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCTA
