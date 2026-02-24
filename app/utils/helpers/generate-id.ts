/**
 * @function generateId
 * @description Generates a random number.
 * @param {string} type Accepts 'small' to generate a smaller number with a maximum of MAX_SAFE_INTEGER
 * @return {number | string} Returns a random generated number
 */
export function generateId(type?: "numeric"): number | string {
    return type === "numeric"
        ? Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1))
        : (Math.random() + 1).toString(36).substring(7);
}
