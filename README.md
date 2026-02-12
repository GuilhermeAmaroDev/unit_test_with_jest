# 🧪 Testes Automatizados com Jest

Projeto criado com o objetivo de praticar testes de unidade em JavaScript utilizando o Jest.

A proposta foi validar funções simples aplicando diferentes cenários de teste a partir de massa de dados.

---

## 📌 Objetivo

Explorar os benefícios do Jest e entender na prática:

- Como estruturar testes unitários
- Como trabalhar com massa de dados
- Como executar múltiplos cenários sem duplicar código
---

## 🛠 Tecnologias Utilizadas

- JavaScript
- Jest

---

## 🧩 Estrutura dos Testes

Os testes foram criados utilizando dois formatos de massa:

### ✔️ Massa em formato de lista

Utilização de arrays com valores diretos para validar diferentes entradas e saídas das funções.

Exemplo:

```javascript
const valores = [1, 2, 3, 4];
```

---

### ✔️ Massa em formato JSON

Utilização de arquivos JSON para organizar múltiplos cenários de teste.

Exemplo:

```json
[
  { "entrada": 1, "saidaEsperada": 2 },
  { "entrada": 2, "saidaEsperada": 4 }
]
```

Esse formato facilitou:

- Reaproveitamento de dados
- Melhor organização dos cenários
- Escalabilidade dos testes

---

## 🚀 Considerações

Projeto desenvolvido para fins de estudo e prática no curso de QA.
