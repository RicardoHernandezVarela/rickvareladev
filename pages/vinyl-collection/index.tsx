import { Flex } from "@chakra-ui/react";

import VinylCard from "@/src/components/VinylCollection/VinylCard";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    justifyContent: "center",
    gap: "25px",
    p: "20px 40px 40px 40px",
  },
  blankCard: {
    w: { base: "87vw", md: "305px", lg: "305px", xl: "21.17vw" },
    maxW: "305px",
  },
};

const vinylList = [
  {
    img: "https://i.ytimg.com/vi/K8IXWzKcJEQ/hqdefault.jpg",
    recordName: "Magnolia Electric Co.",
    artistName: "Songs:Ohia",
    year: "2003",
    preview_url:
      "https://p.scdn.co/mp3-preview/4c26db11e7288f509577c5e56a00ee8799b6a666?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
  {
    img: "https://m.media-amazon.com/images/I/81SdQGiUuOL._AC_SX679_.jpg",
    recordName: "Singles",
    artistName: "Future Islands",
    year: "2014",
    preview_url:
      "https://p.scdn.co/mp3-preview/4c26db11e7288f509577c5e56a00ee8799b6a666?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/2/2c/Stevemcqueen.jpg",
    recordName: "Steve McQueen",
    artistName: "Prefab Sprout",
    year: "1985",
    preview_url:
      "https://p.scdn.co/mp3-preview/4c26db11e7288f509577c5e56a00ee8799b6a666?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Nocturne_%28Wild_Nothing_album_-_cover_art%29.jpg",
    recordName: "Nocturne",
    artistName: "Wild Nothing",
    year: "2012",
    preview_url:
      "https://p.scdn.co/mp3-preview/4c26db11e7288f509577c5e56a00ee8799b6a666?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
];

function VinylCollection() {
  return (
    <Flex {...styles.mainContainer} overflowY="scroll" flexWrap="wrap">
      {vinylList?.map((vinyl: Record<string, string>, index: number) => {
        return (
          <VinylCard
            key={index}
            loading={false}
            img={vinyl?.img}
            recordName={vinyl?.recordName}
            artistName={vinyl?.artistName}
            year={vinyl?.year}
            preview_url={vinyl?.preview_url}
          />
        );
      })}

      <Flex {...styles.blankCard} />
      <Flex {...styles.blankCard} />
    </Flex>
  );
}

export default VinylCollection;
