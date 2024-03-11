import "./PowerPremium.css"
import premiumOne from "./../../assets/images/premiumOne.png";
import premiumTwo from "./../../assets/images/premiumTwo.png";
import premiumThree from "./../../assets/images/premiumThree.png";
import premiumFour from "./../../assets/images/premiumFour.png";

const PowerPremium = () => {
const premiumItems = [
  {
    image: premiumOne,
    headerText: "Ad-free music listening",
    subtext: "Enjoy uninterrupted music.",
  },
  {
    image: premiumTwo,
    headerText: "Offline playback",
    subtext: "Save your data by listening offline.",
  },
  {
    image: premiumThree,
    headerText: "Play everywhere",
    subtext: "Listen on your speakers, TV, and other favorite devices.",
  },
  {
    image: premiumFour,
    headerText: "Pay your way",
    subtext: "Prepay with Paytm, UPI, and more.",
  },
];
  return (
    <div className="main">
      <h1>The power of Premium</h1>

      <div className="image-list">
        {premiumItems.map((item) => (
            <div className="item">
            <img src={item.image} />
            <div>
            <h5 className="headerText">{item.headerText}</h5>
            <p className="subtext">{item.subtext}</p>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default PowerPremium