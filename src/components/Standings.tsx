import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Team {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  winPct: number;
  gamesBack: number | string;
  streak: string;
  lastTen: string;
  home: string;
  away: string;
}

export function Standings() {
  const [conference, setConference] = useState<'eastern' | 'western'>('eastern');
  const [eastern, setEastern] = useState<Team[]>([]);
  const [western, setWestern] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const easternConference: Team[] = [
    { rank: 1, name: "Boston Celtics", wins: 42, losses: 14, winPct: 0.750, gamesBack: "-", streak: "W7", lastTen: "9-1", home: "23-5", away: "19-9" },
    { rank: 2, name: "Milwaukee Bucks", wins: 38, losses: 18, winPct: 0.679, gamesBack: 4, streak: "W3", lastTen: "7-3", home: "21-7", away: "17-11" },
    { rank: 3, name: "Philadelphia 76ers", wins: 37, losses: 19, winPct: 0.661, gamesBack: 5, streak: "L2", lastTen: "6-4", home: "20-8", away: "17-11" },
    { rank: 4, name: "Cleveland Cavaliers", wins: 35, losses: 21, winPct: 0.625, gamesBack: 7, streak: "W1", lastTen: "5-5", home: "19-9", away: "16-12" },
    { rank: 5, name: "New York Knicks", wins: 34, losses: 22, winPct: 0.607, gamesBack: 8, streak: "W2", lastTen: "6-4", home: "18-10", away: "16-12" },
    { rank: 6, name: "Miami Heat", wins: 33, losses: 23, winPct: 0.589, gamesBack: 9, streak: "L1", lastTen: "5-5", home: "17-11", away: "16-12" },
    { rank: 7, name: "Indiana Pacers", wins: 31, losses: 25, winPct: 0.554, gamesBack: 11, streak: "W4", lastTen: "7-3", home: "16-12", away: "15-13" },
    { rank: 8, name: "Atlanta Hawks", wins: 29, losses: 27, winPct: 0.518, gamesBack: 13, streak: "L3", lastTen: "4-6", home: "15-13", away: "14-14" },
    { rank: 9, name: "Brooklyn Nets", wins: 27, losses: 29, winPct: 0.482, gamesBack: 15, streak: "W1", lastTen: "5-5", home: "14-14", away: "13-15" },
    { rank: 10, name: "Chicago Bulls", wins: 26, losses: 30, winPct: 0.464, gamesBack: 16, streak: "L2", lastTen: "4-6", home: "13-15", away: "13-15" },
  ];

  const westernConference: Team[] = [
    { rank: 1, name: "Denver Nuggets", wins: 41, losses: 15, winPct: 0.732, gamesBack: "-", streak: "W5", lastTen: "8-2", home: "22-6", away: "19-9" },
    { rank: 2, name: "Oklahoma City Thunder", wins: 39, losses: 17, winPct: 0.696, gamesBack: 2, streak: "W2", lastTen: "7-3", home: "21-7", away: "18-10" },
    { rank: 3, name: "Los Angeles Lakers", wins: 38, losses: 18, winPct: 0.679, gamesBack: 3, streak: "W7", lastTen: "9-1", home: "20-8", away: "18-10" },
    { rank: 4, name: "Phoenix Suns", wins: 36, losses: 20, winPct: 0.643, gamesBack: 5, streak: "L1", lastTen: "6-4", home: "19-9", away: "17-11" },
    { rank: 5, name: "LA Clippers", wins: 35, losses: 21, winPct: 0.625, gamesBack: 6, streak: "W3", lastTen: "7-3", home: "18-10", away: "17-11" },
    { rank: 6, name: "Sacramento Kings", wins: 33, losses: 23, winPct: 0.589, gamesBack: 8, streak: "W1", lastTen: "5-5", home: "17-11", away: "16-12" },
    { rank: 7, name: "Dallas Mavericks", wins: 32, losses: 24, winPct: 0.571, gamesBack: 9, streak: "L2", lastTen: "4-6", home: "16-12", away: "16-12" },
    { rank: 8, name: "Golden State Warriors", wins: 30, losses: 26, winPct: 0.536, gamesBack: 11, streak: "W2", lastTen: "6-4", home: "15-13", away: "15-13" },
    { rank: 9, name: "Minnesota Timberwolves", wins: 29, losses: 27, winPct: 0.518, gamesBack: 12, streak: "L1", lastTen: "5-5", home: "14-14", away: "15-13" },
    { rank: 10, name: "New Orleans Pelicans", wins: 28, losses: 28, winPct: 0.500, gamesBack: 13, streak: "W1", lastTen: "5-5", home: "14-14", away: "14-14" },
  ];

  const apiUrl = import.meta.env.VITE_STANDINGS_API_URL;
  const apiKey = import.meta.env.VITE_STANDINGS_API_KEY;

  useEffect(() => {
    // seed with static data immediately for fast render
    setEastern(easternConference);
    setWestern(westernConference);

    if (!apiUrl) return;

    const controller = new AbortController();
    const fetchStandings = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(apiUrl, {
          headers: {
            ...(apiKey ? { 'x-api-key': apiKey } : {}),
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`API responded with ${res.status}`);
        }

        const data = await res.json();

        const parse = (items: any[] = [], conferenceKey: string) =>
          items
            .filter((item) =>
              (item.conference || item.conference_name || '').toLowerCase().includes(conferenceKey)
            )
            .map((item: any, idx: number): Team => {
              const streakValue = item.streak ?? item.streak_length;
              const streakType = item.streak_type ?? item.streak_code ?? '';
              const streakStr =
                streakValue && streakType
                  ? `${streakType.toString().toUpperCase().startsWith('W') ? 'W' : 'L'}${streakValue}`
                  : item.streak?.toString?.() ?? '–';

              const lastTenWins = item.last_ten?.wins ?? item.lastTenWins ?? item.last_ten_wins;
              const lastTenLosses = item.last_ten?.losses ?? item.lastTenLosses ?? item.last_ten_losses;

              const homeWins = item.home?.wins ?? item.home_wins;
              const homeLosses = item.home?.losses ?? item.home_losses;
              const awayWins = item.away?.wins ?? item.road_wins ?? item.away_wins;
              const awayLosses = item.away?.losses ?? item.road_losses ?? item.away_losses;

              const wins = item.wins ?? item.win ?? 0;
              const losses = item.losses ?? item.loss ?? 0;

              return {
                rank: item.rank ?? item.conference_rank ?? idx + 1,
                name: item.team?.name ?? item.team_name ?? item.team ?? 'Unknown',
                wins,
                losses,
                winPct: item.win_pct ?? item.winPercentage ?? (wins + losses > 0 ? wins / (wins + losses) : 0),
                gamesBack: item.games_back ?? item.gamesBack ?? '—',
                streak: streakStr,
                lastTen:
                  lastTenWins !== undefined && lastTenLosses !== undefined
                    ? `${lastTenWins}-${lastTenLosses}`
                    : item.lastTen ?? '—',
                home:
                  homeWins !== undefined && homeLosses !== undefined ? `${homeWins}-${homeLosses}` : item.home ?? '—',
                away:
                  awayWins !== undefined && awayLosses !== undefined ? `${awayWins}-${awayLosses}` : item.away ?? '—',
              };
            });

        const standingsArray =
          data?.standings ??
          data?.records ??
          data?.data ??
          []; // fallback keys depending on provider

        const eastParsed = parse(standingsArray, 'east');
        const westParsed = parse(standingsArray, 'west');

        if (eastParsed.length) setEastern(eastParsed);
        if (westParsed.length) setWestern(westParsed);
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Unable to load live standings.');
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, apiKey]);

  const teams = conference === 'eastern' ? eastern : western;

  const getStreakIcon = (streak: string) => {
    if (streak.startsWith('W')) {
      return <TrendingUp size={16} className="text-green-600" />;
    } else if (streak.startsWith('L')) {
      return <TrendingDown size={16} className="text-red-600" />;
    }
    return <Minus size={16} className="text-gray-400" />;
  };

  const getStreakColor = (streak: string) => {
    if (streak.startsWith('W')) {
      return 'text-green-600 bg-green-50';
    } else if (streak.startsWith('L')) {
      return 'text-red-600 bg-red-50';
    }
    return 'text-gray-600 bg-gray-50';
  };

  const getPlayoffSeedColor = (rank: number) => {
    if (rank <= 6) {
      return 'bg-green-100 border-l-4 border-green-500';
    } else if (rank <= 10) {
      return 'bg-yellow-50 border-l-4 border-yellow-500';
    }
    return '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">NBA Standings</h1>
        <p className="text-gray-600">2025-26 Regular Season</p>
        {apiUrl ? (
          <p className="text-sm text-gray-500">Live standings pulled from API{loading ? '…' : ''}</p>
        ) : (
          <p className="text-sm text-gray-500">
            Set <code>VITE_STANDINGS_API_URL</code> (and optional <code>VITE_STANDINGS_API_KEY</code>) to load live data.
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600 mt-1">
            Live standings error: {error}. Showing last known data.
          </p>
        )}
      </div>

      {/* Conference Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setConference('eastern')}
          className={`px-8 py-3 rounded-lg transition-colors ${
            conference === 'eastern'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Eastern Conference
        </button>
        <button
          onClick={() => setConference('western')}
          className={`px-8 py-3 rounded-lg transition-colors ${
            conference === 'western'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Western Conference
        </button>
      </div>

      {/* Playoff Seed Legend */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-100 border-l-4 border-green-500 rounded"></div>
          <span className="text-sm text-gray-600">Guaranteed Playoff Spot (1-6)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-50 border-l-4 border-yellow-500 rounded"></div>
          <span className="text-sm text-gray-600">Play-In Tournament (7-10)</span>
        </div>
      </div>

      {/* Standings Table - Desktop */}
      <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Rank</th>
              <th className="px-6 py-4 text-left">Team</th>
              <th className="px-6 py-4 text-center">W</th>
              <th className="px-6 py-4 text-center">L</th>
              <th className="px-6 py-4 text-center">WIN%</th>
              <th className="px-6 py-4 text-center">GB</th>
              <th className="px-6 py-4 text-center">STRK</th>
              <th className="px-6 py-4 text-center">L10</th>
              <th className="px-6 py-4 text-center">HOME</th>
              <th className="px-6 py-4 text-center">AWAY</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr
                key={team.rank}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${getPlayoffSeedColor(team.rank)}`}
              >
                <td className="px-6 py-4">{team.rank}</td>
                <td className="px-6 py-4">{team.name}</td>
                <td className="px-6 py-4 text-center">{team.wins}</td>
                <td className="px-6 py-4 text-center">{team.losses}</td>
                <td className="px-6 py-4 text-center">{team.winPct.toFixed(3)}</td>
                <td className="px-6 py-4 text-center text-gray-600">{team.gamesBack}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    {getStreakIcon(team.streak)}
                    <span className={`px-2 py-1 rounded ${getStreakColor(team.streak)}`}>
                      {team.streak}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">{team.lastTen}</td>
                <td className="px-6 py-4 text-center text-gray-600">{team.home}</td>
                <td className="px-6 py-4 text-center text-gray-600">{team.away}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Standings Cards - Mobile */}
      <div className="md:hidden space-y-4">
        {teams.map((team) => (
          <div
            key={team.rank}
            className={`bg-white rounded-lg shadow-lg p-4 ${getPlayoffSeedColor(team.rank)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                  {team.rank}
                </div>
                <div>
                  <h3 className="text-lg">{team.name}</h3>
                  <p className="text-sm text-gray-600">{team.wins}-{team.losses}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded flex items-center gap-1 ${getStreakColor(team.streak)}`}>
                {getStreakIcon(team.streak)}
                {team.streak}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-gray-600">WIN%</div>
                <div>{team.winPct.toFixed(3)}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-gray-600">GB</div>
                <div>{team.gamesBack}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-gray-600">L10</div>
                <div>{team.lastTen}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
