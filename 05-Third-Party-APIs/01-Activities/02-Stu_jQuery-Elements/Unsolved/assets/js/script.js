// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var AuthorName = $("<p>");
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
AuthorName.text("~ CarolDweck");
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
AuthorName.attr("class","plain");
// TODO: Add the class `plain` to the author element
var Aquotes=$("<h1>");
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
Aquotes.text("Love Challenges, Be intrigued by Mistakes, Enjoy Efoort, and Keep Learning");
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
Aquotes.addClass("fancy");
// TODO: Apply the class `fancy` to the quote element
Aquotes.append(AuthorName);
// TODO: Append the author element to the quote element
var rootEL= $("#root");
rootEL.append(Aquotes);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
