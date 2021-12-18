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

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const button = document.querySelector(".happiness");
	button.addEventListener("click", () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  });

  // leaves falling animation
	$('.sakura-falling').sakura();
});
