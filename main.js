import { Order } from "./order.js";

const data = { order: "Burger & Fries" };

// const oderStructure = {
//   orderID: 0,
//   foodDetails: "",
//   packageDetails: "",
//   deilverDetails: "",
// };

const START_TIME = 0; // to do late
const currentTime = "7:30 AM";

const timeOut = (time, executeNext, ...args) => {
  setTimeout(() => {
    executeNext(...args);
  }, time);
};

const deliveryDetails = (structure) => {
  structure.deliveryDetails = `Delivered by John at ${currentTime}`;
  display("Deliverying Order...");
  display("Delivery Details", structure);
};

const packageDetails = (structure) => {
  structure.packageDetails = "Packed in eco-friendly box";
  display("Packing Order");
  display("Order Packed", structure);
  timeOut(5000, deliveryDetails, structure);
};

const foodDetails = (food, structure) => {
  structure.foodDetails = food;
  display("Preparing Food...");
  display("Food is ready", structure);
  timeOut(2000, packageDetails, structure);
};

const generateOrderID = (structure, { order }) => {
  structure.orderID = 101;
  display("Order Received", structure);
  timeOut(3000, foodDetails, order, structure);
};

const display = (heading, structure = "") => {
  console.log(heading, ":", structure);
};

const main = (data) => {
  const details = {};
  generateOrderID(details, data);
  return details;
};

main(data);
