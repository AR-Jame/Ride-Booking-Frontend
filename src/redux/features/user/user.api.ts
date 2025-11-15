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
        // getUserByTypes: builder.query({
        //     query: (params: Record<string, string>) => ({
        //         url: "/user",
        //         method: "GET",
        //         params
        //     }),
        // }),
        allUser: builder.query({
            query: (params) => ({
                url: "/user",
                method: "GET",
                params
            }),
        }),
        updateProfile: builder.mutation({
            query: (userInfo) => ({
                url: `/user/update-user/${userInfo?._id}`,
                method: "PATCH",
                data: userInfo
            })
        }),
        deleteUser: builder.mutation({
            query: (userInfo) => ({
                url: `/user/delete-user/${userInfo?._id}`,
                method: "DELETE",
            })
        }),
    })
})

export const { useAllUserQuery, useUpdateProfileMutation, useDeleteUserMutation } = userApi