import { factory } from "@/lib/utils";
import { notion } from "@/notion";

const postContactHandler = factory.createHandlers(async (c) => {
  const { name, email, contact, service, message } = await c.req.json();
  const now = new Date().toISOString();
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_CONTACT_DB_ID!,
    },
    properties: {
      Name: {
        title: [{ text: { content: name } }],
      },
      Email: { email: email },
      Contact: { phone_number: contact },
      service: {
        multi_select: [{ name: service }],
      },
      message: { rich_text: [{ type: "text", text: { content: message } }] },
      Date: { date: { start: now } },
    },
  });
  // @ts-ignore
  return c.json({ res: response.properties }, 200);
});

export { postContactHandler };
