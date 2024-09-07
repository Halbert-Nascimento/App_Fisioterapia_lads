

export default function decodeJWT(token) {
  const base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  
  // Adicionando o padding correto ao base64 (se necessário)
  while (base64.length % 4 !== 0) {
    base64 += '=';
  }

  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}