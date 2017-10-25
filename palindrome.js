var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    
    var pal = "madam";

    var palArray = pal.split("");

    var reverseString = palArray.reverse();

    var currentString = reverseString.join("");

    if(pal === currentString) {
        console.log("The given string is palindrome");
        response.end("The given string is palindrome");
    } else {
        console.log("The given string is not palindrome");
        response.end("The given string is not palindrome");
    }
});

server.listen(3000);