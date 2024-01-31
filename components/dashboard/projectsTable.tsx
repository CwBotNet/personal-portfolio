import React from "react";
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

const ProjectsTable = () => {
  return (
    <div className="mt-20">
      <Table>
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
          <TableRow>
            <TableCell>netflix</TableCell>
            <TableCell>mern</TableCell>
            <TableCell>link</TableCell>
            <TableCell>link</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>netflix</TableCell>
            <TableCell>mern</TableCell>
            <TableCell>link</TableCell>
            <TableCell>link</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{date}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Porject</TableCell>
            <TableCell>2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ProjectsTable;
