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

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Falha na rota");
        return res.json();
      })
      .then((data) => {
        if (data && !data.error) {
          setStatus(data);
        }
      })
      .catch((err) => {
        console.log("Aguardando conexão com o GitHub...");
      });
  }, []);

  if (!status) return null;

  const getEventAction = (type: string) => {
    switch (type) {
      case "PushEvent":
        return "Pushed";
      case "CreateEvent":
        return "Created";
      case "WatchEvent":
        return "Starred";
      case "PullRequestEvent":
        return "Opened PR in";
      default:
        return "Activity in";
    }
  };

  return (
    <div className="mt-2 p-3 bg-[#16181b] rounded-lg  flex flex-col gap-1 transition-all hover:bg-white/8 mb-4 mx-3">
      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
        <Terminal size={12} className="text-blue-400" />
        GitHub Activity
      </div>

      <div className="text-sm text-gray-200 leading-tight">
        <span className="text-blue-400/80 font-medium">
          {getEventAction(status.type)}:
        </span>{" "}
        <span className="italic text-gray-300">{status.message}</span>
      </div>

      <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
        <GitBranch size={10} />
        {status.repo.split("/")[1]}{" "}
      </div>
    </div>
  );
}
