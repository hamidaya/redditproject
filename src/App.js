import React, { useState } from 'react';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import './App.css';
import './index.css'
import './pages/subreddit/Subreddit';
import './pages/memes/Memes';
import Home from './pages/home/Home';
import Subreddit from "./pages/subreddit/Subreddit";

function App() {
    function App() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/creatures/:id">testje <Subreddit/>
                    </Route>
                </Routes>
            </div>

        );
    }

}

export default App;


