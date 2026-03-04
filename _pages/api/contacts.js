import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "akasharumugamm",
        link: "https://github.com/akasharumugamm",
      },
      {
        medium: "email",
        username: "akash.arumugam@outlook.com",
        link: "mailto:akash.arumugam@outlook.com",
      },
      {
        medium: "linkedin",
        username: "akasharumugam",
        link: "https://www.linkedin.com/in/akasharumugam/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
