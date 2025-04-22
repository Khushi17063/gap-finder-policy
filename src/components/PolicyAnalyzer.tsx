
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { StandardPolicies } from "@/lib/standardPolicies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentUploader from './DocumentUploader';
import SimilarityAnalysis from './SimilarityAnalysis';
import GapAnalysis from './GapAnalysis';
import Recommendations from './Recommendations';
import PolicyOverview from './PolicyOverview';

const PolicyAnalyzer: React.FC = () => {
  const [uploadedDocument, setUploadedDocument] = useState<string | null>(null);
  const [documentName, setDocumentName] = useState<string>("");
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [gapResults, setGapResults] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("upload");
  const [isLoading, setIsLoading] = useState(false);

  const handleDocumentUpload = (text: string, name: string) => {
    setUploadedDocument(text);
    setDocumentName(name);
    setActiveTab("analysis");
  };

  const handleAnalyze = async () => {
    if (!uploadedDocument) return;
    
    setIsLoading(true);
    
    try {
      // In a complete implementation, this would use the @huggingface/transformers library
      // to perform NLP analysis on the uploaded document
      
      // For this prototype, we'll simulate the analysis with a timeout
      setTimeout(() => {
        const simulatedResults = simulateAnalysis(uploadedDocument);
        setAnalysisResults(simulatedResults);
        setGapResults(simulatedResults.gaps);
        setRecommendations(simulatedResults.recommendations);
        setIsLoading(false);
        setActiveTab("results");
      }, 2000);
    } catch (error) {
      console.error("Error during analysis:", error);
      setIsLoading(false);
    }
  };

  // This is a simulation function that would be replaced with actual NLP analysis
  const simulateAnalysis = (document: string) => {
    // Extract some sample domains to simulate parsing
    const domains = ["Legal & Compliance", "Human Resources", "Technology & Security"];
    
    // Simulate similarity scores
    const similarityScores = domains.map(domain => ({
      domain,
      score: Math.random() * 0.5 + 0.4, // Score between 0.4 and 0.9
      sections: Array(3).fill(0).map((_, i) => ({
        section: `Section ${i + 1}`,
        score: Math.random() * 0.5 + 0.3,
        clauses: Array(2).fill(0).map((_, j) => ({
          clause: `Clause ${j + 1}`,
          score: Math.random() * 0.6 + 0.2
        }))
      }))
    }));
    
    // Identify gaps based on low scores
    const gaps = similarityScores.flatMap(domain => 
      domain.sections
        .filter(section => section.score < 0.6)
        .map(section => ({
          domain: domain.domain,
          section: section.section,
          score: section.score,
          missingClauses: section.clauses
            .filter(clause => clause.score < 0.5)
            .map(clause => clause.clause)
        }))
    );
    
    // Generate recommendations
    const recommendations = gaps.map(gap => ({
      domain: gap.domain,
      section: gap.section,
      recommendations: gap.missingClauses.map(clause => ({
        clause,
        recommendation: `Consider adding language about ${clause.toLowerCase()} to strengthen your ${gap.section.toLowerCase()} policy.`
      }))
    }));
    
    return {
      documentName,
      parsed: {
        domains,
        sections: domains.flatMap(d => Array(3).fill(0).map((_, i) => `${d} - Section ${i + 1}`)),
      },
      similarity: similarityScores,
      gaps,
      recommendations
    };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Policy Recommendation System</CardTitle>
          <CardDescription>
            Upload your company policy document to compare against standard policies and receive recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="upload">Upload Document</TabsTrigger>
              <TabsTrigger value="analysis" disabled={!uploadedDocument}>Analysis</TabsTrigger>
              <TabsTrigger value="results" disabled={!analysisResults}>Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload">
              <DocumentUploader onDocumentProcessed={handleDocumentUpload} />
            </TabsContent>
            
            <TabsContent value="analysis">
              {uploadedDocument && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Document Ready for Analysis</h3>
                    <p className="text-sm text-gray-500">Filename: {documentName}</p>
                    <p className="mt-2 text-sm">
                      The document has been processed and is ready to be analyzed against our standard policies.
                    </p>
                  </div>
                  <Button onClick={handleAnalyze} disabled={isLoading}>
                    {isLoading ? "Analyzing..." : "Analyze Document"}
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="results">
              {analysisResults && (
                <>
                  <PolicyOverview 
                    policyData={{
                      documentName: analysisResults.documentName,
                      domains: analysisResults.parsed.domains.length,
                      sections: analysisResults.parsed.sections.length,
                      clauses: analysisResults.similarity.reduce((acc, domain) => 
                        acc + domain.sections.reduce((sAcc, section) => 
                          sAcc + section.clauses.length, 0), 0),
                      overallScore: Math.round(analysisResults.similarity.reduce((sum, domain) => 
                        sum + domain.score, 0) / analysisResults.similarity.length * 100)
                    }}
                  />

                  <Tabs defaultValue="similarity" className="w-full">
                    <TabsList className="w-full mb-6">
                      <TabsTrigger value="similarity">Similarity Analysis</TabsTrigger>
                      <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
                      <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="similarity">
                      <SimilarityAnalysis results={analysisResults.similarity} />
                    </TabsContent>
                    
                    <TabsContent value="gaps">
                      <GapAnalysis gaps={gapResults} />
                    </TabsContent>
                    
                    <TabsContent value="recommendations">
                      <Recommendations recommendations={recommendations} />
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <p className="text-xs text-gray-500">
            Analysis powered by advanced NLP models
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PolicyAnalyzer;
