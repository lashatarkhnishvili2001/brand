import {recommendItems} from "../../../../script/categoryData";
import { Subheading1 } from "../../../Headings";
import "./RecommendItems.css";

const RecommendItems = () => {
  return (
    <>
      {recommendItems.map((value, index) => {
        return index < 10 && (
          <li className="recommendItems-li" key={index}>
            <img src={value.img} alt="" />
            <span>${value.price}</span>  
            <Subheading1 text={value.describe}/>
          </li>
          )

        })}
    </>
  )
}

export default RecommendItems;