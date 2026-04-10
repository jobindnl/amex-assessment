import { useState } from 'react';

export const Accordion = ({ allowMultiple = true }) => {
  // Store an array of active indices to support multiple open sections
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  // button components to render
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
      // close others if opening a new one
      setActiveIndices(isOpen ? [] : [index]);
    }
  };

  return (
    <section>
      {data.map((item, index) => {
        const isOpen = activeIndices.includes(index);
        
        return (
          <div key={item.key}>
            <button 
              id={`section-${index}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`section-${index}`}
            >
              {item.title} {isOpen ? '−' : '+'}
            </button>
            
            {isOpen && (
              <div
                role="region"
                aria-labelledby={`section-${index}`}
                hidden={!isOpen}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};