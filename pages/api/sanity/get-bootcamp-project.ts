import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../src/sanity/client";

type ResponseData = {
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const query = `*[_type == "blogEntry" && _id == "bf44fec1-35f3-493c-afb7-44ad3274f614"] | order(_createdAt, desc) {..., "image": image.asset->{url}}`;
    const data = await client.fetch(query);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
