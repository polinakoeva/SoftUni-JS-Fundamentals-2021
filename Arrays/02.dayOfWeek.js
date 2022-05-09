function dayOfWeek(num) {
    let days = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];

    if (num >= 1 && num <= 7) {
        console.log(num);
    } else {
        console.log('Invalid day!');
    }


}
dayOfWeek(3);