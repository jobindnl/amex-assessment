import { useState } from 'react';

export const Accordion = ({ allowMultiple = true }) => {
  // Store an array of active indices to support multiple open sections
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const data = [
    { title: 'Section 1', content: 'Content for panel one', key: 'section1' },
    { title: 'Section 2', content: 'Content for panel two', key: 'section2' },
    { title: 'Section 3', content: 'Content for panel three', key: 'section3' },
  ];
  
  const toggle = (index: number) => {
    const isOpen = activeIndices.includes(index);

    if (allowMultiple) {
      // Add or remove index from the array
      setActiveIndices(isOpen 
        ? activeIndices.filter(i => i !== index) 
        : [...activeIndices, index]
      );
    } else {
      // Classic mode: close others if opening a new one
      setActiveIndices(isOpen ? [] : [index]);
    }
  };

  return (
    <div style={{ maxWidth: '400px', border: '1px solid #ddd', borderRadius: '4px' }}>
      {data.map((item, index) => {
        const isOpen = activeIndices.includes(index);
        
        return (
          <div key={item.key}>
            <button 
              onClick={() => toggle(index)}
            >
              {item.title} {isOpen ? '−' : '+'}
            </button>
            
            {isOpen && (
              <div>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};