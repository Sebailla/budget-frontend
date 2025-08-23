'use client'

import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

export const ToastNotification = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    )
}
