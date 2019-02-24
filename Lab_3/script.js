const tdElements = document.getElementsByTagName('tr');

const getRandomColor = () => {
  return "#"+((1<<24)*Math.random()|0).toString(16); 
}

for (const element of tdElements) {
  setInterval(() => {
    element.style.backgroundColor = getRandomColor();
  }, 2000);
}