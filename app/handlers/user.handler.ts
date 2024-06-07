import { notion } from "../../notion";
import { factory } from "../../lib/utils";
import { UserRow } from "@/types";

const getUserHandler = factory.createHandlers(async (c) => {
  try {
    const response = await notion.users.list({});
    return c.json({ dato: response });
  } catch (error: any) {
    console.log(error.message);
  }
});

const getUserDataHandler = factory.createHandlers(async (c) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_USER_DB_ID!,
      // filter_properties: ["title", "%3A%7DQ%5E"],
    });

    const rows = response.results.map(
      // @ts-ignore
      (res) => res.properties
    ) as UserRow[];
    const RowJsonData = rows.map((row) => ({
      name: row.Name.title[0].text.content,
      about: row.about.rich_text[0].text.content,
      skills: {
        frontend: row.frontend.rich_text[0].text.content,
        backend: row.backend.rich_text[0].text.content,
        fullStack: row.full_stack.rich_text[0].text.content,
      },
      cv: row.cv.files[0].file.url,
    }));
    return c.json({
      response: RowJsonData,
    });
  } catch (error: any) {
    console.log(error.message);
  }
});

export { getUserHandler, getUserDataHandler };
