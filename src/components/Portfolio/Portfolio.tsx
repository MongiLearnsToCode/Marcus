import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const filters = ['All', 'Film', 'Theatre', 'Voice'];

  const projects = [
    {
      title: "Zombie Date Night in Tlokweng",
      category: "Film",
      description: "Award-winning comedy-horror short film that won Best Film and Audience Choice Award at the 2023 Durban Film Mart NEFTI competition.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
      awards: ["Best Film 2023", "Audience Choice 2023"],
      year: '2023'
    },
    {
      title: "Verses at Work",
      category: "Film",
      description: "Co-produced with Malik Work, winning awards at both the 2016 Brazil International Film Festival and 2017 NYC Hip-Hop Film Festival.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
      awards: ["Brazil Film Festival 2016", "NYC Hip-Hop Festival 2017"],
      year: '2017'
    },
    {
      title: "Covid Toonz",
      category: "Film",
      description: "Animation series sponsored by the National Arts Council of South Africa, addressing pandemic-related topics through animation.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
      year: ''
    },
    {
      title: "Connection to Home",
      category: "Theatre",
      description: "One-man show that won Best Production at the 2016 Goree Island International Arts Festival in Senegal.",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80",
      awards: ["Best Production 2016"],
      year: '2016'
    },
    {
      title: "My Children, My Africa",
      category: "Theatre",
      description: "Performed in Athol Fugard's powerful play exploring themes of education and apartheid.",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80",
      year: ''
    },
    {
      title: "Brand Campaigns",
      category: "Voice",
      description: "Brand ambassador and copywriter for major brands including Phillips, Betway, Discovery Insure, KFC, and Vodacom.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      brands: ["Phillips", "Betway", "Discovery Insure", "Kia Motors", "KFC", "Vodacom"],
      year: ''
    },
    {
      title: "The Film Biz Show",
      category: "Voice",
      description: "Host and executive producer of this industry-focused podcast featuring interviews with film and TV experts.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80",
      guests: ["Jane Fry", "Oliver Schmidt", "Samad Davis", "Vuyo Dabula"],
      year: ''
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#1B1F2E]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#C5A572] font-garamond">
            My Portfolio
          </h2>
          <p className="text-[#E5D5B7] text-lg md:text-xl">
            A collection of my work across film, theatre, and performance arts.
          </p>
        </div>

        {/* Filters */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#C5A572] text-[#1B1F2E]'
                  : 'text-[#C5A572] border border-[#C5A572] hover:bg-[#252A3D]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(windowWidth < 768 ? projects : filteredProjects).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;