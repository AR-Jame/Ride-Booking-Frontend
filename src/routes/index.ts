import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Contact02Page from "@/pages/Contact";
import { FAQ } from "@/pages/FAQ";
import { Features } from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: HomePage
            },
            {
                path: "/features",
                Component: Features
            },
            {
                path: "/faq",
                Component: FAQ
            },
            {
                path: "/about-us",
                Component: AboutUs
            },
            {
                path: "/contact",
                Component: Contact02Page
            },
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    },
])

export default router;