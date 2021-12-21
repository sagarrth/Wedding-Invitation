import confetti from "canvas-confetti";
import { getDatabase, ref, set, onValue} from "firebase/database";

export default function initConfettiLogic() {
  const randomInRange = (min, max) => Math.random() * (max - min) + min;
  const button = document.querySelector(".happiness");
  const claps = document.querySelector("#claps");
  let data;

  const db = getDatabase();
  const clapsCountRef = ref(db, 'claps/');
  onValue(clapsCountRef, (snapshot) => {
    data = snapshot.val();
    claps.textContent = `(${data})`;
  });

  
  button.addEventListener("click", () => {
    if (data !== undefined) {
      set(ref(db, 'claps'), data+1);
    }
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
}