
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Clipboard, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type RecommendationsProps = {
  recommendations: Array<{
    domain: string;
    section: string;
    recommendations: Array<{
      clause: string;
      recommendation: string;
    }>;
  }>;
};

const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  
  const handleCopyClick = (domainIndex: number, recIndex: number, text: string) => {
    const key = `${domainIndex}-${recIndex}`;
    navigator.clipboard.writeText(text);
    
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };
  
  const downloadAllRecommendations = () => {
    // Format the recommendations as text
    let content = "# Policy Recommendations\n\n";
    
    recommendations.forEach(domain => {
      content += `## ${domain.domain} - ${domain.section}\n\n`;
      
      domain.recommendations.forEach(rec => {
        content += `### ${rec.clause}\n${rec.recommendation}\n\n`;
      });
      
      content += "\n";
    });
    
    // Create a download link
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "policy_recommendations.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const recommendationCount = recommendations.reduce(
    (count, domain) => count + domain.recommendations.length, 
    0
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Policy Recommendations</h2>
          <p className="text-sm text-gray-500">
            {recommendationCount} suggestion{recommendationCount !== 1 ? 's' : ''} to improve your policy
          </p>
        </div>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2" 
          onClick={downloadAllRecommendations}
        >
          <Download className="h-4 w-4" />
          Download All
        </Button>
      </div>

      {recommendations.length === 0 ? (
        <Card className="bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-lg font-medium text-green-600">No recommendations needed!</p>
              <p className="mt-2 text-sm text-gray-600">
                Your policy appears to be comprehensive and well-aligned with standard policies.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Accordion type="multiple" defaultValue={recommendations.map((_, i) => `domain-${i}`)}>
          {recommendations.map((domain, domainIndex) => (
            <AccordionItem key={domainIndex} value={`domain-${domainIndex}`} className="border rounded-md mb-4">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex flex-col items-start text-left">
                  <div className="font-medium">{domain.domain}</div>
                  <div className="text-sm text-muted-foreground">{domain.section}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-4 pt-2">
                  {domain.recommendations.map((rec, recIndex) => (
                    <Card key={recIndex} className="overflow-hidden border-l-4 border-l-blue-400">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">{rec.clause}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm">{rec.recommendation}</p>
                        <div className="flex justify-end mt-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="flex items-center gap-1 text-xs"
                            onClick={() => handleCopyClick(domainIndex, recIndex, rec.recommendation)}
                          >
                            {copiedStates[`${domainIndex}-${recIndex}`] ? (
                              <>
                                <Check className="h-3 w-3" /> Copied
                              </>
                            ) : (
                              <>
                                <Clipboard className="h-3 w-3" /> Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Recommendations;
