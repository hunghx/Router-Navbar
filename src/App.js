import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, NavLink, Link} from "react-router-dom";
import News from "./Components/News";
import Events from "./Components/Events";
import Sports from "./Components/Sports";
import Science from "./Components/Science";
import Healthy from "./Components/Healthy";
import Education from "./Components/Education";
import Conference from "./Components/Events/Conference";
import Festival from "./Components/Events/Festival";
import Music from "./Components/Events/Music";
import Absolutism from "./Components/News/Absolutism";
import Population from "./Components/News/Population";
import Trafic from "./Components/News/Trafic";
import Baseball from "./Components/Sports/Baseball";
import Basketball from "./Components/Sports/Basketball";
import Football from "./Components/Sports/Football";
const isNavLink = ({isActive})=>({
    color : isActive? "brown" : "black"

})
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="menu">
                    <div className="menu-item">
                        <NavLink style={isNavLink} to={"/"}>Thời sự</NavLink>
                        <ul>
                            <Link className="link" to={""}>Chính trị</Link>
                            <Link className="link" to={"trafic"}>Giao thông</Link>
                            <Link className="link" to={"population"}>Dân sinh</Link>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <NavLink style={isNavLink} to={"/events"}>Sự kiện</NavLink>
                        <ul>
                            <Link className="link" to={"/events"}>Hội nghị</Link>
                            <Link className="link" to={"/events/festival"}>Lễ hội</Link>
                            <Link className="link" to={"events/music"}>Âm nhạc</Link>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <NavLink style={isNavLink} to={"/sports"}>Thể thao</NavLink>
                        <ul>
                            <Link className="link" to={"/sports"}>Bóng đá</Link>
                            <Link className="link" to={"/sports/baseball"}>Bóng chày</Link>
                            <Link className="link" to={"/sports/basketball"}>Bóng rổ</Link>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <NavLink style={isNavLink} to={"/science"}>Khoa học</NavLink>
                        <ul>
                            <Link>Ứng dụng</Link>
                            <Link>Phát minh</Link>
                            <Link>Nghiên cứu</Link>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <NavLink style={isNavLink} to={"/healthy"}>Sức khoẻ</NavLink>
                        <ul>
                            <Link>Đàn ông</Link>
                            <Link>Sinh sản</Link>
                            <Link>Giới tính</Link>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <NavLink style={isNavLink} to={"/education"}>Giáo dục</NavLink>
                        <ul>
                            <Link>Tuyển sinh</Link>
                            <Link>Du học</Link>
                            <Link>Thống kê</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>

            <Routes>
                <Route path={'/'} element={<News/>}>
                    <Route index element={<Absolutism/>}/>
                    <Route path={'population'} element={<Population/>}/>
                    <Route path={'trafic'} element={<Trafic/>}/>
                </Route>
                <Route path={'/events'} element={<Events/>}>
                    <Route index element={<Conference/>}/>
                    <Route path={'festival'} element={<Festival/>}/>
                    <Route path={'music'} element={<Music/>}/>
                </Route>
                <Route path={'/sports'} element={<Sports/>}>
                    <Route path={'baseball'} element={<Baseball/>}/>
                    <Route path={'basketball'} element={<Basketball/>}/>
                    <Route index element={<Football/>}/>
                </Route>
                <Route path={'/science'} element={<Science/>}/>
                <Route path={'/healthy'} element={<Healthy/>}/>
                <Route path={'/education'} element={<Education/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
