import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/create",
                method: "POST",
                data: userInfo
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            })
        }),
        profile: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            })
        }),
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useProfileQuery,
    useLogoutMutation
} = authApi;
