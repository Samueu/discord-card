import Card from "@/components/card/page";
import Sidecard from "@/components/sidecard/page";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <div className="flex md:hidden h-screen w-full flex-col items-center justify-center p-6 text-center">
        <div className="bg-red-500/10 p-4 rounded-full mb-4">
          <span className="text-red-500 text-4xl">📱</span>
        </div>
        <h1 className="text-white text-2xl font-bold mb-2">
          Site indisponível
        </h1>
        <p className="text-gray-400">
          Este painel foi projetado exclusivamente para telas maiores. Acesse
          via Desktop para uma melhor experiência.
        </p>
      </div>

      <div className="hidden md:flex h-screen items-center justify-center gap-6">
        <Card
          name="Samuel"
          username="samueu"
          avatarUrl="https://github.com/samueu.png"
        />
        <Sidecard />
      </div>
    </main>
  );
}
