"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Status = "idle" | "sending" | "sent" | "error";

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const pathname = usePathname();

  useEffect(() => {
    if (!open) { setStatus("idle"); setName(""); setMessage(""); }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() || undefined, message: message.trim(), page: pathname }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all text-sm font-bold"
        aria-label="Laisser un commentaire"
      >
        💬 <span className="hidden sm:inline">Avis</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl">
            {status === "sent" ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Merci !</h2>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-6">Ton commentaire a bien été envoyé.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">💬 Laisse un commentaire</h2>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none">✕</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-1.5">Ton prénom (facultatif)</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex : Clément"
                      maxLength={50}
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-1.5">Ton message <span className="text-red-400">*</span></label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ce que tu penses du site, une idée, un bug…"
                      rows={4}
                      maxLength={1000}
                      required
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                    />
                    <div className="text-right text-xs text-gray-400 mt-1">{message.length}/1000</div>
                  </div>
                  {status === "error" && (
                    <p className="text-xs text-red-500">Une erreur s&apos;est produite, réessaie.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending" || !message.trim()}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl text-sm font-bold hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Envoi…" : "Envoyer 🚀"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
