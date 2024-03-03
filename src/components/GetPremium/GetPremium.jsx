import Button from "../Button/Button"
import "./GetPremium.css"

const GetPremium = () => {
  return (
    <div className="body">
        <h1>Get Premium free for 1 month</h1>
        <h2>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</h2>
        <div className="">
        <Button title="GET STARTED" type="primary"/>
        <Button title="SEE OTHER PLANS" type="ghost"/>
        </div>
        <p><span>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.</p>
    </div>
  )
}

export default GetPremium