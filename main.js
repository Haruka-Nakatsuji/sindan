const firsttexts = [
    'かわいい',
    'ゆめかわな',
    '虹色の',
    'キラキラ',
    'えいえんの',
    'ハートいっぱいの',
    '宝石みたいな',
    '美しく咲く',
    '夢の国の',
    '1番かわいい',
    'ピンクが大好きな',
    'あなたを見つめる',
    '自信たっぷりな',
    'ツインテールの',
    'あまい'
];
const lasttexts = [
    'おんなのこ',
    'ユニコーン',
    'お嬢様',
    'お人形',
    'ダイアモンド',
    'キャンディ',
    'くまちゃん',
    'わたあめ',
    'ぷりん',
    'おひめさま',
    'ねむりひめ',
    '高校生',
    'シンデレラ',
    '薔薇の花',
    '百合の花',
    'ひまわり',
    '女王様',
    '一番星',
    'あのこ',
    'アイスクリーム'
];
const input = document.querySelector('.input');
const addBtn = document.querySelector('.addbtn');
const background = document.querySelector('.background');
let toUsertext;

addBtn.addEventListener('click', ()=> {
    if (input.value === '') {
        document.querySelector('.warn').textContent = '名前を入力してね'
        return;
    }
    setTimeout(() => {
        changeDOM();
    }, 500);
    const username = input.value;
    toUsertext = `${username}は...`
    document.querySelector('.you').textContent = toUsertext;
    playRandomword();
    document.querySelector('.warn').textContent = '';
});

function changeDOM() {
    input.classList.add('close');
    addBtn.classList.add('close');
    background.classList.add('close');
    document.querySelector('.warn').classList.add('close');
    document.querySelector('h1').classList.add('close');
}

function playRandomword() {
    let firsttext = firsttexts[Math.floor(Math.random() * firsttexts.length)];
    let lasttext = lasttexts[Math.floor(Math.random() * lasttexts.length)];
    const result = `${firsttext}${lasttext}!`
    document.querySelector('.result').textContent = result; 
    // document.querySelector('.sharebtn > a').href = `https://twitter.com/intent/tweet?text=${encodeURI(toUsertext)} ${encodeURI(result)} | &url=https://haruka-nakatsuji.github.io/sindan/&hashtags=${encodeURI('ふわふわ診断')}&via=HARUCHAN_HONPO`;
    const shareURL = `${toUsertext} ${result} | &url=https://haruka-nakatsuji.github.io/sindan/&hashtags=ふわふわ診断&via=HARUCHAN_HONPO`;
    document.querySelector('.sharebtn > a').href = `https://twitter.com/intent/tweet?text=${encodeURI(shareURL)}`;
}
