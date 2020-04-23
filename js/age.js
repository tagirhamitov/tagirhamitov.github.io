function calculate_age() {
    let dob = new Date(2002, 11, 4)
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}

age = document.getElementById("age")
age.innerText = calculate_age().toString()