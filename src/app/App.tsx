import React, { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/themeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    classNames("remove-btn", { hovered: true, selectable: true, red: true }, [
        "pdg",
    ]);
    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>

            <button onClick={toggleTheme}>Тема</button>

            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
