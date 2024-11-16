import { useParams } from "react-router-dom";

 

const Common = () => {

    const { page,btn } = useParams();
    console.log(btn);

    return (
        <div>
            {page === "contact" &&  <h1>This is contact page</h1>}
            {page === 'about' && <h1>This is About us page</h1>}

            {btn && <button className="btn brn-primary">Subscribe</button>}

        </div>
    );
};

export default Common;