import "./home.scss"
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";

const Home = () => {
    return (
        <div className="home">
            <Stories/>
           <h1>home</h1>
           <Posts/>
        </div>
    )
}

export default Home;