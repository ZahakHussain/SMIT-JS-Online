function createAdder(numToAdd) {
return function(num) {
    return num + numToAdd;
}
}


function searchArray(array, value) {
if (array.length === 0) {
    return false;
} else if (array[0] === value) {
    return true;
} else {
    return searchArray(array.slice(1), value);
}
}
 

function addParagraph(text) {
    const newParagraph = document.createElement("p");
    const textNode = document.createTextNode(text);
    newParagraph.appendChild(textNode);
    document.body.appendChild(newParagraph);
}

function addListItem(text) {
    const newListItem = document.createElement("li");
    const textNode = document.createTextNode(text);
    newListItem.appendChild(textNode);
    const unorderedList = document.querySelector("ul");
    unorderedList.appendChild(newListItem);
}

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

function saveObjectToLocalStorage(key, object) {
    const objectString = JSON.stringify(object);
    localStorage.setItem(key, objectString);
}

function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    const object = JSON.parse(objectString);
    return object;
}

function saveObjectPropertiesToLocalStorage(obj) {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      localStorage.setItem(key, JSON.stringify(value));
    });
    
    const newObj = {};
    Object.keys(obj).forEach(key => {
      const value = localStorage.getItem(key);
      newObj[key] = JSON.parse(value);
    });
    return newObj;
}