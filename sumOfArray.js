// const arr = [1, 2, 7, 8, 5, 4]


// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === 7) {
//             console.log(i, j)
//         }
//     }
// }

const arr = [{id:1, val:4},{id:2, val:5},{id:3, val:6},{id:4, val:7},{id:5, val:8}]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i].id%2==0)
//     if(arr[i].id%2==0){
//         // console.log(arr[i].val)
//         arr[i].val = arr[i].val * 2;
//         // console.log(arr[i].val)
//     }
//     // else{
//     //     arr.splice(i,1);
//     // }
// }

// console.log(arr)


const newArr = arr.map((item)=>{
    if(item.id%2==0){
        item.val = item.val * 2;
    }
    return item;
})
 

const newArr2 = arr.filter((item)=>{return item.id%2==0})



console.log(newArr2)