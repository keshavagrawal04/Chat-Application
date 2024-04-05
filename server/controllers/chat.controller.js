const { chatService } = require("../services");

const createChat = async (req, res) => {
  try {
    const chat = await chatService.createChat(req.body);
    return chat;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllChats = async (req, res) => {
  try {
    const chats = await chatService.getAllChats();
    return chats;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createChat, getAllChats };
