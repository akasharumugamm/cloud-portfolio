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