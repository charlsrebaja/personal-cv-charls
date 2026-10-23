"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Send,
  MapPin,
  Check,
  Copy,
  AlertCircle,
  Sparkles,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate safe client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage({ ...formData });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Mail className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">Me</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
              Have an internship opportunity, project collaboration, or question? Send a message or connect via GitHub.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels & Meta */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fade-up" delay={120} duration={700}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 space-y-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <span>Contact Channels</span>
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                I am currently open to internship roles, web development projects, and technical discussions.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    Copied email to clipboard!
                  </p>
                )}
              </div>

              {/* GitHub Link */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white">
                    <GithubIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      GitHub Profile
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      github.com/charlsrebaja
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Visit &rarr;
                </span>
              </a>

              {/* LinkedIn Profile */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      @charls-rebaja
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Connect &rarr;
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 pt-2">
                <MapPin className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delay={240} duration={700}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 transition-colors duration-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the validated form below to initiate an inquiry or leave feedback.
              </p>

              {/* Success Notification Banner */}
              {submittedMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Demo Message Validated & Received!</span>
                  </div>
                  <p className="text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
                    Thank you, <strong>{submittedMessage.name}</strong>! Your message with subject &quot;{submittedMessage.subject}&quot; passed full client-side validation.
                  </p>
                  <p className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400/80">
                    Note: Since no private SMTP or server email service is connected to this static demo, message submission operates in safe demo verification mode. For immediate direct correspondence, please visit GitHub at github.com/charlsrebaja.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedMessage(null)}
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-300 underline hover:text-emerald-800 dark:hover:text-emerald-200 pt-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Send another inquiry</span>
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-500 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Maria Santos"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-500"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-500 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. maria@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-500"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-cyan-500 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    placeholder="e.g. Internship Inquiry / Web Project"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-500"
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      Message <span className="text-cyan-500 dark:text-cyan-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-500"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30 disabled:opacity-50"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Validating Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
