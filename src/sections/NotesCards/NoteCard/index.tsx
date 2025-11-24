import {
  Flex,
  Image,
  Text,
  Button,
  Box,
  Avatar,
  Badge,
} from "@chakra-ui/react";

import { IoIosArrowDropright } from "react-icons/io";

const styles = {
  noteCard: {
    w: "280px",
    h: "400px",
    borderRadius: "40px",
    border: "1px",
    borderColor: "vistaBlue",
    boxShadow: "lg",
    p: "16px",
    gap: "12px",
    fontSize: "14px",
  },
  image: {
    w: "100%",
    h: "205px",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "30px",
    borderTopRadius: "30px",
    overflow: "hidden",
  },
  button: {
    w: "30px",
    minW: "30px",
    h: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "0",
    borderRadius: "full",
    boxShadow: "md",
  },
};

export function NoteCard({
  item,
  onNoteSelected,
}: {
  item: Record<string, any>;
  onNoteSelected: () => void;
}) {
  return (
    <Flex
      key={item?._id}
      {...styles.noteCard}
      direction="column"
      position="relative"
    >
      <Flex {...styles.image}>
        <Image
          src={"https://picsum.photos/200"}
          alt="work img"
          width="248px"
          height="100%"
        />
      </Flex>

      <Text textTransform="capitalize">{item?.subject}</Text>

      <Text textTransform="capitalize" noOfLines={2}>
        {item?.title}
      </Text>

      <Text textTransform="capitalize">{item?.date}</Text>

      <Flex position="absolute" left="16px" bottom="16px">
        <Button variant="unstyled" {...styles.button} onClick={onNoteSelected}>
          <IoIosArrowDropright size="26px" />
        </Button>
      </Flex>
    </Flex>
  );
}

const notePillSyles = {
  mainContainer: {
    width: { sm: "280px", md: "320px" },
    color: "magnolia",
    p: "5px 10px",
    border: "1px",
    borderRadius: "20px",
    boxShadow: "md",
    cursor: "pointer",
    _hover: {
      opacity: 0.9,
    },
  },
  avatar: {
    p: "3px",
    bg: "bleu",
  },
  title: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "delftBlue",
  },
  subject: {
    fontSize: "10px",
    color: "eerieBlack",
  },
};

export function NotePill({
  item,
  onNoteSelected,
}: {
  item: Record<string, any>;
  onNoteSelected: () => void;
}) {
  return (
    <Flex
      {...notePillSyles.mainContainer}
      borderColor={item?.borderColor || "bleu"}
      onClick={onNoteSelected}
    >
      <Avatar src={item?.image?.url} {...notePillSyles.avatar} />
      <Box ml="3">
        <Text {...notePillSyles.title} noOfLines={1}>
          {item?.title}
          {/* <Badge ml="1" colorScheme="green">
            <IoCloudDownload />
          </Badge> */}
        </Text>
        <Badge px="5px">
          <Text {...notePillSyles.subject}>{item?.subject}</Text>
        </Badge>
      </Box>
    </Flex>
  );
}
