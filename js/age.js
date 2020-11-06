function calculate_age() {
    let date_of_birth = new Date(2002, 10, 4)
    let diff_ms = Date.now() - date_of_birth.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}

age = document.getElementById("age")
age.innerText = calculate_age().toString()
