import "./EMOJI.css"; 
import { useState } from "react"; 



type EMOJI_KEYS = "happy" | "sick" | "dead"; 


const EMOJI_MAP = new Map<EMOJI_KEYS, string>([ 
  ["happy", "😁"], 
  ["sick", "🤢"], 
  ["dead", "💀"], 
]); 

export default function EMOJI() { 
  
  const [emojiStatus, setEmojiStatus] = useState<EMOJI_KEYS>("sick"); 

  function happyClick() { 
    console.log("status anterior:", emojiStatus); 
    console.log("happy!!"); 
    setEmojiStatus("happy"); 
    console.log("Status atual (na fila de atualização):", emojiStatus); 
  } 

  function sickClick() { 
    console.log("status anterior:", emojiStatus); 
    console.log("sick!!"); 
    setEmojiStatus("sick"); 
    console.log("Status atual (na fila de atualização):", emojiStatus); 
  } 

  function deadClick() { 
    console.log("status anterior:", emojiStatus); 
    console.log("dead!"); 
    setEmojiStatus("dead"); 
    console.log("Status atual (na fila de atualização):", emojiStatus); 
  } 

  function cicleClick() { 
    switch (emojiStatus) { 
      case "dead": 
        setEmojiStatus("happy"); 
        break; 
      case "happy": 
        setEmojiStatus("sick"); 
        break; 
      case "sick": 
        setEmojiStatus("dead"); 
        break; 
      default: 
        setEmojiStatus("happy"); 
    } 
  }

  
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Emoji Atual: {EMOJI_MAP.get(emojiStatus)}</h1>
      <p>Status: {emojiStatus}</p>
      
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
        <button onClick={happyClick}>Happy</button>
        <button onClick={sickClick}>Sick</button>
        <button onClick={deadClick}>Dead</button>
        <button onClick={cicleClick}>Ciclar Status</button>
      </div>

      
    </div>
  );
}
