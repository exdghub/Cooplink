import AppRoutes from "core/routes/routes";
import { AuthProvider } from "core/utils/auth";

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider >
  );
}

export default App;
