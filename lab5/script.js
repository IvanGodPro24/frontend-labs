// 1
const form = document.getElementById("form");

const InputInitials = document.getElementById("initials");
const InputGroup = document.getElementById("group");
const InputTel = document.getElementById("tel");
const InputCard = document.getElementById("card");
const InputFaculty = document.getElementById("faculty");

const pInitials = document.getElementById("p-initials");
const pGroup = document.getElementById("p-group");
const pTel = document.getElementById("p-tel");
const pCard = document.getElementById("p-card");
const pFaculty = document.getElementById("p-faculty");

const patterns = {
  initials: /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']+\s[A-ZА-ЯІЇЄҐ]\.[A-ZА-ЯІЇЄҐ]\.$/,
  group: /^[A-ZА-ЯІЇЄҐ]{2}-\d{2}$/,
  tel: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
  card: /^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/,
  faculty: /^[A-ZА-ЯІЇЄҐ]{4}$/,
};

const inputs = {
  initials: InputInitials,
  group: InputGroup,
  tel: InputTel,
  card: InputCard,
  faculty: InputFaculty,
};

const outputs = {
  initials: pInitials,
  group: pGroup,
  tel: pTel,
  card: pCard,
  faculty: pFaculty,
};

const onSubmit = (e) => {
  e.preventDefault();
  let isValid = true;

  Object.keys(patterns).forEach((key) => {
    const input = inputs[key];
    const value = input.value.trim();
    const regex = patterns[key];

    if (regex.test(value)) {
      input.classList.remove("error");
      outputs[key].textContent = value;
    } else {
      input.classList.add("error");
      outputs[key].textContent = "❌ Invalid data";
      isValid = false;
    }
  });

  if (!isValid) {
    alert("Check that you have entered the data correctly!");
  }
};

form.addEventListener("submit", onSubmit);

// 2
const table = document.getElementById("table");
const colorPicker = document.getElementById("color-picker");

let number = 1;

for (let row of table.rows) {
  for (let cell of row.cells) {
    cell.textContent = number;
    number++;
  }
}

const variant = 2;

const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

for (let row of table.rows) {
  for (let cell of row.cells) {
    if (parseInt(cell.textContent) === variant) {
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = getRandomColor();
        cell.style.color = getRandomColor();
      });

      cell.addEventListener("click", () => {
        cell.style.backgroundColor = colorPicker.value;
      });

      cell.addEventListener("dblclick", () => {
        const cellIndex = cell.cellIndex;
        for (let r of table.rows) {
          r.cells[cellIndex].style.backgroundColor = colorPicker.value;
        }
      });
    }
  }
}
