import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post

    const navigate = useNavigate()

    const postStyle ={
        margin:'10px',
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
    }
    
    const handleShowDetails = () =>{
        navigate(`/posts/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>ID: {id}</h3>
            <p>{title}</p>
            <button><Link to={`/posts/${id}`}>Show Details</Link></button>      
            <button onClick={handleShowDetails}>Click to see details</button>      
        </div>
    );
};

export default Post;