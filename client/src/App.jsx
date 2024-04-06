import { Route, Routes } from "react-router-dom";
import { Home, Chats, Layout } from "./pages";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
