import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'Raymond Stuart',
    title: 'Tech Enthusiast',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
  {
    name: 'Raymond Stuart',
    title: 'Tech Enthusiast',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
  {
    name: 'Raymond Stuart',
    title: 'Tech Enthusiast',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
  {
    name: 'Raymond Stuart',
    title: 'Tech Enthusiast',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
  {
    name: 'Ronald Tracy',
    title: 'CEO Startup',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
  {
    name: 'Stephany Ludwig',
    title: 'Investor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
  {
    name: 'Brie Pauline',
    title: 'Tech Enthusiast',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat lacus, ut suspendisse nam ut egestas felis eget. Felis vulputate hac massa enim, elemen.',
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
    <h1 className="text-center text-3xl font-bold mb-10 text-[#0D222D]">Trust from <span className="text-orange-500 ">Customers</span></h1>
    <div className="flex items-center justify-center mt-10 mb-32">
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 px-8 py-8 overflow-x-hidden cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white p-14 rounded-lg shadow-md hover:bg-[#336574] duration-500"
            style={{ minWidth: '320px' }}
          >
            <p className="text-gray-900 mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <h5 className="text-gray-900 font-bold">{testimonial.name}</h5>
                <p className="text-gray-900">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Testimonials;
