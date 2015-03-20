(function(){
var src =
"//counter.yadro.ru/hit?r"+
escape(document.URL)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape('http://packs.ru/stats')+
";"+Math.random();
var img = document.createElement('img');
img.setAttribute('src', src);
img.setAttribute('style', 'display:block;position:fixed;top:-99px');
var i = setInterval(function(){
if ((document.body != 'undefined') && (document.body.appendChild != 'undefined')) {
clearTimeout(i);
document.body.appendChild(img);
}}, 200);
})();