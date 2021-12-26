// * 방금그곡
function solution(m, musicinfos) {
    let answer =[];
    let arr =[];
    let answer1 ;
    let time=[];
    let c_music=[];
    let c_title=[];
    m = m.replace(/(C#)/g, 'c')
             .replace(/(D#)/g, 'd')
             .replace(/(F#)/g, 'f')
             .replace(/(G#)/g, 'g')
             .replace(/(A#)/g, 'a')
    const result = musicinfos.map((it, index)=>{
        const [start, end, title, music] = it.split(',');
        let h = Number(end.slice(0,2) - start.slice(0,2));
        let mi = Number(end.slice(3) - start.slice(3));
        let long = 60*h+mi;
        //console.log(long)
        time.push(long);
        c_music.push(music.replace(/(C#)/g, 'c')
             .replace(/(D#)/g, 'd')
             .replace(/(F#)/g, 'f')
             .replace(/(G#)/g, 'g')
             .replace(/(A#)/g, 'a'))
        c_title.push(title)
    })
    for(let i =0; i<c_title.length; i++){
       if(time[i]<c_music[i].length){
           c_music[i] = c_music[i].slice(0, time[i]);
       }else{
           c_music[i] = c_music[i].repeat(time[i]/c_music[i].length)+ c_music[i].slice(0, time[i]%c_music[i].length)
       }
        if(c_music[i].includes(m)){  
            answer.push({title : c_title[i], time : time[i]});
        }
        
    }
    answer.sort((a,b)=>{
        let A = a.time;
        let B = b.time;
        if(A>B) return -1;
        else if(A<B) return 1;
        else return 0;
    })
   
    if(answer.length ===0){
        return '(None)';
    }
    return answer[0].title;
}
