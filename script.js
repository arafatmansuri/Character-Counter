const textArea = document.getElementById("textarea");
const totalChar = document.getElementById("total_care");
const remainChar = document.getElementById("remaining_care");
textArea.addEventListener('keyup',() => {
  updateCounter();
});
updateCounter();
function updateCounter(){
    totalChar.innerText = textArea.value.length;

    remainChar.innerText = textArea.getAttribute("maxLength")- textArea.value.length; 
}