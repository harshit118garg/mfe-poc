import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ErrorBoundary from "./ErrorBoundary";
import { ErrorFallbackPage } from "./pages";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallbackPage />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
