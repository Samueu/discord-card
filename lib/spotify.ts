// lib/spotify.ts

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// Codifica as credenciais em Base64 para a autenticação do Spotify
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

/**
 * Função interna para obter um novo access_token usando o refresh_token
 */
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  });

  return response.json();
};

/**
 * Função principal que será chamada pela sua API Route
 */
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    // Importante: 'no-store' garante que o Next.js busque a música em tempo real
    // e não salve o resultado em cache permanentemente.
    cache: 'no-store', 
  });
};