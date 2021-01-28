function findAllPermutations(string) {
    let result = []
    if (string.length < 2) {
        return [string]
    }
    else {
        for (let i = 0; i<string.length; i++) {
            let start = string[i]
            let remaining = string.slice(0, i) + string.slice(i + 1)
            for (const perm of findAllPermutations(remaining)) {
                result.push(start + perm)
            }
        }
        return result
    }
}