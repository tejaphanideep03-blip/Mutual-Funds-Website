document.addEventListener("DOMContentLoaded", () => {

  const exploreBtn = document.querySelector("#explore button");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      window.location.href = "funds.html";
    });
  }

  const riskSelect = document.getElementById("risk");
  const result = document.getElementById("result");
  const recommendBtn = document.getElementById("recommendBtn");

  if (riskSelect && result && recommendBtn) {
    recommendBtn.addEventListener("click", () => {
      const risk = riskSelect.value;

      if (risk === "low") {
        result.textContent = "Recommended Fund: Government Bond Fund";
      } 
      else if (risk === "medium") {
        result.textContent = "Recommended Fund: Balanced Advantage Fund";
      } 
      else if (risk === "high") {
        result.textContent = "Recommended Fund: Equity Growth Fund";
      } 
      else {
        result.textContent = "Please select a risk level.";
      }
    });
  }

  const loginForm = document.querySelector("form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email");
      const password = document.getElementById("password");

      if (!email || !password || email.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill all fields");
      } else {
        alert("Login Successful (Demo)");
        loginForm.reset();
      }
    });
  }

});
