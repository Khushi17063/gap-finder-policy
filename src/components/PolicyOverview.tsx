
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PolicyOverviewProps = {
  policyData: {
    documentName: string;
    domains: number;
    sections: number;
    clauses: number;
    overallScore: number;
  } | null;
};

const PolicyOverview: React.FC<PolicyOverviewProps> = ({ policyData }) => {
  if (!policyData) return null;

  const getComplianceLevel = (score: number) => {
    if (score >= 80) return { label: "High Compliance", color: "bg-green-100 text-green-800" };
    if (score >= 60) return { label: "Moderate Compliance", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Low Compliance", color: "bg-red-100 text-red-800" };
  };

  const compliance = getComplianceLevel(policyData.overallScore);

  return (
    <Card className="mb-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Policy Overview: {policyData.documentName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-muted/50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">{policyData.domains}</p>
            <p className="text-xs uppercase text-muted-foreground">Domains</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">{policyData.sections}</p>
            <p className="text-xs uppercase text-muted-foreground">Sections</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">{policyData.clauses}</p>
            <p className="text-xs uppercase text-muted-foreground">Clauses</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">{policyData.overallScore}%</p>
            <p className="text-xs uppercase text-muted-foreground">Overall Score</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <span className="text-sm font-medium">Compliance Level:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${compliance.color}`}>
            {compliance.label}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyOverview;
