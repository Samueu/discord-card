import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await getNowPlaying();

    // O Spotify retorna 204 se não houver nada a tocar ou se a conta estiver offline
    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();

    // Verifica se o item existe (pode ser null se for um anúncio ou podcast em certos casos)
    if (song.item === null) {
      return NextResponse.json({ isPlaying: false });
    }

    // Estrutura os dados para facilitar o uso no seu componente de Card
    const data = {
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
      progress_ms: song.progress_ms,
      duration_ms: song.item.duration_ms,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro na API do Spotify:", error);
    return NextResponse.json(
      { isPlaying: false, message: "Erro ao conectar com o Spotify" },
      { status: 500 }
    );
  }
}