function forms() {
    if (document.getElementById("igen2").checked) {
        document.getElementById("plusz1").style.display = "inline";
        document.getElementById("plusz2").style.display = "inline";
        document.getElementById("plusz3").style.display = "inline";
        document.getElementById("plusz4").style.display = "inline";
        document.getElementById("plusz5").style.display = "inline";
        document.getElementById("formos").style.display = "none";
        document.getElementById("vegso").style.display = "inline";
    }
    else {
        document.getElementById("vegso").style.display = "inline";
    }
}

$(document).ready(function () {
    $("form[name='myform']").validate({
        rules: {
            voltamolaszban: "required",
            vnev: "required",
            knev: "required",
            tszam: "required",
            velemeny: "required",
            datum: "required",
            email: {
                required: true,
                email: true
            },
            elfogad: {
                required: true,
            },
        },
        messages: {
            voltamolaszban: "Kérlek válassz egyet!",
            vnev: "Kérlek írd be a vezetékneved!",
            knev: "Kérlek írd be a keresztneved!",
            tszam: "Kérlek írd be a telefonszámod!",
            velemeny: "Kérlek írd le a véleményed!",
            email: "Kérlek valós email címet adj meg!",
            elfogad: "Kérlek fogadd el a feltételeinket!",
            datum: "Kérlek válaszd ki a születési dátumod!"
        },
        errorElement: 'div',
        errorPlacement: function(error,element){
            error.insertAfter($(element).parent('div'));
        }
    });
});

document.getElementById("formos").addEventListener("click", forms)