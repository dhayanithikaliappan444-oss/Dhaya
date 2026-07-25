 function generatePlan() {
    function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

    let topic = document.getElementById("topic").value;

    if (topic == "") {
        alert("Please enter a study topic.");
        return;
    }

    document.getElementById("result").innerHTML = `
    <h3>📅 7-Day Study Plan for ${topic}</h3>

    <p>✅ Day 1: Learn the basics of ${topic}</p>
    <p>✅ Day 2: Watch tutorials and take notes</p>
    <p>✅ Day 3: Practice simple examples</p>
    <p>✅ Day 4: Solve beginner exercises</p>
    <p>✅ Day 5: Build a small mini project</p>
    <p>✅ Day 6: Revise difficult concepts</p>
    <p>✅ Day 7: Complete one final project and test yourself</p>
    `;
    

    // Progress Bar Animation
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");

    progressBar.style.width = "100%";
    progressText.innerHTML = "Progress: 100%";
}