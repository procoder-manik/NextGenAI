import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  HelpCircle,
  Star,
  Plus,
  Trash2,
  Edit,
  Loader2,
  Layers,
  Sparkles,
  LogOut,
} from "lucide-react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { useAuthStore } from "../../store/authStore";
import api from "../../services/api";

export default function AdminDashboard() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("contacts");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const fetchData = async (tab) => {
    setIsLoading(true);
    setItems([]);
    try {
      let endpoint = "/contact";
      if (tab === "services") endpoint = "/services";
      if (tab === "blogs") endpoint = "/blogs";
      if (tab === "faqs") endpoint = "/faqs";
      if (tab === "testimonials") endpoint = "/testimonials";
      if (tab === "portfolio") endpoint = "/portfolio";
      if (tab === "team") endpoint = "/team";

      const res = await api.get(endpoint);
      setItems(res.data?.data || []);
    } catch (err) {
      setMessage("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      let endpoint = `/contact/${id}`;
      if (activeTab === "services") endpoint = `/services/${id}`;
      if (activeTab === "blogs") endpoint = `/blogs/${id}`;
      if (activeTab === "faqs") endpoint = `/faqs/${id}`;
      if (activeTab === "testimonials") endpoint = `/testimonials/${id}`;
      if (activeTab === "portfolio") endpoint = `/portfolio/${id}`;
      if (activeTab === "team") endpoint = `/team/${id}`;

      await api.delete(endpoint);
      fetchData(activeTab);
    } catch (err) {
      alert("Error deleting record");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] py-10">
      <Container>
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-[var(--color-border)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-400 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>NextGenAI Control Console</span>
            </div>
            <h1 className="font-display text-3xl font-black text-[var(--color-text-primary)]">
              Welcome Back, {user?.name || "Admin"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={logout} variant="outline" size="sm" icon={LogOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[var(--color-border)] pb-4">
          {[
            { id: "contacts", label: "Inquiries & Leads", icon: MessageSquare },
            { id: "services", label: "Services (7)", icon: Layers },
            { id: "portfolio", label: "Portfolio Items", icon: Briefcase },
            { id: "blogs", label: "Blog Posts", icon: FileText },
            { id: "faqs", label: "FAQs", icon: HelpCircle },
            { id: "testimonials", label: "Testimonials", icon: Star },
            { id: "team", label: "Team Members", icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-display text-xs font-bold transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Data List Panel */}
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)] mb-6">
            <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)] capitalize">
              {activeTab} Management ({items.length})
            </h3>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-indigo-400">
              <Loader2 className="h-8 w-8 animate-spin mb-2" />
              <span className="text-xs font-semibold">Loading data from MongoDB...</span>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center text-xs text-[var(--color-text-tertiary)]">
              No entries found for {activeTab}. Run <code className="text-indigo-400 font-bold">npm run seed</code> in server directory if empty.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[var(--color-text-primary)]">
                <thead>
                  <tr className="border-b border-[var(--color-border)] text-[var(--color-text-tertiary)] uppercase text-[10px] font-extrabold tracking-wider">
                    <th className="py-3 px-4">Title / Name</th>
                    <th className="py-3 px-4">Details / Category</th>
                    <th className="py-3 px-4">Date / Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-light)]">
                  {items.map((item) => (
                    <tr key={item._id} className="hover:bg-[var(--color-bg-tertiary)]/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">
                        {item.title || item.name || item.question}
                      </td>
                      <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">
                        {item.email || item.category || item.slug || item.position || item.description?.substring(0, 50)}
                      </td>
                      <td className="py-3.5 px-4 text-[var(--color-text-tertiary)]">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Active"}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                          title="Delete Record"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
