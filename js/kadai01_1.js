console.log("=====ECCビルディング フロアマップ=====")


for (let floor = 1; floor <= 10; floor++) {
   let line=`[${floor} 階] :`;

    if(floor===1){
        line += "総合カウンター";

    }

    if(floor%2===0 && floor%3!==0){
        line +="会議室A"
    }
    
    else if(floor%3===0 && floor%2!==0){
        line +="会議室B"
    }

    if(floor===2 ||
        floor===3 ||
        floor===5 ||
        floor===7 


    ){
        line +=" AED設置階"
    }

    console.log(line)
}