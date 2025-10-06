const getShiftJudgement =(name,number) => {
    
    let shifuto;
    if(number < 0){
         shifuto="エラー：出勤人数を確認してください。"
    } else if(number<=2){
       shifuto= "最小人数で営業中。店長！他の店舗からヘルプを呼んでください！"
    }else if(number<=4){
        shifuto="通常通り営業中。ホール、キッチン・ドリンクを分担できます。"
    }else if(number<=7){
        shifuto="ピークタイム対応可。マルゲリータとクワトロフォルマッジも回せます。"
    }else{
        shifuto="多すぎです。何もしないバイトが続出中。"
    }


    return `ECC Pizza ${name} \n 出勤人数 :${number}名 \n シフト判断 : ${shifuto}`
    
}

console.log(getShiftJudgement("中崎町本店",3))
console.log(getShiftJudgement("梅田店",1))
console.log(getShiftJudgement("天神橋筋六丁目店",5))
console.log(getShiftJudgement("天満橋店",10))
console.log(getShiftJudgement("天満橋店",0))
