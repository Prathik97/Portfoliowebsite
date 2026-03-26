import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import Experience from "./pages/Experience";
import OutsideTheBrief from "./pages/OutsideTheBrief";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "case-study/:id",
        Component: CaseStudy,
      },
      {
        path: "experience",
        Component: Experience,
      },
      {
        path: "outside-the-brief",
        Component: OutsideTheBrief,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);