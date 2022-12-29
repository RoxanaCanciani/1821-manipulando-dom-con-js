const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');//add: para agregar una clase, remove: para quitar
  i.addEventListener('click', completeTask);
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');// toggle: si existe la clase la quito, si no existe la agrego
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

export default checkComplete;
