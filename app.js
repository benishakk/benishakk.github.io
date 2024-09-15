document.addEventListener("DOMContentLoaded", () => {
    // Array of events
    const events = [
        { name: "Athlos", date: "26/09/2024", location: "ICahn Stadium, New York" },
        { name: "Grand Slam Track", date: "Starting 2025", location: "Location TBD" },
    ];

    // Array of highlights
    const highlights = [
        { title: "Bednarek Takes the Crown", description: "Kenny Bednarek beats Letsile Tebogo to take the Diamond League Finals Title", imgSrc: "https://images.app.goo.gl/awmfgTDH7n7YHLRw8" },
        { title: "Syd with the Double", description: "Sydney McLaughlin-Levrone wins both 200 and 400m Invitationals", imgSrc: "https://images.app.goo.gl/KAYyfu2qQgjZJX469" }
    ];

    // Display events
    const eventsList = document.querySelector("#events ul");
    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.textContent = `${event.name} - ${event.date} - ${event.location}`;
        eventsList.appendChild(listItem);
    });

    // Display highlights
    const highlightsContainer = document.querySelector("#highlights-container");
    highlights.forEach(highlight => {
        const highlightDiv = document.createElement("div");
        highlightDiv.classList.add("highlight");

        // Create and append image
        const img = document.createElement("img");
        img.src = highlight.imgSrc;
        img.alt = highlight.title;
        img.style.width = "100%"; // Adjust image size as needed
        img.style.height = "auto"; // Maintain aspect ratio
        highlightDiv.appendChild(img);

        // Create and append title
        const title = document.createElement("h3");
        title.textContent = highlight.title;
        highlightDiv.appendChild(title);

        // Create and append description
        const description = document.createElement("p");
        description.textContent = highlight.description;
        highlightDiv.appendChild(description);

        // Append the highlight div to the container
        highlightsContainer.appendChild(highlightDiv);
    });
});
