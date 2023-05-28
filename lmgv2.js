let users = [];

function createUser(name, number, email, gender, image) {
  users.push({ name: name, number: number, email: email, gender: gender, image: image });
}

function displayUsers() {
  let table = document.getElementById("userTable");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let row = table.insertRow();

    let detailsCell = row.insertCell();
    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("user-details");
    let namePara = document.createElement("p");
    namePara.textContent = "Name: " + user.name;
    let numberPara = document.createElement("p");
    numberPara.textContent = "Number: " + user.number;
    let emailPara = document.createElement("p");
    emailPara.textContent = "Email: " + user.email;
    let genderPara = document.createElement("p");
    genderPara.textContent = "Gender: " + user.gender;
    detailsDiv.appendChild(namePara);
    detailsDiv.appendChild(numberPara);
    detailsDiv.appendChild(emailPara);
    detailsDiv.appendChild(genderPara);
    detailsCell.appendChild(detailsDiv);

    let imageCell = row.insertCell();
    let imageElement = document.createElement("img");
    imageElement.src = user.image;
    imageElement.alt = user.name + "'s Image";
    imageCell.appendChild(imageElement);
  }
}

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("nameInput").value;
  let number = document.getElementById("numberInput").value;
  let email = document.getElementById("emailInput").value;
  let gender = document.getElementById("genderInput").value;
  let imageInput = document.getElementById("imageInput");

  if (imageInput.files.length > 0) {
    let imageFile = imageInput.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
      let image = e.target.result;
      createUser(name, number, email, gender, image);
      displayUsers();

      document.getElementById("nameInput").value = "";
      document.getElementById("numberInput").value = "";
      document.getElementById("emailInput").value = "";
      document.getElementById("genderInput").value = "";
      imageInput.value = "";
    };

    reader.readAsDataURL(imageFile);
  }
});
