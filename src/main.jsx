import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AdminAuthProvider } from "./context/AdminAuth.jsx";

createRoot(document.getElementById("root")).render(
  <AdminAuthProvider>
    <App />
  </AdminAuthProvider>,
);
