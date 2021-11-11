function insert(num) {
    document.form.textarea.value = document.form.textarea.value + num;
}

function equal() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

function clean() {
    document.form.textarea.value = "";
}

function back() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}

function percentage() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil / 100
}

function square() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil * hasil
}

function cubed() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil * hasil * hasil
}

function pangkat4() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil * hasil * hasil * hasil
}

function double() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value =
        hasil + 0 + 0
}

function three() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value =
        hasil + 0 + 0 + 0
}