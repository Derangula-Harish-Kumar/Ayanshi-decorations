import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PageWeddingDecorations = () => {
  return (
    <div>
      <div className="pt-16"> {/* Add padding to account for fixed NavBar */}
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
            <ChevronLeft className="h-6 w-6" />
            <span className="ml-2">Back</span>
          </Link>
          <h1 className="text-2xl font-bold">Wedding Decorations</h1>
        </div>
        <div className="p-4">
          {/* Add content for the wedding decorations page here */}
          <p>This is the page for wedding decorations. More content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default PageWeddingDecorations;