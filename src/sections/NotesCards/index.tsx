import { useMemo, useState } from "react";
import { Button, Flex, Text, Image, useDisclosure } from "@chakra-ui/react";

import LoadingSpinner from "@/src/components/Layout/LoadingSpinner";

import PDFviewerDialog from "./PDFviewerDialog";

import { IoIosArrowDropright } from "react-icons/io";

const styles = {
  mainContainer: {
    w: { base: "87vw", lg: "72vw", xl: "76.5vw" },
    maxW: "1650px",
    h: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    mt: "8px",
    mb: "16px",
    p: "24px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    gap: "20px",
  },
  categoryContainer: {
    w: "100%",
    alignItems: "flex-start",
    gap: "20px",
  },
  categoryTag: {},
  categoryContent: {
    w: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  noteCard: {
    w: "280px",
    h: "400px",
    borderRadius: "40px",
    border: "1px",
    borderColor: "vistaBlue",
    boxShadow: "lg",
    p: "16px",
    gap: "12px",
  },
};

function NotesCards({
  data,
  status,
}: {
  data: Record<string, any>[];
  status: string;
}) {
  const notesData = useMemo(() => {
    if (!data) return;

    const dataObject: Record<string, any> = {};

    for (const item of data) {
      const category = item?.category;

      const categoryInDataObject = dataObject[category] || {};
      const categoryContent = categoryInDataObject?.content || [];

      dataObject[category] = {
        ...categoryInDataObject,
        category: categoryInDataObject?.category || category,
      };

      dataObject[category]["content"] = [...categoryContent, item];
    }

    //console.log("dataObject: ", dataObject);

    const groupedData: Record<string, any>[] = Object.values(dataObject);

    //console.log("groupedData: ", groupedData);

    return groupedData;
  }, [data]);

  const [noteSelected, setNoteSelected] = useState<Record<string, any> | null>(
    null
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onNoteSelected = ({ note }: { note: Record<string, any> }) => {
    if (!note) return;

    setNoteSelected(note);
    onOpen();
  };

  return (
    <>
      <Flex {...styles.mainContainer} direction="column">
        <LoadingSpinner status={status} />

        {notesData?.map((category: Record<string, any>, index: number) => {
          return (
            <Flex
              key={`${category?.category}${index}`}
              {...styles.categoryContainer}
              direction="column"
            >
              <Flex {...styles.categoryTag}>
                <Text>{category?.category}</Text>
              </Flex>

              <Flex {...styles.categoryContent}>
                {category?.content?.map((item: Record<string, any>) => {
                  return (
                    <Flex
                      key={item?._id}
                      {...styles.noteCard}
                      direction="column"
                    >
                      <Flex>
                        <Image
                          src={"https://picsum.photos/200"}
                          alt="work img"
                        />
                      </Flex>

                      <Text>{item?.subject}</Text>

                      <Text>{item?.title}</Text>

                      <Text>{item?.date}</Text>

                      <Flex>
                        <Button
                          variant="unstyled"
                          onClick={() => onNoteSelected({ note: item })}
                        >
                          <IoIosArrowDropright size="26px" />
                        </Button>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      <PDFviewerDialog
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        noteSelected={noteSelected || {}}
      />
    </>
  );
}

export default NotesCards;
