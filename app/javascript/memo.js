const buildHTML = (XHR) => {
  const item =XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時:${item.create_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post(){
  //リクエストを送信する処理
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form); //フォームの内容を取得する
    const XHR = new XMLHttpRequest(); //フォームの値を非同期通信でサーバーサイドへ送信
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('turbo:load', post);
