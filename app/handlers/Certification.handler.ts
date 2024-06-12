import { factory } from "@/lib/utils";
import { notion } from "@/notion";
import { CertificateRow } from "@/types";

const getCertificationHandler = factory.createHandlers(async (c) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_CERTIFICATION_DB_ID!,
  });
  const rows = response.results.map(
    // @ts-ignore
    (res) => res.properties
  ) as CertificateRow[];

  const RowJsonData = rows.map((row) => ({
    name: row.Name.title[0].text.content,
    course: row.course.rich_text[0].text.content,
    link: row.link.url,
    image: row.image.files[0].file.url,
    logo: row.logo.files[0].file.url,
  }));

  return c.json({ certifications: RowJsonData });
});

export { getCertificationHandler };
