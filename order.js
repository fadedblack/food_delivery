const currentTime = "7:30 AM";
let epoch = 0;

const timeOut = (time, executeNext, ...args) => {
  setTimeout(() => {
    executeNext(...args);
  }, time);
};

const deliveryDetails = (structure) => {
  structure.deliveryDetails = `Delivered by John at ${currentTime}`;
  display("Deliverying Order...");
  display("Delivery Details", structure);
  return structure;
};

const packageDetails = (structure) => {
  structure.packageDetails = "Packed in eco-friendly box";
  display("Packing Order");
  display("Order Packed", structure);
  timeOut(5000, deliveryDetails, structure);
  return structure;
};

const foodDetails = (food, structure) => {
  structure.foodDetails = food;
  display("Preparing Food...");
  display("Food is ready", structure);
  timeOut(2000, packageDetails, structure);
  return structure;
};

const toSeconds = (time) => Math.floor(time / 1000);

const getTimeDelta = () => Date.now() - epoch;

const startTime = () => {
  epoch = Date.now();
  return epoch;
};

export const generateOrderID = (structure, { order }) => {
  startTime();

  structure.orderID = 101;
  display("Order Received", structure);
  timeOut(3000, foodDetails, order, structure);
  return structure;
};

const display = (heading, structure = "") => {
  console.log(`[${toSeconds(getTimeDelta())}.00]`, heading, ":", structure);
};
