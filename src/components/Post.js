import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
        <h6 className='text-muted fs-6'>{post.datetime}</h6>
        <p className='.text-warp'>{(post.body).length <= 60 ? post.body : (post.body).slice(0, 60) + '...'}</p>
        <hr />
      </Link>
    </article>
  );
};

export default Post;
