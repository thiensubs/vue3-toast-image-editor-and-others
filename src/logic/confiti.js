import {
  onMounted
} from 'vue'
import confetti from 'canvas-confetti';
export function confetiNow() {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  onMounted(() => {
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: {
        y: 0.6
      }
    });
  })
  return {
    randomInRange
  }
}