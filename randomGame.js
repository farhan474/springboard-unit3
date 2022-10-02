let counter =0;
let token = 0;

function getRandomNumber(){
	// counter++;
	return token = Math.random();
	
}


function randomGame(){
	setTimeout (getRandomNumber(),1000);
	counter++;
	if(token > .75)
	{
		console.log("it took " + counter + "tries")
	}
}