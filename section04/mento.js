//멘토링
function solution(test){
    let answer = [];
    const m = test.length;
    const n = test[0].length;
  
    for(let i = 1; i<=n; i++){
      for(let j = 1; j<=n; j++){
        if(i===j) continue;
        let cnt = 0;
        for(let k = 0; k<m; k++){
          const gi = test[k].indexOf(i)
          const gj = test[k].indexOf(j)
          if(gi < gj) cnt++;
        }
      if(cnt === m) answer.push([i, j]);
      }
    }
    return answer.length;
  }
  
  let arr = [[3,4,1,2], [4,3,2,1], [3,1,4,2]];
  console.log(solution(arr));

  //indexOf() "문자열".indexOf("찾을 문자")
  let array = [2, 9, 9];
  console.log(array.indexOf(2));
  console.log(array.indexOf(7));
  console.log(array.indexOf(9,2));
  console.log(array.indexOf(2, -1));
  console.log(array.indexOf(2, -3));