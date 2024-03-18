import { Link } from "react-router-dom";
import "./Card.scss";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="image-container">
        <img src={item.img} alt="" />
      </Link>
      <Link className="txt-container">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <MdOutlineLocationOn />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <LuBedDouble />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <MdOutlineBathroom />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <IoSaveOutline />
            </div>
            <div className="icon">
              <IoChatboxEllipsesOutline />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
