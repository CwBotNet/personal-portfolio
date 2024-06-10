import {
  postContactHandler,
  getUserDataHandler,
  getEducationHandler,
  getProjectHandler,
  getTestimonialsHandler,
  getCertificationHandler,
  querProjectHandler,
} from "@/app/handlers";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";

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
app.get("/certification", ...getCertificationHandler);

// project data
app.get("/project", ...getProjectHandler);
app.post("/project", ...querProjectHandler);

// testimonial data
app.get("/testimonial", ...getTestimonialsHandler);
app.post("/testimonial"); // not added yet

// contact data
app.post("/contact", ...postContactHandler);

const GET = handle(app);
const POST = handle(app);

export { GET, POST };
