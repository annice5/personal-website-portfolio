import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/components/about";
import Resume from "./pages/components/resume";
import Services from "./pages/components/services";
import Projects from "./pages/components/projects";
import Landing from "./pages";
import Footer from "./pages/components/footer";
import Contact from "./pages/components/contact";

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
          path: "contact",
          element: <Contact/>,
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
