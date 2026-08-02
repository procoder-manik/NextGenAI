import { useState } from "react";
import { Mail, CheckCircle2, Loader2, Send } from "lucide-react";
import Section from "../ui/Section";
import api from "../../services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await api.post("/contact/newsletter", { email });
      setStatus("success");
      setMessage(res.data?.message || "Successfully subscribed to our engineering journal!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err.response?.data?.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <Section className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-indigo-500/10 text-indigo-500">
          <Mail className="h-5 w-5" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
          Join 5,000+ Engineers & Executives
        </h2>

        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          One high-value breakdown on AI architecture, full-stack performance, and digital growth. Sent bi-weekly. Zero spam.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 p-4 text-xs font-bold text-emerald-500 border border-emerald-500/30">
            <CheckCircle2 className="h-5 w-5" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email address"
              className="min-w-0 flex-1 rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-xs text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-display text-xs font-bold text-white hover:bg-indigo-500 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-xs text-red-500 font-semibold">{message}</p>
        )}
      </div>
    </Section>
  );
}
