// == (Allows Coercion)
const var1 = 'test'
const var2 = 'test'

console.log(var1 == var2)
// === (Does not Allows Coercion)
console.log(var1 === var2)

// == (Allows Coercion)
const var3 = 10
const var4 = '10'

console.log(var3 == var4)
// === (Does not Allows Coercion)
console.log(var3 === var4)
// == (Allows Coercion)
const var5 = 0
const var6 = ''

console.log(var5 == var6)
// === (Does not Allows Coercion)
console.log(var5 === var6)