import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import PostShow from "./components/PostShow";

const App= () =>{
  return (
    <div className="container text-white mt-5 mb-5">
      <Router>
        <Routes>
          <Route exact path="/" element={<Posts />}></Route>
          <Route exact path="/posts/:id" element={<PostShow />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
