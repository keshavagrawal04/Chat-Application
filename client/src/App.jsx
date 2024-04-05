import { Route, Routes } from "react-router-dom";
import { Home, Chats, Login } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/chats" element={<Chats />} />
      </Routes>
    </>
  );
};

export default App;
