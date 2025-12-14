// src/components/IdeaSection.jsx
import React, { useState } from "react"
import billboard from "../assets/billboard.png" // replace with your image

export default function IdeaSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: handle submit
  }

  return (
    <section className="bg-white py-16">
      <div className="container-wide px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* LEFT: contact card */}
          <div className="rounded-[32px] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.12)] px-6 py-7 md:px-8 md:py-8">
            {/* header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                  SK
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Have an idea?
                  </p>
                  <p className="text-xs text-slate-500">
                    Feel free to contact me
                  </p>
                </div>
              </div>
              {/* corner marks (optional) */}
              <div className="hidden md:block text-slate-300 text-xl leading-none">
                ⌗
              </div>
            </div>

            {/* form block */}
            <form
              onSubmit={handleSubmit}
              className="space-y-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-100"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl bg-white px-3 py-2 text-xs md:text-sm border border-slate-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-xl bg-white px-3 py-2 text-xs md:text-sm border border-slate-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Shortly tell me what you want to create"
                className="w-full rounded-xl bg-white px-3 py-2 text-xs md:text-sm border border-slate-200 outline-none resize-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-400/40 hover:from-sky-600 hover:to-indigo-700 transition"
              >
                Contact me
              </button>
            </form>

            {/* divider + socials */}
            <div className="mt-5">
              <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                <span className="flex-1 h-px bg-slate-200" />
                <span>or</span>
                <span className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="grid grid-cols-3 gap-3 text-[11px]">
                {[
                  { label: "LinkedIn", short: "in" },
                  { label: "Instagram", short: "ig" },
                  { label: "Twitter", short: "X" },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-slate-50/80 py-2 hover:bg-slate-100 transition"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] text-white">
                      {s.short}
                    </span>
                    <span className="text-[10px] text-slate-600">
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: image + text */}
          <div className="flex flex-col justify-between">
            <div className="rounded-[32px] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.12)] p-4 md:p-5 mb-6">
              <div className="overflow-hidden rounded-2xl aspect-[16/9] bg-slate-900">
                <img
                  src={billboard}
                  alt="Billboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <p className="px-2 md:px-4 text-right md:text-left text-base md:text-lg font-medium text-slate-900 leading-relaxed">
              Your ideas matter
              <br />
              <span className="font-normal">
                — let&apos;s bring them to life.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
