import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryCient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new queryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
