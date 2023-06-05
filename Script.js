//Main JavaScript code of Rhino search engine.
//function to handle searches.
function searchEngine() {
  //DOM to extract the search
 let srb = document
  .getElementById("searchbox")
  .value;
  //Only a remainder.
 document.write(
  "Showing results for " + srb +
  "<br><br><br>");
  //Searches
  //search for apple
 if (srb == "apple") {
  document.write("loading...");
  window.location.href =
   "/apple.html";
 }
  //search for a website called vectorguns.
 else if (srb ==
  "vectorguns.fik") {
  document.write("loading...");
  window.location.href =
   "/Vector.html";
 }
  //search for for python
 else if (srb == "python") {
  window.location.href =
   "/python.html";
 }
  //Error for no result is found on the database
 else {
  document.write(
   "Sorry☹️, no results for: " +
   srb);
   //redirect to home page.
  document.write(
   "<br><br>redirecting to home tab"
  );
  window.location.href =
   "/index.html";
 }
}
