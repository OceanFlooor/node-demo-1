let n = 2;
nextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        page.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const obj = JSON.parse(request.response);
      console.log(`words: ${obj.words}`);
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onreadystatechange = () => {
    request.readyState === 4
      ? request.status >= 200 && request.status < 300
        ? insertJS(request.response)
        : alert("请求JS失败！")
      : "";
  };
  request.send();
};

function insertJS(res) {
  let script = document.createElement("script");
  script.innerHTML = res;
  document.body.appendChild(script);
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("请求css失败！");
      }
    }
  };
  request.send();
};
