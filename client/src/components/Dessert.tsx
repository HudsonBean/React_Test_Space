import React from "react";

enum toppings {
  ChocolateChip = "Chocolate-Chip",
  Raisins = "Raisins",
  Nuts = "Nuts",
}

type Props =
  | {
      kind: "Cookie";
      toppings: toppings;
    }
  | {
      kind: "Ice-Cream";
      flavor: "Chocolate" | "Vanilla";
      toppings: toppings;
    };

const Dessert: React.FC<Props> = ({ kind, toppings }) => {
  return <div></div>;
};

export default Dessert;
