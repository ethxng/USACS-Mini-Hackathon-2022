let boxes = document.querySelectorAll(".box");
let properties = document.querySelectorAll('.property_val');

for (let i = 0; i < boxes.length; i++){
    let link = document.createElement('a');
    let address = (document.querySelectorAll(".property_val"))[i].textContent;
    address += " United States"
    address = address.replace("Property: ", '');
    let sanitized = address.replaceAll(" ", "+");
    sanitized = sanitized.replaceAll(",", "%2C");
    let googleLink = "https://www.google.com/search?q=" + sanitized;
    link.href = googleLink;
    link.textContent = "Click to see location";
    link.style.cssText = "font-size: 15px";
    boxes[i].appendChild(link);
}