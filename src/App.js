import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  CurrentUserRequiresAuth,
  TokenRequiresAuth,
} from "./components/RequiresAuth";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <TokenRequiresAuth>
              <CurrentUserRequiresAuth>
                <Home />
              </CurrentUserRequiresAuth>
            </TokenRequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
