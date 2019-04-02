
var cardClick = 0;
var first;
var second;
var cardMatch = 0;

var cards = [];
cards[0]="images/1200px-Playing_card_heart_A.svg.png";
cards[1]="images/1200px-Playing_card_heart_A.svg.png";
cards[2]="images/jack.png";
cards[3]="images/jack.png";
cards[4]="images/Playing_card_heart_10.svg";
cards[5]="images/Playing_card_heart_10.svg";
cards[6]="images/32651170-king-of-hearts-playing-card.jpg";
cards[7]="images/32651170-king-of-hearts-playing-card.jpg";
cards[8]="images/joker.jpg";
cards[9]="images/joker.jpg";
cards[10]="images/queenofhearts.png";
cards[11]="images/queenofhearts.png";


//shuffles through array
function cardGame(array)
{
 
	var currentCard = array.length; 
	var temporaryCard, randomCard;

	while(0 !== currentCard)
		{
			//math random returns floating point,math floor used to round that value off
			randomCard = Math.floor(Math.random() * currentCard);
			currentCard -=1;
			temporaryCard = array[currentCard];
			array[currentCard] = array[randomCard];
			array[randomCard] = temporaryCard;
		}
	return array;
}
//shuffle

  var mix = cardGame(cards);
//function that is applied when card is clicked
function pick(card)
{
	if (cardClick==0) 
	{
		//setup for image that will be clicked
  	first = card;
  	document.images[card].src = cards[card];
  	cardClick = 1;
	}	
	else if (cardClick == 1) 
	{//debug for two clicks
		if (first === card)
		return;
		cardClick = 2;
		second = card;
		document.images[card].src = cards[card];
		//set to half a second before flip
		timer = setInterval(control,500);
	}	
	else
	{
		alert("click image once!!");
	}
}

//function that checks if the cards match
function control()
{
  	clearInterval(timer);
  	cardClick = 0;
		if (cards[second]==cards[first]) 
		{
			//if first card is equal to second match them
  		cardMatch++;
			if (cardMatch==6) 
			{

  			alert("WELL DONE!!!! you have matched all the cards!");
  			location.reload();
				//reset
  		}
		}
		else
		{
      document.images[first].src = "images/DSC100497013.jpg";
      document.images[second].src = "images/DSC100497013.jpg";
      return;
  	}
}

var index = 0;
var table ='';
var numOFboxes = 4;
var rows = 3;
var cols = numOFboxes;

for(var r = 0; r < rows; r++)
{
	table += '<tr>';
	for(var c = 0; c < cols; c ++)
	{
        var cardFront = `<img src="images/DSC100497013.jpg" onclick="pick(${index++});" height="150px" width="150px"/>`;
		table +='<td><div id="index">' + cardFront + '</div></td>';
	}
	table += '</tr>';
}

document.write('<table border=1 class="container">' + table + '</table>');

// var totalRows = 2;
// var cellsInRow = 2;
// var index = 0;

// function drawTable() 
// {
//         // get the reference for the body
//         var div1 = document.getElementById('div1');
 
//         // creates a <table> element
//         var tbl = document.createElement("table");
 
//         // creating rows
// 				for (var r = 0; r < totalRows; r++) 
// 				{
//             var row = document.createElement("tr");
	     
// 	     // create cells in row
// 						for (var c = 0; c < cellsInRow; c++) 
// 						{
// 							var cell = document.createElement("td");
// 							var x = document.createElement("IMG");
// 							x.setAttribute("src", "images/DSC100497013.jpg");
// 							x.setAttribute("width", "150");
// 							x.setAttribute("height", "150");
// 							cell.setAttribute('onclick', "pick(index++);");
// 							cell.appendChild(x);
//               row.appendChild(cell);
//             }           
            
// 				tbl.appendChild(row); // add the row to the end of the table body
//         }
    
//      div1.appendChild(tbl); // appends <table> into <div1>
// }
// window.onload=drawTable; 