import { useGetAllChatsQuery } from "../../services/chatService";

const Chats = () => {
  const { data: chats, isLoading } = useGetAllChatsQuery();

  if (isLoading)
    return (
      <>
        <div>Loading...</div>
      </>
    );

  return (
    <>
      <div>Chat Application</div>
    </>
  );
};

export default Chats;
