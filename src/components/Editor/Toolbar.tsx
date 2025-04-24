
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bold, Italic, Heading, TextQuote } from 'lucide-react';

const Toolbar = ({ onFormat }: { onFormat: (type: string) => void }) => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg backdrop-blur-xl bg-editor-bg/30 border border-white/10 shadow-lg animate-fade-in flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="text-editor-text hover:bg-editor-accent/20"
        onClick={() => onFormat('bold')}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-editor-text hover:bg-editor-accent/20"
        onClick={() => onFormat('italic')}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-editor-text hover:bg-editor-accent/20"
        onClick={() => onFormat('heading')}
      >
        <Heading className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-editor-text hover:bg-editor-accent/20"
        onClick={() => onFormat('quote')}
      >
        <TextQuote className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Toolbar;
