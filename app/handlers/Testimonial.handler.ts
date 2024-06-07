import { factory } from "@/lib/utils";
import { notion } from "@/notion";
import { TestimonialRow } from "@/types";

const postTestimonialsHandler = factory.createHandlers(async (c) => {
  const formdata = await c.req.json();
  const { name, company, content } = formdata;
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_TESTIMONIALS_DB_ID!,
      },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        company: {
          rich_text: [{ type: "text", text: { content: company } }],
        },
        content: {
          rich_text: [{ type: "text", text: { content: content } }],
        },
      },
    });
    return c.json({ res: response }, 200);
  } catch (error: any) {
    console.log({ error: error });
  }
});
const getTestimonialsHandler = factory.createHandlers(async (c) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_TESTIMONIALS_DB_ID!,
      filter_properties: ["cgY%7D", "q%7Cce", "title"],
    });

    const rows = response.results.map(
      // @ts-ignore
      (res) => res.properties
    ) as TestimonialRow[];
    const rowJsonData = rows.map((row) => ({
      name: row.Name.title[0].text.content,
      company: row.company.rich_text[0].text.content,
      content: row.content.rich_text[0].text.content,
    }));
    return c.json({ testimonials: rowJsonData });
  } catch (error: any) {
    console.log({ error: error.message });
  }
});

export { getTestimonialsHandler, postTestimonialsHandler };
