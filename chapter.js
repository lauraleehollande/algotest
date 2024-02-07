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
