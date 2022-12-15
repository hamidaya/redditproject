import React, { useState } from 'react';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import './App.css';
import './index.css'
import './pages/subreddit/Subreddit';
import './pages/memes/Memes';
import './pages/home/Home';
import Subreddit from "./pages/subreddit/Subreddit";
import Home from "./pages/home/Home";
    function App() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/subreddit:Id" element= {<Subreddit />}/>
                </Routes>
            </div>
        );
    }

export default App;


