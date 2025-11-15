import DriverUpdateProfile from "@/pages/driver/DriverUpdateProfile";
import { lazy } from "react";

const RideRequests = lazy(() => import("@/pages/driver/RideRequests"))
const Earning = lazy(() => import("@/pages/driver/Earning"))
const DriveHistory = lazy(() => import("@/pages/driver/DriveHistory"))
const CurrentRide = lazy(() => import("@/pages/driver/CurrentRide"))

export const driverSidebarItems = [
    {
        title: "Ride management",
        items: [
            {
                title: "Incoming requests",
                url: "ride-requests",
                component: RideRequests
            },
            {
                title: "Current Ride",
                url: "current-ride",
                component: CurrentRide
            },
            {
                title: "Earning history",
                url: "earning-history",
                component: Earning
            },
            {
                title: "Drive history",
                url: "driver-history",
                component: DriveHistory
            },
            {
                title: "Your Profile",
                url: "me",
                component: DriverUpdateProfile
            },
        ],
    },

]