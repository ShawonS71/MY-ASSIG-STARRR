// Player name card section file******

const players = ["mashrafee", "mushfiq", "shakib", "tamim", "mahmudullah", "sabbir"];

function getElement(elementId, getText, getValue) {
    if (getText) {
        return document.getElementById(elementId).innerText;
    } else if (getValue) {
        return document.getElementById(elementId).value;
    } else {
        return document.getElementById(elementId);
    }
}

function addEvent(element, eventName, eventHandlerFunction) {
    element.addEventListener(eventName, eventHandlerFunction);
}
// Creat list item, append text, set class and ID to the list elements :

function createLi(name) {
    const createLi = document.createElement("li");
    createLi.setAttribute("class", "list-group-item bg-black text-white");
    createLi.setAttribute("id", name + "-added");
    createLi.innerText = getElement(name + "-name", true);
    return createLi;
}
// Add event's all player card's and button player name:
for (const player of players) {

    addEvent(getElement(player), "click", function () {
        const getPlyersListLength = getElement("player-list").children.length;
        if (getPlyersListLength > 4) {
            alert("complete added you can't add anymore players !");
        } else {
            // Apeend list item to player list element:

            getElement("player-list").appendChild(createLi(player));
            getElement(player).setAttribute("disabled", "true");
        }
    });
}
// Event add and per player amount button:
addEvent(getElement("calculate-btn"), "click", function () {
    const listItemNumber = parseFloat(getElement("player-list").children.length);
    const perPlayerAmount = parseFloat(getElement("input-player-amount", false, true));
    // Error if user input is empty or less than 0:
    if (listItemNumber <= 0) {
        alert("please select maximum one player");
        return;
    }
    else if (perPlayerAmount < 0 || isNaN(perPlayerAmount)) {
        alert("amount not be negative!");
        return;
    } else {
        // Amount set per player by using id="player-expenses" :
        getElement("player-expenses").innerText = (listItemNumber * perPlayerAmount).toFixed(2);
    }
});
// Add event calculate total button:
addEvent(getElement("calculate-total-btn"), "click", function () {
    const listItemNumber = parseFloat(getElement("player-list").children.length);
    const playerAmount = parseFloat(getElement("player-expenses", true, false));
    const managerExpense = parseFloat(getElement("input-manager-expense", false, true));
    const coachExpense = parseFloat(getElement("input-coach-expense", false, true));
    //  Error if user input is empty or less than 0:
    if (listItemNumber <= 0) {
        alert("please select maximum one player");
        return;
    }
    else if (isNaN(managerExpense) || isNaN(coachExpense) || managerExpense < 0 || coachExpense < 0) {
        alert("amount not be negative!");
        return;
    } else {
        // Set the total expensess:
        getElement("total-expense").innerText = (playerAmount + managerExpense + coachExpense).toFixed(2);
    }
});