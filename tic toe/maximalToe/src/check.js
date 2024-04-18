let arr=['X','O','X','O','X','O','X','O','X'];

function checkWinner(arr){
    let winner =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    let result ="draw";
     winner.forEach((w)=>{
        if(arr[w[0]] && arr[w[0]]==arr[w[1]] && arr[w[0]]==arr[w[2]]){
                console.log("h1");
                result=arr[w[0]];
        }

    })
    return result;

}
console.log(checkWinner(arr));