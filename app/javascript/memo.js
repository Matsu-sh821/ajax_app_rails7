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
  });
};

window.addEventListener('turbo:load', post);
