function countChar(str, chr) {
    cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == chr) {
            cnt++;
        }
    }
    return cnt;
}

function countBs(str) {
    return countChar(str, 'B');
}

console.log(countBs("BBC"));
console.log(countBs("bioBoo"));
console.log(countChar("kakkerlak", "k"));