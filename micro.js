alert("welcome to microsoft!");
var number=1;
function service(){
	var x1=document.getElementById('thethird');
	x1.style.background="rgba(30, 60, 80, 0.6) ";
}

function changepic(){
	var x1=document.getElementsByName("homepic");
	switch (number){
		case 0:
				x1[0].src="https://i.imgur.com/kyGYJ50.jpg";	
				number++;
				break;
		case 1:
				x1[0].src="https://i.imgur.com/ZbPn1iH.jpg";
				number++;
				break;
		case 2:
				x1[0].src="https://i.imgur.com/LEfpKhk.jpg";
				number++;
				break;
		case 3:
				x1[0].src="https://i.imgur.com/l17SSZG.jpg";
				number++;
				break;
		case 4:
				x1[0].src="https://i.imgur.com/8cIkxmW.jpg";
				number++;
				break;
		case 5:
				x1[0].src="https://i.imgur.com/OJfhk4S.jpg";
				number++;
				break;
		case 6:
				x1[0].src="https://i.imgur.com/bTFetBw.jpg";
				number++;
				break;
		case 7:
				x1[0].src="https://i.imgur.com/yFFceHQ.png";
				number++;
				break;
		case 8:
				x1[0].src="https://c.s-microsoft.com/zh-tw/CMSImages/Surface_Studio_Overview_Hero_V1.jpg?version=db8b40ba-0b35-2af0-b9d9-8e4a2ae2edbf";
				if (number==8){
					number=0;
				}
				break;
	}
}
function gopage(index){
	var p = document.getElementById("thethird");
	switch (index){
		case 1:
			p.innerHTML='<iframe width="100%" height="100%" src="fast.html" frameBorder="0"></iframe>';
            break;
        case 2:
        	p.innerHTML='<iframe width="100%" height="100%" src="server.html" frameBorder="0"></iframe>';
        	break;
        case 3:
        	p.innerHTML='<iframe width="100%" height="100%" src="comput.html" frameBorder="0"></iframe>';
        	break;
        case 4:
        	p.innerHTML='<iframe width="100%" height="100%" src="member.html" frameBorder="0"></iframe>';
        	break;
        case 5:
        	p.innerHTML='<iframe width="100%" height="100%" src="about.html" frameBorder="0"></iframe>';
        	break;
        case 6:
        	p.innerHTML='<iframe width="100%" height="100%" src="story.html" frameBorder="0"></iframe>';
        	break;
	}
}
function changepage(value){
	var seop = value.options[value.selectedIndex]; 
	var p = document.getElementById("thethird");
	if (seop.value=="1"){
		p.innerHTML='<iframe width="100%" height="100%" src="pad.html" frameBorder="0"></iframe>';
	}else if (seop.value=="2"){
		p.innerHTML='<iframe width="100%" height="100%" src="comput.html" frameBorder="0"></iframe>';
	}else if (seop.value=="3"){
		p.innerHTML='<iframe width="100%" height="100%" src="Merchandise.html" frameBorder="0"></iframe>';
	}else if (seop.value=="4"){
		p.innerHTML='<iframe width="100%" height="100%" src="other.html" frameBorder="0"></iframe>';
	}
}
function gohome(){
	window.location.reload("index.html");
}
function gopage2(index){
	var p = document.getElementById("thethird");
	switch (index){
		case 1:
			p.innerHTML='<iframe width="100%" height="100%" src="card.html"frameBorder="0"></iframe>';
            break;
        case 2:
        	p.innerHTML='<iframe width="100%" height="100%" src="cpu.html" frameBorder="0"></iframe>';
        	break;
        case 3:
        	p.innerHTML='<iframe width="100%" height="100%" src="motherboard.html" frameBorder="0"></iframe>';
        	break;
        case 4:
        	p.innerHTML='<iframe width="100%" height="100%" src="hostshell.html" frameBorder="0"></iframe>';
        	break;
        case 5:
        	p.innerHTML='<iframe width="100%" height="100%" src="ram.html" frameBorder="0"></iframe>';
        	break;
        case 6:
        	p.innerHTML='<iframe width="100%" height="100%" src="mouse.html" frameBorder="0"></iframe>';
        	break;
	}
}
function NO(){
	var p = document.getElementById("thethird");
	p.innerHTML='<iframe width="100%" height="100%" src="news.html" frameBorder="0"></iframe>';
}
function YES(){
	var p = document.getElementById("thethird");
	p.innerHTML='<iframe width="100%" height="100%" src="cutsmer.html" frameBorder="0"></iframe>';
}