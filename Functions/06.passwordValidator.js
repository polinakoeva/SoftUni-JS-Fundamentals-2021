function passwordValidator(pass){

    let password = pass;
    let countErrors = 0;

    function checkForLength(str1){
        let str1L = str1.length;
        if (str1L < 6 || str1L > 10){
            console.log("Password must be between 6 and 10 characters");
            countErrors++;
        }
    }
    function checkForLettersDigits(str2){
        let str2L = str2.length;

        for (let i = 0; i < str2L; i++){
            let currentEl = str2[i];

            let charCode = currentEl.charCodeAt(0);

            if(
                (charCode >= 33 && charCode <= 47) ||
                (charCode >= 58 && charCode <= 64) ||
                (charCode >= 91 && charCode <= 96) ||
                (charCode >= 123 && charCode <= 126)
            ){
                console.log("Password must consist only of letters and digits");
                countErrors++;
                break;

            }
        }
    }

    function checkFor2Digits(str3){
        let str3L = str3.length;

        let countDigits = 0;
        for (let j = 0; j < str3L; j++){
            let currentEl = password[j];

            if (!isNaN(currentEl)){
                countDigits++;
            }
        }
        if (countDigits < 2){
            console.log("Password must have at least 2 digits");
            countErrors++
        }
    }

    checkForLength(password);
    checkForLettersDigits(password);
    checkFor2Digits(password);

    if (countErrors === 0){
        console.log("Password is valid");
    }
}
passwordValidator('logIn');
