import React from 'react';
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Button } from "@/components/ui/button";
import { Bell, Search, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  currentLanguage: 'en' | 'bn';
  onLanguageChange: (language: 'en' | 'bn') => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-sm font-bold text-white">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Credenza</h1>
              <p className="text-xs text-muted-foreground leading-none">
                Your Trusted Bridge to Europe
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="relative">
            <Search className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <MessageCircle className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-secondary">
              2
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-accent text-accent-foreground">
              3
            </Badge>
          </Button>
          
          <LanguageSwitch 
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
};