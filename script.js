const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;

let bookList = JSON.parse(localStorage.getItem("bookList")) || [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Psychological Thriller",
    publicationYear: 2019,
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Autobiography",
    publicationYear: 2018,
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Mystery, Fiction",
    publicationYear: 2018,
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-Help",
    publicationYear: 2016,
  },
];

function populateBookTable() {
  const table = document.getElementById("bookList");

  table.innerHTML = "";

  const thead = document.createElement("thead");
  thead.classList.add("thead");
  const headerRow = thead.insertRow();
  const headers = ["Title", "Author", "Genre", "Publication Year"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.classList.add("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  tbody.classList.add("tbody");
  bookList.forEach((book) => {
    const row = tbody.insertRow();
    const values = Object.values(book);

    values.forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value;
      cell.classList.add("td");
    });
  });

  table.appendChild(tbody);
}

populateBookTable(bookList);

const yearRadioButtons = document.getElementById("yearRadioButtons");

for (let year = 2011; year <= 2024; year++) {
  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.name = "year";
  radioInput.value = year;
  radioInput.id = "year" + year;

  const label = document.createElement("label");
  label.setAttribute("for", "year" + year);
  label.textContent = year;

  yearRadioButtons.appendChild(radioInput);
  yearRadioButtons.appendChild(label);
  yearRadioButtons.appendChild(document.createElement("br"));
}

document
  .getElementById("newBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const yearRadioButtons = document.getElementsByName("year");

    let year;

    for (const radioButton of yearRadioButtons) {
      if (radioButton.checked) {
        year = radioButton.value;
        break;
      }
    }

    const newBook = {
      title: title,
      author: author,
      genre: genre,
      publicationYear: year,
    };

    bookList.push(newBook);

    localStorage.setItem("bookList", JSON.stringify(bookList));

    populateBookTable(bookList);

    document.getElementById("newBookForm").reset();
  });

const mainContainer = document.querySelector(".main_container");
const bookListSection = document.querySelector(".bookList");
const addBookSection = document.querySelector(".addBook");
const contactSection = document.querySelector(".contact");

const homeLink = document.querySelector("ul.navBar li:nth-child(1) a");
const listLink = document.querySelector("ul.navBar li:nth-child(2)");
const addBookLink = document.querySelector("ul.navBar li:nth-child(3)");
const contactLink = document.querySelector("ul.navBar li:nth-child(4)");

homeLink.addEventListener("click", function (event) {
  event.preventDefault();
  mainContainer.style.display = "flex";
  bookListSection.style.display = "none";
  addBookSection.style.display = "none";
  contactSection.style.display = "none";
});

listLink.addEventListener("click", function (event) {
  event.preventDefault();
  mainContainer.style.display = "none";
  bookListSection.style.display = "block";
  addBookSection.style.display = "none";
  contactSection.style.display = "none";
});

addBookLink.addEventListener("click", function (event) {
  event.preventDefault();
  mainContainer.style.display = "none";
  bookListSection.style.display = "none";
  addBookSection.style.display = "block";
  contactSection.style.display = "none";
});

contactLink.addEventListener("click", function (event) {
  event.preventDefault();
  mainContainer.style.display = "none";
  bookListSection.style.display = "none";
  addBookSection.style.display = "none";
  contactSection.style.display = "block";
});

// const yearRadioButtons = document.getElementById("yearRadioButtons");

// // Loop to generate radio buttons for years from 2011 to 2024
// for (let year = 2011; year <= 2024; year++) {
//   const radioInput = document.createElement("input");
//   radioInput.type = "radio";
//   radioInput.name = "year";
//   radioInput.value = year;
//   radioInput.id = "year" + year;

//   const label = document.createElement("label");
//   label.setAttribute("for", "year" + year);
//   label.textContent = year;

//   yearRadioButtons.appendChild(radioInput);
//   yearRadioButtons.appendChild(label);
//   yearRadioButtons.appendChild(document.createElement("br"));
// }
