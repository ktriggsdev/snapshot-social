document.querySelectorAll(".future-buttons").forEach((b) => {
    console.log(b);
    b.onmouseleave = (e) => {
        e.target.style.background = "black";
        e.target.style.borderImage = null;
    };

    b.addEventListener("mousemove", (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(0, 160, 255, 1),rgba(0,160,255,0) )`;
        e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(0, 160, 255, 1),rgba(0,160,255,1) )`;
    });
});

document.querySelectorAll(".neumorphism-btn").forEach((b) => {
    console.log(b);
    b.onmouseleave = (e) => {
        e.target.style.background = "black";
        e.target.style.borderImage = null;
    };

    b.addEventListener("mousemove", (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(0, 160, 255, 0),rgba(0,160,255,1) )`;
        // e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(0, 160, 255, 0),rgba(0,160,255,0) )`;
    });
});

