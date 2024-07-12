import { FC } from "react"
import { RouterProvider } from 'react-router-dom';
import { BasePage } from "./pages/BasePage";
import { router } from "./Router";



export const App:FC = () => {
    return (
        <BasePage>
            <RouterProvider router={router}></RouterProvider>
        </BasePage>
    )
}