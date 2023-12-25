const themeBtn = document.getElementById("myBtn");

themeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const currentBgColor = getComputedStyle(root).getPropertyValue('--page').trim();
  
  if (currentBgColor === 'hsl(249, 19%, 14%)') {
    root.style.setProperty('--page', 'hsl(25, 26%, 67%)');
    root.style.setProperty('--highlight', 'white');
    root.style.setProperty('--noHighligh', 'white');
    root.style.setProperty('--dark', 'hsl(25, 14%, 45%)');
    root.style.setProperty('--background', 'white');
    root.style.setProperty('--orange', 'hsl(186, 87%, 39%)');
  } else {
    root.style.setProperty('--page', 'hsl(249, 19%, 14%)');
    root.style.setProperty('--highlight', 'white');
    root.style.setProperty('--noHighligh', 'hsl(236, 7%, 54%)');
    root.style.setProperty('--dark', 'hsl(225, 14%, 16%)');
    root.style.setProperty('--background', 'hsl(249, 16%, 24%)');
    root.style.setProperty('--orange', 'hsl(12, 100%, 66%)');

  }
});