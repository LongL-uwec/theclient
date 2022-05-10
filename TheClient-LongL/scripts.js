function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.home-donations>h3').addEventListener('click', function(){
		document.querySelector('.home-donations>article').classList.toggle('show');
	});
    document.querySelector('.home-backstory>h3').addEventListener('click', function(){
		document.querySelector('.home-backstory>article').classList.toggle('show');
	});
    document.querySelector('.home-vendors>h3').addEventListener('click', function(){
		document.querySelector('.home-vendors>article').classList.toggle('show');
	});
    document.querySelector('.home-penguins>h3').addEventListener('click', function(){
		document.querySelector('.home-penguins>article').classList.toggle('show');
	});
});
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.about-backstory>h3').addEventListener('click', function(){
		document.querySelector('.about-backstory>article').classList.toggle('show');
	});
    document.querySelector('.about-hosts>h3').addEventListener('click', function(){
		document.querySelector('.about-hosts>.image-info-a').classList.toggle('show');
		document.querySelector('.about-hosts>.image-info-b').classList.toggle('show');
		document.querySelector('.about-hosts>.image-info-c').classList.toggle('show');
	});
});
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.music>h3').addEventListener('click', function(){
		document.querySelector('.music>.image-info-y').classList.toggle('show');
		document.querySelector('.music>.image-info-z').classList.toggle('show');
	});
    document.querySelector('.stand-up>h3').addEventListener('click', function(){
		document.querySelector('.stand-up>.image-info-y').classList.toggle('show');
		document.querySelector('.stand-up>.image-info-z').classList.toggle('show');
	});
    document.querySelector('.food>h3').addEventListener('click', function(){
		document.querySelector('.food>.image-info-y').classList.toggle('show');
		document.querySelector('.food>.image-info-z').classList.toggle('show');
	});
});
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.contact-location>h3').addEventListener('click', function(){
		document.querySelector('.contact-location>article').classList.toggle('show');
	});
    document.querySelector('.contact-parking>h3').addEventListener('click', function(){
		document.querySelector('.contact-parking>article').classList.toggle('show');
	});
    document.querySelector('.contact-hosts>h3').addEventListener('click', function(){
		document.querySelector('.contact-hosts>.host-one').classList.toggle('show');
		document.querySelector('.contact-hosts>.host-two').classList.toggle('show');
		document.querySelector('.contact-hosts>.host-three').classList.toggle('show');
	});
});

