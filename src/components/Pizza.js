const Pizza = ({ name, photoName, ingredients, price, soldOut }) => {
  return (
    <div className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{!soldOut ? price : "SOLD OUT"}</span>
      </div>
    </div>
  );
};

export default Pizza;
