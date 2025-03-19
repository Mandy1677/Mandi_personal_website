// var x = 5;
// var y = 7;

// var z = x + y;

// console.log(z);

// var A = "Hello ";
// var B = "world!";

// var C = A + B;

// console.log(C);

// function SumNPrint(x1, x2) {
//     var x3 = x1 + x2;
//     console.log(x3);
// }

// SumNPrint(x, y);
// SumNPrint(A, B);

// if (C.length > z) {
//     console.log(C);
// }
// else if (C.length = z) {
//     console.log("good job!");
// }
// else {
//     console.log(z);
// }

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === "Banana") {
//             window.alert("found the banana in " + i);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// function findTheBanana(array) {
//     array.forEach((item) => {
//         if (item === "Banana") {
//             window.alert("found banana in " + array.indexOf(item));
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();

    let greetingMessage;
    if (h < 12) {
        greetingMessage = "Good morning";
    } else if (h >= 12 && h < 18) {
        greetingMessage = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greetingMessage = "Good evening";
    } else {
        greetingMessage = "Good night";
    }

    let greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = greetingMessage + ", my name is Mandi.";
}

if (window.location.href.includes("index.html")) {
    greetingFunc();
}

function addYear() {
    const currentYear = new Date().getFullYear();
    
    document.getElementById("copyYear").textContent = currentYear;
}

// function showList() {
//     const button = document.getElementById("showListButton");
//     const list = document.getElementById("hobbiesList");

//     list.style.display = "block";

//     button.style.display = "none";
// }


$(document).ready(function () {
    $("#readMoreBtn").click(function () {
        $("#shortBio").hide();
        $("#fullBio").show();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function () {
        $("#fullBio").hide(); 
        $("#shortBio").show(); 
        $("#readLessBtn").hide(); 
        $("#readMoreBtn").show(); 
    });
});

if (window.location.href.includes("Contact_me.html")) {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const commentInput = document.getElementById("comment");
    
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const commentError = document.getElementById("commentError");
    
        nameError.textContent = "";
        emailError.textContent = "";
        commentError.textContent = "";
        if (!nameInput.checkValidity()) {
            nameError.textContent = "Please enter your name.";
        }
        if (!emailInput.checkValidity()) {
            emailError.textContent = "Please enter a valid email address.";
        }
        if (!commentInput.checkValidity()) {
            commentError.textContent = "Please enter a comment.";
        }
        if (nameInput.checkValidity() && emailInput.checkValidity() && commentInput.checkValidity()) {
            alert("Form submitted successfully!");
        }
    });
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        // Extract the advice text from the response
        const advice = data.slip.advice;
        // Update the advice text on the webpage
        document.getElementById("adviceText").innerText = advice;
    })
    .catch((error) => {
        // Handle errors
        console.error("Error fetching advice:", error);
        document.getElementById("adviceText").innerText =
            "Failed to fetch advice. Please try again later.";
    });
}

if (window.location.href.includes("For_fun.html")) {
    // Fetch advice from the Advice Slip API
    getAdvice();
}