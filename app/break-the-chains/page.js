"use client";

import confetti from "canvas-confetti";
import Navbar from "@/components/navbar";
import Download from "./download";

export default function BreakTheChains() {
  var duration = 43200000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const handleClick = () => {
    Download(document.querySelector("input[name='onshape-url']").value, "STL");
    handleConfetti();
    setInterval(() => {
      handleConfetti();
    }, 15000);
  };

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
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
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
            <input
              type="url"
              name={"onshape-url"}
              className={"input input-bordered w-full"}
            />
          </label>
          <button className={"btn btn-primary w-full"} onClick={handleClick}>
            UnShape Me?
          </button>
        </div>
      </div>
      <div className="w-full p-[100px] flex flex-col justify-center items-center bg-primary">
        <div className="flex flex-col max-w-[700px] gap-5 justify-center items-center">
          <p className="text-xl">
            <b>Software License Agreement</b>
            <br />
            This Software License Agreement (the "Agreement") is entered into
            between UnShape ("Licensor") and the user ("Licensee") regarding the
            use of the software ("Software").
            <br />
            <br />
            <b>1. License Grant</b>
            <br />
            Subject to the terms and conditions of this Agreement, Licensor
            grants Licensee a worldwide, royalty-free, and non-exclusive license
            to use the intellectual property contained in the Software without
            restriction. This license includes, but is not limited to, the
            rights to use, copy, modify, merge, publish, distribute, sublicense,
            and/or sell copies of the Software, and to permit persons to whom
            the Software is made available to do the same.
            <br />
            <br />
            <b>2. Third-Party Model Usage</b>
            <br />
            Licensee acknowledges and agrees that Licensor acts as a third party
            to download Licensee's model. By accepting this Agreement, Licensee
            grants Licensor complete rights to the model. In return, Licensor
            grants Licensee the complete right to use their model for any
            purpose, including commercial use.
            <br />
            <br />
            <b>3. No Warranties</b>
            <br />
            The Software is provided "as is," without warranty of any kind,
            express or implied, including but not limited to the warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
            <br />
            <br />
            <b>4. Limitation of Liability</b>
            <br />
            In no event shall Licensor be liable for any direct, indirect,
            incidental, special, exemplary, or consequential damages (including,
            but not limited to, procurement of substitute goods or services;
            loss of use, data, or profits; or business interruption) arising in
            any way out of the use of the Software, even if advised of the
            possibility of such damage.
            <br />
            <br />
            <b>5. Entire Agreement</b>
            <br />
            This Agreement constitutes the entire agreement between Licensor and
            Licensee concerning the subject matter hereof and supersedes all
            prior or contemporaneous agreements, representations, warranties,
            and understandings. By accepting this Agreement, Licensee
            acknowledges that they have read and understood all terms and
            conditions and agree to be bound by them.
          </p>
          <p className="text-md w-full italic flex justify-end">- UnShape</p>
        </div>
      </div>
    </div>
  );
}
