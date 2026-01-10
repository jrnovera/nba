import { useState } from 'react';
import { Clock, TrendingUp, User } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

export function News() {
  const [category, setCategory] = useState<string>('all');

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Lakers Extend Winning Streak to Seven with Dominant Performance",
      excerpt: "LeBron James recorded his 5th triple-double of the season as the Lakers cruised past the Clippers 128-110. Anthony Davis added 32 points and 14 rebounds in the victory.",
      category: "Game Recap",
      author: "Mike Johnson",
      publishedAt: "2 hours ago",
      readTime: "3 min read",
      imageUrl: "https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3Njc1OTYwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: 2,
      title: "Rookie Sensation Breaks Franchise Scoring Record",
      excerpt: "In just his 45th game, the rookie phenom dropped 47 points, breaking the franchise rookie scoring record set 25 years ago. His explosive performance included 8 three-pointers.",
      category: "Breaking News",
      author: "Sarah Williams",
      publishedAt: "5 hours ago",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1765924705648-9a0731ac5202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYmElMjBhcmVuYSUyMGNyb3dkfGVufDF8fHx8MTc2NzYyOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: 3,
      title: "Eastern Conference Playoff Race: Five Teams Battle for Top Seed",
      excerpt: "With just 20 games remaining, the Eastern Conference playoff picture is the tightest it's been in years. We break down each contender's remaining schedule and chances.",
      category: "Analysis",
      author: "David Chen",
      publishedAt: "1 day ago",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1605144156743-b009789673f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBhZXJpYWx8ZW58MXx8fHwxNzY3NjI5MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "MVP Race Heats Up: Analyzing the Top Five Candidates",
      excerpt: "As we enter the final stretch of the season, five players have separated themselves in the MVP race. Here's our comprehensive breakdown of their cases.",
      category: "Analysis",
      author: "Mike Johnson",
      publishedAt: "1 day ago",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3Njc1OTYwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      title: "Trade Deadline Recap: Winners and Losers",
      excerpt: "The trade deadline brought several blockbuster moves. We analyze which teams improved their championship odds and which may have missed their chance.",
      category: "Trade News",
      author: "Emma Davis",
      publishedAt: "2 days ago",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1765924705648-9a0731ac5202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYmElMjBhcmVuYSUyMGNyb3dkfGVufDF8fHx8MTc2NzYyOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      title: "Injury Report: Impact on Playoff Contenders",
      excerpt: "Key injuries across the league are reshaping the playoff picture. We examine how each team is adapting and what it means for their postseason chances.",
      category: "Injury Report",
      author: "Tom Anderson",
      publishedAt: "2 days ago",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1605144156743-b009789673f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBhZXJpYWx8ZW58MXx8fHwxNzY3NjI5MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 7,
      title: "Warriors Return to Championship Form",
      excerpt: "After a slow start to the season, Golden State has won 15 of their last 18 games. Can they make another deep playoff run?",
      category: "Game Recap",
      author: "Sarah Williams",
      publishedAt: "3 days ago",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3Njc1OTYwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 8,
      title: "All-Star Weekend Preview: What to Watch",
      excerpt: "All-Star weekend is here! From the Rising Stars game to the dunk contest and the main event, here's your complete guide to the festivities.",
      category: "Preview",
      author: "David Chen",
      publishedAt: "3 days ago",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1765924705648-9a0731ac5202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYmElMjBhcmVuYSUyMGNyb3dkfGVufDF8fHx8MTc2NzYyOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ['all', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = category === 'all' 
    ? articles 
    : articles.filter(article => article.category === category);

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Latest NBA News</h1>
        <p className="text-gray-600">Stay updated with breaking news and analysis</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-colors capitalize ${
              category === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Articles */}
      {category === 'all' && featuredArticles.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl mb-6 flex items-center gap-2">
            <TrendingUp className="text-orange-500" />
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                    {article.category}
                  </span>
                  <h3 className="text-2xl mt-3 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {article.publishedAt}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.publishedAt}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found in this category.</p>
        </div>
      )}

      {/* Load More Button */}
      {filteredArticles.length > 0 && (
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
