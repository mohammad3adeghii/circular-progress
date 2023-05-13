let progress = document.querySelector(".progress");
let percent =  document.querySelector(".percent");

let progressCount = 0;

function circular () {
    let startProgress = setInterval(() => {
      progressCount++;
      progress.style.setProperty(
        "background",
        `conic-gradient(rgb(58, 126, 228) ${progressCount * 3.6}deg, #f7f7f7 0deg)`
      );
      
      percent.innerHTML = `${progressCount}%`;

      if (progressCount == 100) {
        clearInterval(startProgress)
      }

      console.log(progressCount);
    }, 50);
}

circular()
window.onload = () => {
}