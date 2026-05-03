"use client";

import Image from "next/image";
import CardContent from "./card-content";
import { useTheme } from "@/context/ThemeContext";
import GitHubStatus from "./github-status";

interface CardProps {
  name: string;
  username: string;
  avatarUrl: string;
}

export default function Card({ name, username, avatarUrl }: CardProps) {
  const { colorClass } = useTheme();

  return (
    <div className="w-full max-w-87.5 bg-[#1d1e23] rounded-xl overflow-hidden flex flex-col shadow-lg border border-white/5">
      <div className="h-24 w-full bg-[#660068] relative">
        <div className="absolute -bottom-10 left-4">
          <div className="relative">
            <Image
              src={avatarUrl}
              alt={`Foto de ${name}`}
              height={80}
              width={80}
              className="rounded-full border-[6px] border-[#1d1e23] bg-[#1d1e23] object-cover"
            />

            <div
              className={`absolute bottom-1 right-1 w-5 h-5 ${colorClass} border-[3px] border-[#1d1e23] rounded-full`}
            ></div>
          </div>
        </div>
      </div>

      <div className="pt-14 pb-4 px-5 flex flex-col">
        <h3 className="text-white font-bold text-xl flex items-center gap-2">
          {name} <span className="text-yellow-500 text-sm">👑</span>
        </h3>
        <p className="text-gray-400 text-sm">@{username}</p>
      </div>

      <div className="px-2 pb-4">
        <GitHubStatus />
        <CardContent />
      </div>
    </div>
  );
}
