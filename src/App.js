import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PostShow from "./components/PostShow";

const API_URL = "http://localhost:3000/api/v1/posts";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPosts(items);
      }
    });
    return () => (mounted = false);
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
    </div>
  );
}

export default App;
