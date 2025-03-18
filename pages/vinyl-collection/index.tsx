import { Flex, Spinner, Text } from "@chakra-ui/react";

import VinylCard from "@/src/components/VinylCollection/VinylCard";

import useSanityData from "@/src/hooks/useSanityData";

import requestStatus from "@/src/constants/requestStatus";

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
      "https://p.scdn.co/mp3-preview/d2c2dd06477ca017d8276f4f5095fc5d7323a022?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
  {
    img: "https://m.media-amazon.com/images/I/81SdQGiUuOL._AC_SX679_.jpg",
    recordName: "Singles",
    artistName: "Future Islands",
    year: "2014",
    preview_url:
      "https://p.scdn.co/mp3-preview/a425591bb54f2f7065f221085d351ae0049820c3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/2/2c/Stevemcqueen.jpg",
    recordName: "Steve McQueen",
    artistName: "Prefab Sprout",
    year: "1985",
    preview_url:
      "https://p.scdn.co/mp3-preview/2e05ceeb5e0bb4b0cc66bea2fe91b350caffbbab?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Nocturne_%28Wild_Nothing_album_-_cover_art%29.jpg",
    recordName: "Nocturne",
    artistName: "Wild Nothing",
    year: "2012",
    preview_url:
      "https://p.scdn.co/mp3-preview/2752f90a97409bd9be939047d223428976f4fdb2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  },
];

function VinylCollection() {
  const { data, status } = useSanityData({ dataItem: "vinyl" });

  return (
    <Flex {...styles.mainContainer} overflowY="scroll" flexWrap="wrap">
      {(status === requestStatus.IDLE ||
        status === requestStatus.IS_LOADING) && (
        <Spinner size="xl" color="bleu" thickness="4px" speed="0.65s" />
      )}

      {status === requestStatus.HAS_SUCCESS && data?.length && (
        <>
          {data?.map((vinyl: Record<string, any>, index: number) => {
            return (
              <VinylCard
                key={index}
                loading={false}
                img={vinyl?.image?.url}
                recordName={vinyl?.name}
                artistName={vinyl?.artist}
                year={vinyl?.year}
                preview_url={vinyl?.preview_url}
              />
            );
          })}

          <Flex {...styles.blankCard} />
          <Flex {...styles.blankCard} />
        </>
      )}

      {status === requestStatus.HAS_ERROR && (
        <Text>There are no items in my collection.</Text>
      )}
    </Flex>
  );
}

export default VinylCollection;
