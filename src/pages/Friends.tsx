import AppLayout from "@/components/AppLayout";
import FriendCard from "@/components/FriendCard";
import { Users } from "lucide-react";

const mockFriends = [
  { id: "1", fullName: "Sakura Tanaka", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=sakura", nativeLanguage: "Japanese", learningLanguage: "Python", isOnline: true },
  { id: "2", fullName: "Carlos Rivera", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos", nativeLanguage: "Spanish", learningLanguage: "TypeScript", isOnline: true },
  { id: "3", fullName: "Emma Müller", profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma", nativeLanguage: "German", learningLanguage: "React", isOnline: false },
];

const Friends = () => {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Friends</h1>
            <p className="text-sm text-muted-foreground">{mockFriends.length} connections</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockFriends.map((f) => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Friends;
