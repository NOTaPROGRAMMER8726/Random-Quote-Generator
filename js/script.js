//quotes array. quote, source, citation, year.
const quotes = [
    {quote:"This election is a total sham and a travesty. We are not a democracy!", source:"@realDonaldTrump", citation:"Twitter", year:"6 Nov 2012"},
    {quote:"Obama is, without question, the WORST EVER president. I predict he will now do something really bad and totally stupid to show manhood!", source:"@realDonaldTrump", citation:"Twitter", year:"5 Jun 2014"},
    {quote:"If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!", source:"@realDonaldTrump", citation:"Twitter", year:"10 Sep 2014"},
    {quote:"An 'extremely credible source' has called my office and told me that @BarackObama's birth certificate is a fraud.", source:"@realDonaldTrump", citation:"Twitter", year:"6 Aug 2012"},
    {quote:"Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again--just watch. He can do much better!", source:"@realDonaldTrump", citation:"Twitter", year:"17 Oct 2012"},
    {quote:"Hillary Clinton has announced that she is letting her husband out to campaign but HE'S DEMONSTRATED A PENCHANT FOR SEXISM, so inappropriate!", source:"@realDonaldTrump", citation:"Twitter", year:"26 Dec 2015"},
    {quote:"The election is absolutely being rigged by the dishonest and distorted media pushing Crooked Hillary - but also at many polling places - SAD", source:"@realDonaldTrump", citation:"Twitter", year: "16 Oct 2016"},
    {quote:"I refuse to call Megyn Kelly a bimbo, because that would not be politically correct. Instead I will only call her a lightweight reporter!", source:"@realDonaldTrump", citation:"Twitter", year:"27 Jan 2016"},
    {quote:"I am going to repeal and replace ObamaCare. We will have MUCH less expensive and MUCH better healthcare. With Hillary, costs will triple!", source:"@realDonaldTrump", citation:"Twitter", year:"2 Nov 2016"},
    {quote:"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", source:"@realDonaldTrump", citation:"Twitter", year:"6 Nov 2012"},
    {quote:"It's freezing and snowing in New York--we need global warming!", source:"@realDonaldTrump", citation:"Twitter", year:"7 Nov 2012"},
    {quote:"Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault", source:"@realDonaldTrump", citation:"Twitter", year:"8 May 2013"},
];

//function to randomize array of quotes.
const getRandomQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
};

//function for random color// found function on stackOverflow
function changeBackgroundColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    document.body.style.backgroundColor = color;
};


//function to add text to a specific class on the html, instead of constructing a string
//containing the different properties..
const printQuoteChangeColor = () => {
    let citationSpan = document.createElement("span");
    citationSpan.setAttribute("class", "citation");
    let yearSpan = document.createElement("span");
    yearSpan.setAttribute("class", "year");
    let randomQuote = getRandomQuote();
    document.getElementsByClassName("quote")[0].innerHTML = randomQuote.quote;
    document.getElementsByClassName("source")[0].innerHTML = randomQuote.source;
    document.getElementsByClassName("source")[0].appendChild(citationSpan);
    document.getElementsByClassName("source")[0].appendChild(yearSpan);
    citationSpan.innerHTML = randomQuote.citation;
    yearSpan.innerHTML = randomQuote.year;
    //add changeBackgroundColor function inside here so it changes quote and color.
    changeBackgroundColor();
};

//console.log(printQuote()); //for testing and debugging on console first


//for loop to add a different quote and changes color on load.
for (let i = 0; i < quotes.length; i++) {
    printQuoteChangeColor();
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuoteChangeColor);
