import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, CheckCircle } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-orbitron mb-3">
            App installieren
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Installiere Obsidian Matrix auf deinem Gerät für Offline-Zugang und ein natives App-Erlebnis.
          </p>
        </div>

        {isInstalled ? (
          <div className="flex items-center justify-center gap-3 text-primary">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium">Bereits installiert</span>
          </div>
        ) : deferredPrompt ? (
          <button
            onClick={handleInstall}
            className="w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors"
          >
            <Download className="w-5 h-5" />
            Jetzt installieren
          </button>
        ) : (
          <div className="space-y-4 text-left">
            <p className="text-muted-foreground text-sm text-center mb-4">
              Nutze die Browser-Funktion zum Installieren:
            </p>
            <div className="bg-card border border-primary/10 rounded-lg p-4 space-y-3 text-sm text-muted-foreground">
              <p><strong className="text-foreground">iPhone/iPad:</strong> Tippe auf „Teilen" → „Zum Home-Bildschirm"</p>
              <p><strong className="text-foreground">Android:</strong> Tippe auf das Menü (⋮) → „App installieren"</p>
              <p><strong className="text-foreground">Desktop:</strong> Klicke auf das Install-Icon in der Adressleiste</p>
            </div>
          </div>
        )}

        <a
          href="/"
          className="inline-block mt-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Zurück zur Hauptseite
        </a>
      </motion.div>
    </div>
  );
};

export default Install;