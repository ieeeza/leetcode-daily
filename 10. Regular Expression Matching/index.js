let s = "ab"
let p = ".*"

function isMatch(s, p) {
    if (s.length < 0) return false;
    if (s.length != p.length) return false;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < p.length; j++) {
            if (s[i] == p[j]) return true
            else return false
        }
    }
}

isMatch(s, p)