import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

import ProtectedPage from "./components/ProtectedPage";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chats" element={
            <ProtectedPage>
              <ChatPage />
            </ProtectedPage>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
