
import React, { useEffect, useRef, useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSW5SfkcvNZwiKEE10l0bTI12CRo9Z-B-r301Isu3RI2XCAoqVkBdVTPqQVI7UMrLTRx0cX8j1sWpkR/pub?output=csv');
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setFaqs(parsedData);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const parseCSV = (csvText: string): FAQ[] => {
    const rows = csvText.split('\n');
    
    // Skip the header row
    const dataRows = rows.slice(1);
    
    return dataRows
      .filter(row => row.trim() !== '') // Skip empty rows
      .map(row => {
        // Handle quoted values and commas within quotes
        const processRow = (rowStr: string) => {
          const result = [];
          let insideQuote = false;
          let currentValue = '';
          
          for (let i = 0; i < rowStr.length; i++) {
            const char = rowStr[i];
            
            if (char === '"') {
              insideQuote = !insideQuote;
            } else if (char === ',' && !insideQuote) {
              result.push(currentValue);
              currentValue = '';
            } else {
              currentValue += char;
            }
          }
          
          if (currentValue) {
            result.push(currentValue);
          }
          
          return result;
        };
        
        const columns = processRow(row);
        
        // Clean up any remaining quotes
        const question = columns[0]?.replace(/"/g, '').trim() || '';
        const answer = columns[1]?.replace(/"/g, '').trim() || '';
        
        return { question, answer };
      });
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-gray-50 reveal" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Get answers to common questions about AI learning, our courses, and how to get started.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-pulse-soft flex space-x-4">
              <div className="w-full">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded mb-4"></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 p-4">
            {error}
          </div>
        )}

        {!isLoading && !error && (
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-sm border-none"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left text-primary font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
