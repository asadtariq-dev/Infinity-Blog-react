export default function truncate(str) {
  return str.length > 100 ? str.substring(0, 100) + "..." : str;
}
