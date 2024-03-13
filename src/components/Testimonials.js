import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment: "This is the best site for movie lovers!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I always find the best TV shows here!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <div className='container mx-auto my-8'>
      <h3 className='text-2xl font-bold text-red-600 mb-4'>Testimonials</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='bg-white p-4 rounded-lg shadow-md flex items-center'
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className='w-16 h-16 object-cover rounded-full mr-4'
            />
            <div>
              <h4 className='text-gray-800 text-lg font-bold'>
                {testimonial.name}
              </h4>
              <p className='text-gray-600'>{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
