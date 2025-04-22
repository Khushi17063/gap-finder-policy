
import React, { useRef, useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle, FileText, CheckCircle, Upload } from "lucide-react";

// This component handles document upload and text extraction
// In a complete implementation, this would use libraries like pdf.js, mammoth, etc.
const DocumentUploader: React.FC<{
  onDocumentProcessed: (text: string, name: string) => void;
}> = ({ onDocumentProcessed }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    if (!file) return;
    
    setFileName(file.name);
    setIsProcessing(true);
    setUploadStatus('processing');
    setError(null);
    
    try {
      // In a real implementation, we would extract text from various file formats
      // For this prototype, we'll simulate text extraction with a timeout
      
      // Read the file as text (this would be replaced with format-specific parsing)
      const text = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Normally we would use pdfjs, mammoth, etc. here
          const result = e.target?.result;
          setTimeout(() => {
            // Simulate processing delay
            resolve(typeof result === 'string' ? result : 'Sample document content for demonstration');
          }, 1500);
        };
        reader.readAsText(file);
      });
      
      setUploadStatus('success');
      onDocumentProcessed(text, file.name);
    } catch (err) {
      console.error('Error processing document:', err);
      setError('Failed to process the document. Please try again.');
      setUploadStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setUploadStatus('uploading');
      processFile(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadStatus('uploading');
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer 
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'}`}
      >
        <input 
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center space-y-4">
          {isDragActive ? (
            <Upload className="h-10 w-10 text-primary" />
          ) : (
            <FileText className="h-10 w-10 text-gray-400" />
          )}
          
          {isDragActive ? (
            <p className="text-sm font-medium">Drop the document here</p>
          ) : (
            <>
              <p className="text-sm font-medium">Drag and drop your policy document, or click to select</p>
              <p className="text-xs text-gray-500">Supports PDF, DOCX, and TXT formats</p>
            </>
          )}
        </div>
      </div>

      {uploadStatus === 'uploading' && (
        <div className="flex items-center justify-center space-x-2 p-4">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
          <p className="text-sm">Uploading document...</p>
        </div>
      )}

      {uploadStatus === 'processing' && (
        <div className="flex items-center justify-center space-x-2 p-4">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
          <p className="text-sm">Processing document...</p>
        </div>
      )}

      {uploadStatus === 'success' && fileName && (
        <Alert variant="default" className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>Document uploaded successfully</AlertTitle>
          <AlertDescription className="text-sm">
            "{fileName}" has been processed and is ready for analysis.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Upload Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!isProcessing && uploadStatus === 'idle' && (
        <div className="text-center text-sm text-gray-500">
          <p>You can also upload a sample document for testing:</p>
          <Button 
            variant="outline" 
            className="mt-2"
            onClick={() => {
              setUploadStatus('processing');
              setTimeout(() => {
                const sampleText = "CONFIDENTIALITY POLICY\n\n1. INTRODUCTION\nThis policy defines how our company handles confidential information.\n\n2. SCOPE\nThis policy applies to all employees and contractors.";
                setUploadStatus('success');
                onDocumentProcessed(sampleText, "Sample-Policy.txt");
              }, 1000);
            }}
          >
            Use Sample Document
          </Button>
        </div>
      )}
    </div>
  );
};

export default DocumentUploader;
