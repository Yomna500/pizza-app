import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center gap-2 md:gap-3">
        <Button
          type="round"
          onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        >
          -
        </Button>
        <span className="text-sm font-medium">{currentQuantity}</span>
        <Button
          type="round"
          onClick={() => dispatch(increseItemQuantity(pizzaId))}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default UpdateItemQuantity;
