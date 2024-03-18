import { Home } from "@/pages/Home";
import Criptomoedas from "@/pages/criptomoedas";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/price/:id" element={<Criptomoedas />} />
            </Routes>
        </Router>

    )
}