import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import DashboardLayout from "../../../Layout/DashboardLayout.jsx";
import CheckOut from "../pages/dashboard/CheckOut.jsx";
import CheckIn from "../pages/dashboard/AddCustomers/CheckIn.jsx";
import Activities from "../pages/dashboard/Activities.jsx";
import Customers from "../pages/dashboard/Customers.jsx";

const receptionRoutes = createBrowserRouter([
    {
        path: "/reception",
        element:
            <DashboardLayout />,
        children: [
            {index:true, element: <Dashboard />},
            {path: "check-in", element: <CheckIn />},
            {path: "check-out", element: <CheckOut />},
            {path: "customers", element: <Customers />},
            {path: "activity", element: <Activities />}
        ]
    }
]);

export default receptionRoutes;