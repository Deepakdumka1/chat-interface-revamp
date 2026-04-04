import AppLayout from "@/components/AppLayout";
import FriendCard from "@/components/FriendCard";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

const mockFriends = [
  { id: "1", fullName: "Sakura Tanaka", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=sakura", nativeLanguage: "Japanese", learningLanguage: "Python", isOnline: true },
  { id: "2", fullName: "Carlos Rivera", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos", nativeLanguage: "Spanish", learningLanguage: "TypeScript", isOnline: true },
  { id: "3", fullName: "Emma Müller", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma", nativeLanguage: "German", learningLanguage: "React", isOnline: false },
  { id: "4", fullName: "Amir Hassan", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=amir", nativeLanguage: "Arabic", learningLanguage: "JavaScript", isOnline: true },
  { id: "5", fullName: "Yuki Chen", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=yuki", nativeLanguage: "Chinese", learningLanguage: "Rust", isOnline: false },
  { id: "6", fullName: "Sofia Petrov", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia", nativeLanguage: "Russian", learningLanguage: "Go", isOnline: true },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const filtered = mockFriends.filter((f) =>
    f.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-1">Welcome back 👋</h1>
          <p className="text-muted-foreground text-sm">Find and connect with learning partners.</p>
        </div>

        {/* Search + Action */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search friends..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50 transition-all"
            />
          </div>
          <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl gradient-bg text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-glow">
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Friend</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Friends", value: "6" },
            { label: "Online", value: "4" },
            { label: "Chats", value: "12" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl border border-border p-4 text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Friends Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border p-12 text-center">
            <h3 className="font-semibold mb-2">No friends found</h3>
            <p className="text-sm text-muted-foreground">
              Try a different search or add new friends to get started!
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Home;
