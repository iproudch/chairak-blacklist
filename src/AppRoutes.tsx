import { Routes, Route } from "react-router-dom";
import SearchBlacklistPage from "./pages/SearchBlacklistPage";
import ApplicationLayout from "./Layout";
import AllBlacklistPage from "./pages/AllBlacklistPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/UserProvider";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function AppRoutes(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<ApplicationLayout />}>
            <Route path="/search" element={<SearchBlacklistPage />} />
            <Route path="/list" element={<AllBlacklistPage />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </AuthProvider>
  );
}
