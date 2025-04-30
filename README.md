# FuriosoBot - Chat da FURIA com Backend Flask + Frontend React

![FURIA Logo](public/logo.png)

FuriosoBot é um chatbot temático da FURIA Esports integrado a um sistema web moderno, com frontend em React e backend em Flask. Ele permite interação com comandos personalizados que fornecem informações reais sobre o time de CS:GO da FURIA, consumindo dados da API pública da HLTV.

---

## 🚀 Funcionalidades

### Comandos Disponíveis no Chat:

- `/help` - Exibe a lista de comandos disponíveis
- `/elenco` - Mostra o elenco atual da FURIA com nome real e nickname
- `/jogos` - Lista os próximos jogos marcados da FURIA (em breve)
- `/resultado` - Exibe os dois últimos jogos da FURIA com placar e adversário (em breve)
- `/curiosidade` - Retorna uma curiosidade aleatória sobre a FURIA CS

### Experiência Visual:
- Interface moderna com logo e ícone da FURIA
- Botão do Discord com animação ao passar o mouse
- Respostas formatadas com emojis, negrito e quebras de linha

---

## ⚙️ Como Rodar Localmente

### Requisitos
- Node.js (v18+)
- Python (3.9+)
- Pip (instalador do Python)

### 1. Instalar dependências do Frontend
```bash
cd furia-chat
npm install
```

### 2. Iniciar o Frontend
```bash
npm run dev
```
> Acesse em: [http://localhost:5173](http://localhost:5173)

### 3. Instalar dependências do Backend
```bash
cd backend
pip install -r requirements.txt
```

### 4. Rodar o Backend Flask
```bash
python app.py
```
> A API ficará acessível em: [http://localhost:5000](http://localhost:5000)

---

## 🌍 Tecnologias Utilizadas

- **Frontend:** React + Vite + CSS
- **Backend:** Flask + Flask-CORS
- **API de dados:** [hltv-api.vercel.app](https://hltv-api.vercel.app/)

---

## 📈 Expansões Futuras

- Integração com Discord
- Comando `/jogos` com dados reais
- Comando `/resultado` com placares reais
- Painel de admin para configurar respostas e curiosidades

---

## 🙏 Contribuição
Sinta-se à vontade para abrir issues, propor melhorias ou enviar PRs. É um projeto pessoal, mas a comunidade FURIOSA é bem-vinda!

---

## 🚫 Aviso
Este projeto não é afiliado oficialmente à FURIA Esports. Utiliza apenas dados públicos com fins educacionais e de demonstração.

