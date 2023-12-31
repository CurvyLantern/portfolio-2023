import RootLayout from "@/layouts/RootLayout";
import RootLayoutV2 from "@/layouts/RootLayoutV2";
import Homepage from "@/pages/Homepage";
import ProfilePage from "@/pages/Profilepage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

import { createBrowserRouter } from "react-router-dom";
import ProjectsPage from "@/pages/ProjectsPage";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <RootLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Homepage />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <RootLayoutV2 />,
    children: [
      {
        path: "/",
        element: <ProfilePage />,
      },
      {
        path: "/about-me",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
