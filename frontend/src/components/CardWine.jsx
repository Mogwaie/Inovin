import wineBottle from "../assets/images/wine-bottle.svg";

export default function CardWine() {
  return (
    <div className="card-container">
      <img src={wineBottle} alt="wine bottle to buy" />
      <div className="card-body-wine-description-and-title">
        <h4>Wine 1</h4>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>
    </div>
  );
}
