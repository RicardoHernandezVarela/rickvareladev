import { PortableText } from "next-sanity";

import { components } from "@/src/components/Layout/PortableTextWrapper/PortableTextComponents";

function PortableTextWrapper({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}

export default PortableTextWrapper;
