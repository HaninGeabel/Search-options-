
function makeVisible() {
	document.getElementById('choices').style.visibility='visible';
	//function adddata();

}





 function getFHV(){
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.getElementById("result").innerHTML = xhr.responseText;
		setTimeout(adddata,1000);
	  }
	};
	xhr.open("GET", "data1.html", true);
	xhr.send();

}


function getLCD(){
    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
			setTimeout(adddataSecond,1000);
          }
        };
        xhr.open("GET", "data2.html", true);
        xhr.send();
    
    }


    function getAPUC(){
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.getElementById("result").innerHTML = xhr.responseText;
		setTimeout(adddataThird,1000);
	  }
	};
	xhr.open("GET", "data3.html", true);
	xhr.send();

}


