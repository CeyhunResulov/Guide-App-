const form = document.querySelector(".form");
const tbodyEl = document.querySelector("tbody");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const personalList = [];

form.addEventListener("submit", upplodeInfo);

// upplode

function upplodeInfo(e) {
  e.preventDefault();
  const values = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
  };

  const result = valuesControls(values);
  if (result.value) {
    infoBoxShow(result.value, result.message);
    peresonListCreat(values);
    console.log(listPushPersonal(values));
  } else {
    console.log(result.value);
    infoBoxShow(result.value, result.message);
  }
}

// values control

function valuesControls(values) {
  for (let value in values) {
    if (values[value]) {
    } else {
      const elseValue = { value: false, message: "formu tam doldurun!" };
      return elseValue;
    }
  }
  const value = { value: true, message: "melumatlar gonderildi" };
  resetValue();
  return value;
}

// true and wrong box show

function infoBoxShow(value, message) {
  const elDIv = document.createElement("div");
  const elP = document.createElement("p");
  elDIv.appendChild(elP);
  elP.textContent = elDIv.classList.add(`${value}`);
  elP.textContent = message;
  document.querySelector("body").insertBefore(elDIv, form);

  setTimeout(function infoBoxDelete() {
    if (form.previousElementSibling.classList.contains("false")) {
      document.querySelector(".false").remove();
    } else if (form.previousElementSibling.classList.contains("true")) {
      document.querySelector(".true").remove();
    }
  }, 3000);
}

// input value reset

function resetValue() {
  fname.value = "";
  lname.value = "";
  email.value = "";
}

// personal list creat

function peresonListCreat(persons) {
  const trEL = document.createElement("tr");
  trEL.innerHTML = `<td>${persons.fname}</td>
  <td>${persons.lname}</td>
  <td>${persons.email}</td>
  <td>
    <button class="button"><i class="far fa-edit"></i></button>
    <button class="button button__delete">
      <i class="far fa-trash-alt"></i>
    </button>
  </td>`;
  tbodyEl.appendChild(trEL);
}

// list for personal

function listPushPersonal(persons) {
  personalList.push(persons);
  return personalList;
}
