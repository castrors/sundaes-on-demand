import { useOrderDetails } from "../../contexts/OrderDetails";
import SummaryForm from "./SummaryForm";

export default function OrderSummary({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  const scoopArray = Array.from(orderDetails.scoops.entries());
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasToppings = orderDetails.toppings.size > 0;
  let toppingsDisplay = null;

  if (hasToppings) {
    const toppingArray = Array.from(orderDetails.toppings.entries());
    const toppingList = toppingArray.map(([key, value]) => (
      <li key={key}>{key}</li>
    ));
    toppingsDisplay = (
      <>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        <ul>{toppingList}</ul>
      </>
    );
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {orderDetails.totals.scoops}</h2>
      <ul>{scoopList}</ul>
      {toppingsDisplay}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}
