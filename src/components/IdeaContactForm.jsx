import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import python from "../assets/python.svg";
import powerbi from "../assets/power-bi.svg";
import fabric from "../assets/fabric.png";
import NumPy from "../assets/NumPy.svg";
import bg from "../assets/PM.png";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL;

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleNext(e) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStep(2);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!message.trim()) {
      setError("Please share your message.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        "EmailJS is not configured. Add your EmailJS IDs to .env and restart the app."
      );
      return;
    }

    setLoading(true);

    try {
      console.info("Sending contact form to EmailJS", {
        email: email.trim(),
        message: message.trim(),
        to_email: TO_EMAIL,
      });

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          email: email.trim(),
          user_email: email.trim(),
          user_message: message.trim(),
          sent_at: new Date().toLocaleString(),
          ...(TO_EMAIL ? { to_email: TO_EMAIL } : {}),
        },
        PUBLIC_KEY
      );

      setSuccess(true);
      setSuccessMessage(
        TO_EMAIL
          ? `Your message was sent to ${TO_EMAIL}. Check that inbox for the full message.`
          : "Your message was sent. Check your configured EmailJS inbox."
      );
      setStep(1);
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccess(false);
        setSuccessMessage("");
      }, 3500);
    } catch (sendError) {
      console.error("EmailJS send error", sendError);
      setError(
        "Unable to send your message right now. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-[95%] mx-auto relative py-38 overflow-hidden bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0" />

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingIcon src={fabric} className="top-10 left-20" />
        <FloatingIcon src={python} className="top-16 right-20" />
        <FloatingIcon src={NumPy} className="bottom-20 left-32" />
        <FloatingIcon src={powerbi} className="bottom-24 right-32" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        {/* FORM CONTAINER */}
        <div className="relative mx-auto mb-10 w-full max-w-md h-16">
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && !success && (
              <motion.form
                key="email"
                onSubmit={handleNext}
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: -120, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 flex items-center justify-between gap-2 
                bg-white/60 backdrop-blur-xl border border-white/40 
                shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
                rounded-full px-3 py-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none px-3 text-sm text-slate-700 placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 
                  text-white text-sm font-medium shadow-lg hover:scale-105 transition"
                >
                  Next
                </button>
              </motion.form>
            )}

            {/* STEP 2 */}
            {step === 2 && !success && (
              <motion.form
                key="message"
                onSubmit={handleSubmit}
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 flex items-center justify-between gap-2 
                bg-white/60 backdrop-blur-xl border border-white/40 
                shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
                rounded-full px-3 py-2"
              >
                <input
                  type="text"
                  placeholder="Tell me about your idea..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-transparent outline-none px-3 text-sm text-slate-700 placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 
                  text-white text-sm font-medium shadow-lg hover:scale-105 transition"
                >
                  Submit
                </button>
              </motion.form>
            )}

            {/* SUCCESS */}
            {success && (
              <motion.div
                key="success"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 14,
                }}
                className="absolute inset-0 flex items-center justify-center 
                bg-white/70 backdrop-blur-xl rounded-full border border-green-200
                shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-3">
                  {/* GREEN TICK */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="w-10 h-10 rounded-full bg-green-500 
                    flex items-center justify-center shadow-lg"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                  </motion.div>

                  <div className="text-left">
                    <p className="text-green-700 font-medium text-sm">
                      Successfully Submitted
                    </p>
                    {successMessage && (
                      <p className="text-slate-600 text-xs mt-1">
                        {successMessage}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {error && (
          <div className="mx-auto mb-6 max-w-md rounded-3xl bg-red-50/70 border border-red-200 px-4 py-3 text-left text-sm text-red-700 shadow-sm">
            {error}
          </div>
        )}

        {/* HEADING */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          Let’s <span className="text-blue-600">connect</span> and create
          something <span className="text-blue-600">real</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-slate-600 text-sm md:text-base max-w-xl mx-auto">
          From ideas to execution, we create solutions that drive real impact.
        </p>
      </div>
    </section>
  );
}

/* FLOATING ICON */
function FloatingIcon({ src, className }) {
  return (
    <div
      className={`absolute ${className} w-16 h-16 rounded-full 
      bg-white/20 backdrop-blur-xl border border-white/30 
      shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
      flex items-center justify-center 
      animate-float`}
    >
      <img src={src} alt="" className="w-8 h-8 object-contain" />
    </div>
  );
}