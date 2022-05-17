let container = document.querySelector(".container");

let group = document.createElement("div");
group.setAttribute("class", "group");
container.appendChild(group);

fetch("http://inshorts.deta.dev/news?category=technology")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.forEach((news) => {
      let box = document.createElement("div");
      box.setAttribute("class", "box");
      group.appendChild(box);

      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "imgDiv");
      box.appendChild(imgDiv);

      let imageUrl = document.createElement("img");
      imageUrl.src = news.imageUrl;
      imageUrl.setAttribute("class", "imageUrl");
      imgDiv.appendChild(imageUrl);

      let contentDiv = document.createElement("div");
      box.appendChild(contentDiv);

      let title = document.createElement("h2");
      title.setAttribute("class", "title");
      title.textContent = news.title;
      contentDiv.appendChild(title);

      let short = document.createElement("p");
      short.setAttribute("class", "short");
      contentDiv.appendChild(short);

      let first = document.createElement("span");
      first.setAttribute("class", "first");
      first.textContent = "short";
      short.appendChild(first);

      let by = document.createElement("span");
      by.textContent = " by ";
      short.appendChild(by);

      let author = document.createElement("span");
      author.setAttribute("class", "author");
      author.textContent = news.author;
      short.appendChild(author);

      let time = document.createElement("span");
      time.setAttribute("class", "time");
      time.textContent = news.time;
      short.appendChild(time);

      let on = document.createElement("span");
      on.textContent = " / on ";
      short.appendChild(on);

      let date = document.createElement("span");
      date.setAttribute("class", "date");
      date.textContent = news.date;
      short.appendChild(date);

      let content = document.createElement("p");
      content.setAttribute("class", "content");
      content.textContent = news.content;
      contentDiv.appendChild(content);
    });
  })
  .catch((error) => {
    console.log("Error");
  });
