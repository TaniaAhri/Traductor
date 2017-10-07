

function traducir(s) {
	var vocal=['a','e','i','o','u']
	let r=s.split('')
	for (var i = 0; i < vocal.length; i++) {
		for (var j = 0; j < r.length; j++) {
			if (vocal[i] == r[j] && r[j-1] != 'q' && r[j-1] != 'g'){
				r[j]+=`p${vocal[i]}`
			}
		}
	}return r.join('')
}


function procesar() {
	var txt=document.getElementById('cadena').value;
	var lb=document.getElementById('traducido');

	lb.value=traducir(txt);
}


window.addEventListener('keyup',procesar,false);

