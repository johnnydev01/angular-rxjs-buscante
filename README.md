# Buscante

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## RxJS Operators

**pipe**- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

**tap** - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

**map** - Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado.

**switchMap** - Operador de Transformação. Cancela requisições de observables anteriores, emitindo valores apenas do Observable projetado mais recentemente.

**filter** - Operador de filtragem. Filtra os itens emitidos pelo Observable de origem, permitindo apenas aqueles que satisfaçam uma condição especificada.

**debounceTime** - Operador de filtragem. Retorna um Observable que atrasa as emissões do Observable de origem pelo tempo especificado.

**distinctUntilChanged** - Operador de filtragem. Retorna um Observable que emite todos os valores enviados pelo observable de origem se forem distintos em comparação com o último valor emitido pelo observable de resultado.

**catchError** - Operador de Tratamento de Erros. Captura erros no observable manipulado retornando um novo observable ou lançando um erro.

**throwError** - Operador de Criação. Cria um observable que criará uma instância de erro e a enviará ao consumidor como um erro imediatamente após a assinatura.

**EMPTY** - Operador de Criação. Cria um Observable simples que não emite itens para o Observer e imediatamente emite uma notificação de complete.

**of** - Operador de Criação. Converte os argumentos em observable. Um Observable que emite os argumentos descritos e depois conclui.



