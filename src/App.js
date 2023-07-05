import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  TokenRequiresAuth,
  CurrentUserRequiresAuth,
} from "./components/RequiresAuth";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { PageWrapper } from "./components/PageWrapper";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Bookmarks } from "./pages/Bookmarks";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App mx-auto flex min-h-screen flex-col justify-between text-center">
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
        <Route
          path="/explore"
          element={
            <TokenRequiresAuth>
              <CurrentUserRequiresAuth>
                <PageWrapper>
                  <Explore />
                </PageWrapper>
              </CurrentUserRequiresAuth>
            </TokenRequiresAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <TokenRequiresAuth>
              <CurrentUserRequiresAuth>
                <PageWrapper>
                  <Bookmarks />
                </PageWrapper>
              </CurrentUserRequiresAuth>
            </TokenRequiresAuth>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <CurrentUserRequiresAuth>
              <PageWrapper>
                <Profile />
              </PageWrapper>
            </CurrentUserRequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
