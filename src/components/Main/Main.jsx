import Card from "./Card";
import "./Main.scss";
import { data } from "../../helper/data";

const Main = () => {
  return (
    <div className="main">
      <h1 className="header">POPULAR TOUR PLACES</h1>
      {data.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Main;
