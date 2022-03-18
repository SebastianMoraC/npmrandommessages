const names = [
  "Melisa",
  "Julian",
  "Isabela",
  "Mauricio",
  "Sebastián",
  "David",
  "Arthuro",
  "Lorena",
  "Loreno",
  "Laura",
];
const generatorNames = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
};
console.log(generatorNames());

module.exports = { generatorNames };
