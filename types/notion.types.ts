export type TestimonialRow = {
  Name: { id: string; title: { text: { content: string } }[] };
  company: { id: string; rich_text: { text: { content: string } }[] };
  content: { id: string; rich_text: { text: { content: string } }[] };
};

export type ProjectRow = {
  Name: { id: string; title: { text: { content: string } }[] };
  stack: { id: string; multi_select: string };
  Description: { id: string; rich_text: { text: { content: string } }[] };
  link: { id: string; url: string };
  image: {
    id: string;
    files: {
      file: {
        url: string;
      };
    }[];
  };
};

export type CertificateRow = {
  Name: { id: string; title: { text: { content: string } }[] };
  course: { id: string; rich_text: { text: { content: string } }[] };
  image: { id: string; files: { file: { url: string } }[] };
  logo: { id: string; files: { file: { url: string } }[] };
  link: { id: string; url: string };
};

export type EducationRow = {
  Name: { id: string; title: { text: { content: string } }[] };
  course: { id: string; rich_text: { text: { content: string } }[] };
  image: { id: string; files: { file: { url: string } }[] };
};

export type UserRow = {
  Name: { id: string; title: { text: { content: string } }[] };
  about: { id: string; rich_text: { text: { content: string } }[] };
  frontend: { id: string; rich_text: { text: { content: string } }[] };
  backend: { id: string; rich_text: { text: { content: string } }[] };
  full_stack: { id: string; rich_text: { text: { content: string } }[] };
  cv: { id: string; files: { file: { url: string } }[] };
};
