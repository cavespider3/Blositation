   function ToBlositeresult()
{
document.getElementById("ResultBlos").innerHTML = Translate(document.getElementById("ToBlos").value,true);

}

function FromBlositeresult()
{

document.getElementById("ResultHUMAN").innerHTML = Translate(document.getElementById("FromBlos").value,false);

}

function Nez_Scout()//sudo get, returns page
{
return !window.location.href.split("?")[1]?"_Hub":window.location.href.split("?")[1].split("&")[0];
}

//The massive code that handles the Blosite language and special text handlers//
var Noselect = false;

/*
Blosite attributes:
none-Translate
Decode - Decodes Blositations
Menu - Initalizes a Menu (doesnt translate)
MenuOption - menu option (doesnt translate)
ForceTranslate - Forces the text to translate
MenuData - Holds Blosite Menu pages (doesnt translate) (max of 1 per html file!)
*/
var KAYS = "_Hub";
if(!Nez_Scout())
{
KAYS = "_Hub";
}
else{
KAYS = Nez_Scout();
Nez_Page(KAYS);
}

var OLD_TEXT_CLOUD =null;
//console.log(document.querySelectorAll("Blosite[MenuData]")[0]);
var PLR_CUR = document.querySelectorAll("Blosite[MenuData]")[0];
if(!PLR_CUR)
{
}else
{
PLR_CUR.setAttribute("CursorMax",1);
PLR_CUR.setAttribute("CursorPos",1);
}
OLD_TEXT_CLOUD = document.getElementById("Visiblemenu").innerHTML;
Blosite_Node_Handle(document.body);

function Blosite_Node_Handle(Node)
{
	//console.log(Node.children)
	for(let Z=0;Z<Node.children.length;Z++)
{

	if(Node.children[Z].nodeName=="BLOSITE")
	{
	if (Node.children[Z].hasAttribute("MenuData"))
	{
	Node.children[Z].style.visibility = "hidden";
	continue;
	} 
	//If it's the case check for any menu related nodes
	let A = Node.children[Z];
	//console.log(A);
	if(Node.children[Z].children.length==0)
	{
	Node.children[Z].innerText = Translate(A.innerText,!A.hasAttribute("Decode"),A.hasAttribute("Menu"),A.hasAttribute("MenuOption"),A.hasAttribute("ForceTranslate"),Node.children[Z],A.hasAttribute("MenuData"));
	

	}else{
		for(var Y =0;Y<Node.children[Z].children.length;Y++)
	{
		Node.children[Z].children[Y].innerText = Translate(Node.children[Z].children[Y].innerText,!Node.children[Z].children[Y].hasAttribute("Decode"),Node.children[Z].children[Y].hasAttribute("Menu"),Node.children[Z].children[Y].hasAttribute("MenuOption"),Node.children[Z].children[Y].hasAttribute("ForceTranslate"),Node.children[Z].children[Y],Node.children[Z].children[Y].hasAttribute("MenuData"));
		
		
	}
	}
	}else if(Node.children[Z].children.length>=0)
	{
	Blosite_Node_Handle(Node.children[Z]);		
	}else{continue;}
	//document.getElementsByTagName("Blosite")[Z].innerText = Translate(document.getElementsByTagName("Blosite")[Z].innerText,!document.getElementsByTagName("Blosite")[Z].hasAttribute("Decode"),document.getElementsByTagName("Blosite")[Z].hasAttribute("Menu"),document.getElementsByTagName("Blosite")[Z].hasAttribute("MenuOption"),document.getElementsByTagName("Blosite")[Z].hasAttribute("ForceTranslate"),Z,document.getElementsByTagName("Blosite")[Z].hasAttribute("MenuData"));	
	
	
	
		

	
	
	
}
}
//console.log(document.getElementsByTagName("Console_Nez")[0].getElementsByTagName("Blosite")[0].getElementsByTagName("Blosite"));



function Nez_Page(Key)
{
	
let F = document.body.children;
var NEW = null;
for(var Q=0;Q<F.length;Q++)
{
//console.log(F[Q].querySelectorAll("Blosite["+Key+"]"));
let E = F[Q].querySelectorAll("Blosite["+Key+"]");
for(var X=0;X<E.length;X++)
{
if(E[X].hasAttribute("menu"))
{
NEW = E[X].cloneNode(true);
//console.log(E[X]);
break;
}	
}
	
}

const OLD = document.querySelector("#Visiblemenu");
console.log();
NEW.id="Visiblemenu";
OLD.parentNode.replaceChild(NEW, OLD);

OLD_TEXT_CLOUD=NEW.innerHTML;
}

function Refresh_Text(Up,Down,Yes)
{


if(Up)
{
PLR_CUR.setAttribute("CursorPos",Math.max(1,Number(PLR_CUR.getAttribute("CursorPos")-1)));	
}
if(Down)
{
PLR_CUR.setAttribute("CursorPos",Math.min(Number(PLR_CUR.getAttribute("CursorMax"))-1,Number(PLR_CUR.getAttribute("CursorPos"))+1));	
}

if(Yes&&!Noselect)
{
PLR_CUR.setAttribute("CursorPos",1);
Nez_Page(KAYS);
}else{

}
PLR_CUR.setAttribute("CursorMax",1);
document.getElementById("Visiblemenu").innerHTML =OLD_TEXT_CLOUD;
Blosite_Node_Handle(document.getElementById("Visiblemenu"));
}

document.onkeypress = function(event){
    var key_press = String.fromCharCode(event.keyCode);
	var status = document.getElementById('Gamezone');
	//console.log(Folder);
	switch(event.keyCode)
	{
		case 115:
		case 83:
		Refresh_Text(false,true,false);
		break;
		case 87:
		case 119:
		Refresh_Text(true,false,false);
		
		break;
		case 32:
		Refresh_Text(false,false,true);
		
		break;
		default:
		break;
	}
}


function Translate(Text,Bakify=true,IsConsole,Selectable,DOITANYWAYS,Blosite_Obj,BulkBlob)
{
	if(BulkBlob){//Folder = Blosite_Obj;
	return'';}
const Mojibake_Cosmium = {
"Mojibakify":["░","▒","▓","�"],
"upperprefix":"◹",
"lowerprefix":"◿",
"opensing":"▹",
"opendoub":"▸",
"closesing":"◃",
"closedoub":"◂",
".":"❯",
"?":"○",
"!":"◊",
",":"◦",
"/":"✦",
":":"◬",
";":"◕",
"-":"✏",

"a":"■",
"b":"□",
"c":"◎",
"d":"▣",
"e":"▤",
"f":"◶",
"g":"▦",
"h":"▧",
"i":"▨",
"j":"◴",
"k":"◇",
"l":"◫",
"m":"◭",
"n":"◮",
"o":"◍",
"p":"◗",
"q":"◖",
"r":"◤",
"s":"◧",
"t":"◳",
"u":"◢",
"v":"▼",
"w":"◣",
"x":"▩",
"y":"▽",
"z":"◈",
/*
	■	□	▢	▣	▤	▥	▦	▧	▨	▩	▪	▫	▬	▭	▮	▯
U+25Bx	▰	▱	▲	△	▴	▵	▶	▷	▸	▹	►	▻	▼	▽	▾	▿
U+25Cx	◀	◁	◂	◃	◄	◅	◆	◇	◈	◉	◊	○	◌	◍	◎	●
U+25Dx	◐	◑	◒	◓	◔	◕	◖	◗	◘	◙	◚	◛	◜	◝	◞	◟
U+25Ex	◠	◡	◢	◣	◤	◥	◦	◧	◨	◩	◪	◫	◬	◭	◮	◯
U+25Fx	◰	◱	◲	◳	◴	◵	◶	◷	◸	◹	◺	◻	◼	◽	◾	◿
*/
"one":"▖",
"two":"▗",
"three":"▝",
"four":"▘",
"five":"▚",
"six":"▛",
"seven":"▜",
"eight":"▙",
"nine":"▟",
"zero":"▞",
" ":" ",
"@":"✉",
"*":"❆",
"$":"⯏",
"|":"⬗"
};
const Id10t_Fixer = ["zero","one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
];
const Mojibake_SingleCase_List = [" ","0","1","2","3","4","5","6","7","8","9",".",",","/","?","!",";",":","\"","'","@","*","$","|"];
const UNINEZ=[
"✬","✭","✮","✯","❧","❀","❥","❖","❴","❵","🕱","☰","☱","☲","☳","☴","☵","☶","☷","⚙","☉","☄","☼","☾","❀","🞠","🞛","◈","🞚","◇"];
//Cosmium Curenncy:
//◇[28]-Pistils (flower related)
//🞚[27]-Sepals (◇x100)
//◈[26]-Petals (🞚x100)
//🞛[25]-??? (◈x100)
const Symbol_Convert = {
"...":"⌛︎",
". . .":"⌛︎",




}
let TranText = "";
var casecheck = Text;
let Upper = false;
let sOpen = false;
let dOpen = false;
Text = Text.toLowerCase();
var r = 0;
if(Blosite_Obj == null)
{}
else if(Blosite_Obj.hasAttribute("_break"))
	{
	Blosite_Obj.style.color = "#FFFA00";
	KAYS = KAYS;
	}	
//IMPORTANT, CHECK IF the listed option contains the Menu tag firstChild
if(IsConsole || Selectable)
{
	
if(Selectable)
{
//console.log(Blosite_Obj);
Blosite_Obj.setAttribute("NEZID",Number(PLR_CUR.getAttribute("CursorMax")));
PLR_CUR.setAttribute("CursorMax",Number(PLR_CUR.getAttribute("CursorMax"))+1);
TranText = casecheck;
}
if(DOITANYWAYS)
{
TranText = Translate(casecheck,Bakify,false,false,false,Blosite_Obj);
}
if(Number(Blosite_Obj.getAttribute("NEZID"))==Number(PLR_CUR.getAttribute("CursorPos")))
{
	Noselect = false;
for(var i=0;i<Blosite_Obj.attributes.length;i++)
{
	if(Blosite_Obj.attributes[i].localName.startsWith("_")&&Blosite_Obj.attributes[i].localName!="_break")
	{
		KAYS = Blosite_Obj.attributes[i].localName;
	}else if(Blosite_Obj.attributes[i].localName=="_break")
	{
	Blosite_Obj.style.color = "#FFFA00";
	KAYS = KAYS;
	Noselect = true;
	}
}

TranText +=" <";
}else if(Blosite_Obj.getAttribute("_break"))
	{
	Blosite_Obj.style.color = "#FFFA00";
	KAYS = KAYS;
		Noselect = true;
	}
return TranText;	
}
else if(Bakify)
{
		
for(r=0;r<Text.length;r++)
{


//console.log(Text[r]);
//Stepone: check if item is part of the main list or Single case list
if((Text.substr(r,5))==". . .")
{
			TranText+="⌛︎";	
	r+=5;
	continue;
}

if((Text.substr(r,7)).split(".")[0]=="&nez" || Text.substr(r,4)=="<br>"||Text.substr(r,2)=="\n"){
	if((Text.substr(r,10)).split(".")[1]=="curen")
		{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=MONEYMONEY(Calendate);
	
	r+=(W-r);	
	continue;	
	}
		
	else
	if ((Text.substr(r,10)).split(".")[1]=="calen")
	{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=Blos_Convert(true,Calendate);
	
	r+=(W-r);	
	continue;	
	}
	if ((Text.substr(r,10)).split(".")[1]=="cal_ez")
	{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=Blos_Convert(true,Calendate,1);
	
	r+=(W-r);	
	continue;	
	}
	if ((Text.substr(r,10)).split(".")[1]=="cal_rel")
	{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=Blos_Convert(true,Calendate,2);
	
	r+=(W-r);	
	continue;	
	}
	if(Text.substr(r,4)=="<br>")
	{
		TranText+="\n";	
	r+=4;	
	continue;
	}
	if(Text.substr(r,2)=="\n")
	{
	r+=2;	
	continue;
	}
	if((casecheck.substr(r,7)).split(".")[1]=="br")
	{
	//console.log("SKIP");
	TranText+="\n";	
	r+=6;
	continue;
	}else
if(!isNaN(parseInt((casecheck.substr(r,8)).split(".")[1],10)))
{
let uniNez_Key = parseInt((casecheck.substr(r,8)).split(".")[1],10);
TranText+=!UNINEZ[uniNez_Key]?Mojibake_Cosmium["Mojibakify"][3]:UNINEZ[uniNez_Key];
r+=7;
continue;
}
}

if(Object.keys(Mojibake_Cosmium).includes(Text[r])||Mojibake_SingleCase_List.includes(casecheck[r]))
{

if (Object.keys(Mojibake_Cosmium).includes(Text[r]) != Mojibake_SingleCase_List.includes(Text[r]))
{
//console.log("LETTER");//NEW CHECK FOR THE &BS-X; key
if(Mojibake_SingleCase_List.includes(Text[r])){
if(Text[r]=="'")
{sOpen = !sOpen;
TranText += Mojibake_Cosmium[sOpen?"opensing":"closesing"];}
else if(Text[r]=="\"")
{dOpen = !dOpen;
TranText += Mojibake_Cosmium[dOpen?"opendoub":"closedoub"];}
else
{
//console.log(Number(Text[r]));
if(isNaN(parseInt(Text[r],10)))
{
TranText += Mojibake_Cosmium[Text[r]];}
else{
TranText+= Mojibake_Cosmium[Id10t_Fixer[Text[r]]];
}
}
}else{
if(casecheck[r]!=Text[r])
{
let old=Upper
Upper = true;
if(old!=Upper)
{
TranText += Mojibake_Cosmium[Upper?"upperprefix":"lowerprefix"];
}
}else if (Upper && Text[r]!=" "){
Upper = false;
TranText += Mojibake_Cosmium[Upper?"upperprefix":"lowerprefix"];
}
TranText += Mojibake_Cosmium[Text[r]];
}
}else{
//console.log("SYMBOL");
if(Text[r]=="'")
{sOpen = !sOpen;
TranText += Mojibake_Cosmium[sOpen?"opensing":"closesing"];}
else if(Text[r]=="\"")
{dOpen = !dOpen;
TranText += Mojibake_Cosmium[dOpen?"opendoub":"closedoub"];}
else
{
if(isNaN(parseInt(Text[r],10)))
{
TranText += Mojibake_Cosmium[Text[r]];}
else{
TranText+= Mojibake_Cosmium[Id10t_Fixer[Text[r]]];
}

}

}
}else{
TranText += Mojibake_Cosmium["Mojibakify"][3];
}


}

//.isUpperCase();

}else{
const FlipObject=function(OBJECT_){
let Mirror = new Object();
let AA = Object.keys(OBJECT_);
for(let A=0;A<AA.length;A++)
{
if(OBJECT_[AA[A]].constructor !== Array)
{
Mirror[OBJECT_[AA[A]]] = AA[A];
}
}
return Mirror;

}
let New_READONLY = FlipObject(Mojibake_Cosmium);
for(let r=0;r<Text.length;r++)
{
if((Text.substr(r,2))=="⌛︎")
{
			TranText+=". . . ";	
	r+=1;
	continue;
}
if(Text[r]==Mojibake_Cosmium["Mojibakify"][3]||!Object.values(Mojibake_Cosmium).includes(Text[r]))
{
TranText += Mojibake_Cosmium["Mojibakify"][3];
continue;
}
console.log(New_READONLY[Text[r]])
if(New_READONLY[Text[r]]=="upperprefix")
{
Upper = true;
continue;
}
if(New_READONLY[Text[r]]=="lowerprefix")
{
Upper=false;
continue;
}

if(New_READONLY[Text[r]]=="opensing"||New_READONLY[Text[r]]=="closesing")
{
TranText+="'";
continue;
}
if(New_READONLY[Text[r]]=="opendoub"||New_READONLY[Text[r]]=="closedoub")
{
TranText+="\"";
continue;
}
if(Id10t_Fixer.includes(New_READONLY[Text[r]]))
{
TranText+= Id10t_Fixer.indexOf(New_READONLY[Text[r]]);
continue;
}
TranText+= Upper?New_READONLY[Text[r]].toUpperCase():New_READONLY[Text[r]];


}

}
return TranText;
}
function MONEYMONEY(AMOUNT)
	{
	let A = AMOUNT.split("#");	
	let Pistals = Number((A[3]%100));
	let Sepals =Number((A[2]%100)) + Math.floor((A[3])/100);
	let Petals = Number(1+(A[1])%100) + Math.floor((A[2])/100);
	let Sakuras = Number(1+(A[0])%100) + Math.floor((A[1])/100);
	return Translate((Sakuras>0?"&nez.026"+Sakuras:"")+(Petals>0?"&nez.027"+Petals:"")+(Sepals>0?"&nez.028"+Sepals:"")+(Pistals>0?"&nez.029"+Pistals:""));
	}
function Blos_Convert(translate,Text,mode=0)
{
	let A = Text.split("#");
	if(mode==0)
	{
	let Day = Number((A[4]%32))+1;
	let Month =Number((A[3]%16)+1) + Math.floor((A[4])/32);
	let Season = Number(1+(A[2]%4)) + Math.floor((A[3])/16);
	let Year = Number(1+(A[1]%4096)) + Math.floor((A[2])/4);
	let Eon =Number( (A[0])+1) + Math.floor((A[1])/4096);
	return Translate((Eon>0?"&nez.024"+Eon:"")+(Year>0?"&nez.023"+Year:"")+(Season>0?"&nez.022"+Season:"")+(Month>0?"&nez.021"+Month:"")+(Day>-2?"&nez.020"+Day:""));
	}
		if(mode==1)//Simple 1:1
	{
	}
			if(mode==2)
	{
	let Day = Number((A[4]%32))+1;
	let Month =Number((A[3]%16)+1) + Math.floor((A[4])/32);
	let Season = Number(1+(A[2]%4)) + Math.floor((A[3])/16);
	let Year = Number(1+(A[1]%4096)) + Math.floor((A[2])/4);
	let Eon =Number( (A[0])+1) + Math.floor((A[1])/4096);
	return Translate((Eon>0?"&nez.024"+Eon:"")+(Year>0?"&nez.023"+Year:"")+(Season>0?"&nez.022"+Season:"")+(Month>0?"&nez.021"+Month:"")+(Day>-2?"&nez.020"+Day:""));
	}
}

//Cooker.next();
