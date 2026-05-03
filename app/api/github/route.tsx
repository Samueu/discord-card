import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_USER = "samueu";

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/events/public`,
      {
        headers: {
          "User-Agent": "NextJS-Portfolio-App",
        },
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API limit or error" },
        { status: res.status },
      );
    }

    const events = await res.json();

    if (!events || events.length === 0) {
      return NextResponse.json({
        message: "No recent activity",
        type: "None",
        repo: "",
      });
    }

    const lastEvent = events[0];

    return NextResponse.json({
      type: lastEvent.type,
      repo: lastEvent.repo.name,
      createdAt: lastEvent.created_at,
      message: lastEvent.payload?.commits?.[0]?.message || "Working on code",
    });
  } catch (error) {
    console.error("Erro na rota do GitHub:", error);

    return NextResponse.json({ error: "Connection failed" }, { status: 500 });
  }
}
