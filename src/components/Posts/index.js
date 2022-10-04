import PostItem from "../PostItem/index.js";

function Posts(props) {
  const posts = props.posts;
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
    </div>
  );
}

export default Posts;
