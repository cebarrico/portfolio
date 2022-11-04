export function contactPt(language) {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.classList = "modal-container";
  const content = document.createElement("div");
  const close = document.createElement("button");
  close.classList = "close ";
  close.addEventListener("click", () => {
    close.parentElement.parentElement.remove();
  });
  content.classList = "content-contaier ";
  const h2 = document.createElement("h2");

  h2.classList = "animate-charcter";
  const img = document.createElement("img");
  img.src = "./src/img/picasion.com_3f2682909ac48509ef06ed1f28d3421b.gif";
  const div = document.createElement("div");
  const linkedin = document.createElement("a");
  linkedin.href = "https://www.linkedin.com/in/celsobarrico/";
  const linkedinImg = document.createElement("img");
  linkedinImg.src = "./src/img/linkedin.png";
  const github = document.createElement("a");
  const githubImg = document.createElement("img");
  githubImg.src = "./src/img/github.png";
  github.classList = "git";
  github.href = "https://github.com/cebarrico";
  if (language === "en") {
    h2.innerText = "Call me.";
    img.src = "../img/picasion.com_3f2682909ac48509ef06ed1f28d3421b.gif";
    linkedinImg.src = "../img/linkedin.png";
    githubImg.src = "../img/github.png";
  } else {
    h2.innerText = "Fale comigo.";
  }

  section.append(content);
  content.append(h2, close, img, div);
  div.append(linkedin, github);
  linkedin.append(linkedinImg);
  github.append(githubImg);

  body.append(section);
}

export function menu(parent) {
  const div = document.createElement("div");
  div.classList = "menu-click";
  parent.append(div);
}
