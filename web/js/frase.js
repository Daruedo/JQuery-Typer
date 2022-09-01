$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();
    $("#info").hide();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show()
        setTimeout(function(){
            $("#erro").toggle();
        }, 2500);
    })
    .always(function(){
        $("#spinner").toggle();
        $("#info").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}