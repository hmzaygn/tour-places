const Card = ({ title, desc, image }) => {
  return (
    <div className="cards">
      <div className="title-div">
        <h1>{title}</h1>
      </div>
      <div className="card-desc">
        <img className="image" src={image} alt="image" />
        <p className="par">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
