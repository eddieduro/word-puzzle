function wordpuzzle(string) {
    return string = string.replace(/[aeiou]/gi, '-');
}

$(document).ready(function() {
  $('form#countForm').submit(function(event) {
    var input = $('input#userInput').val();
    var results = wordpuzzle(input);
    $('#results').show().append(results + " can you solve this?");
    $('h1, form').hide();
    // console.log(results);
    event.preventDefault();
  });
});
