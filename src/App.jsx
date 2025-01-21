import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/components/about";
import Resume from "./pages/components/resume";
import Services from "./pages/components/services";
import Projects from "./pages/components/projects";
import HireMe from "./pages/components/hireMe";
import ContactMe from "./pages/components/contactMe";
import Landing from "./pages";

function App () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "hireMe",
          element: <HireMe />,
        },
        {
          path: "contactMe",
          element: <ContactMe />,
        },
        {
          path: "footer",
          element: <Footer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
