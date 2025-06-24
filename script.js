const passwordInput = document.getElementById("passwordInput");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePassword.textContent = type === "password" ? "Show" : "Hide";
    });