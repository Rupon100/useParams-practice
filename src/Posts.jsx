import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Posts = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto px-4">
            {
                data.map((post, i) => <Card key={i} post={post}></Card>)
            }
        </div>
    );
};

export default Posts;