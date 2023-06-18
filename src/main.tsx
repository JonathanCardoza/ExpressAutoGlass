import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Footer, Header } from "./modules/index.tsx";
import { AppRoutes } from "./app-routes.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="app">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
