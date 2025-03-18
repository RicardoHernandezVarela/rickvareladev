import { useState } from "react";
import NextLink from "next/link";
import { Flex, Text, Image, Link, Skeleton } from "@chakra-ui/react";

import AudioPlayer from "../../Layout/AudioPlayer";

const styles = {
  card: {
    w: { base: "87vw", md: "305px", lg: "305px", xl: "21.17vw" },
    maxW: "305px",
    h: "410px",
    alignItems: "center",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    _hover: {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  cardLink: {
    h: "410px",
    _hover: {
      textDecoration: "none",
      //opacity: "0.9",
    },
  },
  image: {
    w: "250px",
    h: "250px",
    borderRadius: "8px",
  },
  vinylDetails: {
    alignItems: "center",
    gap: "12px",
  },
  recordName: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "27px",
    letterSpacing: "0.5px",
    color: "eerieBlack",
  },
  year: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
  },
};

function VinylCard({
  loading,
  img,
  recordName,
  artistName,
  year,
  preview_url,
}: {
  loading: boolean;
  img: string;
  recordName: string;
  artistName: string;
  year: string;
  preview_url: string;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link {...styles.cardLink} as={NextLink} href={"/"}>
      <Flex
        direction="column"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Flex
          display={isHover ? "none" : "flex"}
          {...styles.card}
          p="20px"
          gap="12px"
          direction="column"
        >
          <Text {...styles.recordName} textTransform="capitalize" noOfLines={1}>
            {recordName}
          </Text>

          <Flex {...styles.image} overflow="hidden">
            {loading && <Skeleton {...styles.image} bg="magnolia" />}

            {!loading && (
              <Image
                w="250px"
                h="250px"
                objectFit="cover"
                src={img}
                alt="vinyl img"
                //   _hover={{
                //     transform: "scale(1.2)",
                //     transition: "transform 0.3s ease-in-out",
                //   }}
              />
            )}
          </Flex>

          <Flex {...styles.vinylDetails} direction="column">
            <Text
              {...styles.recordName}
              textTransform="capitalize"
              noOfLines={1}
            >
              {artistName}
            </Text>
            <Text {...styles.year}>{year}</Text>
          </Flex>
        </Flex>

        <Flex
          display={isHover ? "flex" : "none"}
          {...styles.card}
          direction="column"
          overflow="hidden"
          position="relative"
        >
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src={img}
            alt="vinyl img"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.3s ease-in-out",
            }}
          />

          <AudioPlayer isPlaying={isHover} preview_url={preview_url} />
        </Flex>
      </Flex>
    </Link>
  );
}

export default VinylCard;
