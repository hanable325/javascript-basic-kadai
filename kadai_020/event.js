const btn = document.getElementById('btn');
const text = document.getElementById('text')

btn.addEventListener('click', () => {
    // li要素を新しく作成する
    const childList =document.createElement('li');
    // 作成したli要素に「これはリスト要素です」というテキストを追加する
    childList.tectContent = 'ボタンをクリックしました';
    // TODO: 作成したli要素をul要素の子要素として末尾に追加する
    text.appendChild(childList);

    // id="text"の文章を書き換えるには、textContent を使う。
    text.textContent    = "ボタンをクリックしました。";
});