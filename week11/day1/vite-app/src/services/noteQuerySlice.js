import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL="http://localhost:3000/"



export const noteAPI = createApi({
    reducerPath: "noteApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      //get all
      getNotes: builder.query({
        query: () => `note`,
   
      }),
      getNote: builder.query({
        query: (id) => `note/${id}`,
      }),
      deleteNote: builder.mutation({
        query: (id) => ({
          url: `note/${id}`,
          method: "DELETE",
        }),
      }),
      postNote: builder.mutation({
        query: (newNote) => ({
          url: "note",
          body: newNote,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
      patchNote: builder.mutation({
          query: (id, updatedNote) => ({
            url: `note/${id}`,
            body: updatedNote,
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
          }),
        }),
    }),
  });
export const{
useGetNotesQuery,
 useGetNoteQuery,
 useDeleteNoteMutation,
 usePostNoteMutation,
 usePatchNoteMutation

}=noteAPI
