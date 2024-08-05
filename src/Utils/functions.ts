/**
 * 
 * @param {string} text -
 * @param {number} [max=50] -
 * @returns 
 */
export function textSlicer(text:string, max:number=50) {
  if (text.length >= max) {
    return `${text.slice(0, max)}...`
  }else {
    return text;
  }
}