export async function GET(request) {
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
      username: "akash",
      link: "https://www.linkedin.com/in/akasharumugam/",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
