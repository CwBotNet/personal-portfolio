interface ProjectStack {
  id: string;
  name: string;
  color: string;
}
export interface Project {
  name: string;
  stack?: ProjectStack[];
  description: string;
  link: string;
  code_link?: string;
  image?: string;
}
