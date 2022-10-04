import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import PostShow from "./components/PostShow";
import Loader from "./components/Loader";
import getAPIData from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPosts(items);
        setLoader(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="container text-white mt-5 mb-5">
      <Router>
        <Routes>
          <Route exact path="/" element={<Posts posts={posts} />}></Route>
          <Route exact path="/posts/:id" element={<PostShow />}></Route>
        </Routes>
      </Router>
      {loader && <Loader />}
    </div>
  );
}

export default App;
