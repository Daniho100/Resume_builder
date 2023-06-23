import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import { useState } from "react";

const App = () => {

     //👇🏻 state holding the result
     const [result, setResult] = useState({});

    return (
        <div>
            <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Home setResult={setResult} />} />
                    <Route path='/resume' element={<Resume result={result} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
