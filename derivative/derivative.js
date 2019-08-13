function derivative_(f, x) {
    const h = 0.00001
    return (f(x + h) - f(x)) / h
}

function derivative(f) {
    return x => derivative_(f, x)
}

const f  = x => Math.pow(x, 2)
const df = derivative(f)

for(let x = -5.0; x <= 5.0; x += 0.01)
    console.log(`f(${x}) = ${f(x).toPrecision(3)} f'(${x}) = ${df(x).toPrecision(3)}`)

