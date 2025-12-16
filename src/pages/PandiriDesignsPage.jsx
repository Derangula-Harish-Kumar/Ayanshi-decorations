import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PandiriDesignsPage = () => {
  return (
    <div className="pt-16">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold">Pandiri Designs</h1>
      </div>
      <div className="p-4">
        <p>Details for Pandiri Designs will be displayed here.</p>
      </div>
    </div>
  );
};

export default PandiriDesignsPage;
