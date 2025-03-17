import type { NextApiRequest, NextApiResponse } from "next";

declare global {
  var spotifyTokenCache:
    | { token: string | null; expiresAt: number }
    | undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientId =
    process.env.SPOTIFY_CLIENT_ID;
  const clientSecret =
    process.env.SPOTIFY_CLIENT_SECRET;

  // Almacenar el token en memoria del servidor
  let tokenCache = global.spotifyTokenCache || {
    token: null,
    expiresAt: 0,
  };

  // Si el token aún es válido, lo reutilizamos
  if (tokenCache.token && Date.now() < tokenCache.expiresAt) {
    return res.json({ token: tokenCache.token });
  }

  // Obtener un nuevo token
  const authResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const authData = await authResponse.json();

  // Guardar el token en memoria global del servidor
  global.spotifyTokenCache = {
    token: authData.access_token,
    expiresAt: Date.now() + authData.expires_in * 1000, // Guardar tiempo de expiración
  };

  return res.json({ token: authData.access_token });
}
