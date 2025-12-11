function count() {
    let value = document.getElementById("txt").value;
    let trimmed = value.trim();
    document.getElementById("result").textContent = trimmed.length;
}
