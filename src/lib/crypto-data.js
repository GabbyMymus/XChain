const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

// Fetch top cryptocurrencies (by market cap)
export async function fetchTopCryptos(perPage = 5) {
  const res = await fetch(
    `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false`,
    {
      headers: {

        Authorization: `Bearer ${API_KEY}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch crypto data");
  }

  const data = await res.json();

  return data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    price: coin.current_price,
    change24h: coin.price_change_percentage_24h,
    marketCap: coin.market_cap,
    volume24h: coin.total_volume,
    circulatingSupply: coin.circulating_supply,
    rank: coin.market_cap_rank,
    ath: coin.ath,
    atl: coin.atl,
    image: coin.image,
  }));
}

// Fetch single coin details by ID
export async function fetchCryptoById(id) {
  const res = await fetch(`${COINGECKO_API_URL}/coins/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch crypto details");
  }

  const coin = await res.json();

  return {
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    price: coin.market_data.current_price.usd,
    change24h: coin.market_data.price_change_percentage_24h,
    marketCap: coin.market_data.market_cap.usd,
    volume24h: coin.market_data.total_volume.usd,
    circulatingSupply: coin.market_data.circulating_supply,
    rank: coin.market_cap_rank,
    ath: coin.market_data.ath.usd,
    atl: coin.market_data.atl.usd,
    description: coin.description.en,
    links: {
      Website: coin.links.homepage[0],
      Whitepaper: coin.links.whitepaper || "",
      GitHub: coin.links.repos_url.github[0],
    },
    image: coin.image.large,
  };
}


// function for graph using recharts

export async function fetchCryptoChartData(id, days = 7) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
  )

  if (!res.ok) throw new Error("Failed to fetch chart data")

  const data = await res.json()

  return data.prices.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price: price,
  }))
}