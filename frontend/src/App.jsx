import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LogPage from "./pages/LogPage";

function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

          <Route
            path="/login"
            element={<LogPage />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
