// function printNum(num)
// {
// 	if(num != 0)
// 	{
// 		console.log(num);
// 		num--;
// 		countDown(num);	
// 	}

// 	else if(num ==0)
// 	{
// 		console.log("done");
// 	}
// }

function countDown(num){
	if(num != 0)
	{
		console.log(num);
		num--;
		setTimeout(()=>{countDown(num)},1000);	
	}
	else if(num ==0)
	{
		console.log("done");
	}
		
}

countDown(5);
