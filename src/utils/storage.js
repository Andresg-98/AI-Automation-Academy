export function guardarXP(xp) {
  localStorage.setItem("xp", xp);
}

export function leerXP() {
  return localStorage.getItem("xp");
}