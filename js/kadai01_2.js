console.log("===== 魔法学校 授業時間割 =====")

const days = ["月曜", "火曜", "水曜", "木曜", "金曜"]


const subjects = [
  ["変身術", "数占い", ""],         
  ["魔法生物飼育学", "魔法薬学", "天文学"], 
  ["魔法史", "薬草学", ""],                 
  ["闇の魔術に対する防衛術", "占い学", ""],           
  ["吉代ルーン語", "薬草学", ""]    
];



for (let i = 0; i < days.length; i++) {
    // console.log(i)

  for (let j = 0; j < subjects[i].length; j++) {
    

    if (subjects[i][j] !== "") {
      console.log(`${days[i]} ${j + 1}限: ${subjects[i][j]}`);
    }
  }
}

