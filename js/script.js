Papa.parse("dados/fashion.csv",{
download: true,
header:true,
complete: function(resultado){

const produtoCSV = document.querySelector(".grupo-produtosCSV");
for(let i=0; i<9; i++){
    const produto = resultado.data[i];
    const produtoHTML = '<div class="produto"> ' + ""+  ' <img src="' + produto.img + '" alt="' + produto.name + '" /> ' + "" + '</div>';
    produtoCSV.innerHTML += produtoHTML;
}
}
});

 