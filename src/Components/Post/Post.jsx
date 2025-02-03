import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post
    const postStyle ={
        margin:'10px',
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
    }
    return (
        <div style={postStyle}>
            <h3>ID: {id}</h3>
            <p>{title}</p>
            <button><Link to={`/posts/${id}`}>Post Details</Link></button>      
        </div>
    );
};

export default Post;