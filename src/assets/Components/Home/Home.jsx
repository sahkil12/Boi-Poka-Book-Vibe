import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="my-16 text-center">
            <Helmet>
                <title>Boi Poka | Home </title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>

        </div>
    );
};

export default Home;