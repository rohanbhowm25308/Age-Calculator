document.getElementById("btn").addEventListener("click", () => {
  const dob = document.getElementById("dob").value;
  const err = document.getElementById("error");
  const res = document.getElementById("result");
  err.textContent = "";
  if (!dob) {
    err.textContent = "Please select your date of birth.";
    res.classList.add("hidden");
    return;
  }
  const birth = new Date(dob),
    today = new Date();
  if (birth > today) {
    err.textContent = "Future dates are not allowed.";
    res.classList.add("hidden");
    return;
  }
  let y = today.getFullYear() - birth.getFullYear();
  let m = today.getMonth() - birth.getMonth();
  let d = today.getDate() - birth.getDate();
  if (d < 0) {
    m--;
    d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (m < 0) {
    y--;
    m += 12;
  }
  years.textContent = y;
  months.textContent = m;
  days.textContent = d;
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  weekday.textContent = "Born on: " + names[birth.getDay()];
  let next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (next < today) next.setFullYear(today.getFullYear() + 1);
  const left = Math.ceil((next - today) / 86400000);
  birthday.textContent = "Next birthday in " + left + " day(s).";
  const totalDays = Math.floor((today - birth) / 86400000);
  total.textContent =
    "Total age: " +
    (y * 12 + m) +
    " months • " +
    Math.floor(totalDays / 7) +
    " weeks • " +
    totalDays +
    " days";
  res.classList.remove("hidden");
});
