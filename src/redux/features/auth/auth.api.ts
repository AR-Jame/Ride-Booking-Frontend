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
} = authApi;
