//Creating Character
class Character {
	//proporties of Character
    constructor(x,y) {
        this.x = x
        this.y = y
        this.w = 75
        this.h = 75
        this.r = 130
        this.g = 203
        this.b = 245
    }
    
    show() {
     // Character color
        fill(this.r, this.g, this.b)
     // Character box
        rect(this.x, this.y, this.w, this.h)
    }//end of show
	//lets character move right
	moveRight() {
		this.x += 5
		
		if (this.x > 900) {
		this.x = -this.w	
		}
	}//end of moveRight
	//lets character move left
	moveLeft() {
		this.x -= 5
		
		if (this.x < -this.w) {
		this.x = 900 + this.w	
		}
	}//end of moveLeft
	//lets character move up
	moveUp() {
		this.y -= 5
		
		if (this.y < -this.h) {
		this.y = 375 + this.h	
		}
	}//end of moveUP
	//lets character move down
	moveDown() {
		this.y += 5
		
		if (this.y > 375) {
		this.y = -this.h
		}
	}
}// end of character class
// info bar at bottom of screen

class InfoBar {
	//proporties of infobar
		constructor(x,y,num){
			this.x = x
			this.y = y
			this.w = 900
			this.h = 124
			this.r = 250
			this.g = 250
			this.b = 250
			this.name = "Object " + num
			this.mass = randNumber(20,40)+1
			this.volume = randNumber(10,20)+1
			this.density = "???"
			this.active = false
		}//end of constructor
	//info for showing Infobar
	show() {
		//colors info bar
		fill(this.r, this.g, this.b)
		//draws info bar
		rect(this.x, this.y, this.w, this.h)
		//colors text
		fill("black")
		//text size for object number
		textSize(30)
		//object text
		text(this.name, this.x + 10, this.y + 25)
		//text size for other text
		textSize(20)
		//text 
		text("Mass- " + this.mass + " g", this.x + 10, this.y + 45)
		text("Volume- " + this.volume + " L", this.x + 10, this.y + 65)
		
		if(this.active) {
			var input = document.getElementById("densityInput");
			this.density = input.value;
		}
		
		text("Density- " + this.density, this.x + 10, this.y + 85)
		//text inputs
		var d1 = this.mass/this.volume
		//createInput("Insert density here", d1, 890,480 )
		
		if (this.density == this.mass/this.volume) {
			//console.log("Correct")
		} else if (this.density != this.mass/this.volume){
			//console.log("input number pls")
		}
	}//end of show
}//end of class

//random number(s)
function randNumber(num) { 
	var randy = Math.floor(Math.random()*num);
	return randy;
}

function densityInput(x, y) {
	var bod = document.getElementById("body");
	var denInput = document.createElement("div");
	denInput.id = "denInput";
	denInput.style = "position: absolute; padding-top: "+y+"px; padding-left: "+x+"px;";
	var txt = document.createElement("p");
	txt.innerHTML = "Input Density for object (round to one decimal place) ";
	denInput.appendChild(txt);
	bod.appendChild(denInput);
	denInput = document.getElementById("denInput");
	var inp = document.createElement("input");
	inp.id = "densityInput";
	denInput.appendChild(inp);
	
}

function getDensity(id = 0) {
	var den = document.getElementById("densityInput");
	if (id >= 0 && id <= 3) {
		if (isNaN(den.value)) {
			alert("Please input a number for density.");
		} else {
			info[id].density = den.value;
		}
	}
	
	return den.value;
}

function mouseClicked() {
	for (var i = 3; i >= 0; i--) {
		info[i].active = false;
		//document.getElementById("densityInput").value = "";
	}
		if (mouseX > (info[3].x) && 
			mouseX < (info[3].x + info[3].w) && 
			mouseY < (info[3].y + info[3].h) && 
			mouseY > (info[3].y)) {
			//console.log("Clicking " + info[3].name)
			info[3].active = true
		} else if (mouseX > (info[2].x) && 
			mouseX < (info[2].x + info[2].w) && 
			mouseY < (info[2].y + info[2].h) && 
			mouseY > (info[2].y)) {
			//console.log("Clicking " + info[2].name)
			info[2].active = true
		} else if (mouseX > (info[1].x) && 
			mouseX < (info[1].x + info[1].w) && 
			mouseY < (info[1].y + info[1].h) && 
			mouseY > (info[1].y)) {
			//console.log("Clicking " + info[1].name)
			info[1].active = true
		} else if (mouseX > (info[0].x) && 
			mouseX < (info[0].x + info[0].w) && 
			mouseY < (info[0].y + info[0].h) && 
			mouseY > (info[0].y)) {
			//console.log("Clicking " + info[0].name)
			info[0].active = true
		}//end of if statement
}//end of mouseclicked
/*
function setDensity(obj) {
	var input = document.getElementById("densityInput");
	obj.density = input.value;
}*/



//mouseX > info[i].x && mouseX < (info[i].x + info[i].w) && mouseY < (info[i].y + info[i].h) && mouseY > (info[i].y)



densityInput(0, 500);


