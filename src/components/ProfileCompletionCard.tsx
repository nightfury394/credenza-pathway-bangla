import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/ProgressRing";
import { CheckCircle, Circle } from "lucide-react";

interface ProfileStep {
  title: string;
  completed: boolean;
}

interface ProfileCompletionCardProps {
  completionPercentage: number;
  steps: ProfileStep[];
  onCompleteProfile: () => void;
  onGetMatches: () => void;
  translations: {
    title: string;
    subtitle: string;
    completeProfile: string;
    getMatches: string;
    steps: string;
  };
}

export const ProfileCompletionCard: React.FC<ProfileCompletionCardProps> = ({
  completionPercentage,
  steps,
  onCompleteProfile,
  onGetMatches,
  translations
}) => {
  const completedSteps = steps.filter(step => step.completed).length;
  const isComplete = completionPercentage === 100;

  return (
    <Card className="shadow-medium hover:shadow-strong transition-smooth border-0 bg-gradient-soft">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-semibold bg-gradient-hero bg-clip-text text-transparent">
          {translations.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          {translations.subtitle}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center">
          <ProgressRing progress={completionPercentage} size={140}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {completionPercentage}%
              </div>
              <div className="text-xs text-muted-foreground">
                {completedSteps}/{steps.length} {translations.steps}
              </div>
            </div>
          </ProgressRing>
        </div>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-smooth">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-secondary" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              <span className={`text-sm ${
                step.completed ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {!isComplete ? (
            <Button 
              onClick={onCompleteProfile}
              variant="hero"
              className="flex-1"
            >
              {translations.completeProfile}
            </Button>
          ) : (
            <Button 
              onClick={onGetMatches}
              variant="hero"
              className="flex-1"
            >
              {translations.getMatches}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};