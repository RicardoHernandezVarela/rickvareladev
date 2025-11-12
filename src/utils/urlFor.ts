import { client } from "@/src/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  const url = builder.image(source);
  return url;
}
