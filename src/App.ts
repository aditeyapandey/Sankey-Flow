import { User } from "./User";

window.onload = () => {
  let title = document.querySelector("#title");
  const tsUser = new User("Dany Paredes", 36);
  if (title) title.innerHTML = tsUser.hello();
};
