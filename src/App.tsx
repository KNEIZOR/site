import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

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
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
