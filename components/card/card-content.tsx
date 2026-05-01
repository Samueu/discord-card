import { Pencil, UserSquare2, Copy } from "lucide-react";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";

interface CardContentProps {
  status: string;
}

export default function CardContent({ status }: CardContentProps) {
  return (
    <div className="flex flex-col gap-4 pb-5">
      {/* Seção Spotify */}
      <div className="bg-[#16181b] rounded-lg p-3 mx-3">
        <p className="font-bold text-gray-400 uppercase mb-2 text-[10px] flex items-center justify-between">
          Listening to Spotify
          <SiSpotify className="text-[#1DB954]" size={18} />
        </p>
        <div className="flex items-center">
          <Image
            src="https://i.scdn.co/image/ab67616d0000b273423e0509385b6db01d92e70c"
            alt="Foto do albúm"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="pl-4">
            <p className="text-white font-bold text-[12px]">
              Next to Me - Vintage Culture...
            </p>
            <span className="text-white text-[12px]">
              RÜFÜS DU SOL, Vintage Culture
            </span>
            <div className="flex flex-col  ">
              <div className="group h-1 w-full bg-gray-600 rounded-full mt-1 cursor-pointer relative">
                <div className="h-full bg-white group-hover:bg-[#1DB954] w-[45%] rounded-full" />
                <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full hidden group-hover:block -ml-1.5 shadow-md" />
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-medium [&>span]:cursor-default">
              <span>1:24</span>
              <span>3:10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#16181b] mx-3 rounded-lg flex flex-col overflow-hidden">
        <button className="flex items-center gap-3 w-full p-3 text-sm text-gray-300 hover:bg-white/5 transition-colors">
          <Pencil size={16} />
          <span>Editar perfil</span>
        </button>

        <div className="h-px w-full bg-white/5" />

        <div className="flex items-center gap-3 w-full p-3 text-sm text-gray-300 hover:bg-white/5 transition-colors">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span>{status}</span>
        </div>
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
