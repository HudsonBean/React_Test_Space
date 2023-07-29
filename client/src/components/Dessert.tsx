import React from "react";

enum toppings {
  ChocolateChip = "Chocolate-Chip",
  Raisins = "Raisins",
  Nuts = "Nuts",
}

type Props =
  | {
      kind: "Cookie";
      toppings: toppings.ChocolateChip | toppings.Raisins | toppings.Nuts;
    }
  | {
      kind: "Ice-Cream";
      flavor: "Chocolate" | "Vanilla";
      toppings: toppings.ChocolateChip | toppings.Raisins | toppings.Nuts;
    };

const Dessert: React.FC<Props> = ({ kind, toppings }) => {
  return <div></div>;
};

export default Dessert;
