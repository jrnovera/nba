import { useState } from 'react';
import { Clock, Circle } from 'lucide-react';

interface Game {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'Live' | 'Final' | 'Scheduled';
  time: string;
  quarter?: string;
}

export function LiveScores() {
  const [filter, setFilter] = useState<'all' | 'live' | 'final'>('all');

  const games: Game[] = [
    {
      id: 1,
      homeTeam: "Lakers",
      awayTeam: "Celtics",
      homeScore: 98,
      awayScore: 94,
      status: "Live",
      time: "Q4 3:45",
      quarter: "4th"
    },
    {
      id: 2,
      homeTeam: "Warriors",
      awayTeam: "Nets",
      homeScore: 112,
      awayScore: 108,
      status: "Live",
      time: "Q3 8:22",
      quarter: "3rd"
    },
    {
      id: 3,
      homeTeam: "Heat",
      awayTeam: "Bulls",
      homeScore: 105,
      awayScore: 102,
      status: "Final",
      time: "Final"
    },
    {
      id: 4,
      homeTeam: "Bucks",
      awayTeam: "76ers",
      homeScore: 118,
      awayScore: 115,
      status: "Final",
      time: "Final"
    },
    {
      id: 5,
      homeTeam: "Suns",
      awayTeam: "Mavericks",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      time: "7:30 PM ET"
    },
    {
      id: 6,
      homeTeam: "Nuggets",
      awayTeam: "Clippers",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      time: "9:00 PM ET"
    },
    {
      id: 7,
      homeTeam: "Knicks",
      awayTeam: "Raptors",
      homeScore: 87,
      awayScore: 79,
      status: "Live",
      time: "Q2 5:12",
      quarter: "2nd"
    },
    {
      id: 8,
      homeTeam: "Grizzlies",
      awayTeam: "Kings",
      homeScore: 124,
      awayScore: 119,
      status: "Final",
      time: "Final OT"
    }
  ];

  const filteredGames = games.filter(game => {
    if (filter === 'all') return true;
    if (filter === 'live') return game.status === 'Live';
    if (filter === 'final') return game.status === 'Final';
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Live':
        return (
          <div className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
            <Circle size={8} className="fill-current animate-pulse" />
            Live
          </div>
        );
      case 'Final':
        return (
          <div className="px-3 py-1 bg-gray-500 text-white rounded-full text-sm">
            Final
          </div>
        );
      case 'Scheduled':
        return (
          <div className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
            <Clock size={12} />
            Upcoming
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Live Scores</h1>
        <p className="text-gray-600">Real-time updates from around the league</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-3 transition-colors ${
            filter === 'all'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          All Games
        </button>
        <button
          onClick={() => setFilter('live')}
          className={`px-6 py-3 transition-colors ${
            filter === 'live'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Live Now
        </button>
        <button
          onClick={() => setFilter('final')}
          className={`px-6 py-3 transition-colors ${
            filter === 'final'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Finished
        </button>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
              game.status === 'Live' ? 'ring-2 ring-red-500' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              {getStatusBadge(game.status)}
              <span className="text-sm text-gray-600">{game.time}</span>
            </div>

            {/* Away Team */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">{game.awayTeam.substring(0, 3).toUpperCase()}</span>
                </div>
                <span className="text-lg">{game.awayTeam}</span>
              </div>
              {game.status !== 'Scheduled' && (
                <span className="text-2xl">{game.awayScore}</span>
              )}
            </div>

            {/* Home Team */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">{game.homeTeam.substring(0, 3).toUpperCase()}</span>
                </div>
                <span className="text-lg">{game.homeTeam}</span>
              </div>
              {game.status !== 'Scheduled' && (
                <span className="text-2xl">{game.homeScore}</span>
              )}
            </div>

            {game.status === 'Live' && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Watch Live
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No games found for this filter.</p>
        </div>
      )}
    </div>
  );
}
