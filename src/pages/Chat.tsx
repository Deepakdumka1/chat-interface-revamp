import AppLayout from "@/components/AppLayout";
import { ArrowLeft, Phone, SendHorizontal, Video, Smile } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const mockMessages = [
  { id: "1", sender: "them", text: "Hey! How's your TypeScript learning going?", time: "10:30 AM" },
  { id: "2", sender: "me", text: "Pretty well! I just learned about generics. It's amazing.", time: "10:32 AM" },
  { id: "3", sender: "them", text: "That's great! Generics can be tricky at first but once you get them, they're super powerful 💪", time: "10:33 AM" },
  { id: "4", sender: "me", text: "Yeah, totally! Want to do a pair coding session later today?", time: "10:35 AM" },
  { id: "5", sender: "them", text: "Absolutely! Let's do it at 3pm. I'll share my screen 🖥️", time: "10:36 AM" },
];

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  return (
    <AppLayout showSidebar={false}>
      <div className="flex flex-col h-[calc(100vh-3.5rem)]">
        {/* Chat Header */}
        <div className="h-16 border-b border-border bg-card/80 backdrop-blur-xl flex items-center px-4 gap-3">
          <Link to="/home" className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <div className="relative">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=sakura`}
              alt="Chat partner"
              className="w-10 h-10 rounded-full bg-secondary"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-success border-2 border-card" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-sm">Sakura Tanaka</h2>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2.5 rounded-lg hover:bg-secondary transition-colors">
              <Phone className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2.5 rounded-lg gradient-bg hover:opacity-90 transition-opacity shadow-glow">
              <Video className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "me"
                    ? "gradient-bg text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-[10px] mt-1 ${
                    msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-border bg-card/80 backdrop-blur-xl p-4">
          <div className="flex items-center gap-2 max-w-4xl mx-auto">
            <button className="p-2.5 rounded-xl hover:bg-secondary transition-colors">
              <Smile className="w-5 h-5 text-muted-foreground" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 h-11 px-4 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50 transition-all"
            />
            <button className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center hover:opacity-90 transition-opacity shadow-glow">
              <SendHorizontal className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Chat;
