function par(x) {
    if (x % 2 == 0) {
        return true
    } else {
        return false
    }
}

function impar(x) {
    if (x % 2 == 1) {
        return true
    } else {
        return false
    }
}

export {
    par,
    impar
}