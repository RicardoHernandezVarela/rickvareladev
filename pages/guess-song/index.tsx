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

    const track = await SpotifyService.getTrack({
      trackId: "0y2DyTS7hhrR9j5LAgTldO",
    });

    console.log("track: ", track);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return <Flex>GuessSong</Flex>;
}

export default GuessSong;
