import React from 'react';
import { Award, Calendar, Heart, Box } from 'lucide-react';

const HobbiesAndTrainings = () => {
  const certs = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy & Python Institute",
      date: "Oct 2026",
      type: "Certification",
      images: [
        "/assets/certificates/python_essentials_cert.png",
        "/assets/certificates/python_essentials_badge.png",
      ]
    },
    {
      title: "Hackathons & Innovation Pitches: LIBOT, Financial Health Frontiers & Block 'N Build (Ambagan)",
      issuer: "Cognizant APAC Hackathon • JBECP-JRU x Paiflow",
      date: "2026",
      type: "Hackathon",
      images: [
        "/assets/certificates/Hackathon1.png",
        "/assets/certificates/Hackathon2.jpeg",
        "/assets/certificates/Hackathon3.jpeg",
        "/assets/certificates/Hackathon4.jpeg",
        "/assets/certificates/Hackathon5.png",
      ]
    },
    {
      title: "The Cloud Grand Prix & Fireside Chat (Event Host & Secretary)",
      issuer: "AWS Student Builder Group - JRU Chapter",
      date: "2026",
      type: "Leadership & Hosting",
      images: [
        "/assets/certificates/Hosting1.jpeg",
        "/assets/certificates/Hosting2.jpeg",
        "/assets/certificates/Hosting3.jpeg",
      ]
    },
    {
      title: "32nd Mass Induction and Oathtaking Ceremony",
      issuer: "José Rizal University - Student Leadership",
      date: "2026",
      type: "Oathtaking",
      images: [
        "/assets/certificates/Oathtaking1.jpeg",
        "/assets/certificates/Oathtaking2.jpeg",
        "/assets/certificates/Oathtaking3.jpeg",
      ]
    },
    {
      title: "AI Forward with Cloud Basics: Kiro Workshop",
      issuer: "AWS Learning Club - JRU",
      date: "2026",
      type: "Workshop",
      images: [
        "/assets/certificates/kiro_cert.jpg",
        "/assets/certificates/kiro_1.jpg",
        "/assets/certificates/kiro_2.jpg",
        "/assets/certificates/kiro_3.jpg",
      ]
    },
    {
      title: "AWS Student Community Night",
      issuer: "AWS Community - BGC",
      date: "2026",
      type: "Community Event",
      images: [
        "/assets/certificates/aws_night_1.jpg",
        "/assets/certificates/aws_night_2.jpg",
        "/assets/certificates/aws_cloud_clubs_merch.jpg"
      ]
    },
    {
      title: "Gen AI to Z: A Career Summit",
      issuer: "VibeCoders - UP Diliman",
      date: "2026",
      type: "Career Summit",
      images: [
        "/assets/certificates/gen_ai_cert.jpg",
        "/assets/certificates/gen_ai_1.jpg",
        "/assets/certificates/gen_ai_3.jpg",
      ]
    },
    {
      title: "Data and AI for Next Generation of Tech Startups",
      issuer: "AIM-Dado Banatao Incubator",
      date: "2026",
      type: "Event",
      images: [
        "/assets/certificates/AIM1.jpg",
        "/assets/certificates/AIM2.jpg",
      ]
    },
    {
      title: "Breaking in Building Forward",
      issuer: "AWS User Group BuildHers+ Philippines - Infor BGC",
      date: "2026",
      type: "Event",
      images: [
        "/assets/certificates/infor1.jpg",
        "/assets/certificates/infor2.jpg",
        "/assets/certificates/breaking_1.jpg",
        "/assets/certificates/breaking_2.jpg",
      ]
    },
    {
      title: "AWS Learning Club JRU Chapter Scholarship with Data Engineering Pilipinas Partnership",
      issuer: "DataCamp",
      date: "2025",
      type: "Scholarship",
      images: [
        "/assets/certificates/datacamp_scholarship.jpg",
      ]
    },
    {
      title: "Pinterest Media Planner Certification",
      issuer: "Pinterest",
      date: "2026",
      type: "Certification",
      images: [
        "/assets/certificates/Pinterest.png",
      ]
    },
    {
      title: "Kadakareer X Canva",
      issuer: "Kadakareer and Canva Collaboration",
      date: "2026",
      type: "Certification",
      images: [
        "/assets/certificates/canva cert.jpg",
        "/assets/certificates/canva 1.jpg",
        "/assets/certificates/canva2.jpg",
        "/assets/certificates/canva3.jpg",
      ]
    },
    {
      title: "ASEAN Data Science Enablement",
      issuer: "ASEAN Youth Organization",
      date: "2026",
      type: "Certification",
      images: [
        "/assets/certificates/sap.jpg",
      ]
    }
  ];

  const danceImages = [
    { src: '/assets/hobbies/dance_1.jpg', caption: 'Performance Arts' },
    { src: '/assets/hobbies/dance_2.jpg', caption: 'Choreography' },
    { src: '/assets/hobbies/dance_3.jpg', caption: 'Dagyaw Theater' },
    { src: '/assets/hobbies/dance_4.jpg', caption: 'Stage Showcase' }
  ];

  const blenderImages = [
    { src: '/assets/hobbies/3D3.jpeg', caption: 'AWS Student Builder Group 3D Emblem (Final Render)' },
    { src: '/assets/hobbies/3D2.jpeg', caption: 'Blender Orthographic Character & Emblem Modeling' },
    { src: '/assets/hobbies/3D1.jpeg', caption: '3D Shading, Lighting & Material Setup in Blender' }
  ];

  return (
    <section id="hobbies-trainings" className="space-y-12 mt-6">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl font-extrabold text-clay-charcoal tracking-wide">Hobbies & Trainings</h2>
        <p className="text-xs text-clay-muted uppercase tracking-widest font-bold">Creative Pursuits, Leadership & Professional Development</p>
      </div>

      {/* Hobbies & Creative Outlet Card */}
      <div className="clay-card p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-clay-muted/15 pb-4">
          <div className="w-10 h-10 rounded-2xl clay-badge-sage flex items-center justify-center text-clay-charcoal">
            <Heart size={22} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-clay-charcoal">Hobbies & Creative Outlet</h3>
        </div>
        
        <div className="text-sm text-clay-charcoal leading-relaxed font-medium space-y-4">
          <p>
            Beyond my academic pursuits, I am deeply engaged in technology, 3D digital art, and the performing arts. I enjoy attending and hosting <strong>technology events, hackathons, and community workshops</strong> to keep pace with innovation, collaborate on impactful solutions, and connect with industry professionals.
          </p>
          <p>
            I also channel my creativity into <strong>3D Modeling with Blender</strong>, crafting custom 3D mascots and emblems such as the official 3D badge for the <span className="italic text-clay-charcoal font-bold">AWS Student Builder Group – JRU Chapter</span>.
          </p>
          <p>
            Dancing is another primary creative passion. As part of the <span className="italic text-clay-charcoal font-bold">Vicentinian Maraynon Dagyaw Theater</span>, I explore choreography and stage performances. My dance journey has allowed me to showcase my skills on major platforms, including the <span className="italic font-bold text-clay-charcoal">World Championship of Performing Arts (WCOPA)</span>, <span className="italic font-bold text-clay-charcoal">ASEAN Hip Hop</span>, and <span className="italic font-bold text-clay-charcoal">World of Dance (WOD)</span>.
          </p>
        </div>

        {/* 3D Modeling Carousel */}
        <div className="space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full clay-badge-blue text-xs font-bold uppercase tracking-widest text-clay-charcoal">
            <Box size={15} />
            <span>3D Modeling & Digital Art (Blender)</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
            {blenderImages.map((img, idx) => (
              <div key={idx} className="shrink-0 snap-center w-64 sm:w-80 md:w-96 h-48 sm:h-56 md:h-64 group/img relative overflow-hidden clay-tile p-2">
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wider">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dance Carousel */}
        <div className="space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full clay-badge-sage text-xs font-bold uppercase tracking-widest text-clay-charcoal">
            <Heart size={15} />
            <span>Performing Arts & Dance</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
            {danceImages.map((img, idx) => (
              <div key={idx} className="shrink-0 snap-center w-60 sm:w-72 md:w-80 h-44 sm:h-52 md:h-60 group/img relative overflow-hidden clay-tile p-2">
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wider">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trainings & Certificates Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-clay-muted/15 pb-4">
          <div className="w-10 h-10 rounded-2xl clay-badge-blue flex items-center justify-center text-clay-charcoal">
            <Award size={22} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-clay-charcoal">Trainings, Hackathons & Certificates</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="group flex flex-col p-6 clay-card transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl text-clay-charcoal shrink-0 ${index % 2 === 0 ? 'clay-badge-sage' : 'clay-badge-blue'}`}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-clay-charcoal leading-tight">{cert.title}</h3>
                    <p className="text-xs text-clay-muted font-bold uppercase tracking-wider mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 text-[10px] text-clay-muted font-bold uppercase">
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                  <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${index % 2 === 0 ? 'clay-badge-blue' : 'clay-badge-sage'}`}>
                    {cert.type}
                  </span>
                </div>
              </div>

              {cert.images && cert.images.length > 0 && (
                <div className="relative mt-2 group/carousel">
                  <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
                    {cert.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="shrink-0 snap-center clay-tile p-2">
                        <img 
                          src={img} 
                          alt={`${cert.title} ${imgIdx + 1}`}
                          className="h-36 md:h-52 w-auto rounded-2xl hover:scale-[1.02] transition-transform duration-300 object-cover bg-white"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesAndTrainings;
