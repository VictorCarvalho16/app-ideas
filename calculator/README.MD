# Calculadora

** Nível: ** 1 iniciante

As calculadoras não são apenas uma das ferramentas mais úteis disponíveis, mas são
também é uma ótima maneira de entender a interface do usuário e o processamento de eventos em um aplicativo. No
Nesse problema, você criará uma calculadora que suporta aritmética básica
cálculos em números inteiros.

O estilo é com você, então use sua imaginação e seja criativo! Você pode
também acho que vale a pena experimentar o aplicativo da calculadora no seu
dispositivo móvel para entender melhor a funcionalidade básica e os casos extremos.

### Restrições

- Você não pode usar a função `eval ()` para executar cálculos

## Histórias de usuários

- [x] O usuário pode ver uma tela mostrando o número atual digitado ou o número
resultado da última operação.
- [x] O usuário pode ver um teclado de entrada contendo botões para os dígitos de 0 a 9,
operações - '+', '-', '/' e '=', um botão 'C' (para limpar) e um 'AC'
botão (para limpar tudo).
- [x] O usuário pode inserir números como seqüências de até 8 dígitos, clicando em
dígitos no teclado de entrada. A entrada de qualquer dígito acima de 8 será ignorada.
- [] O usuário pode clicar em um botão de operação para exibir o resultado desse
operação em:
    * o resultado da operação anterior e o último número digitado OU
    * os dois últimos números inseridos OU
    * o último número digitado
- [] O usuário pode clicar no botão 'C' para limpar o último número ou o último
Operação. Se a última entrada do usuário foi uma operação, o display será
atualizado para o valor que o precedeu.
- [x] O usuário pode clicar no botão 'AC' para limpar todas as áreas de trabalho internas e
para definir o display para 0.
- [x] O usuário pode ver 'ERR' exibido se alguma operação exceder a
Máximo de 8 dígitos.

## Recursos bônus

- [x] O usuário pode clicar no botão '+/-' para alterar o sinal do número que está
atualmente exibido.
- [] O usuário pode ver um botão de ponto decimal ('.') No painel de entrada
permite que números de ponto flutuante de até 3 locais sejam inseridos e operações para
ser realizada com o número máximo de casas decimais digitadas para qualquer
número.