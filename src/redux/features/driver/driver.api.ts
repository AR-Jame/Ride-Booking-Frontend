import { baseApi } from "@/redux/baseApi";

const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        driverRequest: builder.mutation({
            query: (driverInfo) => ({
                url: "/driver/create",
                method: "POST",
                data: driverInfo
            })
        }),
        driverDetails: builder.query({
            query: (params) => ({
                url: `/driver`,
                method: "GET",
                params
            })
        }),
        toggleDriverStatus: builder.mutation({
            query: () => ({
                url: `/driver/update-availability`,
                method: "PATCH"
            })
        }),
        driverEarning: builder.query({
            query: (params) => ({
                url: `/ride/my-earning`,
                method: "GET",
                params
            })
        })
    })
})

export const {
    useDriverDetailsQuery,
    useDriverRequestMutation,
    useToggleDriverStatusMutation,
    useDriverEarningQuery
} = driverApi;