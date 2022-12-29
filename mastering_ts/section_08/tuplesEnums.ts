const color: [number, number, number] = [23, 45, 56];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

goodRes.push(123);

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
