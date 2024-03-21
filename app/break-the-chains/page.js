"use client"

import confetti from "canvas-confetti";
import Navbar from "@/components/navbar";

export default function BreakTheChains() {
  var duration = 43200000
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const handleClick = () => {
    handleConfetti()
    setInterval(() => {
      handleConfetti()
    }, 15000);
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
        <div className={"min-h-svh"}>
            <Navbar />
            <div className={"flex h-[80vh] justify-center items-center"}>
                <div className={"flex flex-col gap-2"}>
                    <label className="form-control w-full max-w-lg">
                      <div className="label">
                        <span class="label-text">Download URL</span>
                      </div>
                      <input type="url" name={"onshape-url"} className={"input input-bordered w-full"} />
                    </label>
                    <button className={"btn btn-primary w-full"} onClick={handleClick}>Ushnap Mi?</button>
                </div>
            </div>
        </div>
    )
}