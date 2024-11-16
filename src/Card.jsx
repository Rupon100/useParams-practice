import { Link } from "react-router-dom";

 

const Card = ({ post }) => {

    const { id, title, body } = post;

    return (
        <div className="border rounded-md p-4 space-y-3">
           <h1 className="text-xl font-semibold">{title}</h1>
           <p>{body}</p>
           <Link to={`/posts/${id}`} className="btn">view details</Link>
        </div>
    );
};

export default Card;