// app/routes/AppRoutes.jsx

import React, { Suspense } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import MainLayout from "../layouts/MainLayout";

import PageLoader from "../../shared/components/feedback/PageLoader";

import {
  DashboardPage,
  UsersPage,
  SettingsPage,
} from "./LazyRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/dashboard"
              element={<DashboardPage />}
            />

            <Route
              path="/users"
              element={<UsersPage />}
            />

            <Route
              path="/settings"
              element={<SettingsPage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;