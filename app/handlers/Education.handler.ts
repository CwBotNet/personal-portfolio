import { notion } from "@/notion";
import { factory } from "@/lib/utils";
import { EducationRow } from "@/types";

const getEducationHandler = factory.createHandlers(async (c) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_EDUCATION_DB_ID!,
  });

  // @ts-ignore
  const rows = response.results.map((res) => res.properties) as EducationRow[];
  const RowJsonData = rows.map((row) => ({
    Name: row.Name.title[0].text.content,
    course: row.course.rich_text[0].text.content,
    image: row.image?.files[0].file.url,
  }));
  return c.json({ education: RowJsonData });
});

export { getEducationHandler };
