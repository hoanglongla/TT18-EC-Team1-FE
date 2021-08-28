import React from "react";
import AmountWrapper from "./AmoutBar.style";

const handleClick = () => {
  console.log("clickkkkkkkked");
};

const AmountBar = (props) => {
  return (
    <AmountWrapper>
      <form>
        <div
          class="value-button"
          id="decrease"
          onClick={() => props.onDecrease(props.amount)}
          value="Decrease Value"
        >
          -
        </div>
        <div>
          <input
            type="number"
            id="number"
            value={props.amount}
            placeholder={props.amount}
          />
        </div>
        <div
          class="value-button"
          id="increase"
          onClick={() => props.onIncrease(props.amount)}
          value="Increase Value"
        >
          +
        </div>
      </form>
    </AmountWrapper>
  );
};
export default AmountBar;
