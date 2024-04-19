# Unidade 2
* Exercicio 0.2
  ```
    if(num_mes < None and num_mes > None):
        return (f"{num_mes} é inválido")
  ```

  Este código não funciona com o intuito da atividade. A correção:

  ```
    if num_mes < 1 or num_mes > 12:
        return (f"{num_mes} é inválido")
  ```

* Exercicio 1
  Os parametros passados para a função estão em ordem errada:
  ```
    def velocidade_altura_bola(velocidade_inicial, gravidade, n):
    ...
    bola = velocidade_altura_bola(9.81, 50, n)
  ```
  A gravidade está invertida com a velocidade. Correção:
  ```
    bola = velocidade_altura_bola(50, 9.81, n)
  ```


  