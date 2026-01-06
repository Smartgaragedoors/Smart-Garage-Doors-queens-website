import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'signs-you-need-new-garage-door',
      title: "Signs You Need a New Garage Door: When to Replace vs Repair",
      excerpt: "Complete guide to determining when you need a new garage door versus repair. Learn the warning signs, cost considerations, and decision framework.",
      image: "https://readdy.ai/api/search-image?query=Comparison%20of%20old%20damaged%20garage%20door%20versus%20new%20modern%20garage%20door%2C%20residential%20setting%2C%20before%20and%20after%20demonstration%2C%20curb%20appeal%20improvement%2C%20professional%20installation&width=1200&height=600&seq=replace-signs001&orientation=landscape",
      date: "January 22, 2025",
      category: "Tips",
      readTime: "14 min read"
    },
    {
      id: 2,
      slug: 'cost-of-garage-door-spring-replacement',
      title: "Cost of Garage Door Spring Replacement: Complete Pricing Guide 2025",
      excerpt: "Comprehensive guide to garage door spring replacement costs in 2025. Learn pricing factors, average costs by spring type, and how to get accurate estimates.",
      image: "https://readdy.ai/api/search-image?query=Professional%20garage%20door%20spring%20replacement%20showing%20torsion%20springs%20and%20installation%20tools%2C%20residential%20garage%20setting%2C%20skilled%20technician%20working%2C%20safety%20equipment%20visible%2C%20quality%20springs%20and%20hardware&width=1200&height=600&seq=spring-cost001&orientation=landscape",
      date: "January 18, 2025",
      category: "Cost Guide",
      readTime: "12 min read"
    },
    {
      id: 3,
      slug: 'how-to-fix-garage-door-opener',
      title: "How to Fix Garage Door Opener: Common Issues and Solutions",
      excerpt: "Complete troubleshooting guide for garage door opener problems. Learn how to diagnose and fix common opener issues, when to call professionals, and preventive maintenance tips.",
      image: "https://readdy.ai/api/search-image?query=Professional%20technician%20repairing%20garage%20door%20opener%20motor%20unit%2C%20close-up%20of%20opener%20mechanism%2C%20residential%20garage%20setting%2C%20tools%20and%20equipment%20visible%2C%20professional%20repair%20work&width=1200&height=600&seq=opener-repair001&orientation=landscape",
      date: "January 20, 2025",
      category: "Repair",
      readTime: "10 min read"
    },
    {
      id: 4,
      slug: 'signs-your-garage-door-spring-needs-replacement',
      title: "5 Signs Your Garage Door Spring Needs Replacement",
      excerpt: "Learn to identify the warning signs that indicate your garage door spring is failing and needs professional replacement.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/Lucid_Origin_A_beige_residential_garage_door_is_visibly_offtra_1_11zon.webp",
      date: "January 15, 2025",
      category: "Maintenance",
      readTime: "5 min read"
    },
    {
      id: 5,
      slug: 'how-to-fix-garage-door-wont-close',
      title: "How to Fix a Garage Door That Won't Close Properly",
      excerpt: "Troubleshooting guide for common garage door closing issues and when to call professional repair services.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/garage-top-roller-loose-from-door-and-looks-to-be-bending-v0-hqv1b7ru3svc1-1.webp",
      date: "January 12, 2025",
      category: "Repair",
      readTime: "7 min read"
    },
    {
      id: 6,
      slug: 'winter-garage-door-maintenance-tips',
      title: "Winter Garage Door Maintenance Tips: Protect Your Door from Cold Weather",
      excerpt: "Essential winter maintenance tips to protect your garage door from cold weather damage. Learn how to prevent freezing and spring stress.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/wefc_11zon.webp",
      date: "January 8, 2025",
      category: "Maintenance",
      readTime: "6 min read"
    },
    {
      id: 7,
      slug: 'emergency-garage-door-repair-guide',
      title: "Emergency Garage Door Repair: What to Do When Your Door Breaks",
      excerpt: "Step-by-step guide on handling garage door emergencies and when to call for immediate professional help.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/erh_11zon.webp",
      date: "January 5, 2025",
      category: "Emergency",
      readTime: "4 min read"
    },
    {
      id: 8,
      slug: 'professional-vs-diy-garage-door-repair',
      title: "Professional vs DIY Garage Door Repair: Making the Right Choice",
      excerpt: "Understanding when to attempt DIY repairs and when professional garage door repair services are necessary.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/Lucid_Origin_A_closeup_of_a_person_wearing_black_gloves_repair_0_11zon.webp",
      date: "January 3, 2025",
      category: "Tips",
      readTime: "8 min read"
    },
    {
      id: 9,
      slug: 'garage-door-repair-cost-guide-2025',
      title: "Garage Door Repair Cost Guide 2025: What to Expect",
      excerpt: "Complete breakdown of garage door repair costs in 2025. Learn what factors affect pricing and how to budget for common repairs.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/66fa98ef144265b84041c07c_650c22f8f072796f55e70d33_how_much_should_i_budget_for_garage_door_roller_replacement_11zon.jpeg",
      date: "January 10, 2025",
      category: "Cost Guide",
      readTime: "8 min read"
    },
    {
      id: 7,
      slug: 'garage-door-safety-tips-homeowner',
      title: "Garage Door Safety Tips Every Homeowner Should Know",
      excerpt: "Essential garage door safety guidelines to prevent accidents and ensure your garage door operates safely for your family.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/wefc_11zon.webp",
      date: "January 1, 2025",
      category: "Safety",
      readTime: "6 min read"
    },
    {
      id: 8,
      slug: 'how-to-choose-right-garage-door',
      title: "How to Choose the Right Garage Door for Your Home",
      excerpt: "Complete guide to selecting the perfect garage door style, material, and features for your home.",
      image: "https://readdy.ai/api/search-image?query=Modern%20residential%20garage%20door%20selection%20showing%20various%20styles%20and%20materials&width=1200&height=600&seq=choose-door001",
      date: "December 28, 2024",
      category: "Tips",
      readTime: "10 min read"
    },
    {
      id: 9,
      slug: 'garage-door-roller-replacement-cost',
      title: "Garage Door Roller Replacement Cost: Complete Guide 2025",
      excerpt: "Everything you need to know about garage door roller replacement costs in 2025.",
      image: "https://www.smartestgaragedoors.com/wp-content/uploads/2025/09/66fa98ef144265b84041c07c_650c22f8f072796f55e70d33_how_much_should_i_budget_for_garage_door_roller_replacement_11zon.jpeg",
      date: "December 25, 2024",
      category: "Cost Guide",
      readTime: "6 min read"
    },
    {
      id: 10,
      slug: 'chain-drive-vs-belt-drive-opener',
      title: "Chain Drive vs Belt Drive Garage Door Opener: Which is Better?",
      excerpt: "Compare chain drive and belt drive garage door openers. Learn about noise levels, durability, and cost.",
      image: "https://readdy.ai/api/search-image?query=Chain%20drive%20vs%20belt%20drive%20garage%20door%20opener%20comparison&width=1200&height=600&seq=opener-comp001",
      date: "December 22, 2024",
      category: "Tips",
      readTime: "7 min read"
    },
    {
      id: 11,
      slug: 'queens-garage-door-repair-cost',
      title: "Garage Door Repair Cost in Queens NY 2025: Complete Pricing Guide",
      excerpt: "Detailed guide to garage door repair costs in Queens, New York with local pricing information.",
      image: "https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20in%20Queens%20New%20York&width=1200&height=600&seq=queens-cost001",
      date: "December 20, 2024",
      category: "Cost Guide",
      readTime: "8 min read"
    },
    {
      id: 12,
      slug: 'brooklyn-garage-door-repair-cost',
      title: "Garage Door Repair Cost in Brooklyn NY 2025: Local Pricing Guide",
      excerpt: "Complete guide to garage door repair costs in Brooklyn with local pricing and service information.",
      image: "https://readdy.ai/api/search-image?query=Garage%20door%20repair%20service%20in%20Brooklyn%20New%20York&width=1200&height=600&seq=brooklyn-cost001",
      date: "December 18, 2024",
      category: "Cost Guide",
      readTime: "7 min read"
    },
    {
      id: 13,
      slug: 'stamford-ct-garage-door-repair',
      title: "Garage Door Repair in Stamford CT: Professional Service Guide",
      excerpt: "Expert garage door repair services in Stamford, Connecticut. Learn about local service options and typical costs.",
      image: "https://readdy.ai/api/search-image?query=Professional%20garage%20door%20service%20Stamford%20Connecticut&width=1200&height=600&seq=stamford001",
      date: "December 15, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 14,
      slug: 'white-plains-ny-garage-door-service',
      title: "Garage Door Service in White Plains NY: Expert Repair & Installation",
      excerpt: "Professional garage door repair and installation services in White Plains, New York. Serving Westchester County.",
      image: "https://readdy.ai/api/search-image?query=Garage%20door%20service%20White%20Plains%20New%20York&width=1200&height=600&seq=whiteplains001",
      date: "December 12, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 15,
      slug: 'long-island-garage-door-repair',
      title: "Long Island Garage Door Repair: Serving Nassau & Suffolk Counties",
      excerpt: "Expert garage door repair services throughout Long Island. Serving Nassau and Suffolk Counties.",
      image: "https://readdy.ai/api/search-image?query=Long%20Island%20garage%20door%20repair%20service&width=1200&height=600&seq=longisland001",
      date: "December 10, 2024",
      category: "Repair",
      readTime: "6 min read"
    },
    {
      id: 16,
      slug: 'westchester-county-garage-door-service',
      title: "Westchester County Garage Door Service: Expert Repair & Installation",
      excerpt: "Professional garage door services throughout Westchester County, NY. Serving White Plains, New Rochelle, Scarsdale, and more.",
      image: "https://readdy.ai/api/search-image?query=Westchester%20County%20garage%20door%20service&width=1200&height=600&seq=westchester001",
      date: "December 8, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 17,
      slug: 'greenwich-ct-garage-door-repair',
      title: "Garage Door Repair in Greenwich CT: Professional Service Guide",
      excerpt: "Expert garage door repair and installation services in Greenwich, Connecticut. Serving Fairfield County.",
      image: "https://readdy.ai/api/search-image?query=Greenwich%20Connecticut%20garage%20door%20service&width=1200&height=600&seq=greenwich001",
      date: "December 5, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 18,
      slug: 'staten-island-garage-door-repair',
      title: "Garage Door Repair in Staten Island NY: Expert Local Service",
      excerpt: "Professional garage door repair services in Staten Island, New York. Serving all Staten Island neighborhoods.",
      image: "https://readdy.ai/api/search-image?query=Staten%20Island%20garage%20door%20repair&width=1200&height=600&seq=staten001",
      date: "December 3, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 19,
      slug: 'flushing-ny-garage-door-repair',
      title: "Garage Door Repair in Flushing NY: Queens Neighborhood Service",
      excerpt: "Expert garage door repair services in Flushing, Queens. Serving Flushing and surrounding Queens neighborhoods.",
      image: "https://readdy.ai/api/search-image?query=Flushing%20Queens%20garage%20door%20repair&width=1200&height=600&seq=flushing001",
      date: "December 1, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 20,
      slug: 'fairfield-ct-garage-door-service',
      title: "Garage Door Service in Fairfield CT: Expert Repair & Installation",
      excerpt: "Professional garage door services in Fairfield, Connecticut. Serving Fairfield County with quality repairs and installations.",
      image: "https://readdy.ai/api/search-image?query=Fairfield%20Connecticut%20garage%20door%20service&width=1200&height=600&seq=fairfield001",
      date: "November 28, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 21,
      slug: 'darien-ct-garage-door-repair',
      title: "Garage Door Repair in Darien CT: Professional Service Guide",
      excerpt: "Expert garage door repair services in Darien, Connecticut. Serving Fairfield County with fast, reliable service.",
      image: "https://readdy.ai/api/search-image?query=Darien%20Connecticut%20garage%20door%20service&width=1200&height=600&seq=darien001",
      date: "November 25, 2024",
      category: "Repair",
      readTime: "5 min read"
    },
    {
      id: 22,
      slug: 'suffern-ny-garage-door-service',
      title: "Garage Door Service in Suffern NY: Rockland County Expert Repair",
      excerpt: "Professional garage door repair and installation services in Suffern, New York. Serving Rockland County.",
      image: "https://readdy.ai/api/search-image?query=Suffern%20New%20York%20garage%20door%20service&width=1200&height=600&seq=suffern001",
      date: "November 22, 2024",
      category: "Repair",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Maintenance", "Repair", "Safety", "Emergency", "Tips", "Cost Guide"];

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Garage Door Blog | Expert Tips & Maintenance Guides | Smart Garage Doors"
        description="Expert garage door tips, maintenance guides, repair advice, and cost information. Learn how to maintain your garage door and when to call professionals."
        keywords="garage door tips, garage door maintenance, garage door repair guide, garage door cost guide"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Schema.org structured data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Smart Garage Doors Blog",
            "description": "Expert tips, maintenance guides, and industry insights for garage door owners",
            "url": `${import.meta.env.VITE_SITE_URL || "https://www.smartestgaragedoors.com"}/blog/`,
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
                href="/book-now/" 
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
                    <Link 
                      to={`/blog/${post.slug || '#'}/`}
                      className="text-purple-600 font-medium hover:text-purple-700 cursor-pointer"
                    >
                      Read More <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
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
              href="/book-now/" 
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
