export default async function handler(req, res) {
  const helpCenterURL = "https://v3electric.atlassian.net/servicedesk/customer/portals";
  res.status(200).json({
    response_type: "ephemeral",
    text: `Need support? Submit a ticket here 👉 <${helpCenterURL}>`
  });
}