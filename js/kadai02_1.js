const getUsjArea =(name,attribute) => {

    if(attribute==="冒険好き"){
        attribute="ジュラシック・パーク"
    }else if(attribute==="魔法が好き"){
    attribute="ウィザーディング・ワールド・オブ・ハリー・ポッター" 
    }else if(attribute==="スリル好き"){
        attribute="ハリウッド・エリア"
    }else if(attribute==="黄色が好き"){
        attribute="ミニオン・パーク"
    }else{
        attribute="ニューヨーク・エリア"
    }

    
    //TO do name & area を帰す

     return ` こんにちは、${name}さん。おすすめのエリアは「 ${attribute} 」です！`
}


console.log(getUsjArea("田中","魔法が好き"))
console.log(getUsjArea("","スリル好き"))
console.log(getUsjArea("山田"))