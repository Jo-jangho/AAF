var li = document.getElementById('slide1');
var monster = li.firstElementChild.firstElementChild.firstElementChild.lastElementChild;
var curMonName = montser.textContent;

var monCatch = new Array();
monCatch[0] = new Array();

var bCheck = 0;

var monCatchLength = monCatch.length;

//////////////////////////////////////////////////////////////

for(var i = 0 ; i < monCatchLength ; i++)
{
    if(monCatch[i] == curMonName)
    {
        monCatch[i][0]++;
        bCheck++;
    }
}

if(bCheck == 1)
{
    monCatch[monCatchLength] = curMonName;
    monCatch[monCatchLength][0] = 1;
    bCheck--;
}

//////////////////////////////////////////////////////////////

var div = document.createElement("div");

for(var i = 0 ; i < monCatchLength ; i++)
{
    var list = document.createElement("p");
    var monName = document.createTextNode(monCatch[monCatchLength]);
    var monCount = document.createTextNode(monCatch[monCatchLength][0]);
    list.appendChild(monName);
    list.appendChild(monCount);

    li.appendChild(list);
}
