import React, { useState } from 'react';
import { AlertCircle, Power, RefreshCw, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProjectNode {
  id: string;
  title: string;
  url: string;
  status: 'online' | 'offline' | 'loading';
}

const MasterDashboard = () => {
  const [nodes, setNodes] = useState<ProjectNode[]>([
    { id: 'anchor', title: 'Lumen-Anchor', url: 'https://lumen-anchor.lovable.app', status: 'online' },
    { id: 'biosync', title: 'Biosync Interface', url: '', status: 'offline' },
    { id: 'anatomie', title: 'First-Seite Anatomie', url: '', status: 'offline' },
    { id: 'screenshot', title: 'Exact Screenshot', url: '', status: 'offline' },
    { id: 'perfect', title: 'Pixel Perfect', url: '', status: 'offline' }
  ]);

  const [fullscreenId, setFullscreenId] = useState<string | null>(null);

  const handleRefresh = (id: string) => {
    setNodes(nodes.map(node =>
      node.id === id ? { ...node, status: 'loading' as const } : node
    ));
    setTimeout(() => {
      setNodes(nodes.map(node =>
        node.id === id ? { ...node, status: 'online' as const } : node
      ));
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'online': return 'text-green-500';
      case 'offline': return 'text-red-500';
      case 'loading': return 'text-yellow-500';
      default: return 'text-zinc-500';
    }
  };

  const getStatusBg = (status: string) => {
    switch(status) {
      case 'online': return 'bg-green-500/10';
      case 'offline': return 'bg-red-500/10';
      case 'loading': return 'bg-yellow-500/10';
      default: return 'bg-zinc-900';
    }
  };

  if (fullscreenId) {
    const node = nodes.find(n => n.id === fullscreenId);
    if (!node || !node.url) {
      return (
        <div className="h-screen w-screen bg-zinc-950 text-white flex items-center justify-center">
          <Button onClick={() => setFullscreenId(null)} variant="outline">Zurück zum Dashboard</Button>
        </div>
      );
    }
    return (
      <div className="h-screen w-screen bg-black flex flex-col">
        <div className="bg-zinc-900 border-b border-zinc-800 p-3 flex justify-between items-center">
          <span className="text-blue-500 font-bold">{node.title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFullscreenId(null)}
            className="text-zinc-400"
          >
            Schließen
          </Button>
        </div>
        <iframe
          src={node.url}
          className="flex-1 w-full border-none"
          title={node.title}
        />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-zinc-950 text-white flex flex-col font-mono overflow-hidden">
      <header className="p-4 border-b border-zinc-800 bg-zinc-900 backdrop-blur">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className="text-xl font-bold text-blue-500">MASTER CONTROL ROOM</h1>
            <p className="text-xs text-zinc-500">Unified Project Dashboard v1.0</p>
          </div>
          <div className="text-right text-xs">
            <div className="text-green-500">STATUS: OPERATIONAL</div>
            <div className="text-zinc-500">Nodes: {nodes.filter(n => n.status === 'online').length}/{nodes.length}</div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[350px]">
          {nodes.map(node => (
            <Card key={node.id} className="bg-zinc-900 border-zinc-800 flex flex-col overflow-hidden hover:border-zinc-700 transition-colors">
              <div className={`px-3 py-2 border-b border-zinc-800 flex items-center justify-between ${getStatusBg(node.status)}`}>
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(node.status)}`} />
                  <span className="text-xs font-bold truncate text-zinc-300">{node.title.toUpperCase()}</span>
                </div>
                <span className={`text-[10px] ${getStatusColor(node.status)} font-bold`}>
                  {node.status.toUpperCase()}
                </span>
              </div>

              {node.url ? (
                <>
                  <iframe
                    src={node.url}
                    className="flex-1 w-full border-none bg-white"
                    title={node.title}
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                  <div className="bg-zinc-800 px-2 py-2 flex gap-1 border-t border-zinc-800">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-[11px]"
                      onClick={() => handleRefresh(node.id)}
                    >
                      <RefreshCw className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-[11px]"
                      onClick={() => setFullscreenId(node.id)}
                    >
                      <Maximize2 className="w-3 h-3" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-zinc-950">
                  <AlertCircle className="w-6 h-6 text-zinc-600" />
                  <p className="text-[11px] text-zinc-500 text-center px-2">
                    URL nicht konfiguriert
                  </p>
                  <p className="text-[10px] text-zinc-600 text-center px-2">
                    Bitte tragen Sie die URL ein
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 p-2 text-[10px] text-zinc-500">
        <div className="flex justify-between">
          <span>Master Dashboard © 2024</span>
          <span>Alle Systeme online</span>
        </div>
      </footer>
    </div>
  );
};

export default MasterDashboard;
