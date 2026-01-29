import { Link } from 'react-router-dom';
import { TrendingUp, Trophy, Calendar, Newspaper, Circle, Star, Play, Target, Award, Flame } from 'lucide-react';

export function Home() {
  const liveGames = [
    {
      id: 1,
      homeTeam: "Lakers",
      awayTeam: "Celtics",
      homeScore: 98,
      awayScore: 94,
      quarter: "Q4",
      time: "3:45"
    },
    {
      id: 2,
      homeTeam: "Warriors",
      awayTeam: "Nets",
      homeScore: 112,
      awayScore: 108,
      quarter: "Q3",
      time: "8:22"
    },
    {
      id: 3,
      homeTeam: "Knicks",
      awayTeam: "Raptors",
      homeScore: 87,
      awayScore: 79,
      quarter: "Q2",
      time: "5:12"
    }
  ];

  const topScorersOfWeek = [
    {
      id: 1,
      name: "Luka Dončić",
      team: "Dallas Mavericks",
      points: 48,
      assists: 11,
      rebounds: 9,
      gameDate: "Jan 4",
      opponent: "vs. Hawks",
      image: "https://images.unsplash.com/photo-1762025816715-7c5a7710abe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwc2NvcmluZ3xlbnwxfHx8fDE3Njc2Mjk2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Joel Embiid",
      team: "Philadelphia 76ers",
      points: 45,
      assists: 6,
      rebounds: 13,
      gameDate: "Jan 3",
      opponent: "vs. Pacers",
      image: "https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3Njc1OTYwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Giannis Antetokounmpo",
      team: "Milwaukee Bucks",
      points: 44,
      assists: 7,
      rebounds: 14,
      gameDate: "Jan 2",
      opponent: "vs. Heat",
      image: "https://images.unsplash.com/photo-1765924705648-9a0731ac5202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYmElMjBhcmVuYSUyMGNyb3dkfGVufDF8fHx8MTc2NzYyOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const weeklyStats = [
    { label: "Total Points", value: "12,456", icon: Target, color: "bg-orange-500" },
    { label: "Avg PPG", value: "115.2", icon: TrendingUp, color: "bg-blue-500" },
    { label: "Triple-Doubles", value: "18", icon: Star, color: "bg-purple-500" },
    { label: "40+ Point Games", value: "24", icon: Flame, color: "bg-red-500" }
  ];

  const videoHighlights = [
    {
      id: "1",
      title: "Lakers vs. ??? Highlights",
      description: "User requested Lakers highlights",
      videoId: "c_-drV1sX98"
    },
    {
      id: "2",
      title: "Lakers Highlights",
      description: "User requested Lakers video",
      videoId: "ORQOf-Awt74"
    },
    {
      id: "3",
      title: "Steph Curry 45-Point Showcase",
      description: "Every bucket from Steph’s flamethrower performance",
      videoId: "KgNiXIRYgJ8"
    },
    {
      id: "4",
      title: "Ja Morant Best Dunks Reel",
      description: "Aerial assaults and poster jams all season long",
      videoId: "vr_WzDwUZVA"
    }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Lakers Extend Winning Streak to Seven Games",
      excerpt: "LeBron James and Anthony Davis lead the Lakers to another dominant victory...",
      image: "https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3Njc1OTYwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Game Recap",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Rookie Sensation Breaks Franchise Record",
      excerpt: "First-year player drops 45 points in stunning performance...",
      image: "https://images.unsplash.com/photo-1765924705648-9a0731ac5202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYmElMjBhcmVuYSUyMGNyb3dkfGVufDF8fHx8MTc2NzYyOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Highlights",
      time: "5 hours ago"
    },
    {
      id: 3,
      title: "Eastern Conference Playoff Race Heats Up",
      excerpt: "With only weeks left in the season, five teams battle for positioning...",
      image: "https://images.unsplash.com/photo-1605144156743-b009789673f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBhZXJpYWx8ZW58MXx8fHwxNzY3NjI5MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Analysis",
      time: "1 day ago"
    }
  ];

  const quickStats = [
    { icon: TrendingUp, label: "Live Games", value: "8", color: "bg-green-500" },
    { icon: Trophy, label: "Teams", value: "30", color: "bg-blue-500" },
    { icon: Calendar, label: "Games Today", value: "12", color: "bg-purple-500" },
    { icon: Newspaper, label: "Latest News", value: "24", color: "bg-orange-500" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-4">Welcome to NBA Central</h1>
            <p className="text-xl text-white/80 mb-8">
              Your ultimate destination for live scores, standings, news, and everything NBA
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/live-scores"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
              >
                View Live Scores
              </Link>
              <Link
                to="/game-of-the-day"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
              >
                Game of the Day
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Scores Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl flex items-center gap-2">
            <Circle size={12} className="text-red-500 fill-current animate-pulse" />
            Live Games
          </h2>
          <Link to="/live-scores" className="text-blue-600 hover:text-blue-700">
            View All Games →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveGames.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-lg p-6 ring-2 ring-red-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                  <Circle size={8} className="fill-current animate-pulse" />
                  Live
                </div>
                <span className="text-sm">{game.quarter} {game.time}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                      {game.awayTeam.substring(0, 3).toUpperCase()}
                    </div>
                    <span>{game.awayTeam}</span>
                  </div>
                  <span className="text-2xl">{game.awayScore}</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                      {game.homeTeam.substring(0, 3).toUpperCase()}
                    </div>
                    <span>{game.homeTeam}</span>
                  </div>
                  <span className="text-2xl">{game.homeScore}</span>
                </div>
              </div>

              <button className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Watch Live
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-blue-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-6">This Week's Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Scorers of the Week */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl mb-6 flex items-center gap-2">
          <Award className="text-yellow-500" />
          Top Scorers This Week
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topScorersOfWeek.map((player, index) => (
            <div key={player.id} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">#{index + 1}</span>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                  <span className="text-2xl">{player.points}</span>
                  <span className="text-sm ml-1">PTS</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1">{player.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{player.team}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="text-xl text-blue-600">{player.points}</div>
                    <div className="text-xs text-gray-600">PTS</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="text-xl text-green-600">{player.rebounds}</div>
                    <div className="text-xs text-gray-600">REB</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded">
                    <div className="text-xl text-purple-600">{player.assists}</div>
                    <div className="text-xs text-gray-600">AST</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{player.gameDate}</span>
                  <span>{player.opponent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Highlights */}
      <div className="bg-gray-100 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl flex items-center gap-2">
              <Play className="text-red-500" />
              Video Highlights
            </h2>
            <button className="text-blue-600 hover:text-blue-700">
              View All Videos →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {videoHighlights.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative bg-black" style={{ aspectRatio: '16 / 9' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-presentation"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg mb-1 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl">Featured Stories</h2>
          <Link to="/news" className="text-blue-600 hover:text-blue-700">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.time}</span>
                </div>
                <h3 className="text-xl mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link to="/news" className="text-blue-600 hover:text-blue-700">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Highlights */}
      <div className="bg-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Today's Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/game-of-the-day" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl">Game of the Day</h3>
                  <p className="text-gray-600">Lakers vs. Celtics</p>
                </div>
              </div>
              <p className="text-gray-600">Epic showdown between two historic rivals. Don't miss it!</p>
            </Link>

            <Link to="/standings" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl">League Standings</h3>
                  <p className="text-gray-600">Updated Daily</p>
                </div>
              </div>
              <p className="text-gray-600">Check out the latest standings and playoff race updates.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}