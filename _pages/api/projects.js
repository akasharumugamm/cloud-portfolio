import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === "GET") {
    const projects = [
      {
        name: "MailMatrix: Bulk Email Notification System Using AWS Services",
        description:
          "MailMatrix is an automated bulk email notification system built using AWS serverless services. It supports CSV-based recipient uploads, dynamic email personalization, and bulk email dispatch via Amazon SES. The system leverages AWS Lambda for processing, Amazon S3 for storage, IAM for security, and CloudWatch for monitoring. The architecture is designed for scalability, reliability, and cost efficiency.",
        stack: ["AWS", "Lambda", "S3", "SES", "IAM", "CloudWatch"],
        link: "https://github.com/akasharumugamm/CloudMailerX",
        image: "mailmatrix.png",
      },
      {
        name: "CloudVPN",
        description:
          "CloudVPN is a self-hosted VPN solution deployed on AWS, designed to provide secure and private internet connectivity. The project automates VPN server provisioning, client configuration generation, and secure storage using Amazon S3. It demonstrates infrastructure automation, networking concepts, and AWS-based security practices.",
        stack: ["AWS", "EC2", "S3", "VPC", "Security Groups"],
        link: "https://github.com/akasharumugamm/CloudCryptVPN",
        image: "cloudvpn.png",
      },
      {
        name: "Cloud Portfolio (AWS Serverless)",
        description:
          "A serverless cloud portfolio built using Next.js and deployed on AWS. The website is statically hosted on Amazon S3 and delivered globally using CloudFront CDN. A serverless visitor counter is implemented using AWS Lambda and API Gateway. The deployment pipeline is fully automated with GitHub Actions, which builds the Next.js project, exports static files, uploads them to S3, and invalidates the CloudFront cache for instant updates.",
        stack: ["AWS", "S3", "CloudFront", "Lambda", "API Gateway", "GitHub Actions", "Next.js"],
        link: "https://github.com/akasharumugamm/cloud-portfolio",
        image: "cloudportfolio.png",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}