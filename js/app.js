$(document).ready(function() {
	var requestUrl = "http://www.stands4.com/services/v2/quotes.php?uid=4346&tokenid=5i9ALC3BJrehgAl0&searchtype=RANDOM";
	
	function setNewQuote() {
	        function renderQuote(quote) {
			$("#quote").text("\"" + quote.quoteText + "\"");
			$("#author").text(quote.quoteAuthor);
		}
	
		function success(xmlData) {
			var result = xmlData.childNodes[0].childNodes[0];
			var quoteText = result.firstChild.innerHTML;
			var quoteAuthor= result.lastChild.innerHTML;
			renderQuote({quoteText : quoteText, quoteAuthor : quoteAuthor});
		}

		$.get(requestUrl, null, "xml").done(success);
	}

	// execute setNewQuote when page initially loads	
	setNewQuote();
	
	// execute setNewQuote function on new quote button click	
	$("#new-quote-button").on('click', setNewQuote);
});
