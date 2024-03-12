import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import httpModule from "@/app/helpers/httpModule";
import Image from "next/image";

export interface ITestimonial {
  name: string;
  description: string;
  avatarImage: string;
  createdAt: string;
}

const Testimonial = async () => {
  try {
    const res: any = await httpModule<ITestimonial[]>("/testimonials");
    const data = await res.data.data;

    return (
      <div>
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="capitalize">work sheet</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="capitalize">
                  <TableHead>avatar</TableHead>
                  <TableHead>name</TableHead>
                  <TableHead>company</TableHead>
                  <TableHead>role</TableHead>
                  <TableHead>comment</TableHead>
                  <TableHead>createdAt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((data: ITestimonial, idx: number) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Image
                        alt="avatar"
                        width={34}
                        height={34}
                        src={data.avatarImage}
                        className="rounded-full"
                      />
                    </TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>xyz</TableCell>
                    <TableCell>ceo</TableCell>
                    <TableCell>{data.description}</TableCell>
                    {/* <TableCell>{data.description}</TableCell> */}
                    <TableCell>{data.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error: any) {
    console.log(error?.message);
    return (
      <>
        <div>
          <h1>Something went wrong : {error?.message}</h1>
        </div>
      </>
    )

  }
};

export default Testimonial;
