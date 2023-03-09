var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function addToShoppingList(event) {
    // stops form refresh
    event.preventDefault();
    // takes value from input text field
    var item = $('#shopping-input').val();
    // create list item
    var liEl = $('<li>');
    // add the item as text in the list item
    liEl.text(item);
    // append to the shopping list
    shoppingFormEl.append(liEl);
    // clear input form once complete
    $('input[type="text"]').val('');
    
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", addToShoppingList);