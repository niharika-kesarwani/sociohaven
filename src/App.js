import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { TokenRequiresAuth, CurrentUserRequiresAuth  } from "./components/RequiresAuth";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { PageWrapper } from "./components/PageWrapper";
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
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </CurrentUserRequiresAuth>
            </TokenRequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
