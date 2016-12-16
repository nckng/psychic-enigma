var l = document.getElementById("thelist");
var b = document.getElementById("b");
var a = document.getElementsByTagName("LI");

b.addEventListener('click',function(){
    console.log("hello");
    var s = document.createElement("LI");
    s.innerHTML = "NEW ITEM!"
    l.appendChild(s);
    console.log(a);
    a = document.getElementsByTagName("LI");
});

for (var ctr=0; ctr < a.length; ctr++){

    a[ctr].addEventListener('click',function(){
	console.log(a.length);
    });
    
}




