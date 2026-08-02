import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, Loader2, Cpu, ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const res = await login(email, password);
    if (res.success) {
      navigate("/admin/dashboard");
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="relative flex min-h-[85vh] items-center justify-center py-16 px-4 bg-[var(--color-bg-primary)]">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <Container className="relative z-10 max-w-md w-full">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-3 mb-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
              <Cpu className="h-6 w-6" />
            </div>

            <h1 className="font-display text-2xl font-black text-[var(--color-text-primary)]">
              Admin Gateway
            </h1>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Sign in to manage NextGenAI backend endpoints, content, & leads.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 rounded-xl bg-red-500/10 p-3 text-xs font-semibold text-red-500 border border-red-500/20 text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-[var(--color-text-tertiary)]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@nextgenai.com"
                  className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] pl-10 pr-4 py-2.5 text-xs text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-[var(--color-text-tertiary)]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] pl-10 pr-4 py-2.5 text-xs text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="gradient"
                size="md"
                isLoading={isLoading}
                showArrow
                className="w-full"
              >
                Sign In To Console
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-[var(--color-border)] text-center">
            <span className="text-[11px] text-[var(--color-text-tertiary)]">
              Demo Credentials: <strong className="text-indigo-400">admin@nextgenai.com</strong> / <strong className="text-indigo-400">Admin@123</strong>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
