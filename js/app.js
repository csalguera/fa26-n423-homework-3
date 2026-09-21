const STORAGE_KEY = "studentDirectory";

const form = document.querySelector("#student-form");
const displayButton = document.querySelector("#display-students");
const records = document.querySelector("#student-records");
const successMessage = document.querySelector("#success-message");
let studentsVisible = false;

function loadStudents() {
  try {
    const storedStudents = localStorage.getItem(STORAGE_KEY);
    return storedStudents ? JSON.parse(storedStudents) : [];
  } catch {
    return [];
  }
}

function saveStudents(students) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function showSuccessMessage() {
  successMessage.hidden = false;
  window.setTimeout(() => {
    successMessage.hidden = true;
  }, 3000);
}

function renderStudents(students) {
  records.replaceChildren();

  if (students.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent =
      "No students saved yet. Add a student using the form above.";
    records.append(emptyState);
    return;
  }

  const tableWrapper = document.createElement("div");
  tableWrapper.className = "student-table-wrapper";

  const table = document.createElement("table");
  table.innerHTML = `
		<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Age</th>
				<th scope="col">Phone</th>
				<th scope="col">Email</th>
				<th scope="col">Classes</th>
			</tr>
		</thead>
		<tbody></tbody>
	`;

  const tableBody = table.querySelector("tbody");
  students.forEach((student) => {
    const row = document.createElement("tr");
    [
      student.name,
      student.age,
      student.phone,
      student.email,
      student.classes.join(", "),
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    tableBody.append(row);
  });

  tableWrapper.append(table);
  records.append(tableWrapper);

  const cards = document.createElement("div");
  cards.className = "student-cards";
  students.forEach((student) => {
    const card = document.createElement("article");
    card.className = "student-card";
    card.innerHTML = `
			<h3></h3>
			<p><span>Age:</span> ${student.age}</p>
			<p><span>Phone:</span> ${student.phone}</p>
			<p><span>Email:</span> ${student.email}</p>
			<p><span>Classes:</span> ${student.classes.join(", ")}</p>
		`;
    card.querySelector("h3").textContent = student.name;
    cards.append(card);
  });
  records.append(cards);
}

function showStudents() {
  renderStudents(loadStudents());
  studentsVisible = true;
  displayButton.textContent = "Hide Students";
  displayButton.setAttribute("aria-expanded", "true");
}

function hideStudents() {
  records.replaceChildren();
  studentsVisible = false;
  displayButton.textContent = "Display Students";
  displayButton.setAttribute("aria-expanded", "false");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const student = {
    name: formData.get("name").trim(),
    age: Number(formData.get("age")),
    phone: formData.get("phone").trim(),
    email: formData.get("email").trim(),
    classes: formData
      .get("classes")
      .split(",")
      .map((className) => className.trim())
      .filter(Boolean),
  };

  const students = loadStudents();
  students.push(student);
  saveStudents(students);
  form.reset();
  showSuccessMessage();

  if (studentsVisible) renderStudents(students);
});

displayButton.addEventListener("click", () => {
  if (studentsVisible) {
    hideStudents();
  } else {
    showStudents();
  }
});
