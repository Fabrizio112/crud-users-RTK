import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ["users"]
        }),
        deleteUsers: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["users"]
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PUT",
                body: {
                    "id": user.id,
                    "name": user.name,
                    "username": user.username,
                    "email": user.email
                }

            }),
            invalidatesTags: ["users"]
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: "users",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["users"]
        })
    })
})
export const { useGetUsersQuery, useDeleteUsersMutation, useUpdateUserMutation, useAddUserMutation } = usersApi;