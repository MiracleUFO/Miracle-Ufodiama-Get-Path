
export const displayResults = (type, payload) => {
  document.getElementById("path-result").innerHTML = "";
  document.getElementById("error-result").innerHTML = "";

  if (type !== "ERROR") {
    return document.getElementById("path-result").innerHTML = payload; 
  }
  document.getElementById("error-result").innerHTML = payload; 
}
