const truncate = (str) => {
  return str.length > 100 ? str.substring(0, 100) + "..." : str;
}
export default truncate;
