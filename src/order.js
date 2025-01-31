let epoch = 0; // any way to make it const

const startTime = () => {
  epoch = currentTime();
  return epoch;
};

const delay = (time, callback, ...args) => {
  setTimeout(() => {
    callback(...args);
  }, time);
};

const currentTime = () => {
  //handle numbers less than 10
  const date = new Date(Date.now());
  return {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    miliseconds: date.getMilliseconds(),
  };
};

const deliveryDetails = (orderDetails) => {
  const time = currentTime();
  orderDetails.deliveryDetails = `Delivered by John at ${time.hour}:${time.minutes}`;
  display("Deliverying Order...");
  display("Delivery Details", orderDetails);
  return orderDetails;
};

const packageDetails = (orderDetails) => {
  orderDetails.packageDetails = "Packed in eco-friendly box";
  display("Packing Order");
  display("Order Packed", orderDetails);
  delay(5000, deliveryDetails, orderDetails);
  return orderDetails;
};

const foodDetails = (food, orderDetails) => {
  orderDetails.foodDetails = food;
  display("Preparing Food...");
  display("Food is ready", orderDetails);
  delay(2000, packageDetails, orderDetails);
  return orderDetails;
};

const getTimeDelta = () => {
  const time = currentTime(); // can make it flexible
  const secondsDelta = time.seconds - epoch.seconds;
  const milisecondsDelta = time.miliseconds - epoch.miliseconds;
  return { secondsDelta, milisecondsDelta };
};

const display = (heading, structure = "") => {
  const time = getTimeDelta();
  console.log(
    `[${time.secondsDelta}.${time.milisecondsDelta}s] ${heading} :`,
    structure
  );
};

const generateOrderID = ({ order }) => {
  const process = {
    processStatus: false,
    data: {},
  };

  process.data.orderID = 101; // @Refactor: hard-coding the value.
  // what happens for multiple orders?
  display("Order Received", process.data);
  delay(3000, foodDetails, order, process.data);
  return process;
};

export const processOrder = (order) => {
  startTime();
  return generateOrderID(order);
};
