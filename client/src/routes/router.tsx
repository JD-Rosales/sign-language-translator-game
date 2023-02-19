import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: 'dashboard',
                element: ''
            }
        ]
    }
]);

export default router