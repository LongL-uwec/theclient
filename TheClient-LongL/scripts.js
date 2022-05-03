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
		document.querySelector('.about-hosts>article').classList.toggle('show');
	});
});
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.music>h3').addEventListener('click', function(){
		document.querySelector('.music>article').classList.toggle('show');
	});
    document.querySelector('.stand-up>h3').addEventListener('click', function(){
		document.querySelector('.stand-up>article').classList.toggle('show');
	});
    document.querySelector('.food>h3').addEventListener('click', function(){
		document.querySelector('.food>article').classList.toggle('show');
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
		document.querySelector('.contact-hosts>article').classList.toggle('show');
	});
});

