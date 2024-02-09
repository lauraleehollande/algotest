const chapters = document.querySelectorAll(".chapter");

for (let i = 1; i < chapters.length; i++) {
  chapters[i].style.display = "none";
}

const links = document.querySelectorAll(".option");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    chapters.forEach((chapter) => {
      chapter.style.display = "none";
    });
    const targetChapterId = link.getAttribute("href").slice(1);
    const targetChapter = document.getElementById(targetChapterId);
    if (targetChapter) {
      targetChapter.style.display = "block";
    }
  });
});


var introElement = document.getElementById('Intro');

function hideIntroduction() {
  introElement.style.display = 'none';
}

document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('option') && event.target.getAttribute('href') === '#chapter2a' || '#chapter2b') {
    hideIntroduction();
  }
});

document.getElementById('chapter1').addEventListener('click', function() {
  var audio = document.getElementById('audio');
  audio.play();
});