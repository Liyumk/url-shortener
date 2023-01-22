import { createBrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import Home from "../pages/home";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default MainRoute;
