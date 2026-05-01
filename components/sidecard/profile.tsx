import { Book } from "lucide-react";

interface SidecardProps {
  name: string;
  playing: string;
}

export default function Profile({ name, playing }: SidecardProps) {
  return (
    <>
      <div className="text-white text-sm">
        <p className="text-blue-500 cursor-pointer">{name}</p>

        <span className="text-sm flex items-center gap-1 cursor-pointer">
          Playing <strong className="ml-1">{playing}</strong>
          <Book size={16} />
        </span>
      </div>
    </>
  );
}
