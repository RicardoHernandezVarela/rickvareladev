import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import { SpotifyService } from "../../src/services/spotify";

function GuessSong() {
  const getTracks = async () => {
    const query = "year:2015-2020";

    const tracks = await SpotifyService.getTracksInTimeRange({
      query,
      limit: 5,
    });

    console.log("tracks: ", tracks);

    const queryName = "Shape of You";

    const track = await SpotifyService.getTrack({
      query: queryName,
    });

    console.log("track: ", track);
    console.log("track preview_url: ", track?.preview_url);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return <Flex>GuessSong</Flex>;
}

export default GuessSong;
