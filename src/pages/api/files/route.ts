import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import { pinata } from "@/utils/config";

// Disable Next.js body parsing to allow formidable to handle it
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const form = new formidable.IncomingForm();

      // Parse the form data including files
      form.parse(req, async (err:any, fields:any, files:any) => {
        if (err) {
          console.error("Error parsing form data", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const file = files.file as File;

        // Handle the file, e.g., upload to pinata, save to disk, etc.
        console.log(file); // You can see file info here

        // Example upload to Pinata (uncomment and use this when needed)
        // const uploadData = await pinata.upload.file(file);
        // return res.status(200).json(uploadData);

        // Respond with file information for now
        return res.status(200).json({ name: file.originalFilename || "" });
      });
    } catch (e) {
      console.error("Error handling request", e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
