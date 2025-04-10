import { Routes, Route } from "react-router-dom";
import { Channels } from "../channel/Channels";

export const Content = ({ channels }) =>{
    return(
        <div className="class content-container">
            <Routes>
                <Route path='channels' element={<Channels channels={channels}/>}/>
            </Routes>
        </div>
    )
}