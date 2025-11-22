// Function for the Simulated Alert
function showAlert(){
    const alertMessage = "⚠️ **DISASTER ALERT**: Heavy rainfall and localized flooding expected. Please check your family communication plan and ensure your emergency kit is accessible. Stay safe!";
    
    // Using default alert for quick testing
    alert(alertMessage);
}

// Function to open the Quiz Modal (Verified Fix)
function openQuiz(){
    document.getElementById("quizResult").innerHTML = ""; 
    // Setting display to 'flex' to match the CSS centering rules
    document.getElementById("quizModal").style.display = "flex"; 
}

// Function to submit the Quiz answer
function submitQuiz(isCorrect){
    // Setting display back to 'none' to hide the modal
    document.getElementById("quizModal").style.display = "none";
    const resultElement = document.getElementById("quizResult");

    if(isCorrect){
        resultElement.innerHTML = "<span style='color: green;'>✅ Correct! Fossil fuels are the primary driver of climate change impacts.</span>";
    }else{
        resultElement.innerHTML = "<span style='color: red;'>❌ Incorrect. While challenging, the main cause is the combustion of fossil fuels.</span>";
    }
}


// Simple Loader Logic (Optional: Hide after 2 seconds)
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        if (loader) {
            loader.style.display = 'none';
        }
    }, 2000); // Hides the loader after 2 seconds
});