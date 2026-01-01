
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Signs Your Garage Door Spring Needs Replacement",
      excerpt: "Learn to identify the warning signs that indicate your garage door spring is failing and needs professional replacement.",
      image: "https://smartestgaragedoors.com/wp-content/uploads/2025/09/Lucid_Origin_A_beige_residential_garage_door_is_visibly_offtra_1_11zon.webp",
      date: "March 15, 2024",
      category: "Maintenance",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Fix a Garage Door That Won't Close Properly",
      excerpt: "Troubleshooting guide for common garage door closing issues and when to call professional repair services.",
      image: "https://smartestgaragedoors.com/wp-content/uploads/2025/09/garage-top-roller-loose-from-door-and-looks-to-be-bending-v0-hqv1b7ru3svc1-1.webp",
      date: "March 10, 2024",
      category: "Repair",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Garage Door Safety Tips Every Homeowner Should Know",
      excerpt: "Essential safety guidelines to prevent accidents and ensure your garage door operates safely for your family.",
      image: "https://smartestgaragedoors.com/wp-content/uploads/2025/09/wefc_11zon.webp",
      date: "March 5, 2024",
      category: "Safety",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Emergency Garage Door Repair: What to Do When Your Door Breaks",
      excerpt: "Step-by-step guide on handling garage door emergencies and when to call for immediate professional help.",
      image: "https://smartestgaragedoors.com/wp-content/uploads/2025/09/erh_11zon.webp",
      date: "February 28, 2024",
      category: "Emergency",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Professional Garage Door Repair vs DIY: Making the Right Choice",
      excerpt: "Understanding when to attempt DIY repairs and when professional garage door repair services are necessary.",
      image: "https://smartestgaragedoors.com/wp-content/uploads/2025/09/Lucid_Origin_A_closeup_of_a_person_wearing_black_gloves_repair_0_11zon.webp",
      date: "February 20, 2024",
      category: "Tips",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "How Much Should I Budget for Garage Door Roller Replacement?",
      excerpt: "Complete cost breakdown for garage door roller replacement including factors that affect pricing.",
      image: "https://smartestgaragedoors.com/wp-content/uploads/2025/09/66fa98ef144265b84041c07c_650c22f8f072796f55e70d33_how_much_should_i_budget_for_garage_door_roller_replacement_11zon.jpeg",
      date: "February 15, 2024",
      category: "Cost Guide",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Maintenance", "Repair", "Safety", "Emergency", "Tips", "Cost Guide"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Schema.org structured data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Smart Garage Doors Blog",
            "description": "Expert tips, maintenance guides, and industry insights for garage door owners",
            "url": `${import.meta.env.VITE_SITE_URL || "https://smartestgaragedoors.com"}/blog/`,
            "publisher": {
              "@type": "Organization",
              "name": "Smart Garage Doors",
              "logo": {
                "@type": "ImageObject",
                "url": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/b5abc60311785d6f2fb733a6d104ca55.webp"
              }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "5 Signs Your Garage Door Needs Professional Repair",
                "description": "Learn to identify common garage door problems before they become expensive repairs",
                "datePublished": "2024-12-15",
                "author": {
                  "@type": "Person",
                  "name": "Smart Garage Doors Team"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "How to Choose the Right Garage Door for Your Home",
                "description": "Complete guide to selecting the perfect garage door style, material, and features",
                "datePublished": "2024-12-10",
                "author": {
                  "@type": "Person",
                  "name": "Smart Garage Doors Team"
                }
              }
            ]
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-purple-600/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Garage Door Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert tips, maintenance guides, and industry insights for all your garage door needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+19145576816" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </a>
              <a 
                href="/book-now" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-line mr-2"></i>
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors border border-gray-200 whitespace-nowrap cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a 
                      href="#" 
                      className="text-purple-600 font-medium hover:text-purple-700 cursor-pointer"
                    >
                      Read More <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Garage Door Tips
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest garage door maintenance tips, repair guides, and industry news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular garage door topics and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring Repair</h3>
              <p className="text-sm text-gray-600">Learn about garage door spring maintenance and replacement</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety Tips</h3>
              <p className="text-sm text-gray-600">Essential safety guidelines for garage door operation</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Repair</h3>
              <p className="text-sm text-gray-600">What to do when your garage door breaks unexpectedly</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-3-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-sm text-gray-600">Regular maintenance tips to extend your door's lifespan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Garage Door Service?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            While our blog provides helpful tips, some issues require professional expertise. Contact us for reliable garage door services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19145576816" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call Now: (914) 557-6816
            </a>
            <a 
              href="/book-now" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-line mr-2"></i>
              Schedule Service
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
