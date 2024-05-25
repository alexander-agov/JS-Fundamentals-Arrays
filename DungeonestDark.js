function dung(arr) {
    let initialHealth = 100;
    let initialCoins = 0;
    let bestRoom = 1;
    let roomsInfo = arr.shift();
    let newArr = roomsInfo.split('|');
    for (let room of newArr) {
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);
        if (command === "potion") {
            let healthHealed = num;
            if (initialHealth + healthHealed > 100) {
                healthHealed = 100 - initialHealth;
            }
            initialHealth += healthHealed;
            console.log(`You healed for ${healthHealed} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (command === "chest") {
            initialCoins += num;
            console.log(`You found ${num} coins.`);
        } else {
            let monster = command;
            let attack = num;
            initialHealth -= attack;
            if (initialHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }
    if (initialHealth > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}
//dung(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dung(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);