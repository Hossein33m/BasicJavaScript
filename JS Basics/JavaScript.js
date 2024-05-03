console.log("##### String & Numbers:")
console.log("1-> ", 2+2)
console.log("2-> ", 2+"2")
console.log("3-> ", typeof(2+"2"))

console.log("##### Equality & Boolean:")
console.log("4-> ", 2=="2")
console.log("5-> ", 2==="2")
console.log("6-> ", typeof(2==="2"))

console.log("##### String & Index:")
var MyName = "Cyber.33"
console.log("7-> ", MyName)
console.log("8-> ", MyName[0])
console.log("9-> ", MyName.length)

console.log("##### for loop:")
for(var i=0; i<=4; i++){
    console.log("10-> ", MyName[i])
}

console.log("##### while loop:")
var j=0
while(j<5){console.log("11-> ", MyName[j]); j+=1;}

console.log("##### undefined & null:")
var yourName = null
console.log("12-> ", MyName[8])
console.log("13-> ", yourName)

console.log("##### if, else, condition: ")
//you can use ! to reverse the boolean value
if (5>1 && 9>5){console.log("14-> ", true)}
else{console.log("14-> ", false)}

if (1>5 && 9>5){console.log("15-> ", true)}
else{console.log("15-> ", false)}

if (1>5 || 9>5){console.log("16-> ", true)}
else{console.log("16-> ", false)}

if (1>5 || 5>9){console.log("17-> ", true)}
else{console.log("17-> ", false)}

if (2==="2"){console.log("18-> ", "first condition")}
else if(0>=99){console.log("18-> ", "second condition")}
else {console.log("18-> ", "NO condition")}

console.log("##### Function:")
function SayHello(a="Cyber.33"){
    console.log("19->" ,"Function Operated")
    return "Hello "+a
}
console.log("20-> ", SayHello("jack"))
console.log("21-> ", SayHello())

console.log("##### array:")
var country=["USA","UK","JPN","china"]
country[3]= "CHN"
console.log("22-> ", country)
country.push("new")
console.log("23-> ", country)
country.pop()
console.log("24-> ", country)
country.splice(2,2,"PRT")
console.log("25-> ", country)
console.log("26-> ", country.length)
for (i of country){
    console.log("27-> I LOVE " + i)
}

console.log("##### Object:")
president1={first: "barak", last: "obama", age:22}
console.log("28-> ", president1)
console.log("29-> ", president1["age"])
for(i in president1){console.log("30-> KEY:", i)}

president2={first: "donald", last: "trump", age:33}
president=[president1,president2]
console.log("31-> ", president)
console.log("32-> ", president[1]["last"])
console.log("33-> ", president1.last)
