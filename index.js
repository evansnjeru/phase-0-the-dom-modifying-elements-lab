// Remove main#main
const main = document.getElementById("main");
main.remove()

// newHeader variable for h1#victory
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Evans is the champion"
document.body.append(newHeader);
