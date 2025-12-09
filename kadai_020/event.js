const btn = document.getElementById('btn');
const text = document.getElementById('text')

btn.addEventListener('click', () => {
    // id="text"の文章を書き換えるには、textContent を使う。
    text.textContent    = "ボタンをクリックしました。";
});
