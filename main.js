import { processOrder } from "./src/order.js";

const orders = { order: "Burger & Fries" };

const main = (order) => {
  return processOrder(order); // can put this in try catch block
};

main(orders);
