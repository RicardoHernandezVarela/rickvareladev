export class SpotifyService {
  private static async getToken() {
    const response = await fetch("/api/spotify/get-token");
    const data = await response.json();
    return data.token;
  }

  private static async fetchWebApi(params: { endpoint: string }) {
    const { endpoint } = params;

    const token = await this.getToken();

    const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    //console.log("data: ", data);

    return data;
  }

  static async getTracksInTimeRange(params: { query: string; limit: number }) {
    const { query, limit } = params;

    const data = await this.fetchWebApi({
      endpoint: `search?q=${query}&type=track&limit=${limit || 5}`,
    });

    return data;
  }

  static async getTrack(params: { trackId: string }) {
    const { trackId } = params;

    const data = await this.fetchWebApi({
      endpoint: `tracks?ids=${trackId}}`,
    });

    return data;
  }
}
