import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();
  console.log(event);
  const username = inputsBox[0].value;
  const password = inputsBox[1].value;
 

  const validation = validateForm(username, password);
  if (!validation) return;

  const response = await postData("auth/login", {
    username,
    password,
  });

  setCookie(response.token);
  location.assign("index.html");
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
