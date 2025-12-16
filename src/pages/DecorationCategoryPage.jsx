import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const DecorationCategoryPage = () => {
  const { categoryName } = useParams();
  const displayName = categoryName ? categoryName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) : 'Category';

  return (
    <div className="pt-16"> {/* Add padding to account for fixed NavBar */}
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold">{displayName}</h1>
      </div>
      <div className="p-4">
        {/* Content specific to the decoration category */}
        <p>Details for {displayName} will be displayed here.</p>
        {/* You can add more specific content based on categoryName here */}
      </div>
    </div>
  );
};

export default DecorationCategoryPage;
