var services = angular.module('Ball.services', [])

.factory('BallService', [function(){
	return {
		

quotes:[
			'It is certain',
			'It is decidedly so',
			'Without a doubt',
			'Yes definitely',
			'You may rely on it',
			'As I see it, yes',
			'Most likely',
			'Outlook good',
			'Yes',
			'Signs point to yes',
			'Reply hazy try again',
			'Ask again later',
			'Better not tell you now',
			'Cannot predict now',
			'Concentrate and ask again',
			'Do not count on it',
			'My reply is no',
			'Fogetaboutit',
			'Outlook not so good',
			'Very doubtful' 
		],


getQuotes: function(){
	return this.quotes;
}, 
setQuotes: function(quotes){
	this.quotes = quotes;
}, 

getQuote: function(index){
	return this.quotes[index];
},

setQuotes: function(index, quote){
	this.quotes[index] = quote;

},

getRandomQuote: function(){
	var quote = this.quotes[Math.floor(Math.random()* this.quotes.length-1) + 1]; 

	return quote;

},

saveQuotes: function(quotes){
	var defer = $q.defer();

	for(var X = 0;  x < quotes.length; x++){
		if(quotes[x].length < 1){
			quotes[x] ="QUOTE HERE";
		}
	}

	this.quotes = quotes;
	defer.resolve(quotes); 
	return defer.promise;
		}
	}
}]);


