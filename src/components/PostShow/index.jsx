import Moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPosts from "../../api";
import Loader from "../Loader";
import RichTextRenderer from "../RichTextRenderer";

const PostShow = () => {
  const [post, setPost] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const fetchPost = async () => {
    try {
      const res = await getPosts(`/posts/${id}`);
      setPost(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <div className="card mb-5">
      <div className="card-body rounded">
        <div className="card border-0">
          <div className="rounded-top">
            <img src={post.header_image} alt="img" width="100%" />
          </div>
        </div>
        <div className="card-header">
          <h1 className="card-title">{post.title}</h1>
        </div>
        <div className="card-header">
          <div className="d-flex justify-content-between">
          <small>
                By{" "}
                <strong>{post.author.first_name} {post.author.last_name}</strong>
              </small>
            {post.status === "published" ? (
              <small>
                Published on{" "}
                <strong>{Moment(post.published_at).format("d MMM yy")}</strong>
              </small>
            ) : (
              <small>Not published yet</small>
            )}
          </div>
        </div>
        <div className="mb-3 p-3">
          <RichTextRenderer content={post.content.body} />
        </div>
      </div>
    </div>
  );
};

export default PostShow;
