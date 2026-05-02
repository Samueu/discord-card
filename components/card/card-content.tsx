"use client";

import { useTheme } from "@/context/ThemeContext";
import { Pencil, UserSquare2, Copy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import StatusModal from "./status-modal";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function CardContent() {
  const { setColor, colorClass } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("online");
  const [spotify, setSpotify] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        setSpotify(data);
      } catch (error) {
        console.error("Erro ao carregar Spotify:", error);
      }
    };

    fetchSpotify();

    const interval = setInterval(fetchSpotify, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = (id: string) => {
    setCurrentStatus(id);

    switch (id) {
      case "Online":
        setColor("bg-green-500");
        break;
      case "Idle":
        setColor("bg-yellow-500");
        break;
      case "Do Not Disturb":
        setColor("bg-red-500");
        break;
      case "Invisi":
        setColor("bg-gray-400");
        break;
      default:
        setColor("bg-gray-500");
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-5">
      <div className="bg-[#16181b] rounded-lg p-3 mx-3">
        <p className="font-bold text-gray-400 uppercase mb-2 text-[10px] flex items-center justify-between tracking-wider">
          {spotify?.isPlaying
            ? "Listening to Spotify"
            : "Not listening to anything"}
          <SiSpotify
            className={
              spotify?.isPlaying
                ? "text-[#1DB954] animate-pulse"
                : "text-gray-600"
            }
            size={18}
          />
        </p>

        {spotify?.isPlaying ? (
          <div className="flex items-center w-full">
            <div className="relative h-[60px] w-[60px] flex-shrink-0">
              <Image
                src={spotify.albumImageUrl || ""}
                alt="Capa do álbum"
                fill
                className="rounded-md object-cover shadow-md"
              />
            </div>

            <div className="pl-4 flex flex-col min-w-0 w-full">
              <a
                href={spotify.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[13px] font-bold truncate hover:underline leading-tight"
              >
                {spotify.title}
              </a>
              <span className="text-gray-400 text-[11px] truncate mb-2">
                by {spotify.artist}
              </span>

              <div className="flex flex-col w-full">
                <div className="group h-1 w-full bg-gray-700 rounded-full cursor-pointer relative">
                  <div className="h-full bg-white group-hover:bg-[#1DB954] w-[45%] rounded-full transition-all" />
                  <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full hidden group-hover:block -ml-1.25 shadow-md" />
                </div>
                <div className="flex justify-between text-[9px] text-gray-500 font-medium mt-1">
                  <span>1:24</span>
                  <span>3:10</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-2">
            <p className="text-gray-500 text-[11px] italic">
              No music playing right now...
            </p>
          </div>
        )}
      </div>

      <div className="bg-[#16181b] mx-3 rounded-lg flex flex-col overflow-hidden">
        <button className="flex items-center gap-3 w-full p-3 text-sm text-gray-300 hover:bg-white/5 transition-colors">
          <Pencil size={16} />
          <span>Editar perfil</span>
        </button>

        <div className="h-px w-full bg-white/5" />

        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 w-full p-3 text-sm text-gray-300 hover:bg-white/5 transition-colors cursor-pointer"
        >
          <div
            className={`w-3 h-3 ${colorClass} rounded-full shadow-[0_0_5px_rgba(0,0,0,0.5)]`}
          />
          <span>{currentStatus}</span>
        </div>

        <StatusModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleStatusChange}
        />
      </div>

      <div className="bg-[#16181b] mx-3 rounded-lg flex flex-col overflow-hidden">
        <button className="flex items-center gap-3 w-full p-3 text-sm text-gray-300 hover:bg-white/5 transition-colors">
          <UserSquare2 size={16} />
          <span>Switch Accounts</span>
        </button>

        <div className="h-px w-full bg-white/5" />

        <button className="flex items-center gap-3 w-full p-3 text-sm text-gray-300 hover:bg-white/5 transition-colors">
          <Copy size={16} />
          <span>Copy user ID</span>
        </button>
      </div>
    </div>
  );
}
