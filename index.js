let data;
async function search(){
    
    let str=document.getElementById("text1").value
    await fetch('https://pokeapi.co/api/v2/pokemon/'+str)
    .then(res=>res.json())
    .then( d=>data=d)
    console.log(data)
    document.write("<h3>Abilities of ".concat(data.name)+ "</h3>")
    for(let i=0;i<data.abilities.length;i++){
        document.write(data.abilities[i].ability.name+"<br>")
    }
    document.write("<h3>Height</h3>")
    document.write(data.height)
    document.write("<h3>Weight</h3>")
    document.write(data.weight)

    document.getElementById('imag1').src=' '+  data.sprites.front_deafault;

}
