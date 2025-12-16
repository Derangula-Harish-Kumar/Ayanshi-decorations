import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonialsData'; // Import testimonials data

const Reviews = () => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialSlide(prev => (prev + 1) % testimonials.length);
    }, 4500);

    return () => {
      clearInterval(testimonialInterval);
    };
  }, []);

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
      
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/90">Real experiences from our happy customers</p>
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonialSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-full absolute top-0 left-0 right-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.comment}"</p>
                  <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            ))}
            
            {/* Testimonial Navigation Buttons */}
            <button 
              onClick={prevTestimonialSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonialSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reviews
