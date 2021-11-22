import React from "react"
import {Route, Routes} from "react-router-dom";

import {Main} from "./component/Main"
import {TempBody} from "./component/page/TempBody";
import {Grafic} from "./component/page/Grafic";
import {Error} from "./component/page/Error";

export const App = () => {

        return (
            <Routes>
                <Route path="/MeteoReact" element={<Main/>}>
                    <Route index element={<TempBody/>}/>
                    <Route path="Grafic" element={<Grafic/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        );
}

export default App