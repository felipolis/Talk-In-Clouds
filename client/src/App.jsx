import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

import ProtectedPage from "./components/ProtectedPage";

function App() {


  return (
    <div className="App">
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
    </div>
  );
}

export default App;
