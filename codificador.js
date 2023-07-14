// Cria um objeto com as letras que serão substituídas e suas respectivas substituições
const codificacao = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

// Captura elementos do HTML pelo ID
const texto = document.getElementById('textoescrito');
const textosaida = document.getElementById('textosaida');
const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const copiar = document.getElementById('copiar');
const escondeTexto = document.getElementById('divtexto');
const escondeImagem = document.getElementById('divimagem');

// Função para codificar uma frase
function codificar(frase){
  let fraseCodificada = '';

  // Percorre cada letra da frase e a substitui, caso exista uma substituição para ela
  for(let i = 0; i < frase.length; i++){
    let letra = frase[i].toLowerCase();

    if(codificacao[letra]){
      fraseCodificada += codificacao[letra];
    } else{
      fraseCodificada += letra;
    }
  }
  
  return fraseCodificada;
}

// Função para decodificar uma frase
function decodificar(frase){
  // Substitui cada string de substituição pela letra correspondente
  let textoDecodificado = frase
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  return textoDecodificado;
}

// Função que codifica o texto digitado e exibe o resultado na tela
function codifica(){
  if(texto.value != ''){
    // Esconde a imagem e exibe a div do texto
    escondeImagem.style.display = 'none';
    escondeTexto.style.display = 'flex';

    return escrever();
  } else{
    // Se não há texto digitado, esconde a div do texto e exibe a imagem
    escondeImagem.style.display = 'flex';
    escondeTexto.style.display = 'none';
  }
}

// Função que decodifica o texto digitado e exibe o resultado na tela
function decodifica(){
  if(texto.value != ''){
    // Esconde a imagem e exibe a div do texto
    escondeImagem.style.display = 'none';
    escondeTexto.style.display = 'flex';

    return escreverDecodificado();
  } else{
    // Se não há texto digitado, esconde a div do texto e exibe a imagem
    escondeImagem.style.display = 'flex';
    escondeTexto.style.display = 'none';
  }
}

// Função que escreve o texto codificado na tela
function escrever (){
  let textoCodificado = codificar(texto.value);
  textosaida.innerHTML = textoCodificado;
}

// Função que escreve o texto decodificado na tela
function escreverDecodificado (){
  let textoDecodificado = decodificar(texto.value);
  textosaida.innerHTML = textoDecodificado;
}

// Função que copia o texto exibido na tela para a área de transferência
function copia(){
  let textoCopiado = textosaida.innerHTML
  navigator.clipboard.writeText(textoCopiado);

  alert(`O texto '${textoCopiado}' foi copiado para a sua Área de Transferência!`);
}
//Botao que codifica a frase
criptografar.onclick = codifica;

//Botao que decodifica a frase
descriptografar.onclick = decodifica;

//Botao que copia a frase
copiar.onclick = copia;