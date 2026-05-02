import Profile from "./profile";

export default function Sidecard() {
  return (
    <section className="flex flex-col bg-[#1d1e23] h-70  p-7 rounded-xl">
      <div className="pb-4">
        <p className="text-white">👑 Pessoas</p>
      </div>
      <div className="space-y-2 w-70">
        <Profile color="red" name="!Fael" playing="Code" />
        <Profile color="green" name="Edo" playing="FL Studio 20" />
        <Profile color="purple" name="Matiew" playing="Overwatch" />
        <Profile color="pink" name="Arthur" playing="Koovaks" />
      </div>
    </section>
  );
}
