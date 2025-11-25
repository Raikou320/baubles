/** @type {HTMLCanvasElement} */
const canvas = document.createElement("canvas");
export default canvas;
/** @type {CanvasRenderingContext2D} */
export const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 300;
canvas.height = 500;