const btn = document.getElementById("btn");
const userList = document.getElementById("user-list");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      const li = document.createElement("li");
      li.classList.add('item')

      li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
            <p class='text'>Cell: ${user.cell}</p>
            <p class='text'>City: ${user.location.city}</p>
            <p class='text'>Country: ${user.location.country}</p>
            <p class='text'>Postcode: ${user.location.postcode}</p>
          `;

      userList.appendChild(li);
    })
    .catch((error) => console.error("Error fetching data:", error));
});
