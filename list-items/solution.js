
/* Create list of items */
var items = [{'name': 'Cat', 'listId': 0},
             {'name': 'Dog', 'listId': 0},
             {'name': '', 'listId': 0},
             {'name': 'Dolphin', 'listId': 0},
             {'name': 'Oak Tree', 'listId': 1},
             {'name': 'Rose', 'listId': 1},
             {'name': 'Bass', 'listId': 2},
             {'name': 'Walleye', 'listId': 2},
             {'name': 'Catfish', 'listId': 2},
             {'name': 'Tigerfish', 'listId': 2},
             {'name': null, 'listId': 2}];

/* Separate items into 2D array structure, with each index representing a list of items, and each index
determined by the listId */
function separateItemsById(items) {
    var hash = [];

    for (var i = 0; i < items.length; i++) {
        var hashIndex = items[i].listId;

        if (!Array.isArray(hash[hashIndex])) {
            hash[hashIndex] = [];
        }

        /* Only add items if not null or blank */
        if (items[i].name) {
            hash[hashIndex].push(items[i]);
        }
    }

    return hash;
}

/* Sort items */
function sortItemsByAttr(attr, items) {
    if (!items) {
        return;
    }

    items.sort(function(a, b) {
        if(a[attr] < b[attr]) { return -1; }
        if(a[attr] > b[attr]) { return 1; }
        return 0;
    })
}

function sortAll(list) {
    for (var i = 0; i < list.length; i++) {
        sortItemsByAttr("name", list[i]);
    }
}

function main() {
    /* Separate list into separate lists by listId */
    var separatedList = separateItemsById(items);

    sortAll(separatedList);
    console.log(separatedList);
}

main();