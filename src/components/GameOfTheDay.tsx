import { Clock, MapPin, Users, TrendingUp, Award } from 'lucide-react';

export function GameOfTheDay() {
  const gameData = {
    homeTeam: {
      name: "Los Angeles Lakers",
      abbreviation: "LAL",
      record: "38-18",
      stats: {
        ppg: "118.5",
        apg: "26.3",
        rpg: "45.2"
      },
      topPlayers: [
        { name: "LeBron James", position: "F", ppg: "27.4", rpg: "8.1", apg: "7.8" },
        { name: "Anthony Davis", position: "C", ppg: "25.8", rpg: "12.3", apg: "3.2" },
        { name: "D'Angelo Russell", position: "G", ppg: "18.2", rpg: "3.1", apg: "6.5" }
      ]
    },
    awayTeam: {
      name: "Boston Celtics",
      abbreviation: "BOS",
      record: "42-14",
      stats: {
        ppg: "120.3",
        apg: "27.1",
        rpg: "46.8"
      },
      topPlayers: [
        { name: "Jayson Tatum", position: "F", ppg: "28.6", rpg: "8.9", apg: "4.7" },
        { name: "Jaylen Brown", position: "G", ppg: "25.1", rpg: "6.2", apg: "3.8" },
        { name: "Kristaps Porzingis", position: "C", ppg: "20.3", rpg: "7.4", apg: "2.1" }
      ]
    },
    matchInfo: {
      date: "January 5, 2026",
      time: "8:30 PM ET",
      venue: "Crypto.com Arena",
      city: "Los Angeles, CA",
      broadcast: "ESPN, ABC"
    },
    preview: "Two of the NBA's most storied franchises meet in what promises to be an epic showdown. The Celtics come in with the best record in the league, while the Lakers are riding a seven-game winning streak. This matchup features some of the game's biggest stars and could be a preview of the NBA Finals.",
    keyMatchup: {
      player1: "LeBron James",
      player2: "Jayson Tatum",
      description: "Battle of the forwards that could decide the game"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-blue-800 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Award size={28} className="text-yellow-400" />
          <h1 className="text-4xl">Game of the Day</h1>
        </div>
        <p className="text-xl text-white/80">{gameData.matchInfo.date}</p>
      </div>

      {/* Main Matchup */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6">
          {/* Away Team */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-white">{gameData.awayTeam.abbreviation}</span>
            </div>
            <h2 className="text-2xl mb-2">{gameData.awayTeam.name}</h2>
            <p className="text-xl text-gray-600">{gameData.awayTeam.record}</p>
          </div>

          {/* VS & Time */}
          <div className="text-center">
            <div className="text-5xl mb-4">VS</div>
            <div className="flex items-center justify-center gap-2 text-xl text-gray-600 mb-2">
              <Clock size={20} />
              {gameData.matchInfo.time}
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin size={18} />
              {gameData.matchInfo.venue}
            </div>
          </div>

          {/* Home Team */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-white">{gameData.homeTeam.abbreviation}</span>
            </div>
            <h2 className="text-2xl mb-2">{gameData.homeTeam.name}</h2>
            <p className="text-xl text-gray-600">{gameData.homeTeam.record}</p>
          </div>
        </div>

        {/* Broadcast Info */}
        <div className="text-center py-4 bg-blue-50 rounded-lg">
          <p className="text-gray-600">Watch on: <span className="text-blue-600">{gameData.matchInfo.broadcast}</span></p>
        </div>
      </div>

      {/* Game Preview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl mb-4">Game Preview</h2>
        <p className="text-gray-700 leading-relaxed">{gameData.preview}</p>
      </div>

      {/* Team Stats Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-600" />
            {gameData.awayTeam.name} Stats
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Points Per Game</span>
              <span className="text-xl">{gameData.awayTeam.stats.ppg}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Assists Per Game</span>
              <span className="text-xl">{gameData.awayTeam.stats.apg}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Rebounds Per Game</span>
              <span className="text-xl">{gameData.awayTeam.stats.rpg}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-600" />
            {gameData.homeTeam.name} Stats
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Points Per Game</span>
              <span className="text-xl">{gameData.homeTeam.stats.ppg}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Assists Per Game</span>
              <span className="text-xl">{gameData.homeTeam.stats.apg}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Rebounds Per Game</span>
              <span className="text-xl">{gameData.homeTeam.stats.rpg}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <Users size={20} />
            {gameData.awayTeam.name} Key Players
          </h3>
          <div className="space-y-4">
            {gameData.awayTeam.topPlayers.map((player, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-lg">{player.name}</h4>
                    <p className="text-sm text-gray-600">{player.position}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-600">PPG: <span className="text-gray-900">{player.ppg}</span></span>
                  <span className="text-gray-600">RPG: <span className="text-gray-900">{player.rpg}</span></span>
                  <span className="text-gray-600">APG: <span className="text-gray-900">{player.apg}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <Users size={20} />
            {gameData.homeTeam.name} Key Players
          </h3>
          <div className="space-y-4">
            {gameData.homeTeam.topPlayers.map((player, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-lg">{player.name}</h4>
                    <p className="text-sm text-gray-600">{player.position}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-600">PPG: <span className="text-gray-900">{player.ppg}</span></span>
                  <span className="text-gray-600">RPG: <span className="text-gray-900">{player.rpg}</span></span>
                  <span className="text-gray-600">APG: <span className="text-gray-900">{player.apg}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Matchup */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-8">
        <h2 className="text-2xl mb-4">Key Matchup to Watch</h2>
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl mb-2">{gameData.keyMatchup.player1}</div>
            <div className="text-white/80">vs</div>
          </div>
          <div className="text-3xl">⚔️</div>
          <div className="text-center">
            <div className="text-3xl mb-2">{gameData.keyMatchup.player2}</div>
          </div>
        </div>
        <p className="text-center mt-4 text-white/90">{gameData.keyMatchup.description}</p>
      </div>
    </div>
  );
}
