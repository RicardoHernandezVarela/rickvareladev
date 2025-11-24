import { useMemo, useState } from "react";
import {
  Flex,
  Text,
  useDisclosure,
  Avatar,
  Box,
  Badge,
} from "@chakra-ui/react";

import LoadingSpinner from "@/src/components/Layout/LoadingSpinner";

import PDFviewerDialog from "./PDFviewerDialog";

import { NoteCard, NotePill } from "./NoteCard";

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
    pt: "34px",
  },
  categoryContainer: {
    w: "100%",
    alignItems: "flex-start",
    gap: "20px",
    pb: "30px",
  },
  categoryTag: {
    backgroundColor: "bleuDeFrance",
    color: "white",
    borderRadius: "12px",
    p: "1px 12px 4px 12px",
    fontSize: "13px",
  },
  categoryContent: {
    w: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: { sm: "25px", md: "auto" },
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
                <Text textTransform="capitalize">
                  {category?.category?.replace("-", " ")}
                </Text>
              </Flex>

              <Flex
                {...styles.categoryContent}
                direction={{ sm: "column", md: "row" }}
                flexWrap="wrap"
              >
                {category?.content?.map((item: Record<string, any>) => {
                  return (
                    <NotePill
                      key={item._id}
                      item={item}
                      onNoteSelected={() => onNoteSelected({ note: item })}
                    />
                  );
                })}

                <Flex width="280px" />
                <Flex width="280px" />
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
