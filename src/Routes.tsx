import React from 'react';
import {
    HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
import Footer from './components/Footer';

const MainRoute:React.FC = () => (
    <Router basename="/">
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thanks" element={<Thanks />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </main>
    </Router>
);

export default MainRoute;
