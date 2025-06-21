import React, { useState } from "react";

const qaPairs = [
  { keywords: ["hours", "hour", "schedule", "time"], answer: "Our operation hours are Monday to Saturday, 9am to 10pm, and Sunday, 10am to 6pm." },
  { keywords: ["inventory", "stock"], answer: "You can see our full inventory in the 'Inventory' section of the website." },
  { keywords: ["trade in", "trade", "exchange"], answer: "Yes, we accept your car as a trade-in towards your purchase." },
  {keywords: ["in house financing","bank","finance","buy here pay here","lender","lenders","financing","do you offer financing"],answer: "Yes, we offer in house financing in Texas only, and lenders or banks provide financing in Florida. Nationwide shipping available. Use 'Contact' for more information."},
  {keywords: ["requirements", "what do I need", "requirement"],answer: "Valid ID, driver’s license or passport (we work with ITIN number), proof of address, and proof of income. Want to start your application? Use 'Contact' to begin."},
  {keywords: ["pre approval","pre approved","how I can get approved","can I do online process","online buying","can I get pre approved before go to the dealer"],answer: "Yes, we can do everything online before you walk in to the dealer. Please use 'Contact' for more information."},
  {keywords: ["first time buyer","repo","bankruptcy","credit",],answer: "We offer financing for all credit types – good, bad, first time buyer, or no credit."},
  {keywords: ["down","down payment","money down","starting amount","initial amount"], answer: "It really depends on what you are looking for. Please use 'Contact' for more information."},
  {keywords: ["located", "location", "address"], answer: "We are an auto broker, not a physical dealership. I work directly with my partner dealerships in Texas and Florida to help you find the best deal and vehicle option. Use 'Contact' for more information."},
{keywords: ["shipping", "nationwide shipping", "can you send the car to my home"],answer: "Yes, we offer nationwide shipping from our partner dealership in Florida. Use 'Contact' for more information."},
{ keywords: ["buy a car", "purchase", "get a car", "interested in a car", "want a car", "car for sale", "car to buy"], answer: "If you want to buy a car, please browse our inventory, click on the car you like, then click the 'Request information' button and fill out the form. Our team will contact you soon!" },
{keywords: ["talk with a representative","representative","live person","chat","talk with real person","person","human","chat with a live representative","live","sales person","customer service","customer support","support"],answer: "To talk with a live representative, say 'Contact' and follow the steps. Someone will reach out to you shortly."},
{keywords: ["what do you offer","how you guys work","who you are","how we are","explain me how it works","works","info","information"],answer: "We’re Auto Brokers — not a traditional dealership. Our job is to help you find the right vehicle based on your budget, needs, and preferences. We work as a third party, connecting you with trusted dealerships in Texas and Florida that can best assist your specific situation. Our focus is simple: we work for you, not the dealership — to make the process easier, faster, and more personalized. For more info, feel free to use 'Contact' to have one of the representatives reach out to you shortly."},  
// Add more Q&A pairs as needed
];

function getAnswer(userQuestion) {
  const lower = userQuestion.toLowerCase();
  // Encuentra todas las respuestas cuyas palabras clave estén presentes
  const matches = qaPairs.filter(qap => qap.keywords.some(kw => lower.includes(kw)));
  if (matches.length === 0) {
    return ["Sorry, I don't have an answer for that. Please try another question."];
  }
  // Devuelve cada respuesta como un mensaje separado
  return matches.map(m => m.answer);
}

const welcomeText = `Hi! How can I help you? Use 'Contact' if you want to talk to us directly.`;
const FORM_ENDPOINT = "https://formspree.io/f/xnnvzelr";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: welcomeText }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [awaitingContact, setAwaitingContact] = useState(false);
  const [contactStep, setContactStep] = useState(0); // 0: none, 1: name, 2: phone
  const [contactData, setContactData] = useState({ name: '', phone: '' });
  const [sending, setSending] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    let botMsgs = [];

    // Permitir cancelar el flujo de contacto
    if (awaitingContact && input.toLowerCase() === "cancel") {
      setAwaitingContact(false);
      setContactStep(0);
      setContactData({ name: '', phone: '' });
      setMessages([...messages, userMsg, { from: "bot", text: "Contact process cancelled." }]);
      setInput("");
      return;
    }

    // Contact flow
    if (awaitingContact) {
      if (contactStep === 1) {
        setContactData({ ...contactData, name: input });
        setContactStep(2);
        setMessages([...messages, userMsg, { from: "bot", text: "Please enter your phone number (or type 'cancel' to stop):" }]);
        setInput("");
        return;
      } else if (contactStep === 2) {
        setContactData({ ...contactData, phone: input });
        setSending(true);
        // Send to Formspree
        try {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: contactData.name,
              phone: input,
              message: "Contact request from chatbot"
            })
          });
          if (res.ok) {
            botMsgs = [{ from: "bot", text: "Thank you! We will contact you soon." }];
          } else {
            botMsgs = [{ from: "bot", text: "There was an error sending your info. Please try again later." }];
          }
        } catch {
          botMsgs = [{ from: "bot", text: "There was an error sending your info. Please try again later." }];
        }
        setSending(false);
        setAwaitingContact(false);
        setContactStep(0);
        setContactData({ name: '', phone: '' });
        setMessages([...messages, userMsg, ...botMsgs]);
        setInput("");
        return;
      }
    }

    // Detect contact intent
    if (input.toLowerCase().includes("contact")) {
      setAwaitingContact(true);
      setContactStep(1);
      setMessages([...messages, userMsg, { from: "bot", text: "Please enter your name (or type 'cancel' to stop):" }]);
      setInput("");
      return;
    }

    // Obtener respuestas (pueden ser varias)
    const answers = getAnswer(input);
    if (Array.isArray(answers)) {
      botMsgs = answers.map(ans => ({ from: "bot", text: ans }));
    } else {
      botMsgs = [{ from: "bot", text: answers }];
    }
    setMessages([...messages, userMsg, ...botMsgs]);
    setInput("");
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 1000,
      width: open ? 320 : 60,
      height: open ? 420 : 60,
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      transition: "all 0.3s",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }}>
      {open ? (
        <>
          <div style={{ background: "#007bff", color: "#fff", padding: 12, width: "100%", cursor: "pointer" }} onClick={() => setOpen(false)}>
            ChatBot
            <span style={{ float: "right", fontWeight: "bold" }}>×</span>
          </div>
          <div style={{ flex: 1, padding: 12, overflowY: "auto", width: "100%" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.from === "bot" ? "left" : "right",
                margin: "8px 0"
              }}>
                <span style={{
                  display: "inline-block",
                  background: msg.from === "bot" ? "#f1f1f1" : "#007bff",
                  color: msg.from === "bot" ? "#333" : "#fff",
                  borderRadius: 12,
                  padding: "8px 12px",
                  maxWidth: "80%"
                }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ display: "flex", width: "100%", borderTop: "1px solid #eee" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              style={{ flex: 1, border: "none", padding: 10, outline: "none" }}
            />
            <button type="submit" style={{ background: "#007bff", color: "#fff", border: "none", padding: "0 16px", cursor: "pointer" }}>Enviar</button>
          </form>
        </>
      ) : (
        <button onClick={() => setOpen(true)} style={{ width: 60, height: 60, borderRadius: "50%", background: "#007bff", color: "#fff", border: "none", fontSize: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
          <i className="fa-solid fa-comments"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
