import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/src/utils/urlFor";

import { Text, Heading } from "@chakra-ui/react";

const styles = {
  h1: {
    mt: "10px",
    mb: "15px",
  },
  normal: {
    my: "10px",
  },
};

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <Heading {...styles.h1}>{children}</Heading>,
    normal: ({ children }) => <Text {...styles.normal}>{children}</Text>,
  },
  types: {
    image: (props) => {
      return (
        <>
          {props.value ? (
            <Image
              className="rounded-lg not-prose w-full h-auto"
              src={urlFor(props.value)
                .width(500)
                .height(300)
                .quality(80)
                .auto("format")
                .url()}
              alt={props?.value?.alt || ""}
              width="500"
              height="300"
              style={{
                borderRadius: "6px",
                margin: "10px 0",
              }}
            />
          ) : null}
        </>
      );
    },
  },
};
