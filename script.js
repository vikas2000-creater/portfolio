let menu= document.querySelector('#menu-bars');
let header= document.querySelector('header');
menu.onclick =()=>{
	menu.classList.toggle('fa-times');
	 menu.classList.toggle('active');
}