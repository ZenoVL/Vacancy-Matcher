import React from 'react'
import 'firebase/auth';
import {firebaseConfig} from "./firebaseConfig";
import firebase from "firebase/compat";
import HomePage from "./screens/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminPanel} from "./screens/AdminPanel";
import {getStorage} from "firebase/storage";

const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/admin/*" element={<AdminPanel/>}/>
                    <Route path="/*" element={<AdminPanel/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;