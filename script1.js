const toggle = document.getElementById("day-night-toggle");
        const body = document.body;

        toggle.addEventListener("change", function () {
            if (this.checked) {
                body.style.backgroundColor = "#000"; // Night mode
            } else {
                body.style.backgroundColor = "#fff"; // Day mode
            }
        });