import AppRoutes from "core/routes/routes";
import { AuthProvider } from "core/utils/auth";
import React from "react";

function App() {

  return (
    <React.Suspense fallback="....Loading">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider >
    </React.Suspense>
  );
}

export default App;
