import { lazy } from "react";

const Rides = lazy(() => import("@/pages/rider/Rides"))
const RideRequest = lazy(() => import("@/pages/rider/RideRequest"))
const Profile = lazy(() => import("@/pages/rider/Profile"))
const CurrentRide = lazy(() => import("@/pages/rider/CurrentRide"))


export const RiderSideBarItems = [
    {
        title: "Rides management",
        items: [
            {
                title: "All Rides",
                url: "/rider/rides",
                component: Rides
            },
            {
                title: "Current Ride",
                url: "/rider/current-ride",
                component: CurrentRide
            },
            {
                title: "New Ride",
                url: 'ride-request',
                component: RideRequest
            },
        ],
    },
    {
        title: "Profile management",
        items: [
            {
                title: "Your  profile",
                url: "me",
                component: Profile
            }

        ]
    }
]