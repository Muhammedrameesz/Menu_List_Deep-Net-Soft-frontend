import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../components/Loading.jsx";

const MainLayout = React.lazy(() => import("../layouts/mainLayout.jsx"));
const Menu = React.lazy(() => import("../pages/Menu.jsx"));
const Home = React.lazy(() => import("../pages/Home.jsx"));

const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<Loading />}>
                <MainLayout />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: <Menu />,
            },
            {
                path: "/home",
                element: <Home />,
            },
        ],
    },
]);

export default router;
