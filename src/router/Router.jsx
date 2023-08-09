import RootLayout from "@/layouts/RootLayout";
import Homepage from "@/pages/Homepage";
import ProfilePage from "@/pages/Profilepage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
