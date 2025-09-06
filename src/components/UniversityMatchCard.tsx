import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, DollarSign, Calendar, Award, Star } from "lucide-react";

interface UniversityMatch {
  id: string;
  universityName: string;
  programTitle: string;
  country: string;
  city: string;
  tuitionMin: number;
  tuitionMax: number;
  language: string;
  deadline: string;
  matchType: 'safe' | 'match' | 'dream';
  isPartner: boolean;
  logoUrl?: string;
  admissionDifficulty: number;
  rationale: string;
}

interface UniversityMatchCardProps {
  match: UniversityMatch;
  onViewDetails: (id: string) => void;
  onStartApplication: (id: string) => void;
  onSave: (id: string) => void;
  translations: {
    viewDetails: string;
    startApplication: string;
    save: string;
    partner: string;
    tuition: string;
    deadline: string;
    difficulty: string;
  };
}

export const UniversityMatchCard: React.FC<UniversityMatchCardProps> = ({
  match,
  onViewDetails,
  onStartApplication,
  onSave,
  translations
}) => {
  const getMatchColor = (type: string) => {
    switch (type) {
      case 'safe': return 'bg-secondary text-secondary-foreground';
      case 'match': return 'bg-accent text-accent-foreground';
      case 'dream': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${
          i < difficulty 
            ? 'text-accent fill-accent' 
            : 'text-muted-foreground'
        }`} 
      />
    ));
  };

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth border-0 overflow-hidden group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {match.logoUrl && (
                <img 
                  src={match.logoUrl} 
                  alt={match.universityName}
                  className="h-8 w-8 rounded object-cover"
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg leading-tight truncate">
                  {match.universityName}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {match.programTitle}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{match.city}, {match.country}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <Badge className={getMatchColor(match.matchType)}>
              {match.matchType.toUpperCase()}
            </Badge>
            {match.isPartner && (
              <Badge variant="outline" className="text-xs border-accent text-accent">
                ⭐ {translations.partner}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">${match.tuitionMin.toLocaleString()}-${match.tuitionMax.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">{translations.tuition}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">{match.deadline}</div>
              <div className="text-xs text-muted-foreground">{translations.deadline}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">{match.language}</div>
              <div className="text-xs text-muted-foreground">Language</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="flex items-center gap-1">
                {getDifficultyStars(match.admissionDifficulty)}
              </div>
              <div className="text-xs text-muted-foreground">{translations.difficulty}</div>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-muted/50">
          <p className="text-sm text-foreground">{match.rationale}</p>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails(match.id)}
          >
            {translations.viewDetails}
          </Button>
          <Button 
            variant="hero" 
            size="sm" 
            className="flex-1"
            onClick={() => onStartApplication(match.id)}
          >
            {translations.startApplication}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};