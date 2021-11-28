const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x == 5){
        break // este break rompe com for por enteiro
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 5){
        continue // interrompe o atual a repetição(if) e pula pra proxima (for) 
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //rotulo 
for (a in nums){
    for (b  in nums){
        if(a == 2 && b == 3) break externo // break com rotulo rompe com o for q engloba o externo ou seja rompe com os 2 for
        console.log(`par = ${a},${b}`)
    }
}