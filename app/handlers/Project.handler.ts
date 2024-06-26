import { factory } from "@/lib/utils";
import { notion } from "@/notion";
import { ProjectRow } from "@/types";

const getProjectHandler = factory.createHandlers(async (c) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECT_DB_ID!,
    });

    // @ts-ignore
    const rows = response.results.map((res) => res.properties) as ProjectRow[];
    const RowJsonData = rows.map((row) => ({
      name: row.Name.title[0].text.content,
      stack: row.stack.multi_select,
      description: row.Description.rich_text[0].text.content,
      link: row.link.url,
      code_link: row.code_link?.url,
      image: row.image.files[0]?.file.url,
    }));

    return c.json({ projects: RowJsonData });
  } catch (error: any) {
    console.log({ error: error.message });
  }
});

const querProjectHandler = factory.createHandlers(async (c) => {
  const stack = c.req.query("stack");
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECT_DB_ID!,
    filter: {
      property: "stack",
      multi_select: {
        contains: stack!,
      },
    },
  });

  // @ts-ignore
  const rows = response.results.map((res) => res.properties) as ProjectRow[];
  const RowJsonData = rows.map((row) => ({
    name: row.Name.title[0].text.content,
    stack: row.stack.multi_select,
    description: row.Description.rich_text[0].text.content,
    link: row.link?.url,
    code_link: row.code_link?.url,
    image: row.image.files[0]?.file.url,
  }));

  return c.json({ projects: RowJsonData });
});

export { getProjectHandler, querProjectHandler };
