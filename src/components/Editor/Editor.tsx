
import React, { useState, useRef, useEffect } from 'react';
import Toolbar from './Toolbar';
import { useToast } from '@/components/ui/use-toast';

const Editor = () => {
  const [content, setContent] = useState('');
  const [isSaved, setIsSaved] = useState(true);
  const editorRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleFormat = (type: string) => {
    const selection = window.getSelection();
    if (!selection?.toString()) return;

    document.execCommand('styleWithCSS', false, 'true');
    
    switch (type) {
      case 'bold':
        document.execCommand('bold', false);
        break;
      case 'italic':
        document.execCommand('italic', false);
        break;
      case 'heading':
        document.execCommand('formatBlock', false, '<h2>');
        break;
      case 'quote':
        document.execCommand('formatBlock', false, '<blockquote>');
        break;
    }
    setIsSaved(false);
  };

  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
      setIsSaved(false);
    }
  };

  // Effect to handle placeholder text visibility
  useEffect(() => {
    const editorElement = editorRef.current;
    if (!editorElement) return;

    // Add a class to control placeholder visibility based on content
    if (content === '') {
      editorElement.classList.add('empty');
    } else {
      editorElement.classList.remove('empty');
    }
  }, [content]);

  useEffect(() => {
    const saveContent = () => {
      // Simulate saving content
      setTimeout(() => {
        setIsSaved(true);
        toast({
          title: "Changes saved",
          description: "Your content has been saved automatically",
          className: "bg-editor-bg/80 border-editor-accent text-editor-text",
        });
      }, 1000);
    };

    if (!isSaved) {
      saveContent();
    }
  }, [content, isSaved, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-editor-bg to-editor-bg/90 text-editor-text p-8">
      <Toolbar onFormat={handleFormat} />
      <div className="max-w-3xl mx-auto mt-24 mb-16 relative">
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className="min-h-[70vh] focus:outline-none font-inter prose prose-invert prose-p:text-lg prose-p:leading-relaxed prose-headings:font-playfair prose-headings:font-normal prose-blockquote:border-editor-accent prose-blockquote:bg-editor-accent/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 px-6 empty:before:content-['Start_writing_something_beautiful...'] empty:before:text-editor-muted/60 empty:before:italic"
        />
      </div>
      <div className="fixed bottom-6 right-6 text-sm text-editor-muted animate-fade-in">
        {isSaved ? 'All changes saved' : 'Saving...'}
      </div>
    </div>
  );
};

export default Editor;
