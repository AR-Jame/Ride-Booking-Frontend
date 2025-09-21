import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // rideRequest: builder.mutation({
        //     query: (rideInfo) => ({
        //         url: "/ride/create",
        //         method: "POST",
        //         data: rideInfo
        //     })
        // }),
        getUserByTypes: builder.query({
            query: (params: Record<string, string>) => ({
                url: "/user",
                method: "GET",
                params
            }),
        })
    })
})

export const { useGetUserByTypesQuery } = userApi