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
      <div className="text-white text-sm">
        <p className={`${textColorClass} cursor-pointer`}>{name}</p>

        <span className="text-sm flex items-center gap-1 cursor-pointer">
          Playing <strong className="ml-1">{playing}</strong>
          <Book size={16} />
        </span>
      </div>
    </>
  );
}
