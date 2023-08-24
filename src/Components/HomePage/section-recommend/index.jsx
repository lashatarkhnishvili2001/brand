import { Heading } from "../../Headings";
import "./index.css";
import RecommendItems from "./recommendBox";


const Recommend = () => {
    return (
        <section className="recommend-section">
            <Heading text={"Recommended items"}/>
            <div className="recommend-list-container">  
                <ul className="recommendItems-ul">
                    <RecommendItems/>
                </ul>
            </div>
        </section>
    )
}

export default Recommend