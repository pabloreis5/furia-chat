import { useState } from 'react';
import './ChatBox.css';
import { getElenco, getJogos, getResultado, getCuriosidade } from '../services/api';


export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Olá, Sou o Furioso. Digite /help para ver meus comandos.'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { sender: 'user', text: input };
    const response = await getBotResponse(input.toLowerCase());
  
    const botMessage = {
      sender: 'bot',
      text: typeof response === 'string' ? response : JSON.stringify(response)
    };
  
    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };
  

  const getBotResponse = async (msg) => {
    if (msg.includes('/help')) {
      return 'Comandos disponíveis: /jogos, /elenco, /curiosidade, /resultado';
    }
  
    if (msg.includes('/jogos')) {
      return 'Implementando...';
    }
  
    if (msg.includes('/elenco')) {
      const elenco = await getElenco();
  
      if (!elenco || elenco.length === 0) {
        return 'Não foi possível carregar o elenco.';
      }
  
      const resposta = [
        '**Elenco atual da FURIA:**',
        ...elenco.map(j => `🎯 ${j.nickname} (${j.nome})`)
      ].join('\n');
  
      return resposta;
    }
  
    if (msg.includes('/curiosidade')) {
      return '🔥 A FURIA foi o 1º time BR a vencer a IEM NY.';
    }
  
    if (msg.includes('/resultado')) {
      return 'Implementando...';
    }
  
    return '🤖 Comando não reconhecido. Tente /help.';
  };
  

  return (
    <div className="chat-wrapper">
      <div className="logo-container">
        <img src="/logo.png" alt="FURIA Logo" className="furia-logo" />
      </div>

      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-msg ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <img src="/icon-robot.png" alt="Bot" className="bot-icon" />
              )}
              <div className="chat-bubble">
                {typeof msg.text === 'string'
                  ? msg.text.split('\n').map((line, index) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <strong key={index}>{line.replace(/\*\*/g, '')}</strong>;
                    }
                    return <div key={index}>{line}</div>;
                  })
                  : <div>{JSON.stringify(msg)}</div>}
              </div>

            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={input}
            placeholder="Digite aqui..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
        </div>
      </div>
      <div className="discord-section">
        <a href="#" className="discord-button" title="Adicionar no Discord">
          <img src="/discord-logo.png" alt="Discord Logo" className="discord-logo" />
        </a>
        <p>Obtenha o FuriosoBot em seu servidor</p>
      </div>
    </div>
  );
}
