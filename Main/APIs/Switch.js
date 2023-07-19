document.getElementById("signUpButton").addEventListener("click", function () {
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const switch_ = document.getElementById("switch");
  const switch_1 = document.getElementById("switch1");
  const switch_2 = document.getElementById("SignInForm_");

  signInForm.classList.add("fade-out");
  signUpForm.classList.add("fade-in");

  // Wait for the fade-out animation to complete before hiding the sign-in form
  setTimeout(function () {
    signInForm.style.display = "none";
  }, 500);

  // Wait for the fade-in animation to complete before showing the sign-up form
  setTimeout(function () {
    signUpForm.style.display = "block";
    signUpForm.classList.remove("fade-in");
    signInForm.classList.remove("fade-out");
  }, 500);

  switch_2.style.display = "none";
  switch_1.style.display = "block";
  switch_.style.display = "none";
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});

document.getElementById("signIpButton").addEventListener("click", function () {
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const switch_ = document.getElementById("switch");
  const switch_1 = document.getElementById("switch1");
  const switch_2 = document.getElementById("SignInForm_");

  // Toggle fade-out and fade-in animations
  signUpForm.classList.add("fade-out");
  signInForm.classList.add("fade-in");

  // Wait for the fade-out animation to complete before hiding the sign-up form
  setTimeout(function () {
    signUpForm.style.display = "none";
  }, 500);

  // Wait for the fade-in animation to complete before showing the sign-in form
  setTimeout(function () {
    signInForm.style.display = "block";
    signUpForm.classList.remove("fade-out");
    signInForm.classList.remove("fade-in");
  }, 500);

  switch_2.style.display = "block";
  switch_1.style.display = "none";
  switch_.style.display = "block";
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
});

document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signInForm").elements[0].value;
  const password = document.getElementById("signInForm").elements[1].value;
  // You can now validate the username and password and handle the login process here.
  console.log("Sign In:", username, password);
});

document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signUpForm").elements[0].value;
  const password = document.getElementById("signUpForm").elements[1].value;
  // You can now validate the username and password and handle the sign-up process here.
  console.log("Sign Up:", username, password);
});
