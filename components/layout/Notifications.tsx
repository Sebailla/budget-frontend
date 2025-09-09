import { Toaster } from "react-hot-toast"


const Notifications = () => {
    return (
        <Toaster
            position="top-right"
            containerClassName="[&>div]:data-sonner-toast" // activa animaciones
            toastOptions={{
                //estilo base
                className:
                    "rounded-xl shadow-2xl font-medium border border-gray-200",
                style: {
                    background: "#fff",
                    color: "#333",
                    padding: "12px 16px",
                },
                success: {
                    style: { 
                        background: "#e8fdf3",
                        color: "#109454"
                    },
                    iconTheme: {
                        primary: "#42eb99",
                        secondary: "#fff",
                    },
                    className:
                        "bg-pastel-green-100 text-pastel-green-600 border-pastel-green-200",
                },
                error: {
                    style: {
                        background: "#f8beda",
                        color: "#bd1466"
                    },
                    iconTheme: {
                        primary: "#eb4294",
                        secondary: "#fff",
                    },
                    className:
                        "bg-pastel-rose-500 text-pastel-rose-500 border-pastel-rose-200",
                },
            }}
        />
    )
}

export default Notifications