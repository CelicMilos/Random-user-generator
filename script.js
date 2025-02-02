// Moj nacin
function fetchUser() {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request Failed.");
      }
      return response.json();
    })

    .then((data) => {
      hideSpinner();
      console.log(data.results[0]);
      const user = data.results[0];
      console.log(user.name.first + " " + user.name.last);
      const userName = document.querySelector(".user-name");
      userName.innerHTML = `<span class="font-bold">Name: </span>${user.name.first} ${user.name.last}`;
      const userEmail = document.querySelector(".user-email");
      userEmail.innerHTML = `<span class="font-bold">Email: </span>${user.email}`;
      const userPhone = document.querySelector(".user-phone");
      userPhone.innerHTML = `<span class="font-bold">Phone: </span>${user.phone}`;
      const userLocation = document.querySelector(".user-loc");
      userLocation.innerHTML = `<span class="font-bold">Location: </span>${user.location.city}, ${user.location.country}`;
      const userAge = document.querySelector(".user-age");
      userAge.innerHTML = `<span class="font-bold">Age: </span>${user.dob.age}`;
      const userPhoto = document.querySelector(".user-photo");
      userPhoto.src = user.picture.large;
      if (user.gender === "female") {
        document.body.style.backgroundColor = "#6B21A8";
      } else {
        document.body.style.backgroundColor = "#3485bf";
      }
    })
    .catch((error) => {
      hideSpinner();
      document.body.style.backgroundColor = " #bbbfbc";
      document.querySelector("#user").innerHTML = `
      <p class='text-3xl text-center text-red-500 mb-5'>${error}</p>
      `;
    });
}
function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}
function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}
// Bredov nacin
function fetchUser1() {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request Failed.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results[0]);
      hideSpinner();
      displayUser(data.results[0]);
    })
    .catch((error) => {
      hideSpinner();
      document.body.style.backgroundColor = " #bbbfbc";
      document.querySelector("#user").innerHTML = `
      <p class='text-3xl text-center text-red-500 mb-5'>${error}</p>
      `;
    });
}
function displayUser(user) {
  const userDisplay = document.querySelector("#user");
  if (user.gender === "female") {
    document.body.style.backgroundColor = "#6B21A8";
  } else {
    document.body.style.backgroundColor = "#3485bf";
  }
  userDisplay.innerHTML = `<div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8 user-photo"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl user-name">
                <span class="font-bold">Name: </span>${user.name.fist} ${user.name.last}
              </p>
              <p class="text-xl user-email">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl user-phone">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl user-loc">
                <span class="font-bold">Location: </span>${user.location.sity}, ${user.location.country}
              </p>
              <p class="text-xl user-age">
                <span class="font-bold">Age: </span>${user.dob.age}
              </p>
            </div>
          </div>
        </div>`;
}
document.querySelector("#generate").addEventListener("click", fetchUser);
fetchUser();

