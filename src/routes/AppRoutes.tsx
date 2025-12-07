// Folder: src/routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Analytics from "../pages/Analytics";
import Traffic from "../pages/Traffic";
import Parking from "../pages/Parking";
import Waste from "../pages/Waste";
import Energy from "../pages/Energy";
import AirQuality from "../pages/AirQuality";
import Emergency from "../pages/Emergency";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/traffic" element={<Traffic />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/waste" element={<Waste />} />
                <Route path="/energy" element={<Energy />} />
                <Route path="/air" element={<AirQuality />} />
                <Route path="/emergency" element={<Emergency />} />
            </Routes>
        </Router>
    );
}
