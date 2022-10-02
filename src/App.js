import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PostShow from "./components/PostShow";
import Loader from "./components/Loader";

const API_URL = "http://localhost:3000/api/v1/posts";

async function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPosts(items);
        setLoader(false)
      }
    });
    return () => {
      mounted = false;
      ;
    };
  }, []);
  return (
    <div className="container text-white mt-5 mb-5">
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts posts={posts} />
          </Route>
          <Route exact path="/posts/:id">
            <PostShow />
          </Route>
        </Switch>
      </Router>
      {loader && <Loader/>}
    </div>
  );
}

export default App;
