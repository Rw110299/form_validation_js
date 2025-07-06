# Plano de Testes

## Testes Manuais

1️⃣ **Nome**
- Deixar em branco → Deve mostrar erro.
- Preencher → Deve aceitar.

2️⃣ **Email**
- Deixar em branco → Deve mostrar erro.
- Formato inválido (`test@`) → Deve mostrar erro.
- Formato válido (`test@email.com`) → Deve aceitar.

3️⃣ **Senha**
- Deixar em branco → Deve mostrar erro.
- Menor que 6 caracteres → Deve mostrar erro.
- 6 ou mais caracteres → Deve aceitar.

4️⃣ **Envio**
- Todos campos válidos → Deve exibir mensagem de sucesso.
