import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card shadow-nature sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/28c400f3-ac03-4ad4-81fa-5532e8fac53a.png"
              alt="JAEC GROUP Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-primary">JAEC GROUP</h1>
              <p className="text-xs text-muted-foreground">
                Cultiver l'avenir, élever la qualité
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md text-foreground hover:bg-muted"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Dark overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* Slide-in panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h2 className="font-bold text-lg">Menu</h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-xl font-medium transition-colors",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
