var l = document.getElementById("thelist");
var b = document.getElementById("b");
var a = document.getElementsByTagName("LI");
var x = document.getElementById('h').innerHTML;
var v = document.getElementById('button');
var list = document.getElementById('list');

for (var ctr=0; ctr < a.length; ctr++){	
    a[ctr].addEventListener('click',function(){
	this.remove()
    });
    a[ctr].addEventListener('mouseover',function(){
	var h = document.getElementById('h');
	h.innerHTML = this.innerHTML;
    });
    a[ctr].addEventListener('mouseout',function(){
	var h = document.getElementById('h');
	h.innerHTML = x;
    });
}

b.addEventListener('click',function(){
    console.log("hello");
    var s = document.createElement("LI");
    s.innerHTML = "NEW ITEM!"
    l.appendChild(s);
    console.log(a);
    a = document.getElementsByTagName("LI")
    for (var ctr=0; ctr < a.length; ctr++){	
	a[ctr].addEventListener('click',function(){
	    this.remove();
	});
	a[ctr].addEventListener('mouseover',function(){
	    var h = document.getElementById('h');
	    h.innerHTML = this.innerHTML;
	});
	
	a[ctr].addEventListener('mouseout',function(){
	    var h = document.getElementById('h');
	    h.innerHTML = x;
	});
    }
});

var one = 1;
var two = 1;


v.addEventListener('click',function(){
    var r = document.createElement("LI");
    r.innerHTML = one;
    list.appendChild(r);
    var stor = one + two;
    one = two;
    two = stor;
});
		   





