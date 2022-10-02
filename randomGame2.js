
let counter = 0;
function randomGame(){
	let num = Math.random();
	if(num>.75){
		counter++;
		console.log("it took "+ counter +" tries")
		// clearInterval(id)
	}
	else{
		console.log(num);
		counter++;
		setTimeout(randomGame,1000)
	}

}
randomGame();
// id = setInterval (randomGame, 1000);