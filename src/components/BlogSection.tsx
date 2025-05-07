
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  author: string;
}

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Using a proxy service to avoid CORS issues with Medium's RSS feed
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@furiai2025`);
        const data = await response.json();

        if (data.status === 'ok') {
          // Get the first 4 posts
          const mediumPosts = data.items.slice(0, 4).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            }),
            thumbnail: item.thumbnail || extractImageFromContent(item.content),
            description: extractExcerpt(item.content),
            author: item.author
          }));
          setPosts(mediumPosts);
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();

    // Intersection observer for revealing animation
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Helper function to extract excerpt from Medium post content
  const extractExcerpt = (content: string) => {
    // Remove HTML tags and extract first 120 characters
    const plainText = content.replace(/<[^>]+>/g, '');
    return plainText.substring(0, 120) + '...';
  };

  // Helper function to extract first image from content if thumbnail is missing
  const extractImageFromContent = (content: string) => {
    const imgMatch = content.match(/<img[^>]+src="([^"]+)"[^>]*>/);
    return imgMatch ? imgMatch[1] : 'https://placehold.co/600x400/e0e0e0/818181?text=AI+Scholar';
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal" ref={sectionRef}>
          <h2 className="section-title">Stay Sharp with the Latest in AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real insights, zero fluff. Read lessons, trends, and ideas from our AI School editors and community.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="glass-card h-80 animate-pulse">
                <div className="h-40 bg-gray-200 rounded-t-xl"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2 w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.map((post, index) => (
              <Card 
                key={index} 
                className="glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/e0e0e0/818181?text=AI+Scholar';
                    }}
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.pubDate}</div>
                  <h3 className="text-xl font-bold mb-2 text-primary line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-medium hover:underline"
                  >
                    Read more →
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="https://medium.com/@furiai2025/ai-scholar-c94aa6994707" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="primary-button inline-block"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
