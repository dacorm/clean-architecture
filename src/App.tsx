import {Route, Routes} from "react-router-dom";
import {Auth} from "./ui/Auth";
import {User} from "./ui/User";
import {Front} from "./ui/Front";

import {Header} from "./ui/Header";

function App() {
    return (
            <div className="app">
                <Header/>
                <Routes>
                    <Route path="/" element={<Front/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/user" element={<User/>}/>
                </Routes>
            </div>
    );
}

export default App;
