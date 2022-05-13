function inventory(input){

    let heroes = [];

    for(let elements of input){
        let [name, level, items] = elements.split(' / ');

        let splited = items.split(', ');
        splited.sort((a,b)=>a.localeCompare(b)).join(', ');

        let hero = {
            name: name,
            level: +level,
            items: splited
        };
        heroes.push(hero);
    }
    
    let sortedHeroesByLevel = heroes.sort((a,b)=>a.level - b.level)
    
    sortedHeroesByLevel.forEach(hero=>{
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);