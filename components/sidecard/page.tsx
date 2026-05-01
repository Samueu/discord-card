import { Book } from "lucide-react";
import Profile from "./profile";

export default function Sidecard() {
  return (
    <section className="flex flex-col bg-[#1d1e23] h-70 w-60 p-7 rounded-xl">
      <div className="pb-7">
        <p className="text-white">👑 Pessoas</p>
      </div>
      <Profile name="!Fael" playing="Code" />
      <Profile name="Edo" playing="FL Studio 20" />
      <Profile name="Matiew" playing="Overwatch" />
      <Profile name="Arthur" playing="Koovaks" />
    </section>
  );
}
