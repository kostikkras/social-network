import { Suspense, useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import AboutPage from './pages/AboutPage/Aboutpage';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import MainPage from './pages/MainPage/MainPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
