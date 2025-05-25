import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import UserById from "./pages/UserById";
import UpdateUser from "./pages/UpdateUser";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/profile/:id" element={<UserById />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/create-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
