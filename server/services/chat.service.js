const Chat = require("./chat.service");

const saveChat = async (body) => {
  try {
    const chat = await Chat.create(body);
    return chat;
  } catch (error) {
    throw error;
  }
};

const findAllChats = async () => {
  try {
    const chats = await Chat.find({});
    return chats;
  } catch (error) {
    throw error;
  }
};

const findChatById = async (chatId) => {
  try {
    const chat = await Chat.findById({ _id: chatId });
    return chat;
  } catch (error) {
    throw error;
  }
};

module.exports = { saveChat, findAllChats, findChatById };
