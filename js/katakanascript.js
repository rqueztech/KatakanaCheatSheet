const katakanaMap = {
    "ア":"a",
    "イ":"i",
    "ウ":"u",
    "エ":"e",
    "オ":"o",
    "カ":"ka",
    "キ":"ki",
    "ク":"ku",
    "ヌ":"nu",
    "ダ":"da",
    "タ":"ta",
    "グ":"gu",
    "ゲ":"ge",
    "ケ":"ke",
    "コ":"ko",
    "キャ":"kya",
    "キュ":"kyu",
    "キョ":"kyo",
    "サ":"sa",
    "ス":"su",
    "セ":"se",
    "シャ":"sha",
    "シュ":"shu",
    "ショ":"sho",
    "チ":"chi",
    "テ":"te",
    "ト":"to",
    "チャ":"cha",
    "チュ":"chu",
    "チョ":"cho",
    "ニ":"ni",
    "ネ":"ne",
    "ニャ":"nya",
    "ニュ":"nyu",
    "ニョ":"nyo",
    "ハ":"ha",
    "ヒ":"hi",
    "フ":"fu",
    "ヘ":"he",
    "ホ":"ho",
    "ヒャ":"hya",
    "ヒュ":"hyu",
    "ヒョ":"hyo",
    "ミ":"mi",
    "マ":"ma",
    "ム":"mu",
    "メ":"me",
    "ナ":"na",
    "ノ":"no",
    "モ":"mo",
    "ミャ":"mya",
    "ミュ":"myu",
    "ミョ":"myo",
    "ヤ":"ya",
    "ユ":"yu",
    "ヨ":"yo",
    "ラ":"ra",
    "リ":"ri",
    "ル":"ru",
    "レ":"re",
    "ロ":"ro",
    "リャ":"rya",
    "リュ":"ryu",
    "リョ":"ryo",
    "ワ":"wa",
    "ガ":"ga",
    "ギ":"gi",
    "ゴ":"go",
    "ギャ":"gya",
    "ギュ":"gyu",
    "ギョ":"gyo",
    "ジ":"ji",
    "ズ":"zu",
    "ゼ":"ze",
    "ン":"n",
    "シ":"shi",
    "ゾ":"zo",
    "ソ":"so",
    "ツ":"tsu",
    "ヅ":"(zu)",
    "ジャ":"ja",
    "ジュ":"ju",
    "ジョ":"jo",
    "ヂ":"(ji)",
    "デ":"de",
    "ド":"do",
    "バ":"ba",
    "ビ":"bi",
    "ブ":"bu",
    "プ":"pu",
    "ベ":"be",
    "ボ":"bo",
    "ビャ":"bya",
    "ビュ":"byu",
    "ビョ":"byo",
    "パ":"pa",
    "ピ":"pi",
    "ペ":"pe",
    "ポ":"po",
    "ピャ":"pya",
    "ピュ":"pyu",
    "ピョ":"pyo",
    "ファ":"fa",
    "フィ":"fi",
    "フェ":"fe",
    "フォ":"fo",
    "ツァ":"tsa",
    "ティ":"ti",
    "トゥ":"tu",
    "ウェ":"we",
    "ウォ":"wo",
    "ヲ":"wo",
    "ックス":"x",
}

const katakanaPairings = [
	["ク","ヌ","タ","ケ","グ","ゲ","ダ"],
	["ン","シ","ソ","ツ","ジ","ゾ","ヅ"],
	["ユ","ヨ","ロ","コ","ゴ"],
	["フ","ラ","ヲ","ウ","ワ"],
	["ブ","プ","ヲ","ウ","ワ"],
	["リ","ル","レ"],
	["イ","ト","ド"],
	["メ","ナ","ノ"],
	["サ","セ","ヤ"],
	["セ","ゼ","ヤ"],
	["マ","ム"],
	["チ","テ"],
	["ヂ","デ"],
	["ハ","ヘ"],
	["バ","ベ"],
	["パ","ペ"],
	["ス","ズ"],
	["カ","ガ"],
	["ニ","エ"],
	["ネ"],
	["ミ"],
	["モ"],
	["ギ"],
	["ア"],
	["オ"],
	["キ"],
	["キャ","キュ","キョ"],
	["シャ","シュ","ショ"],
	["チャ","チュ","チョ"],
	["ニャ","ニュ","ニョ"],
	["ヒャ","ヒュ","ヒョ"],
	["ミャ","ミュ","ミョ"],
	["リャ","リュ","リョ"],
	["ギャ","ギュ","ギョ"],
	["ジャ","ジュ","ジョ"],
	["ビャ","ビュ","ビョ"],
	["ピャ","ピュ","ピョ"],
	["ファ","フィ","フェ","フォ"],
	["ツァ"],
	["ティ"],
	["トゥ"],
	["ウェ","ウォ"],
	["ックス"],
]

document.addEventListener("DOMContentLoaded", function() {
	const mainContainer = document.getElementById("main-container");
	for (const katakanaArrays of katakanaPairings) {
		const katakanaOuter = document.createElement("div");
		katakanaOuter.classList.add("similar-container");
		for (const individualKatakana of katakanaArrays) {
			const katakanaDiv = document.createElement("div");
			katakanaDiv.classList.add("katakana-div");
			katakanaDiv.innerHTML = individualKatakana + katakanaMap[individualKatakana];
			katakanaOuter.append(katakanaDiv);
		}
		mainContainer.append(katakanaOuter);
	}
});
