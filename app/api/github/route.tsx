import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/samueu/events/public`,
      {
        headers: {
          "User-Agent": "Portfolio-Samuel",
          Accept: "application/vnd.github.v3+json",
        },

        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      console.error(`GitHub API retornou erro: ${res.status}`);
      return NextResponse.json(
        { error: "GitHub temporariamente indisponível" },
        { status: res.status },
      );
    }

    const events = await res.json();

    if (!events || events.length === 0) {
      return NextResponse.json({ message: "Sem atividade recente" });
    }

    const lastPush = events.find(
      (e: { type: string }) => e.type === "PushEvent",
    );

    if (lastPush) {
      return NextResponse.json({
        type: "Push",
        repo: lastPush.repo.name.split("/")[1],
        message: lastPush.payload.commits[0].message,
        createdAt: lastPush.created_at,
      });
    }

    return NextResponse.json({
      type: events[0].type.replace("Event", ""),
      repo: events[0].repo.name.split("/")[1],
      message: "Atividade recente no GitHub",
      createdAt: events[0].created_at,
    });
  } catch (error) {
    console.error("Erro de conexão detectado");
    // Em vez de dar erro 500, retorna um status offline "fake" para o card não sumir
    return NextResponse.json({
      type: "Offline",
      repo: "github.com",
      message: "Servidor local sem conexão",
      createdAt: new Date().toISOString(),
    });
  }
}
