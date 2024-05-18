let hero = [
    ["Cebola", 7500],
    ["Bigode", 5003],
    ["Menotti", 6500]
]


hero.forEach((element, index) =>{
    if(element[1] <= 1000){
        console.log("O Herói " + element[0] + " está no nível de Ferro")
    }else if(element[1] >= 1001 && element[1] <= 2000){
        console.log("O Herói " + element[0] + " está no nível de Bronze")
    }else if(element[1] >= 2000 && element[1] <= 5000){
        console.log("O Herói " + element[0] + " está no nível de Prata")
    }else if(element[1] >= 5000 && element[1] <= 7000){
        console.log("O Herói " + element[0] + " está no nível de Ouro")
    }else if(element[1] >= 7001 && element[1] <= 8000){
        console.log("O Herói " + element[0] + " está no nível de Platina")
    }else if(element[1] >= 8001 && element[1] <= 9000){
        console.log("O Herói " + element[0] + " está no nível de Ascendente")
    }else if(element[1] >= 9001 && element[1] <= 10000){
        console.log("O Herói " + element[0] + " está no nível de Imortal")
    }else if(element[1] >= 10001){
        console.log("O Herói " + element[0] + " está no nível de Radiante")
    }
})