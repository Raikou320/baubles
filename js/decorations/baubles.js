import color from "../graphical/color.js";
import { ctx } from "../utils/canvas.js";

/**
 *
 * @param {number} x The x position of the center of the bauble
 * @param {number} y The y position of the center of the bauble
 * @param {number} r The radius of the bauble (> than 0 and finite)
 * @param {string} baubleHue The hsl hue of the bauble
 * @param {string} starHue The hsl hue of the star
 * @returns {void}
 * @description Draws a bauble with a star in the middle
 */

export function starBauble(x, y, r, baubleHue, starHue) {
  const baubleColorGradient = ctx.createRadialGradient(
    x + r / 4,
    y - r / 3,
    r / 3,
    x,
    y,
    r
  );
  baubleColorGradient.addColorStop(0.2, color.light(baubleHue));
  baubleColorGradient.addColorStop(0.4, color.normal(baubleHue));
  baubleColorGradient.addColorStop(0.9, color.darkest(baubleHue));
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = baubleColorGradient;
  ctx.fill();
  const starR = r / 2;
  const starInnerR = r / 3;
  const points = 5;
  const step = Math.PI / points;
  const starColorGradient = ctx.createLinearGradient(
    x + starInnerR / 4,
    y - starInnerR / 3,
    x,
    y
  );
  starColorGradient.addColorStop(0.2, color.light(starHue));
  starColorGradient.addColorStop(0.4, color.normal(starHue));
  ctx.beginPath();
  ctx.moveTo(x, y - starR);
  for (let i = 1; i < points * 2; i++) {
    const angle = i * step - Math.PI / 2;
    const starActualR = i % 2 === 0 ? starR : starInnerR;
    ctx.lineTo(
      x + starActualR * Math.cos(angle),
      y + starActualR * Math.sin(angle)
    );
  }
  ctx.closePath();
  ctx.fillStyle = starColorGradient;
  ctx.fill();
}

/**
 * 
 * @param {number} x The x position of the center of the bauble
 * @param {number} y the y position of the center of the bauble
 * @param {number} r The radius of the bauble
 * @param {number} hue The hsl hue of the bauble
 * @returns {void}
 * @description Draws a bauble
 */

export function bauble(x, y, r, hue) {
  const gradient = ctx.createRadialGradient(x + r / 4, y - r / 3, r / 3, x, y, r);
  gradient.addColorStop(0.2, color.light(hue));
  gradient.addColorStop(0.4, color.normal(hue));
  gradient.addColorStop(0.9, color.darkest(hue));
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
}

export function christmasTreeBauble(x, y, r, hue) {
  const baubleGradient = ctx.createRadialGradient(x + r / 4, y - r / 3, r / 3, x, y, r);
  baubleGradient.addColorStop(0.2, color.light(hue));
  baubleGradient.addColorStop(0.4, color.normal(hue));
  baubleGradient.addColorStop(0.9, color.darkest(hue));
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = baubleGradient;
  ctx.fill();
  const christmasTreeHue = 100;
  const christmasTreeColor = color.darkest(christmasTreeHue);
  const christmasTreeTrunkColor = color.darkest(25);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + r - r / 3, y + r - r / 4);
  ctx.lineTo(x - r + r / 3, y + r - r / 4);
  ctx.closePath();
  ctx.fillStyle = christmasTreeColor;
  ctx.fill();
  ctx.fillStyle = christmasTreeTrunkColor;
  ctx.fillRect(x - r / 16, y + r - r / 4, r / 8, r / 4);
}