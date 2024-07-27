import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/chairak-blacklist">
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
