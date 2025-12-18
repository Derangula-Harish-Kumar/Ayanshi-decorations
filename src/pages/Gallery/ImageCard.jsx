import { useState } from 'react';

// Convert Google Drive URLs to direct viewable format
const convertGoogleDriveUrl = (url) => {
  // Guard clause: if url is null, undefined, or empty, return an empty string
  if (!url) return '';

  // Handle various Google Drive URL formats
  
  // Format: https://drive.google.com/file/d/FILE_ID/view
  const fileMatch = url.match(/\/file\/d\/([^/]+)/);
  if (fileMatch) {
    return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;
  }
  
  // Format: https://drive.google.com/open?id=FILE_ID
  const openMatch = url.match(/[?&]id=([^&]+)/);
  if (openMatch) {
    return `https://lh3.googleusercontent.com/d/${openMatch[1]}`;
  }
  
  // Format: https://drive.google.com/uc?id=FILE_ID
  const ucMatch = url.match(/\/uc\?.*id=([^&]+)/);
  if (ucMatch) {
    return `https://lh3.googleusercontent.com/d/${ucMatch[1]}`;
  }

  // If it's already in lh3 format or another format, return as is
  return url;
};

const ImageCard = ({ id, name, url, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const displayUrl = convertGoogleDriveUrl(url);
  
  // Clean up the filename for display
  const displayName = (name || '')
    .replace(/\.[^/.]+$/, '') // Remove file extension
    .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-500 ease-out"
      style={{ 
        animationDelay: `${index * 100}ms`,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-card)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Loading skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 animate-shimmer" />
        )}
        
        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted p-4">
            <svg 
              className="mb-2 h-10 w-10 text-muted-foreground" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span className="text-center text-xs text-muted-foreground">Unable to load image</span>
          </div>
        )}

        {/* Actual Image */}
        {displayUrl && (
          <img
            src={displayUrl}
            alt={displayName}
            loading="lazy"
            className={`h-full w-full object-cover transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}

        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gold accent corner */}
        <div 
          className={`absolute -right-8 -top-8 h-16 w-16 rotate-45 gradient-gold transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 -translate-y-4'
          }`}
        />
      </div>

      {/* Caption */}
      <div className="relative p-4">
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <h3 className="font-display text-lg font-medium tracking-wide text-card-foreground line-clamp-2">
          {displayName}
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;
