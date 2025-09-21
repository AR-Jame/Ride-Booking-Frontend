import { baseApi } from "@/redux/baseApi";

const rideApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        rideRequest: builder.mutation({
            query: (rideInfo) => ({
                url: "/ride/create",
                method: "POST",
                data: rideInfo
            })
        }),
        currentRide: builder.query({
            query: () => ({
                url: "/ride/current-ride",
                method: "GET",
            }),
            providesTags: ["RIDE"]
        }),
        getRides: builder.query({
            query: (params) => ({
                url: "/ride/my-rides",
                method: "GET",
                params
            })
        }),
        rideDetails: builder.query({
            query: (params) => ({
                url: `/ride/ride-details/${params._id}`,
                method: "GET",
            })
        }),
        allRides: builder.query({
            query: (params) => ({
                url: `/ride`,
                method: "GET",
                params
            })
        }),
        acceptRide: builder.mutation({
            query: (params) => ({
                url: `/ride/accept-ride/${params}`,
                method: "PATCH",
            })
        }),
        updateRideStatus: builder.mutation({
            query: (params) => ({
                url: `/ride/update-ride-status/${params.id}`,
                method: "PATCH",
                data: { status: params.status }
            }),
            invalidatesTags: ["RIDE"]
        }),
    })
})


export const {
    useRideRequestMutation,
    useCurrentRideQuery,
    useGetRidesQuery,
    useRideDetailsQuery,
    useAllRidesQuery,
    useAcceptRideMutation,
    useUpdateRideStatusMutation
} = rideApi