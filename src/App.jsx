import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/components/about";
import Services from "./pages/components/services";
import Projects from "./pages/components/projects";
import Landing from "./pages";
import Experience from "./pages/components/experience";
import Skills from "./pages/components/skills";
import End from "./pages/components/end";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [
        {
          path: "about",
          element: <About />,
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
          path: "expereience",
          element: <Experience/>,
        },

        {
          path: "skills",
          element: <Skills/>,
        },
        
        {
          path: "end",
          element: <End/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
