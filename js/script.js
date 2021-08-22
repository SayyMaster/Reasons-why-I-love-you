var quotes = [
  {
    quote: "I love how you always make me smile even on my grumpiest of days",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you love me for me and accept me for my weird self",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you go above and beyond to help your family and mine",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you make an effort and show up, every single time",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you perfectly plan our dates and all our little ceremonies",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you know exactly how to push my buttons, which can be hella annoying sometimes, but still the best",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how the rest of my life with you looks so beautiful",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how because you love winding me up and I get wound up so easily",
    source: "Reasons why I love you",
  },
   {
    quote: "I love when you have a go at me, when I really need to hear it",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you are independent and encourage me to be a SIW",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you make me feel special, even on days I don't feel particularly like myself",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how you evoke a different sense of adventure within me",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how you always challenge me and are always up for a good debate",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you respect me and my views and opinions",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how we have similar interests and have things we can do together, including our little business and things we can enjoy on our own",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how we have similar outlooks in life and have goals we would like to acheive together",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how we work together to better ourselves as people, be it physically (even though you couldn't convince me to do the 10k) or spiritually",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how we enjoy watching the similar shows",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how at the end of the day I just want to chill out with you and have a good laugh",
    source: "Reasons why I love you",
  },
   {
    quote: "I love your concentrating look",
    source: "Reasons why I love you",
  },
   {
    quote: "I love how you are confident in yourself and give me the confidence I need",
    source: "Reasons why I love you",
  },
   {
    quote: "I love your big smile, the one I can see all your teeth and that cute dimple",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you are always up for a challenge",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how you make me feel secure",
    source: "Reasons why I love you",
  },
   {
    quote: "I love your strong and incredible arms (kinda cringe but damn boy)",
    source: "Reasons why I love you",
  },
  {
    quote: "I love how ambitious you are and are not afraid to dream big",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you spark the creative side in me and push me to continue creating",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how ambitious you are and are not afraid to dream big",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how your main goal in life is to be a good person",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how appreciate my chonky thighs and tum chub",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you love your little birdies and are a literal mother hen",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you make an effort with my parents, even from miles away",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how gender roles are not a massive deal to you",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you balance me out, harden me up when I need to and soften the edges when I am harsh",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you love house stuff and inject so much personality in your home (this was written while watching the block, obvs)",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you want to travel the world with me",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how hardworking you are, giving your absoloute best in whatever you do",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how you give back to the community and to the less fortunate- and don't really say a word about it",
    source: "Reasons why I love you",
  },
    {
    quote: "I love how much you care about nanimaa (it shows me that I am with someone who will always take care of me)",
    source: "Reasons why I love you",
  },
];
// CSS Color Names
// Compiled by @bobspace.
//
// A javascript array containing all of the color names listed in the CSS Spec.
// The full list can be found here: http://www.w3schools.com/cssref/css_colornames.asp
// Use it as you please, 'cuz you can't, like, own a color, man.
// I deleted colors that didn't provide sufficient contrast or seemed particularly grating.

var CSS_COLOR_NAMES = ["Thistle", "SkyBlue", "Silver", "LightSalmon", "Plum", "PaleTurquoise", "NavajoWhite", "LightPink", "LightGrey", "LightBlue"];

var quoteIndex = 0;
var colorIndex = 0;
var quotesUsed = [];
var intervalID;

// const keyword is not supported in IE
var NUMBER_OF_QUOTES = 39;
var CHANGE_INTERVAL = 10000;

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptyQuotesArray() {
  quotesUsed = [];
  console.log("Emptied queue; Start fresh.");
}

function allQuotesUsed() {
  return (quotesUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {

  do {

    quoteIndex = getRandomIntInclusive(0, 39);

  } while (quotesUsed.includes(quoteIndex));

  quotesUsed.push(quoteIndex);

  logQuoteToConsole(quoteIndex);

  if (allQuotesUsed()) {
    emptyQuotesArray();
  }

  return quotes[quoteIndex];
}

function getRandomColor() {

  colorIndex = getRandomIntInclusive(0, CSS_COLOR_NAMES.length - 1);
  return CSS_COLOR_NAMES[colorIndex];
}

function logQuoteToConsole(quoteIndex) {
  console.log(quoteIndex, ': ', quotes[quoteIndex].quote.slice(0, 20));
}

function formatQuote(quote) {

  var formattedQuote =
    '<p class="quote">' + quote.quote + '</p>' +
    '<p class="source">' + quote.source;

  // http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property

  if (typeof quote.citation !== "undefined") {
    formattedQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (typeof quote.year !== "undefined") {
    formattedQuote += '<span class="year">' + quote.year + '</span>';
  }
  if (typeof quote.tags !== "undefined") {
    formattedQuote += '<p class="tags">' + quote.tags.join(', ') + '</p>';
  }

  formattedQuote += '</p>';
  return formattedQuote;

}

function changeBackground() {

  document.getElementById("bgcolor").style.backgroundColor = getRandomColor();

}

function resetTimer() {

  if (intervalID) {
    window.clearInterval(intervalID);
    intervalID = setInterval(printQuote, CHANGE_INTERVAL);
  }

}

function printQuote() {

  resetTimer();
  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());
  changeBackground();

}

printQuote();

// set the interval to change the quote to the defined interval
intervalID = window.setInterval(printQuote, CHANGE_INTERVAL);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
