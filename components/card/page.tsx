import Image from "next/image";

export default function Card() {
  return (
    <div className="max-h-[400px] w-full max-w-[350px] bg-[#1d1e23] rounded-xl overflow-hidden flex flex-col shadow-lg border border-white/5">
      <div className="h-24 w-full bg-red-400 relative">
        <div className="absolute -bottom-6 left-4">
          {" "}
          <div className="relative">
            <Image
              src="https://github.com/samueu.png"
              alt="Foto Samuel"
              height={80}
              width={80}
              className="rounded-full border-[6px] border-[#1d1e23] bg-[#1d1e23]"
            />

            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#1d1e23] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-6 px-5 flex flex-col">
        <h3 className="text-white font-bold text-xl flex items-center gap-2">
          Samuel <span className="text-yellow-500 text-sm">👑</span>
        </h3>
        <p className="text-gray-400 text-sm">@samueu</p>
      </div>
    </div>
  );
}
