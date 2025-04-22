
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

type SimilarityProps = {
  results: Array<{
    domain: string;
    score: number;
    sections: Array<{
      section: string;
      score: number;
      clauses: Array<{
        clause: string;
        score: number;
      }>;
    }>;
  }>;
};

const getScoreColor = (score: number) => {
  if (score >= 0.8) return "bg-green-500";
  if (score >= 0.6) return "bg-yellow-500";
  return "bg-red-500";
};

const getScoreLabel = (score: number) => {
  if (score >= 0.8) return "Good alignment";
  if (score >= 0.6) return "Partial alignment";
  return "Significant gaps";
};

const barColors = {
  high: "#22c55e",
  medium: "#eab308",
  low: "#ef4444",
};

const SimilarityAnalysis: React.FC<SimilarityProps> = ({ results }) => {
  const chartData = results.map(item => ({
    name: item.domain,
    score: Math.round(item.score * 100),
    color: item.score >= 0.8 ? barColors.high : item.score >= 0.6 ? barColors.medium : barColors.low
  }));

  const downloadAnalysisReport = () => {
    let report = "Policy Analysis Report\n\n";
    report += "Date: " + new Date().toLocaleDateString() + "\n\n";

    report += "Overall Domain Analysis\n";
    report += "====================\n\n";

    results.forEach(domain => {
      report += `Domain: ${domain.domain}\n`;
      report += `Overall Score: ${Math.round(domain.score * 100)}%\n`;
      report += `Status: ${getScoreLabel(domain.score)}\n\n`;

      report += "Sections Analysis:\n";
      domain.sections.forEach(section => {
        report += `\n- ${section.section}\n`;
        report += `  Score: ${Math.round(section.score * 100)}%\n`;
        report += "  Clauses:\n";
        
        section.clauses.forEach(clause => {
          report += `    • ${clause.clause}: ${Math.round(clause.score * 100)}%\n`;
        });
      });
      report += "\n-------------------\n\n";
    });

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'policy-analysis-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Domain Analysis Overview</h2>
        <Button 
          onClick={downloadAnalysisReport}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Analysis Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Policy Similarity Analysis</CardTitle>
          <CardDescription>
            Comparison of your policy document against standard policies
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 100
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={80}
                />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Similarity']}
                  labelFormatter={(name) => `Domain: ${name}`}
                />
                <Bar dataKey="score" name="Similarity">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Detailed Similarity Scores</h2>
        
        {results.map((domain, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="bg-muted">
              <CardTitle className="text-lg">{domain.domain}</CardTitle>
              <div className="flex items-center space-x-4">
                <Progress 
                  value={domain.score * 100} 
                  className="h-2"
                />
                <span className="text-sm font-medium">{Math.round(domain.score * 100)}%</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                domain.score >= 0.8 ? "bg-green-100 text-green-800" : 
                domain.score >= 0.6 ? "bg-yellow-100 text-yellow-800" : 
                "bg-red-100 text-red-800"
              }`}>
                {getScoreLabel(domain.score)}
              </span>
            </CardHeader>
            
            <CardContent className="divide-y">
              {domain.sections.map((section, j) => (
                <div key={j} className="py-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium">{section.section}</h4>
                    <span className="text-sm">{Math.round(section.score * 100)}%</span>
                  </div>
                  <Progress 
                    value={section.score * 100} 
                    className={`h-2 ${
                      section.score >= 0.8 ? "bg-green-200" : 
                      section.score >= 0.6 ? "bg-yellow-200" : 
                      "bg-red-200"
                    }`}
                  />
                  
                  <div className="mt-4 pl-4 border-l-2 border-gray-200 space-y-2">
                    {section.clauses.map((clause, k) => (
                      <div key={k} className="flex justify-between items-center">
                        <span className="text-xs">{clause.clause}</span>
                        <div className="flex items-center">
                          <span className="text-xs mr-2">{Math.round(clause.score * 100)}%</span>
                          <div className={`w-3 h-3 rounded-full ${getScoreColor(clause.score)}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarityAnalysis;
