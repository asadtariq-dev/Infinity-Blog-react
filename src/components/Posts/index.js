import { useEffect, useState } from "react";
import getPosts from "../../api";
import PostItem from "../PostItem";
import Loader from "../Loader";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await getPosts("/posts");
      setPosts(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h3 className="mb-5">
        Infinity <strong>Blog</strong>{" "}
        <small>
          <em>React</em>
        </small>
      </h3>
      <div className="row">
        <h5 className="mb-4">Posts from API</h5>
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
      {loader && <Loader />}
    </div>
  );
}

export default Posts;
