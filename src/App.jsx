import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import UserById from "./pages/UserById";
import UpdateUser from "./pages/UpdateUser";
import AddUser from "./pages/AddUser";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#333",
              color: "#fff",
            },
            success: {
              duration: 2000,
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
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
