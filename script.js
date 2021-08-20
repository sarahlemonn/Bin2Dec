const inputBinary = document.getElementById('binary-number');

const errorNotif = document.getElementById('error-notif');

const decimalNumber = document.getElementById('decimal-number');


function binToDec (bin) {

    dec = parseInt(bin, 2);

    return dec;

}

inputBinary.addEventListener('input', (e) => {

    const value = inputBinary.value;

    const regex = new RegExp(/[a-z2-9]/);

    if (regex.test(value)) {

        errorNotif.style.display = 'block';
        decimalNumber.innerText = '';


    } else if (errorNotif.style.display = 'block') {

        errorNotif.style.display = 'none';

    }


    if(value.length > 0 && !regex.test(value) && (e.data == 0 || e.data == 1 || e.data == null)) {

        const dec = binToDec(value);

        decimalNumber.innerText = dec;

        if(decimalNumber.innerText == "NaN") {
            decimalNumber.innerText = '';
        }

    } else decimalNumber.innerText = '';

})

