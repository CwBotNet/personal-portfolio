import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];

const AboutSection = () => {
  return (
    <div id="about" className="md:h-screen h-full flex flex-col md:flex-row md:justify-around items-center">
      <StickyScroll content={content} />

    </div>
  );
};

export default AboutSection;

// {/* <Card className="border-none">
//         <CardHeader>
//           <CardTitle className="text-center">About me</CardTitle>
//         </CardHeader>

//         <CardContent className="flex flex-col md:flex-row items-center gap-4 md:justify-between justify-center md:gap-x-20 capitalize  ">
//           <Card className="border-nagitive-color bg-card-color rounded-xl w-[400px]">
//             <CardHeader className="text-center">
//               <CardTitle>Education</CardTitle>
//             </CardHeader>
//             <CardContent className="flex justify-center">
//               <div className="capitalize">
//                 <h1>
//                   {" "}
//                   Pdm University |{" "}
//                   <span className="text-[#F79D65]">2019 - 2022</span>
//                 </h1>
//                 <p>Diploma in Computer Science</p>
//               </div>
//             </CardContent>
//           </Card>

//           {/*  */}
// <Card className="border-nagitive-color w-[400px] bg-card-color rounded-xl">
//   <CardHeader className="text-center">
//     <CardTitle>certification</CardTitle>
//   </CardHeader>
//   <CardContent>
//     <div className="flex gap-10 justify-center">
//       <Image
//         height={24}
//         width={70}
//         className="rounded-xl"
//         src={
//           "https://images.unsplash.com/photo-1557053964-937650b63311?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//         alt=""
//       />
//       <div>
//         <h1>certificate name</h1>
//         <p>orgenization</p>
//         <Link href={"#"} className="text-[#F79D65]">certificate link</Link>
//       </div>
//     </div>
//   </CardContent>
// </Card>
// {/*  */ }

//         </CardContent >
//       </Card > * /}