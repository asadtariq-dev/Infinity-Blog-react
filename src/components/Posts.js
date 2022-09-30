import PostItem from "./PostItem";

function Posts(props) {
  return (
    <>
      <h3 className="mb-5">
        Infinity <strong>Blog</strong>{" "}
        <small>
          <em>React</em>
        </small>
      </h3>
      <div className="row">
        <h5 className="mb-4">Posts from API</h5>
        {props.posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}

export default Posts;
