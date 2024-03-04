import { useAdmin } from "../features/authentication/useAdmin";

function AdminCheck({ children }) {
  // 1. Load the authenticated administrator
  const { isAdmin } = useAdmin();

  // 4. If there IS an admin, render the app
  if (isAdmin) return children;
}

export default AdminCheck;
