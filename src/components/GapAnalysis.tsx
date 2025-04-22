
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

type GapAnalysisProps = {
  gaps: Array<{
    domain: string;
    section: string;
    score: number;
    missingClauses: string[];
  }>;
};

const GapAnalysis: React.FC<GapAnalysisProps> = ({ gaps }) => {
  // Group gaps by domain for better organization
  const groupedGaps = gaps.reduce<Record<string, typeof gaps>>((acc, gap) => {
    if (!acc[gap.domain]) {
      acc[gap.domain] = [];
    }
    acc[gap.domain].push(gap);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.keys(groupedGaps).length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center p-6">
              <p className="text-lg font-medium text-green-600">No significant policy gaps detected!</p>
              <p className="mt-2 text-sm text-gray-500">
                Your policy appears to be well-aligned with standard policies.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="text-xl font-semibold">Identified Policy Gaps</h2>
          </div>
          
          <p className="text-sm text-gray-500 mb-6">
            The following areas in your policy document show significant differences 
            from standard policies and may require attention.
          </p>
          
          {Object.entries(groupedGaps).map(([domain, domainGaps], i) => (
            <Card key={i} className="overflow-hidden mb-6">
              <CardHeader className="bg-amber-50 border-b">
                <CardTitle className="text-lg">{domain}</CardTitle>
                <CardDescription>
                  {domainGaps.length} section{domainGaps.length > 1 ? 's' : ''} with potential gaps
                </CardDescription>
              </CardHeader>
              
              <CardContent className="divide-y">
                {domainGaps.map((gap, j) => (
                  <div key={j} className="py-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{gap.section}</h4>
                      <Badge variant={gap.score < 0.4 ? "destructive" : "outline"} className="ml-2">
                        {Math.round(gap.score * 100)}% match
                      </Badge>
                    </div>
                    
                    <div className="mt-3 space-y-2">
                      <p className="text-sm text-gray-700 font-medium">Missing or Insufficient Content:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {gap.missingClauses.map((clause, k) => (
                          <li key={k} className="text-sm text-gray-600">
                            {clause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default GapAnalysis;
