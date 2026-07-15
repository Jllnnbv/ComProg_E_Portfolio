import React from 'react';
import { Award, Calendar, Heart } from 'lucide-react';

const HobbiesAndTrainings = () => {
  const certs = [
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

  return (
    <section id="hobbies-trainings" className="space-y-12 mt-16">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Hobbies & Trainings</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Professional Development & Recognition</p>
      </div>

      {/* Hobbies & Creative Outlet Card */}
      <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-200/50 pb-4">
          <Heart className="text-crimson-depth" size={24} />
          <h3 className="font-serif text-2xl font-bold text-gray-900">Hobbies & Creative Outlet</h3>
        </div>
        
        <div className="text-sm text-gray-700 leading-relaxed font-medium space-y-4">
          <p>
            Beyond my academic pursuits, I am deeply engaged in technology and the performing arts. I enjoy attending <strong>technology events and networking</strong> to keep pace with innovation, connect with like-minded peers, and learn from industry professionals.
          </p>
          <p>
            Dancing is my primary creative outlet and passion. As part of the <span className="italic text-crimson-depth font-semibold">Vicentinian Maraynon Dagyaw Theater</span>, I explore choreography and stage performances. My dance journey has allowed me to showcase my skills on major platforms, including the <span className="italic font-semibold text-gray-950">World Championship of Performing Arts (WCOPA)</span>, <span className="italic font-semibold text-gray-950">ASEAN Hip Hop</span>, and <span className="italic font-semibold text-gray-950">World of Dance (WOD)</span>.
          </p>
        </div>

        {/* Dance Carousel */}
        <div className="relative mt-6">
          <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
            {danceImages.map((img, idx) => (
              <div key={idx} className="shrink-0 snap-center w-60 sm:w-72 md:w-80 h-44 sm:h-52 md:h-60 group/img relative overflow-hidden rounded-xl border border-white/40 shadow-md bg-gray-800">
                <img 
                  src={img.src} 
                  alt={img.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4">
                  <p className="text-white text-xs sm:text-sm font-semibold tracking-wider">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trainings & Certificates Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-200/50 pb-4">
          <Award className="text-crimson-depth" size={24} />
          <h3 className="font-serif text-2xl font-bold text-crimson-depth">Trainings & Certificates</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="group flex flex-col p-6 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-crimson-depth/10 rounded-full text-crimson-depth">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight">{cert.title}</h3>
                    <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 text-[10px] text-warm-sand font-bold uppercase">
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 bg-crimson-depth text-white rounded font-bold uppercase tracking-tighter">
                    {cert.type}
                  </span>
                </div>
              </div>

              {cert.images && cert.images.length > 0 && (
                <div className="relative mt-2 group/carousel">
                  <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
                    {cert.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="shrink-0 snap-center">
                        <img 
                          src={img} 
                          alt={`${cert.title} ${imgIdx + 1}`}
                          className="h-32 md:h-48 w-auto rounded-lg shadow-md border border-white/40 hover:scale-[1.02] transition-transform duration-300 object-cover"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson-depth/20 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity"></div>
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