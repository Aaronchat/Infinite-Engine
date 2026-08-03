// Randomization helpers

export const pick = a => a[1 + Math.floor(Math.random() * (a.length - 1))];

export const val = (library, group, key) => {
  const s = document.getElementById(key).value;
  const arr = library[group][key];
  return s === "🎲 Random" ? pick(arr) : s;
};

export function resolve(library, group, key) {
  const s = document.getElementById(key).value;
  return s === "🎲 Random" ? pick(library[group][key]) : s;
}
