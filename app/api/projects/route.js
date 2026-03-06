export async function GET(request) {
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
        "CloudVPN is a self-hosted VPN solution deployed on AWS, designed to provide secure and private internet connectivity. The project automates VPN server provisioning, client configuration generation, and secure storage using Amazon S3. It demonstrates infrastructure automation, networking concepts, and AWS-based monitoring and security practices.",
      stack: ["AWS", "EC2", "S3", "VPC", "Security Groups"],
      link: "https://github.com/akasharumugamm/CloudCryptVPN",
      image: "cloudvpn.png",
    },
    {
      name: "Cloud Portfolio Deployment with CI/CD",
      description:
        "A cloud-native portfolio deployed on AWS using Next.js static export, Amazon S3 static hosting, and automated CI/CD via GitHub Actions. Every code push triggers automatic build and deployment to AWS.",
      stack: ["Next.js", "AWS S3", "GitHub Actions", "CI/CD", "Node.js"],
      link: "https://github.com/akasharumugamm/cloud-portfolio",
      image: "cloud-portfolio.png"
    }
    {
      name: "College Hackathon Website (InnoHack)",
      description:
        "An interactive hackathon landing page built using Framer with smooth animations powered by Framer Motion. Designed to showcase event details, registration information, and schedules with a modern UI and engaging motion effects.",
      stack: ["Framer", "Framer Motion", "UI/UX Design", "Responsive Design"],
      link: "https://innohack-measi.framer.ai/",
      image: "innohack.png"
    }
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}