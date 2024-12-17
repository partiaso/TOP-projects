

export const contactUs = (content) => {
    const container = document.createElement("div");
    const topDiv = document.createElement("div");
    const bottomDiv = document.createElement("div");
    const directionDiv = document.createElement("div");
    const phoneDiv = document.createElement("div");
    const emailDiv = document.createElement("div");
    const contact = document.createElement("h2");


    contact.textContent = "Contact Us";
    topDiv.appendChild(contact);

    const phoneTitle = document.createElement("h3");
    phoneTitle.textContent = "Phone Number: ";
    const phone = document.createElement("p");
    phone.textContent = "(123) 456 789";

    const directionTitle = document.createElement("h3");
    directionTitle.textContent = "Visit Us: ";
    const direction = document.createElement("p");
    direction.textContent = "310, Hanami Sushi, Tokyo";

    const emailTitle = document.createElement("h3");
    emailTitle.textContent= "Email: ";
    const email = document.createElement("p");
    email.textContent = "hanami-sushi@contact.com";

    topDiv.classList.add("top-container");
    bottomDiv.classList.add("bottom-container");

    directionDiv.appendChild(directionTitle);
    directionDiv.appendChild(direction);
    phoneDiv.appendChild(phoneTitle);
    phoneDiv.appendChild(phone);
    emailDiv.appendChild(emailTitle);
    emailDiv.appendChild(email);

    bottomDiv.appendChild(directionDiv);
    bottomDiv.appendChild(phoneDiv);
    bottomDiv.appendChild(emailDiv);

    container.classList.add("contact-container")
    container.appendChild(topDiv);
    container.appendChild(bottomDiv);

    content.appendChild(container)

}

