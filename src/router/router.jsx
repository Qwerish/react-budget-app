import { createBrowserRouter } from "react-router-dom";
import AboutPages from "../components/Pages/AboutPages";
import Root from "../pages/Root";
import UserPage from "../components/Pages/UserPage";

const router = createBrowserRouter([{
        path: "/",
        element: < Root / > ,
        children: [{
                path: "/about",
                element: < AboutPages / >
            },
            {
                path: "/users/:id",
                element: < UserPage / >
            }
        ]
    },

]);

export default router;