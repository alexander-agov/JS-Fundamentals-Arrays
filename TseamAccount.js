function tseam(arr) {
    let index = 1
    let command = arr[index].split(' ');
    let account = arr.shift().split(' ');
    while (command[0] !== "Play!") {
        if (command[0] == "Install" && !account.includes(command[1])) {
            account.push(command[1]);
        } else if (command[0] == "Uninstall") {
            if (account.includes(command[1])) {
                let check = account.indexOf(command[1]);
                if (check >= 0 && check < account.length) {
                    account.splice(check, 1);
                }
            }
        } else if (command[0] == "Update") {
            if (account.includes(command[1])) {
                let check = account.indexOf(command[1]);
                if (check >= 0 && check < account.length) {
                    account.splice(check, 1);
                    account.push(command[1]);
                }
            }
        } else if (command[0] == "Expansion") {
            let com = command[1].split('-');
            if (account.includes(com[0])) {
                let check = account.indexOf(com[0]);
                if (check >= 0 && check < account.length) {
                    account.splice(check + 1, 0, com.join(':'))//${com[0]}:${com[1]}
                }
            }
        }
        command = arr[index++].split(' ');
        if (command[0] === "Play!") {
            break;
        }
    }
    console.log(account.join(' '));           
}

tseam(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);
tseam(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);

