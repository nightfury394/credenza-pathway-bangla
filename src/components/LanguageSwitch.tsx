import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitchProps {
  currentLanguage: 'en' | 'bn';
  onLanguageChange: (language: 'en' | 'bn') => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex border rounded-lg p-1 bg-muted/50">
        <Button
          variant={currentLanguage === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className="h-8 text-xs"
        >
          EN
        </Button>
        <Button
          variant={currentLanguage === 'bn' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('bn')}
          className="h-8 text-xs"
        >
          বাং
        </Button>
      </div>
    </div>
  );
};