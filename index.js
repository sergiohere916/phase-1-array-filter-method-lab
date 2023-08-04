// Code your solution here
function findMatching(inputList, value) {
    const filteredList = inputList.filter(listElements => {
        if (listElements.toUpperCase() === value.toUpperCase()) {
            return listElements;
        }
    })
    return filteredList;
}

function fuzzyMatch(inputList, value) {
    const filteredList = inputList.filter(listElement => {
       if (listElement.toUpperCase().indexOf(value.toUpperCase()) === 0) {
        return listElement; 
       }
    })
    return filteredList;
}

function matchName(inputList, value) {
    const filteredList = inputList.filter(personObj => {
        if (personObj.name.toUpperCase() === value.toUpperCase()) {
            return personObj;
        }
    })
    return filteredList; 
}
