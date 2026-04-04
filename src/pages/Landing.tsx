import { ArrowRight, MessageCircle, Users, Video, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";

const features = [
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description: "Instant messaging with friends worldwide. Share ideas, code, and learn together.",
  },
  {
    icon: Video,
    title: "Video Calls",
    description: "Face-to-face conversations to practice and collaborate more effectively.",
  },
  {
    icon: Globe,
    title: "Language Exchange",
    description: "Connect with native speakers and programming enthusiasts globally.",
  },
  {
    icon: Users,
    title: "Smart Matching",
    description: "Find the perfect learning partner based on your skills and interests.",
  },
  {
    icon: Shield,
    title: "Safe Community",
    description: "Verified users and moderated spaces for a positive learning environment.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed. No lag, no delays — just seamless collaboration.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Collab Sphere</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium gradient-bg text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                Now in Beta — Join 5,000+ learners
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Where learning
                <br />
                meets <span className="gradient-text">collaboration</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Connect with language learners and coding enthusiasts worldwide.
                Practice together, grow together, and build lasting friendships.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-glow text-sm"
                >
                  Start Learning Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors text-sm"
                >
                  I have an account
                </Link>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Collab Sphere — global collaboration"
                className="relative rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Everything you need to learn together</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Powerful tools designed to make collaboration effortless and enjoyable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to find your learning partner?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join thousands of learners already collaborating on Collab Sphere.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all shadow-glow"
          >
            Get Started — It's Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-6xl flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2026 Collab Sphere</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
