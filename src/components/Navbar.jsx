import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[#0A2540] text-white grid place-items-center font-bold">G</div>
          <span className="text-lg font-semibold text-[#0A2540] tracking-tight">G7KAIH</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-600 hover:text-[#0A2540] transition">Features</a>
          <a href="#pricing" className="text-slate-600 hover:text-[#0A2540] transition">Pricing</a>
          <a href="#about" className="text-slate-600 hover:text-[#0A2540] transition">About Us</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[#0A2540] hover:bg-[#091e33] transition">
            Login
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
