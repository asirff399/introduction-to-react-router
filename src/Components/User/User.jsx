import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone} = user
    const userStyle ={
        margin:'10px',
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
    }
    return (
        <div style={userStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;