function addAndRemove(list) {
    let resultList = [];

    for (let i = 0; i < list.length; i++) {
        let currentElement = list[i];

        if (currentElement === 'add') {
            resultList.push(i + 1);
        } else if (currentElement === 'remove') {
            resultList.pop();
        }
    }
    if (resultList.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultList.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);