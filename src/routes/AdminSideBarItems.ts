import AllRides from "@/pages/admin/AllRides";
import AllUsers from "@/pages/admin/AllUser";

export const adminSidebarItems = [
    {
        title: "User management",
        items: [
            {
                title: "All User",
                url: "/admin/users",
                component: AllUsers
            },
        ],
    },
    {
        title: "Ride management",
        items: [
            {
                title: "All rides",
                url: "/admin/rides",
                component: AllRides
            },
        ],
    },
]