import { service } from "./service";

const chatService = service.injectEndpoints({
  endpoints: (build) => ({
    // Get All Chats
    getAllChats: build.query({ query: () => `chat/get/` }),
    // Get Chat By Id
    getChatById: build.query({ query: (chatId) => `chat/get/:${chatId}` }),
    // Delete Chat
    deleteChat: build.query({ query: (chatId) => `chat/delete/:${chatId}` }),
    // Create Chat
    createChat: build.mutation({
      query: (body) => ({
        url: `chat/create`,
        method: "POST",
        body,
      }),
    }),
    // Update Chat
    updateChat: build.mutation({
      query: ({ chatId, body }) => ({
        url: `chat/update/:${chatId}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useCreateChatMutation,
  useGetAllChatsQuery,
  useGetChatByIdQuery,
  useDeleteChatQuery,
  useUpdateChatMutation,
} = chatService;
