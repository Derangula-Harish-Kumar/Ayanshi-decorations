import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ImageCard from './Gallery/ImageCard.jsx';
import LoadingSkeleton from './Gallery/LoadingSkeleton.jsx';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_ORgu350OuyaJlPR0ExI7T6PNeo0S_dknGngDYjZ9R3dms00ENVSfq76tZ-GgLrPwtA/exec";

const HaldiDecorationPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(SCRIPT_URL, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
          },
        });

        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Try to parse as JSON
        let data;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          // If not JSON, try to parse as text first
          const text = await response.text();
          try {
            data = JSON.parse(text);
          } catch (e) {
            // If parsing fails, check if it's an array of URLs
            const lines = text.split('\n').filter(line => line.trim());
            if (lines.length > 0 && lines[0].startsWith('http')) {
              data = lines;
            } else {
              throw new Error('Invalid response format');
            }
          }
        }

        console.log('Raw data from Haldi script:', data);

        // Normalize data into the shape expected by ImageCard: { id, name, url }
        let raw = data;

        // Handle different data structures
        if (!raw) {
          throw new Error('No data received');
        }

        // Some scripts wrap data inside a property
        if (raw && !Array.isArray(raw)) {
          raw = raw.items || raw.data || raw.images || raw.files || raw.results || Object.values(raw);
        }

        // Ensure raw is an array
        if (!Array.isArray(raw)) {
          raw = [raw];
        }

        const normalized = raw.map((item, index) => {
          // If the item is just a string, treat it as a URL
          if (typeof item === 'string') {
            return {
              id: index,
              name: `Haldi Image ${index + 1}`,
              url: item.trim(),
            };
          }

          // Handle object with various property names
          const url = item.url || 
                     item.imageUrl || 
                     item.image || 
                     item.src || 
                     item.link || 
                     item.href || 
                     item.fileUrl ||
                     item.downloadUrl ||
                     item.webViewLink ||
                     item.webContentLink ||
                     (typeof item === 'object' && item[Object.keys(item)[0]]) ||
                     '';

          const name = item.name ||
                      item.title ||
                      item.fileName ||
                      item.filename ||
                      item.alt ||
                      item.description ||
                      `Haldi Image ${index + 1}`;

          return {
            id: item.id ?? index,
            name: name,
            url: typeof url === 'string' ? url.trim() : '',
          };
        }).filter(img => img.url && img.url.length > 0); // keep only entries that have a valid URL

        console.log('Normalized images:', normalized);

        if (normalized.length === 0) {
          setError('No images found in the response. Please check the data format.');
        } else {
          setImages(normalized);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Haldi images:", err);
        setError(`Unable to load gallery: ${err.message}`);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen gradient-hero pt-16 bg-[#F7F3EB]">
      {/* Back Button */}
      <div className="flex items-center p-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2">Back</span>
        </Link>
      </div>

      {/* Header */}
      <header className="relative overflow-hidden pb-8 pt-8 text-center">
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-8 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Joyful Rituals
          </p>
          <h1 className="font-display font-Charm text-4xl font-light tracking-wide text-foreground sm:text-5xl md:text-6xl">
            Haldi Decorations
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base font-light text-muted-foreground">
            Explore vibrant and colorful Haldi decoration inspirations for your special ceremony
          </p>
          
          {/* Decorative divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="h-2 w-2 rotate-45 border border-primary/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="container mx-auto px-4 pb-16">
        {loading ? (
          <div className="space-y-8">
            {/* Loading message */}
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative">
                <div className="h-12 w-12 animate-float rounded-full border-2 border-primary/30 bg-card shadow-soft" />
                <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full border border-primary/20" />
              </div>
              <p className="mt-4 font-body text-sm text-muted-foreground">
                Loading beautiful moments...
              </p>
            </div>
            <LoadingSkeleton />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-4 rounded-full bg-destructive/10 p-4">
              <svg className="h-8 w-8 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-center font-body text-muted-foreground">{error}</p>
          </div>
        ) : images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-4 rounded-full bg-muted p-4">
              <svg className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-center font-body text-muted-foreground">No images found in the gallery</p>
          </div>
        ) : (
          <>
            {/* Image count */}
            <p className="mb-8 text-center font-body text-sm text-muted-foreground">
              {images.length} {images.length === 1 ? 'inspiration' : 'inspirations'} to explore
            </p>
            
            {/* Image grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((img, index) => (
                <div 
                  key={img.id || index} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ImageCard
                    id={img.id}
                    name={img.name}
                    url={img.url}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-xs text-muted-foreground">
            Crafted with love for your special day
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HaldiDecorationPage;
