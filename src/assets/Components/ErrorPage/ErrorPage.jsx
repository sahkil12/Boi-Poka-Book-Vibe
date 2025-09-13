import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-20 py-20 flex flex-col justify-center">
              
              <button className="border-2 text-2xl font-bold mx-auto px-10 py-4 rounded-xl "><Link to={'/'}>Go Home</Link></button>

                    <img className="w-[30%] mx-auto my-10 rounded-4xl" src="https://cdn.sanity.io/images/599r6htc/regionalized/dd4fc49d62e53911409d96f8b1cf11731279b813-2800x2800.png" alt="" />
                
        </div>
    );
};

export default ErrorPage;