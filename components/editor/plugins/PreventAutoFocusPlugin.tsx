// plugins/PreventAutoFocusPlugin.tsx
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

export function PreventAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Prevent auto-focus on mount
    return editor.registerUpdateListener(({ dirtyElements, dirtyLeaves }) => {
      // Only allow focus if it's a user-initiated action
      if (!editor.isEditable()) return;
      
      // Check if the active element is an input outside the editor
      const activeElement = document.activeElement;
      if (activeElement && 
          activeElement.tagName === 'INPUT' && 
          !editor.getRootElement()?.contains(activeElement)) {
        // Don't steal focus from external inputs
        return;
      }
    });
  }, [editor]);

  return null;
}