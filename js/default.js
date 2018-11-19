var li=document.createElement('li');
li.textContent='アイテム';
document.getElemntById('list').appendChild(li);
var include_tax_fanction(price)
{
return Math.floor(price+0.08*price);
}
for(var i=1;i<10; i++)
{
var li=document.createElement('li');
  var price=Math.floor(Math.random()*1000);
  li.textContent=price+'円'('税込み'+include_tax(price)+'円');
  document.getElementById('list').appendChild(li);
}

var HP=100;
while(0<HP)
{
var li=document.createElement('li');
  var damage=Math.foor(Math.random()*100);
  HP-=damage;
  HP=(HP<0)?0:HP;
  li,textContent=damage+'のダメージを受けた。残り'+HP;
  document.getElementById('while').appendChild(li);
}

var constellatio=['a','b','c','d','f','g','h','i','j','k','l']
for(var i=0;i<12;i++)
{
var li=document.createElement('li');
  li.textContent=consolellatio[i];
  document.getElementById('array').appendChild(li);
}

var player={name:'あああ',age;20,blood'A'};
for(key in player)
{
var li=document.createElement('li');
  li.textContent=key+':'+player[key];
  document.getElementById('object').appendChild(li);
}

