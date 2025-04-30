import { useState } from 'react';
import './ChatBox.css';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Olá, Sou o Furioso. Digite /help para ver meus comandos.'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const response = getBotResponse(input.toLowerCase());

    setMessages([...messages, userMessage, { sender: 'bot', text: response }]);
    setInput('');
  };

  const getBotResponse = (msg) => {
    if (msg.includes('/help')) return 'Comandos disponíveis: /jogos, /elenco, /curiosidade';
    if (msg.includes('/jogos')) return '🎮 Próximo jogo: FURIA vs G2 – 25/04 às 18h.';
    if (msg.includes('/elenco')) return '👥 arT, KSCERATO, yuurih, FalleN, chelo.';
    if (msg.includes('/curiosidade')) return '🔥 A FURIA foi o 1º time BR a vencer a IEM NY.';
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
              <div className="chat-bubble">{msg.text}</div>
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
