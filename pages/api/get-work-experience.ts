import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../src/sanity/client";

type ResponseData = {
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const query = `*[_type == "workExperience"]{..., "image": image.asset->{url}}`;
    const data = await client.fetch(query);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
