// // Dummy cryptocurrency data
// export const cryptoData = [
//     {
//       id: "bitcoin",
//       name: "Bitcoin",
//       symbol: "BTC",
//       price: 51287.34,
//       change24h: 2.34,
//       marketCap: 1000324567890,
//       volume24h: 28765432100,
//       circulatingSupply: 19500000,
//       rank: 1,
//       ath: 69000,
//       atl: 67.81,
//       description:
//         "Bitcoin is the first decentralized cryptocurrency, released as open-source software in 2009. It operates on a peer-to-peer network without the need for intermediaries and without a central repository or single administrator. Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.",
//       features: [
//         "Decentralized digital currency",
//         "Limited supply of 21 million coins",
//         "Transactions are verified by network nodes through cryptography",
//         "Uses blockchain technology to maintain a public ledger",
//         "Operates without a central bank or single administrator",
//       ],
//       history:
//         "Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
//       links: {
//         Website: "https://bitcoin.org/",
//         Whitepaper: "https://bitcoin.org/bitcoin.pdf",
//         GitHub: "https://github.com/bitcoin/bitcoin",
//       },
//     },
//     {
//       id: "ethereum",
//       name: "Ethereum",
//       symbol: "ETH",
//       price: 2843.12,
//       change24h: -1.23,
//       marketCap: 342567890123,
//       volume24h: 15432678900,
//       circulatingSupply: 120500000,
//       rank: 2,
//       ath: 4878.26,
//       atl: 0.432,
//       description:
//         "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.",
//       features: [
//         "Smart contract functionality",
//         "Decentralized applications (dApps)",
//         "Ethereum Virtual Machine (EVM)",
//         "Proof-of-Stake consensus mechanism",
//         "ERC-20 token standard",
//       ],
//       history:
//         "Ethereum was initially described in a white paper by Vitalik Buterin in late 2013. Development was crowdfunded in 2014, and the network went live on July 30, 2015.",
//       links: {
//         Website: "https://ethereum.org/",
//         Whitepaper: "https://ethereum.org/en/whitepaper/",
//         GitHub: "https://github.com/ethereum/ethereum-org-website",
//       },
//     },
//     {
//       id: "solana",
//       name: "Solana",
//       symbol: "SOL",
//       price: 102.45,
//       change24h: 5.67,
//       marketCap: 43256789012,
//       volume24h: 3456789012,
//       circulatingSupply: 420000000,
//       rank: 5,
//       ath: 260.06,
//       atl: 0.5,
//       description:
//         "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. It's fast, secure, and censorship-resistant, providing an open infrastructure for global adoption.",
//       features: [
//         "High throughput (up to 65,000 transactions per second)",
//         "Low transaction costs",
//         "Proof of History (PoH) consensus mechanism",
//         "Scalable without sharding",
//         "Energy-efficient blockchain",
//       ],
//       history:
//         "Solana was founded in 2017 by Anatoly Yakovenko, who published a whitepaper describing Proof of History, a technique for keeping time between computers that do not trust one another.",
//       links: {
//         Website: "https://solana.com/",
//         Whitepaper: "https://solana.com/solana-whitepaper.pdf",
//         GitHub: "https://github.com/solana-labs",
//       },
//     },
//     {
//       id: "cardano",
//       name: "Cardano",
//       symbol: "ADA",
//       price: 0.45,
//       change24h: -0.78,
//       marketCap: 15678901234,
//       volume24h: 987654321,
//       circulatingSupply: 35000000000,
//       rank: 8,
//       ath: 3.1,
//       atl: 0.01925,
//       description:
//         "Cardano is a proof-of-stake blockchain platform that says its goal is to allow 'changemakers, innovators and visionaries' to bring about positive global change. It aims to redistribute power from unaccountable structures to the margins – to individuals – and be an enabling force for positive change and progress.",
//       features: [
//         "Proof-of-Stake consensus protocol (Ouroboros)",
//         "Multi-layer architecture (settlement and computation layers)",
//         "Formal verification for secure code",
//         "Academic research-driven approach",
//         "Sustainable and environmentally friendly",
//       ],
//       history:
//         "Cardano was founded in 2015 by Ethereum co-founder Charles Hoskinson. The development of the project is overseen by the Cardano Foundation based in Zug, Switzerland.",
//       links: {
//         Website: "https://cardano.org/",
//         Whitepaper: "https://docs.cardano.org/en/latest/",
//         GitHub: "https://github.com/input-output-hk/cardano-node",
//       },
//     },
//     {
//       id: "dogecoin",
//       name: "Dogecoin",
//       symbol: "DOGE",
//       price: 0.12,
//       change24h: 12.34,
//       marketCap: 16789012345,
//       volume24h: 2345678901,
//       circulatingSupply: 140000000000,
//       rank: 10,
//       ath: 0.73,
//       atl: 0.0000869,
//       description:
//         "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time. Despite its satirical nature, it gained a substantial online community and has become a popular cryptocurrency.",
//       features: [
//         "Based on Litecoin's codebase",
//         "Scrypt algorithm for mining",
//         "No maximum supply (inflationary)",
//         "Fast transaction times",
//         "Low transaction fees",
//       ],
//       history:
//         "Dogecoin was introduced on December 6, 2013. The Dogecoin logo and name are based on the popular 'Doge' Internet meme featuring a Shiba Inu dog.",
//       links: {
//         Website: "https://dogecoin.com/",
//         GitHub: "https://github.com/dogecoin/dogecoin",
//         Reddit: "https://www.reddit.com/r/dogecoin/",
//       },
//     },
//     {
//       id: "polkadot",
//       name: "Polkadot",
//       symbol: "DOT",
//       price: 6.78,
//       change24h: -3.45,
//       marketCap: 7890123456,
//       volume24h: 876543210,
//       circulatingSupply: 1170000000,
//       rank: 12,
//       ath: 55.0,
//       atl: 2.69,
//       description:
//         "Polkadot is a next-generation blockchain protocol that connects multiple specialized blockchains into a unified network. It aims to solve the scalability and interoperability issues that exist in current blockchain networks.",
//       features: [
//         "Multi-chain architecture (parachains and parathreads)",
//         "Cross-chain message passing",
//         "Shared security model",
//         "On-chain governance",
//         "Forkless upgrades",
//       ],
//       history:
//         "Polkadot was founded by Gavin Wood, who is also a co-founder of Ethereum. The Polkadot whitepaper was published in 2016, and the network launched in May 2020.",
//       links: {
//         Website: "https://polkadot.network/",
//         Whitepaper: "https://polkadot.network/PolkaDotPaper.pdf",
//         GitHub: "https://github.com/paritytech/polkadot",
//       },
//     },
//     {
//       id: "ripple",
//       name: "Ripple",
//       symbol: "XRP",
//       price: 0.56,
//       change24h: 1.23,
//       marketCap: 28901234567,
//       volume24h: 1234567890,
//       circulatingSupply: 51000000000,
//       rank: 7,
//       ath: 3.84,
//       atl: 0.002802,
//       description:
//         "Ripple is a real-time gross settlement system, currency exchange, and remittance network created by Ripple Labs Inc. It is built upon a distributed open-source protocol, and supports tokens representing fiat currency, cryptocurrency, commodities, or other units of value.",
//       features: [
//         "Fast transaction settlement (3-5 seconds)",
//         "Low transaction costs",
//         "Designed for financial institutions",
//         "Uses a consensus algorithm for validation",
//         "Built for cross-border payments",
//       ],
//       history:
//         "Ripple was founded in 2012 by Chris Larsen and Jed McCaleb. The company behind it, Ripple Labs, has been involved in various partnerships with financial institutions worldwide.",
//       links: {
//         Website: "https://ripple.com/",
//         Whitepaper: "https://ripple.com/files/ripple_consensus_whitepaper.pdf",
//         GitHub: "https://github.com/ripple",
//       },
//     },
//     {
//       id: "avalanche",
//       name: "Avalanche",
//       symbol: "AVAX",
//       price: 34.56,
//       change24h: 7.89,
//       marketCap: 12345678901,
//       volume24h: 987654321,
//       circulatingSupply: 360000000,
//       rank: 11,
//       ath: 146.22,
//       atl: 2.79,
//       description:
//         "Avalanche is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. It is the first smart contracts platform that processes transactions in under one second with finality.",
//       features: [
//         "High throughput (4,500+ transactions per second)",
//         "Sub-second finality",
//         "Multiple virtual machines (including EVM compatibility)",
//         "Proof of Stake consensus mechanism",
//         "Three built-in blockchains (X-Chain, C-Chain, P-Chain)",
//       ],
//       history:
//         "Avalanche was launched in September 2020 by Ava Labs, founded by Cornell University professor Emin Gün Sirer and others. It raised $42 million in a public token sale in July 2020.",
//       links: {
//         Website: "https://www.avax.network/",
//         Whitepaper: "https://www.avalabs.org/whitepapers",
//         GitHub: "https://github.com/ava-labs",
//       },
//     },
//     {
//       id: "chainlink",
//       name: "Chainlink",
//       symbol: "LINK",
//       price: 14.32,
//       change24h: -2.34,
//       marketCap: 7654321098,
//       volume24h: 654321098,
//       circulatingSupply: 538000000,
//       rank: 15,
//       ath: 52.88,
//       atl: 0.1286,
//       description:
//         "Chainlink is a decentralized oracle network that provides real-world data to smart contracts on the blockchain. It aims to solve the problem of connecting smart contracts with data from the real world.",
//       features: [
//         "Decentralized oracle network",
//         "Secure and reliable data feeds",
//         "Multiple data sources for enhanced accuracy",
//         "Tamper-proof inputs and outputs",
//         "Used by many DeFi applications",
//       ],
//       history:
//         "Chainlink was founded by Sergey Nazarov in 2017. The project conducted an ICO in September 2017, raising $32 million. It has since become one of the most widely used oracle solutions in the blockchain space.",
//       links: {
//         Website: "https://chain.link/",
//         Whitepaper: "https://research.chain.link/whitepaper-v2.pdf",
//         GitHub: "https://github.com/smartcontractkit/chainlink",
//       },
//     },
//     {
//       id: "polygon",
//       name: "Polygon",
//       symbol: "MATIC",
//       price: 0.67,
//       change24h: 4.56,
//       marketCap: 6543210987,
//       volume24h: 543210987,
//       circulatingSupply: 9800000000,
//       rank: 13,
//       ath: 2.92,
//       atl: 0.00314,
//       description:
//         "Polygon (formerly Matic Network) is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It aims to address some of Ethereum's limitations, such as high fees, poor user experience, and low transaction throughput.",
//       features: [
//         "Layer 2 scaling solution for Ethereum",
//         "High throughput and low fees",
//         "Ethereum compatibility",
//         "Multiple scaling solutions (PoS, ZK, Optimistic)",
//         "Growing ecosystem of dApps",
//       ],
//       history:
//         "Polygon was founded in 2017 as Matic Network by Jaynti Kanani, Sandeep Nailwal, and Anurag Arjun. It rebranded to Polygon in February 2021, expanding its scope beyond its initial Plasma-based scaling solution.",
//       links: {
//         Website: "https://polygon.technology/",
//         Whitepaper: "https://polygon.technology/papers/",
//         GitHub: "https://github.com/maticnetwork",
//       },
//     },
//   ]
  
//   // Function to get a cryptocurrency by ID
//   export function getCryptoById(id) {
//     return cryptoData.find((crypto) => crypto.id === id)
//   }
  








const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY; // leave this undefined unless needed (some endpoints are public)

// Fetch top cryptocurrencies (by market cap)
export async function fetchTopCryptos(perPage = 5) {
  const res = await fetch(
    `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false`,
    {
      headers: {
        // Optional header if API key is required
        Authorization: `Bearer ${API_KEY}`,
      },
      next: { revalidate: 60 }, // optional: ISR (revalidate every 60s)
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
    features: [], // CoinGecko doesn’t provide this directly; you can hardcode or remove
    history: "",  // Same here
    links: {
      Website: coin.links.homepage[0],
      Whitepaper: coin.links.whitepaper || "",
      GitHub: coin.links.repos_url.github[0],
    },
    image: coin.image.large,
  };
}










