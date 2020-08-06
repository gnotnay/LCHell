function solution(S) {
        // write your code in JavaScript (Node.js 8.9.4)
        let map = {};
        let deletes = 0
        for (let i = 0; i < S.length; i++) {
            if(map[S[i]]) {
                map[S[i]]++;    
            } else {
                map[S[i]] = 1;
            }
        }
    
        let cnt = Object.values(map);
        cnt.sort((a, b) => b - a);
        for(let j = 1; j < cnt.length; j++) {
            while(cnt[j] >= cnt[j-1] && cnt[j] > 0) {
                cnt[j]--;
                deletes++;
            }
        }
        
        return deletes;
    }