import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { date } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import httpModule from "@/app/helpers/httpModule";

// let data;

export interface IProject {
  title: string;
  techStack: string;
  sorceCode: string;
  livePreview: string;
  createdAt?: string;
  updatedAt?: string;
}
const ProjectsTable = async () => {

  const res = await httpModule.get("/project");
  const data: IProject[] = await res.data.data;

  return (
    <div className="w-[50vw]">
      <Table >
        <TableCaption>List of projects</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Tech Stack</TableHead>
            <TableHead>Code link</TableHead>
            <TableHead>live Preview</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Udated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, idx) => (
            <TableRow key={idx}>
              <TableCell >{data.title}</TableCell>
              <TableCell >{data.techStack}</TableCell>
              <TableCell >
                <Link href={`${data.livePreview}`}>live preview</Link>
              </TableCell>
              <TableCell >
                <Link href={`${data.sorceCode}`}>code link</Link>
              </TableCell>
              <TableCell >{data.createdAt}</TableCell>
              <TableCell >{data.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Porject</TableCell>
            <TableCell>{data.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

  );
};

export default ProjectsTable;
