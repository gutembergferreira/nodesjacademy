export function showError(errors: any[], field: string) {
  let mensagem = '';
  if (errors) {
    errors.forEach((e) => {
      if (e.path === field) {
        mensagem += e.message;
      }
    });
  }
  return mensagem;
}

export function ifCond(this: any, v1: any, operator: string, v2: any, options: any) {
  switch (operator) {
    case '===':
      return v1 === v2 ? options.fn(this) : options.inverse(this);
    case '!==':
      return v1 !== v2 ? options.fn(this) : options.inverse(this);
    case '<':
      return v1 < v2 ? options.fn(this) : options.inverse(this);
    case '<=':
      return v1 <= v2 ? options.fn(this) : options.inverse(this);
    case '>':
      return v1 > v2 ? options.fn(this) : options.inverse(this);
    case '>=':
      return v1 >= v2 ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
}