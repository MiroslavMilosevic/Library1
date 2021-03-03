 export function StringToParts(string, numberOfParts){
    let array=string.split('');
    let arrayReturn=[];
    let iterationNumber=Math.floor(string.length/numberOfParts);
    let index=0;
    for(let i=0;i<iterationNumber;i++){
         let part='';
         for(let j=0;j<numberOfParts;j++){
           part+=array[index];
           index++;
         }
         arrayReturn.push(part);
    }//('peroperoc',3)
    let part2='';
    for(let z=index;z<array.length;z++){
      part2+=array[z];
    }
    part2 !=='' ?  arrayReturn.push(part2): null


console.log(arrayReturn);
    return arrayReturn;
}

//StringToParts('peroperopero',4);