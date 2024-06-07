import { postContactHandler, getUserDataHandler } from "@/app/handlers";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { getEducationHandler } from "@/app/handlers/Education.handler";
export const runtime = "edge";

const app = new Hono().basePath("/api");
app.use("/api/*", cors());

app.get("/healthcheck", (c) => {
  return c.json(
    {
      message: "Hello, nextjs",
    },
    200
  );
});

app.get("/user", ...getUserDataHandler);

// education data
app.get("/education", ...getEducationHandler);

// certification data
app.get("/certification");

// project data
app.get("/project");

// testimonial data
app.get("/testimonial");
app.post("/testimonial");

// contact data
app.post("/contact", ...postContactHandler);

const GET = handle(app);
const POST = handle(app);

export { GET, POST };
