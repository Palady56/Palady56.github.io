import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Show from "./Pages/Show";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Movies from "./Pages/Movies";
import Header from "./Blocs/Header";
import Footer from "./Blocs/Footer";

export default function App(){

    return(
        <div className="bg-neutral-900 w-[100%] min-h-screen text-white grid overflow-hidden">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/tv-show" element={<Show/>}/>
                <Route path="/video" element={<Video/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}