import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Zap, CheckCircle2, ArrowRight, Code, ShieldCheck, Cpu } from 'lucide-react';

export default function AIShowcaseWidget() {
  const [activeTab, setActiveTab] = useState('estimator'); // 'estimator' or 'preview'
  const [industry, setIndustry] = useState('ecommerce');
  const [goal, setGoal] = useState('automation');
  const [complexity, setComplexity] = useState('medium');
  const [promptText, setPromptText] = useState('');
  const [aiOutput, setAiOutput] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Estimator calculation
  const getEstimation = () => {
    const baseCost = { ecommerce: 4500, healthcare: 8500, fintech: 9500, SaaS: 6000 }[industry] || 5000;
    const goalMultiplier = { automation: 1.2, chatbot: 1.0, predictive: 1.5, customApp: 1.8 }[goal] || 1.2;
    const complexityMult = { low: 0.8, medium: 1.0, high: 1.6 }[complexity] || 1.0;

    const estimatedCost = Math.round((baseCost * goalMultiplier * complexityMult) / 100) * 100;
    const weeks = Math.round(4 * goalMultiplier * complexityMult);

    return { estimatedCost, weeks };
  };

  const handleGeneratePrompt = (e) => {
    e.preventDefault();
    if (!promptText.trim()) return;

    setIsGenerating(true);
    setAiOutput(null);

    setTimeout(() => {
      setAiOutput({
        strategy: `Custom NextGenAI Architecture for: "${promptText}"`,
        models: ["Gemini 1.5 Pro", "Claude 3.5 Sonnet", "Pinecone Vector DB"],
        features: [
          "Automated RAG Workflow with Semantic Search",
          "Real-time Streaming Endpoint with <50ms latency",
          "Enterprise Role-Based Access & Data Encryption",
        ],
        roi: "340% Efficiency Gain in Q1",
      });
      setIsGenerating(false);
    }, 1200);
  };

  const { estimatedCost, weeks } = getEstimation();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-indigo-950/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10">
      {/* Glow Orbs background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Header Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-sm">Interactive AI Lab</h3>
            <p className="text-[11px] text-slate-400">Explore Instant Estimates & Architecture</p>
          </div>
        </div>

        <div className="flex rounded-xl bg-slate-950/80 p-1 border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('estimator')}
            className={`rounded-lg px-3 py-1.5 font-semibold transition-all ${
              activeTab === 'estimator'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ROI Estimator
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`rounded-lg px-3 py-1.5 font-semibold transition-all ${
              activeTab === 'preview'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Prompt Architect
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === 'estimator' ? (
          <div className="grid gap-6 md:grid-cols-2 items-center">
            {/* Input Controls */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">Industry Sector</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="ecommerce">E-Commerce & Retail</option>
                  <option value="SaaS">SaaS & Tech Product</option>
                  <option value="fintech">Fintech & Financial Services</option>
                  <option value="healthcare">Healthcare & Biotech</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">Primary Objective</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="automation">Workflow & Data Automation</option>
                  <option value="chatbot">Custom AI Assistant / Agent</option>
                  <option value="predictive">Predictive Analytics Model</option>
                  <option value="customApp">Full-Stack AI Web Application</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">Scale / Complexity</label>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'medium', 'high'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setComplexity(lvl)}
                      className={`rounded-xl py-2 font-semibold capitalize transition-all border ${
                        complexity === lvl
                          ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Output Panel */}
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-950/40 p-6 text-center backdrop-blur-md relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                Estimated Project Scope
              </span>

              <div className="mt-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                  ${estimatedCost.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 block mt-1">Starting Investment</span>
              </div>

              <div className="mt-4 flex items-center justify-center gap-6 py-3 border-y border-indigo-500/20 text-xs">
                <div>
                  <span className="text-indigo-300 font-bold block">{weeks} Weeks</span>
                  <span className="text-slate-400">Est. Time to Market</span>
                </div>
                <div className="h-8 w-[1px] bg-indigo-500/20" />
                <div>
                  <span className="text-cyan-300 font-bold block">100% Dedicated</span>
                  <span className="text-slate-400">Senior AI Team</span>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-500/30 hover:opacity-95 transition-opacity"
              >
                <span>Lock In Estimate & Scope</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleGeneratePrompt} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Describe Your Business Challenge / Vision
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="e.g. Automate customer support tickets with accurate knowledge base search"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none pr-28"
                  />
                  <button
                    type="submit"
                    disabled={isGenerating || !promptText.trim()}
                    className="absolute right-1.5 top-1.5 bottom-1.5 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 flex items-center gap-1.5"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Architect</span>
                  </button>
                </div>
              </div>
            </form>

            {/* AI Generation Output */}
            <AnimatePresence>
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 flex flex-col items-center justify-center py-8 text-center"
                >
                  <Cpu className="h-8 w-8 text-indigo-400 animate-spin-slow mb-2" />
                  <p className="text-xs text-indigo-300 font-semibold">Designing Custom AI Solution Blueprint...</p>
                </motion.div>
              )}

              {aiOutput && !isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-5 text-xs text-slate-300 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                      <Zap className="h-4 w-4" /> NextGenAI Recommended Architecture
                    </span>
                    <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300 font-bold">
                      {aiOutput.roi}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-lg bg-slate-900 p-2">
                      <span className="text-slate-400 block mb-1 font-semibold">Tech Stack Models:</span>
                      <div className="flex flex-wrap gap-1">
                        {aiOutput.models.map((m) => (
                          <span key={m} className="rounded bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-900 p-2">
                      <span className="text-slate-400 block mb-1 font-semibold">Key Capabilities:</span>
                      <span className="text-slate-200">Semantic Search, Real-Time Streams, Zero Data Leakage</span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    {aiOutput.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-slate-300 text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
