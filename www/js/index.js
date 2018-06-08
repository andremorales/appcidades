
var date
var cidades
var estados

var estado
var cidade

loadingElement(
    'carregando-listagem', 'Carregando vagass..', 'LEFT', 'COLOR')
$.ajax({
    url: 'http://localhost:3000/estados',
    dataType: 'json',
    success: function (estados) {
        console.log(estados);
    }
})
MobileUI.ajax.get('http://localhost:3000/estados', function (err, res) {
    closeLoading('carregando-listagem')
    MobileUI.hide('carregando-listagem')
    if (err) return alert('Erro ao consultar dados na API')

    estados = res.body
    console.log(estados)
})

$.ajax({
    url: 'http://localhost:3000/cidades',
    dataType: 'json',
    success: function (res) {
        cidades = res
    }
})

function paginaCidade(id) {
    console.log(id)
    cidade = cidades.filter(function (v) {
        if (v.microrregiao.mesorregiao.UF.id == id) return v
    })
    console.log(cidade);
    openPage('cidade.html');
}
