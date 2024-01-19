import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginSing from '../component/pages/LoginSing';
import Login from '../component/pages/Login';
import HomeScreen from '../component/pages/HomeScreen';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginSing />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/HomeScreen" element={<HomeScreen />} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;
