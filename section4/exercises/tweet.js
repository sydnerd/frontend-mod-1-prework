/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author,content,timeStamp,numberOfLikes,comments){
    this.name = author;
    this.content =content;
    this.time =timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }
  increment (){
    this.likes++;
  }
  addComment (){
    this.comments.push("Go Brady!");
  }
}

var tweet1 = new Tweet ("Sydney","Tom Brady is the GOAT!","Sunday Feb 7, 2021", 1000, ["Yes he is!"]);
console.log(tweet1);

tweet1.increment();
console.log(tweet1);

tweet1.addComment("Go Brady!!");
console.log(tweet1);

var tweet2 = new Tweet ("Becca","Friends is the best TV Show!","Thursday Feb 11,2021",4000, ["No it's not!"])
console.log(tweet2)

tweet2.increment();
console.log(tweet2);
