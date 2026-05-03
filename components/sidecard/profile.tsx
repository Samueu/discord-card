import { Book } from "lucide-react";

interface SidecardProps {
  name: string;
  playing: string;
  color: string;
}

const colorMap: Record<string, string> = {
  red: "text-red-500",
  green: "text-green-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  blue: "text-blue-500",
};

export default function Profile({ name, playing, color }: SidecardProps) {
  const textColorClass = colorMap[color] || "text-white";

  return (
    <>
      <div className="text-white text-[12px] w-full">
        <div className="bg-[#16181b] rounded-xl pl-5 pt-1 h-12">
          <p className={`${textColorClass} cursor-pointer text-[12px]`}>
            {name}
          </p>

          <span className="text-[12px] font-thin flex items-center gap-1 cursor-pointer">
            Playing <strong className="ml-1 text-[12px]">{playing}</strong>
            <Book size={16} />
          </span>
        </div>
      </div>
    </>
  );
}
