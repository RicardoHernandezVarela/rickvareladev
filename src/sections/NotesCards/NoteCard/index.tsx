import { Flex, Image, Text, Button } from "@chakra-ui/react";

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

function NoteCard({
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

      <Text textTransform="capitalize" noOfLines={2}>{item?.title}</Text>

      <Text textTransform="capitalize">{item?.date}</Text>

      <Flex position="absolute" left="16px" bottom="16px" >
        <Button variant="unstyled" {...styles.button} onClick={onNoteSelected}>
          <IoIosArrowDropright size="26px" />
        </Button>
      </Flex>
    </Flex>
  );
}

export default NoteCard;
