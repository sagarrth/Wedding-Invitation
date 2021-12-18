$(document).ready(function(){
	$('#card-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		mobileFirst: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: screen.width >= 768
	});


	// Set the date we're counting down to
	const countDownDate = new Date("Jan 25, 2022 00:00:00").getTime();

	const timeUnits = ['days', 'hours', 'minutes', 'seconds'];

	const timeElementNodes = timeUnits.reduce((hash, unit) => {
		hash[unit] = document.getElementById(unit);
		return hash;
	}, {});

	// Update the count down every 1 second
	const timerId = setInterval(function() {
		// Get todays date and time
		const now = new Date().getTime();
		
		// Find the distance between now and the count down date
		const distance = countDownDate - now;
		
		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		timeElementNodes.days.textContent = days < 10 ? `0${days}` : days;
		timeElementNodes.hours.textContent = hours < 10 ? `0${hours}` :  hours;
		timeElementNodes.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
		timeElementNodes.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
			
		// If the count down is over, write some text 
		if (distance < 0) {
				clearInterval(timerId);
				document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
		}
	}, 1000);

	const button = document.querySelector(".happiness");
	const config = {
		angle: 90,
		spread: 360,
		startVelocity: 40,
		elementCount: 100,
		dragFriction: 0.12,
		duration: 5000,
		stagger: 12,
		width: "12px",
		height: "12px",
		perspective: "500px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
		random: Math.random
	};
	button.addEventListener("click", () => confetti(button, config));

	$('.sakura-falling').sakura();
});
