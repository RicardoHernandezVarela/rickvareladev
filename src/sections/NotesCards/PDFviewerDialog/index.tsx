import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function PDFviewerDialog({
  isOpen,
  onOpen,
  onClose,
  noteSelected,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  noteSelected: Record<string, any>;
}) {
  return (
    <Modal
      isCentered={true}
      isOpen={isOpen}
      onClose={onClose}
      size="6xl"
      motionPreset="slideInBottom"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />

      <ModalContent>
        <ModalHeader>{noteSelected?.title || ""}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <iframe
            src={noteSelected?.file?.url || ""}
            width="100%"
            height="600px"
            title="Visor de PDF"
          ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PDFviewerDialog;
