import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { ComprasPage } from "./Pages/ComprasPage"
import { CarritoPages } from "./Pages/CarritoPages"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CaritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPages></CarritoPages>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}