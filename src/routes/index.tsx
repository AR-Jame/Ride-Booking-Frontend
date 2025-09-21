import { lazy } from "react";
import App from "@/App";
import DashboardLayout from "@/components/layout/DashbaordLayout";
import HomePage from "@/pages/HomePage";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { RiderSideBarItems } from "./RiderSideBarItems";
import RideDetails from "@/pages/rider/RideDetails";
import { DriverRequest } from "@/pages/driver/DriverRequest";
import { driverSidebarItems } from "./DriverSidebarItems";
import { adminSidebarItems } from "./AdminSideBarItems";

const AboutUs = lazy(() => import("@/pages/AboutUs"))
const Register = lazy(() => import("@/pages/Register"))
const Login = lazy(() => import("@/pages/Login"))
const Features = lazy(() => import("@/pages/Features"))
const FAQ = lazy(() => import("@/pages/FAQ"))
const ContactPage = lazy(() => import("@/pages/Contact"))

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
                Component: ContactPage
            },
        ]
    },
    {
        path: "/rider",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                element: <Navigate to={"/rider/current-ride"} />
            },
            {
                path: 'rides/:id',
                Component: RideDetails
            },
            // {
            //     path: 'ride-request',
            //     Component: RideRequest
            // },
            ...generateRoutes(RiderSideBarItems)
        ]
    },
    {
        path: "/driver",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                element: <Navigate to={"/driver/ride-requests"} />
            },

            ...generateRoutes(driverSidebarItems)
        ]
    },
    {
        path: "/admin",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                element: <Navigate to={"/admin/dashboard"} />
            },

            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
        path: "/driver-request",
        Component: DriverRequest
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