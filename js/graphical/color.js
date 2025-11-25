const color = {
  /**
   * @param {number} hue The hue of the hsl returned color
   * @returns {string} The hsl color string
   * @description A function who takes a number (the hue) and returns a hsl color string with the hue.
   */
  light: (hue) => {
    return `hsl(${hue}, 100%, 70%)`;
  },
  /**
   * @param {number} hue The hue of the hsl returned color
   * @returns {string} The hsl color string
   * @description A function who takes a number (the hue) and returns a hsl color string with the hue.
   */
  normal: (hue) => {
    return `hsl(${hue}, 100%, 50%)`;
  },
  /**
   * @param {number} hue The hue of the hsl returned color
   * @returns {string} The hsl color string
   * @description A function who takes a number (the hue) and returns a hsl color string with the hue.
   */
  dark: (hue) => {
    return `hsl(${hue}, 100%, 30%)`;
  },
  /**
   * @param {number} hue The hue of the hsl returned color
   * @returns {string} The hsl color string
   * @description A function who takes a number (the hue) and returns a hsl color string with the hue.
   */
  darker: (hue) => {
    return `hsl(${hue}, 100%, 20%)`;
  },
  /**
   * @param {number} hue The hue of the hsl returned color
   * @returns {string} The hsl color string
   * @description A function who takes a number (the hue) and returns a hsl color string with the hue.
   */
  darkest: (hue) => {
    return `hsl(${hue}, 100%, 10%)`;
  }
}

export default color;