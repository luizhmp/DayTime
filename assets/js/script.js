function load(){

	var msg = document.getElementById('msg');
	var img = document.getElementById('img');

	var date = new Date();
	var hour = date.getHours();
	msg.innerHTML = "Now it's "+hour+" o'clock.";
	if(hour >= 0 && hour < 12){
		img.src = "assets/images/manha.jpg";
		document.body.style.background = '#e2cd9f';
	}else if (hour >= 12 && hour <= 18){
		img.src = "assets/images/tarde.jpg";
		document.body.style.background = '#b9846f';
	}else{
		img.src = "assets/images/noite.jpg";
		document.body.style.background = '#515154';
	}

}