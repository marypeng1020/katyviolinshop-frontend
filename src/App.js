import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomeComponentOrPage from './Home'; // 路径根据你的文件结构调整
import AboutComponentOrPage from './About'; // 根据你的文件结构调整路径
import ContactComponentOrPage from './Contact'; // 根据你的文件结构调整路径
import Header from './Header';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomeComponentOrPage />} />
                    <Route path="/about" element={<AboutComponentOrPage />} />
                    <Route path="/contact" element={<ContactComponentOrPage />} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
