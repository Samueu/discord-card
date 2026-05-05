"use client";

import { useEffect, useState } from "react";
import { Terminal, GitBranch } from "lucide-react";

interface GitHubStatusData {
  type: string;
  repo: string;
  message: string;
  createdAt: string;
}

export default function GitHubStatus() {
  const [status, setStatus] = useState<GitHubStatusData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github");

        if (!res.ok) {
          throw new Error(`Erro na API: ${res.status}`);
        }

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setStatus(data);
      } catch (err) {
        const messageError =
          err instanceof Error ? err.message : "Ocorreu um erro inexperado!";
        console.error("Erro no Componente:", messageError);
        setError(messageError);
      }
    }
    load();
  }, []);

  if (error) {
    return (
      <div className="mt-2 p-2 border border-red-500/50 text-[10px] text-red-400 rounded">
        Erro GitHub: {error}
      </div>
    );
  }

  if (!status) {
    return (
      <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/10 animate-pulse">
        <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold uppercase">
          <Terminal size={12} />
          GitHub Activity
        </div>
        <div className="h-4 w-24 bg-white/10 mt-2 rounded"></div>
      </div>
    );
  }

  return (
    <div className="mt-2 p-3 bg-[#16181b] rounded-lg  flex flex-col gap-1 transition-all mb-4 mx-3">
      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
        <Terminal size={12} className="text-blue-400" />
        GitHub Activity
      </div>

      <div className="text-sm text-gray-200">
        <span className="text-blue-400 font-medium">{status.type}:</span>{" "}
        <span className="text-gray-300 italic">{status.message}</span>
      </div>

      <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
        <GitBranch size={10} />
        {status.repo}
      </div>
    </div>
  );
}
