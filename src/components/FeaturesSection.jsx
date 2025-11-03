import React from 'react'
import { BookOpen, BarChart3, Bell, MessageSquare } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540] text-white">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-[#0A2540]">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
)

const Step = ({ number, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0A2540] text-[#0A2540] font-semibold">
      {number}
    </div>
    <div>
      <h4 className="text-base font-semibold text-[#0A2540]">{title}</h4>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  </div>
)

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2540]">Key Features</h2>
          <p className="mt-3 text-slate-600">Everything you need to keep students on track and stakeholders informed.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={BookOpen}
            title="Daily Activity Logging"
            desc="Capture homeroom notes, class participation, attendance, and extracurriculars in one place."
          />
          <FeatureCard
            icon={BarChart3}
            title="Automated Progress Reports"
            desc="Generate shareable reports with trends and insights for parents and administrators."
          />
          <FeatureCard
            icon={Bell}
            title="Real-time Feedback & Notifications"
            desc="Notify students and parents instantly about new feedback, achievements, or concerns."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0A2540]">How It Works</h3>
            <p className="mt-3 text-slate-600">Set up in minutes and start capturing meaningful learning moments.</p>
            <div className="mt-8 space-y-6">
              <Step number="1" title="Students log daily activities" desc="Quick entries from any device ensure accurate, timely records of learning and behavior." />
              <Step number="2" title="Teachers monitor and review" desc="Dashboards and filters help educators spot trends and intervene early." />
              <Step number="3" title="Evaluate & provide feedback" desc="Share actionable feedback and export reports for meetings and term reviews." />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-24 rounded-lg bg-slate-100" />
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-[#0A2540]">
                  <MessageSquare size={18} />
                  <span className="text-sm font-semibold">Recent Feedback</span>
                </div>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <p>• Great improvement in science project methodology.</p>
                  <p>• Needs support with algebraic expressions.</p>
                  <p>• Active contribution in group discussions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
