import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home"));
const ProfilePage = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <>
      <header>
        <h2>Ejemplos React lazy y suspense</h2>
        <nav>
          <Link to="/">Home</Link>
          <hr />
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<h3>CARGANDO PÁGINA....!!!</h3>}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<h3>CARGANDO PÁGINA....!!!</h3>}>
              <ProfilePage />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
