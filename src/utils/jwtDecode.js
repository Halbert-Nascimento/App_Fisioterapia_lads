/*
A função decodeJWT é responsável por decodificar um token JWT (JSON Web Token), 
que é dividido em três partes: header, payload e signature. Esta função especificamente 
decodifica a segunda parte (payload), que contém as informações codificadas em base64. 
A função converte essa string base64 para um objeto JavaScript legível contendo as 
informações do token, como os dados do usuário e permissões.
*/
// Função que decodifica o payload de um token JWT
export default function decodeJWT(token) {
  // O token JWT é dividido em três partes, separadas por "."
  // A segunda parte (index 1) é o payload, que contém os dados em base64.
  const base64Url = token.split('.')[1];

  // O formato base64 do JWT usa "-" e "_" em vez de "+" e "/", então precisamos substituir esses caracteres.
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  
  // Adiciona padding (caractere "=") ao final da string base64, caso o comprimento não seja múltiplo de 4.
  // O padding é necessário para que a string base64 seja válida.
  while (base64.length % 4 !== 0) {
    base64 += '=';
  }

  // Decodifica a string base64 em uma string JSON usando `atob` (que converte base64 para ASCII),
  // e depois converte os caracteres especiais (como %20) em sua representação original.
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  // Converte a string JSON em um objeto JavaScript e retorna o payload decodificado.
  return JSON.parse(jsonPayload);
}