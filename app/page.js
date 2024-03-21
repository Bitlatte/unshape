"use client"
import confetti from "canvas-confetti";

export default function Home() {
  var duration = 43200000
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const handleConfetti = () => {
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  };

  return (
    <div className={"flex justify-center items-center h-full"}>
      <div className={"flex flex-col gap-2 w-96"}>
        <label class="input input-bordered flex items-center gap-2">
          <i className={"ri-link"} />
          <input type="url" name={"onshape-url"} className={"grow"} placeholder={"Onshape Link"} />
        </label>
        <button className={"btn btn-primary w-full"} onClick={handleConfetti}>Ushnap Mi?</button>
        
      </div>
    </div>
  );
}
