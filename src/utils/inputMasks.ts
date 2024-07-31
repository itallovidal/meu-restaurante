export function mascaraTelefone(e: HTMLInputElement, tel: HTMLInputElement) {
  let valor = e.value
  valor = valor.replace(/\D/g, '')
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2')
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2')
  tel.value = valor // Insere o(s) valor(es) no campo
}
