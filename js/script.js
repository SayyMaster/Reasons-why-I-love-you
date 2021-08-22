var quotes = [
  {
    quote: "I love you because you always make me smile even on my grumpiest of days",
    source: "Reasons why I love you",
  },
  {
    quote: "I love you because you love me for me and accept me for my weird self",
    source: "Reasons why I love you",
  },
  {
    quote: "I love you because you go above and beyond to help your family and mine",
    source: "Reasons why I love you",
  },
  {
    quote: "I love you because you make an effort and show up, every single time",
    source: "Reasons why I love you",
  },
  {
    quote: "I love you because you perfectly plan our dates and all our little ceremonies",
    source: "Reasons why I love you",
  },
  {
    quote: "I love you because you know exactly how to push my buttons, which can be hella annoying sometimes, but still the best",
    source: "Reasons why I love you",
  },
   {
    quote: "I love you because the rest of my life with you looks so beautiful",
    source: "Reasons why I love you",
  },
   {
    quote: "I love you because you love winding me up and I get wound up so easily",
    source: "Reasons why I love you",
  },
   {
    quote: "I love you because you have a go at me, when I really need to hear it",
    source: "Reasons why I love you",
  },
    {
    quote: "I love you because you are independent and encourage me to be a SIW",
    source: "Reasons why I love you",
  },
    {
    quote: "I love you because you make me feel special, even on days I don't feel particularly like myself",
    source: "Reasons why I love you",
  },
   {
    quote: "I love you because evoke a different sense of adventure within me",
    source: "Reasons why I love you",
  },
   {
    quote: "I love you because you are independent and encourage me to be a SIW",
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

var CSS_COLOR_NAMES = ["Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "FireBrick", "ForestGreen", "Fuchsia", "Green", "HotPink", "IndianRed", "Indigo", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "Pink", "Plum", "PowderBlue", "Purple", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet"];

var quoteIndex = 0;
var colorIndex = 0;
var quotesUsed = [];
var intervalID;

// const keyword is not supported in IE
var NUMBER_OF_QUOTES = 13;
var CHANGE_INTERVAL = 1000000;


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

    quoteIndex = getRandomIntInclusive(0, 13);

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
