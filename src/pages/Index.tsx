import React, { useState } from 'react';
import { DashboardHeader } from "@/components/DashboardHeader";
import { ProfileCompletionCard } from "@/components/ProfileCompletionCard";
import { UniversityMatchCard } from "@/components/UniversityMatchCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { translations } from "@/lib/translations";
import { mockUniversityMatches, mockProfileSteps, mockNotifications, mockScholarships } from "@/components/mockData";
import { GraduationCap, FileText, MessageCircle, Award, Calendar, Target, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'bn'>('en');
  const t = translations[currentLanguage];

  // Mock data
  const completionPercentage = 50;
  const safeMatches = mockUniversityMatches.filter(m => m.matchType === 'safe');
  const matches = mockUniversityMatches.filter(m => m.matchType === 'match');
  const dreamMatches = mockUniversityMatches.filter(m => m.matchType === 'dream');

  const handleCompleteProfile = () => {
    console.log('Navigate to profile completion');
  };

  const handleGetMatches = () => {
    console.log('Generate university matches');
  };

  const handleViewDetails = (id: string) => {
    console.log('View university details:', id);
  };

  const handleStartApplication = (id: string) => {
    console.log('Start application for:', id);
  };

  const handleSave = (id: string) => {
    console.log('Save university:', id);
  };

  const statsCards = [
    {
      title: 'Profile Completion',
      value: `${completionPercentage}%`,
      icon: Target,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'University Matches',
      value: mockUniversityMatches.length.toString(),
      icon: GraduationCap,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      title: 'Applications',
      value: '3',
      icon: FileText,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Messages',
      value: '2',
      icon: MessageCircle,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <DashboardHeader 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
            {t.welcomeTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.welcomeSubtitle}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <Card key={index} className="shadow-soft border-0 hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileCompletionCard
              completionPercentage={completionPercentage}
              steps={mockProfileSteps}
              onCompleteProfile={handleCompleteProfile}
              onGetMatches={handleGetMatches}
              translations={{
                title: t.profileTitle,
                subtitle: t.profileSubtitle,
                completeProfile: t.completeProfile,
                getMatches: t.getMatches,
                steps: t.steps
              }}
            />

            {/* Recent Notifications */}
            <Card className="shadow-soft border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  Recent Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockNotifications.slice(0, 3).map((notification) => (
                  <div key={notification.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className={`h-2 w-2 rounded-full mt-2 ${notification.read ? 'bg-muted' : 'bg-accent'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{notification.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.body}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - University Matches */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  University Matches
                </CardTitle>
                <p className="text-muted-foreground">
                  Personalized recommendations based on your profile
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="safe" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="safe" className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/30">
                        {safeMatches.length}
                      </Badge>
                      {t.safeMatches}
                    </TabsTrigger>
                    <TabsTrigger value="match" className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
                        {matches.length}
                      </Badge>
                      {t.matchesTab}
                    </TabsTrigger>
                    <TabsTrigger value="dream" className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                        {dreamMatches.length}
                      </Badge>
                      {t.dreamMatches}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="safe" className="space-y-4">
                    {safeMatches.length > 0 ? (
                      safeMatches.map((match) => (
                        <UniversityMatchCard
                          key={match.id}
                          match={match}
                          onViewDetails={handleViewDetails}
                          onStartApplication={handleStartApplication}
                          onSave={handleSave}
                          translations={{
                            viewDetails: t.viewDetails,
                            startApplication: t.startApplication,
                            save: t.save,
                            partner: t.partner,
                            tuition: t.tuition,
                            deadline: t.deadline,
                            difficulty: t.difficulty
                          }}
                        />
                      ))
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        {t.noMatches}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="match" className="space-y-4">
                    {matches.length > 0 ? (
                      matches.map((match) => (
                        <UniversityMatchCard
                          key={match.id}
                          match={match}
                          onViewDetails={handleViewDetails}
                          onStartApplication={handleStartApplication}
                          onSave={handleSave}
                          translations={{
                            viewDetails: t.viewDetails,
                            startApplication: t.startApplication,
                            save: t.save,
                            partner: t.partner,
                            tuition: t.tuition,
                            deadline: t.deadline,
                            difficulty: t.difficulty
                          }}
                        />
                      ))
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        {t.noMatches}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="dream" className="space-y-4">
                    {dreamMatches.length > 0 ? (
                      dreamMatches.map((match) => (
                        <UniversityMatchCard
                          key={match.id}
                          match={match}
                          onViewDetails={handleViewDetails}
                          onStartApplication={handleStartApplication}
                          onSave={handleSave}
                          translations={{
                            viewDetails: t.viewDetails,
                            startApplication: t.startApplication,
                            save: t.save,
                            partner: t.partner,
                            tuition: t.tuition,
                            deadline: t.deadline,
                            difficulty: t.difficulty
                          }}
                        />
                      ))
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        {t.noMatches}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Scholarships & Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Scholarships */}
          <Card className="shadow-soft border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                {t.scholarships}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockScholarships.map((scholarship) => (
                <div key={scholarship.id} className="p-4 rounded-lg border hover:bg-muted/50 transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-sm leading-tight">{scholarship.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {scholarship.country}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{scholarship.eligibility}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">
                      €{scholarship.avgAward}/month
                    </span>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      {t.save}
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                {t.discoverScholarships}
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-soft border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="hero" className="w-full justify-start" size="lg">
                <FileText className="h-4 w-4" />
                {t.uploadDocuments}
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <MessageCircle className="h-4 w-4" />
                {t.chatWithCounselor}
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Users className="h-4 w-4" />
                Book Consultation Call
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Award className="h-4 w-4" />
                Explore Scholarships
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
