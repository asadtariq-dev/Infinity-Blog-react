import { Link } from "react-router-dom";
import Moment from "moment";
import './styles.css';
import FormatString from '../../utils/FormatString'

const Post = (props) => {
  const post = props.post;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="rounded-top">
          <img src={post.header_image} alt="img" width="100%" />
        </div>
        <div className="card-body rounded-bottom pt-2 d-flex flex-column">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{FormatString(post.description)}</p>
          <div className="d-flex justify-content-between">
            <small className="mb-3">
              {Moment(post.created_at).format("d MMM yy")}
            </small>
          </div>
          <Link className="btn btn-primary mt-auto" to={`/posts/${post.id}`}>
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
