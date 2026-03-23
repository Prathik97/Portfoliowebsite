import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import Experience from "./pages/Experience";
import OutsideTheBrief from "./pages/OutsideTheBrief";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudy,
  },
  {
    path: "/experience",
    Component: Experience,
  },
  {
    path: "/outside-the-brief",
    Component: OutsideTheBrief,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);