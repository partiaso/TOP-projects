
export const initialPage = (content) => {
    const main = document.createElement("div");
    const header = document.createElement("h1");
    const description = document.createElement("p");
    const orderContainer = document.createElement("div");
    const pickupButton = document.createElement("button");
    const deliveryButton = document.createElement("button");

    header.textContent = "Hanami Sushi";
    description.textContent = "Unique Japanese flavors in vibrant Tokyo";
    pickupButton.textContent = "Order Pickup";
    deliveryButton.textContent = "Order Delivery";

    main.classList.add("main");
    orderContainer.classList.add("order-container");

    content.appendChild(main);
    main.appendChild(header);
    main.appendChild(description);
    main.appendChild(orderContainer);

    orderContainer.appendChild(pickupButton);
    orderContainer.appendChild(deliveryButton);
}
