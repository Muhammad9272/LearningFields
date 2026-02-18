import Header from "@/components/Header";
import Footer from "@/components/Footer";



import { CONTAINER_CLASSES } from "@/components/Constants";

export default function Resources() {
  const categories = [
    {
      icon: "fa-book",
      title: "Guides & Handbooks",
      description: "Comprehensive guides covering autism, ADHD, dyslexia, and other learning differences with practical strategies for support.",
      linkText: "Explore Guides"
    },
    {
      icon: "fa-graduation-cap",
      title: "Lesson Plans",
      description: "Ready-to-use lesson plans customized for diverse learning styles and neurodivergent learners across subjects.",
      linkText: "Browse Lessons"
    },
    {
      icon: "fa-chart-bar",
      title: "Assessment Tools",
      description: "Evidence-based assessment frameworks and tools to identify learning strengths and support needs.",
      linkText: "View Tools"
    },
    {
      icon: "fa-lightbulb",
      title: "Accommodation Strategies",
      description: "Detailed strategies and accommodations for supporting different learning styles in the classroom and at home.",
      linkText: "Discover Strategies"
    },
    {
      icon: "fa-video",
      title: "Video Tutorials",
      description: "Educational videos on teaching techniques, communication strategies, and supporting neurodivergent learners.",
      linkText: "Watch Videos"
    },
    {
      icon: "fa-file-pdf",
      title: "Downloadable Forms",
      description: "Printable forms, templates, and checklists for tracking progress and organizing student information.",
      linkText: "Download Forms"
    }
  ];

  const featured = [
    {
      icon: "fa-book-open",
      title: "The Complete ADHD Support Guide",
      description: "A comprehensive guide covering ADHD identification, support strategies, and accommodations for both home and school settings.",
      tags: ["ADHD", "Guide"]
    },
    {
      icon: "fa-brain",
      title: "Understanding Autism in Education",
      description: "An in-depth resource for educators and families about autism spectrum disorder, sensory needs, and effective support strategies.",
      tags: ["Autism", "Education"]
    },
    {
      icon: "fa-handshake",
      title: "Communication Strategies for Parents & Teachers",
      description: "Practical communication techniques to support positive interactions with neurodivergent learners and build stronger relationships.",
      tags: ["Communication", "Tips"]
    }
  ];

  return (
    <div className="bg-bg-ivory min-h-screen">
      <Header/>
      {/* Page Header - Aligned to Header Logo via CONTAINER_CLASSES */}
      <section className="bg-white py-16 border-b border-primary-green/20">
        <div className={CONTAINER_CLASSES}>
          <div className="flex flex-col">
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4">Resource Library</h1>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl leading-relaxed">
              A comprehensive collection of educational materials, guides, and tools designed to support students, families, and educators in understanding and supporting neurodivergent learners.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className={CONTAINER_CLASSES}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-primary-green/5 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-secondary-clay/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-clay group-hover:text-white transition-colors">
                  <i className={`fa-solid ${cat.icon} text-2xl text-secondary-clay group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{cat.title}</h3>
                <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <a href="#" className="text-primary-green hover:text-secondary-clay transition-colors text-sm font-bold flex items-center gap-2 uppercase tracking-wider">
                  {cat.linkText} <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-white py-24 border-y border-primary-green/10">
        <div className={CONTAINER_CLASSES}>
          <h2 className="font-serif text-4xl text-charcoal mb-12">Featured Resources</h2>
          <div className="space-y-8">
            {featured.map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 border border-primary-green/10 rounded-3xl hover:bg-bg-ivory hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-24 h-24 bg-primary-green/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-green transition-colors">
                  <i className={`fa-solid ${item.icon} text-4xl text-primary-green group-hover:text-white transition-colors`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/70 mb-6 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest bg-primary-green/10 text-primary-green px-4 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                   <button className="text-charcoal/40 hover:text-primary-green transition-colors">
                     <i className="fa-solid fa-download text-xl"></i>
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-24">
        <div className={CONTAINER_CLASSES}>
          <div className="bg-white p-10 md:p-16 rounded-3xl border border-primary-green/10 shadow-sm text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-8">Search our full Library</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30"></i>
                <input 
                  type="text" 
                  placeholder="Keywords (e.g. 'sensory', 'dyslexia')..." 
                  className="w-full pl-12 pr-5 py-4 bg-bg-ivory/50 border border-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                />
              </div>
              <select className="px-5 py-4 bg-bg-ivory/50 border border-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/30 appearance-none text-charcoal/60">
                <option>Filter by Category</option>
                <option>ADHD</option>
                <option>Autism</option>
                <option>Dyslexia</option>
                <option>Teaching Strategies</option>
                <option>Parent Support</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t border-primary-green/20">
        <div className={`${CONTAINER_CLASSES} text-center`}>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">Need More Support?</h2>
            <p className="text-charcoal/70 text-lg mb-10 leading-relaxed">
              Can't find exactly what you're looking for? Contact us for personalized recommendations or tailored resources for your specific learning goals.
            </p>
           <a href="#" className="bg-secondary-clay text-white px-6 py-3 rounded mt-4 inline-block hover:bg-[#9F7E5D] transition">Get in Touch</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

  