import { generateOrderID } from "./order.js";

const data = { order: "Burger & Fries" };

const main = (data) => {
  const details = {};
  generateOrderID(details, data);
  return details;
};

main(data);
