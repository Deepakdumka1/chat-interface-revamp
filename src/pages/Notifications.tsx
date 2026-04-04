import AppLayout from "@/components/AppLayout";
import { BellIcon, UserPlus, MessageCircle, Check, X } from "lucide-react";

const mockNotifications = [
  {
    id: "1",
    type: "friend_request" as const,
    user: { name: "Yuki Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yuki" },
    message: "wants to connect with you",
    time: "2 min ago",
    read: false,
  },
  {
    id: "2",
    type: "message" as const,
    user: { name: "Carlos Rivera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos" },
    message: "sent you a message",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "friend_request" as const,
    user: { name: "Amir Hassan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amir" },
    message: "accepted your friend request",
    time: "3 hours ago",
    read: true,
  },
];

const Notifications = () => {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            <BellIcon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
            <p className="text-sm text-muted-foreground">{mockNotifications.filter((n) => !n.read).length} unread</p>
          </div>
        </div>

        <div className="space-y-2">
          {mockNotifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                n.read
                  ? "bg-card border-border"
                  : "bg-accent/50 border-primary/20"
              }`}
            >
              <div className="relative">
                <img src={n.user.avatar} alt={n.user.name} className="w-11 h-11 rounded-full bg-secondary" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center">
                  {n.type === "friend_request" ? (
                    <UserPlus className="w-3 h-3 text-primary" />
                  ) : (
                    <MessageCircle className="w-3 h-3 text-primary" />
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-semibold">{n.user.name}</span>{" "}
                  <span className="text-muted-foreground">{n.message}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
              </div>
              {n.type === "friend_request" && !n.read && (
                <div className="flex items-center gap-1.5">
                  <button className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
