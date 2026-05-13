// app/routes/LazyRoutes.jsx

import { lazy } from "react";

export const DashboardPage = lazy(() =>
  import("../../features/dashboard/pages/DashboardPage")
);

export const UsersPage = lazy(() =>
  import("../../features/users/pages/UsersPage")
);

export const SettingsPage = lazy(() =>
  import("../../features/settings/pages/SettingsPage")
);