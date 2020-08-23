/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if(a[0] != b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });
    
    let temp = [];
    for (let i = 0; i < people.length; i++) {
        let tempPerson = people[i];
        if (temp.length === 0) {
            temp.push(people[i]);
            continue;
        }
        
        let tempHeight = people[i][0];
        let tempK = people[i][1];
        let cnt = 0;
        for (let j = 0; j < temp.length; j++) {
            if (temp[j][0] >= tempHeight) {
                cnt++;
            }
        }
        
        if (cnt === tempK) {
            temp.push(tempPerson);
        } else {
            temp.splice(tempPerson[1], 0, tempPerson);  
        }
    }

    return temp;
};