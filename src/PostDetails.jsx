import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

 

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    // const post = useLoaderData();
     
    const { title, body } = post;
    //console.log(obj);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div className="min-h-screen flex flex-col justify-center items-start p-10 space-y-3">
            <p className="bg-slate-800 text-white p-2 rounded-md">Serial no: {postId}</p>
            <h1 className="font-semibold text-3xl">{title}</h1>
            <p>{body}</p>
            <Link to='/' className=" btn">Go Back</Link>
        </div>
    );
};

export default PostDetails;