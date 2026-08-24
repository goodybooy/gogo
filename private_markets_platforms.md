# Private Markets Platforms — Carta, Jarsy, Willow Wealth vs Hiive, Forge

Notes compiled 2026-08-23. Landscape comparison only, not investment advice.

---

## The short answer

**These are not all competitors.** Asking how Carta, Jarsy and Willow Wealth compare to Hiive and Forge is like asking how a registry, a fractional-share app and a fund supermarket compare to a stock exchange. They touch the same asset class from four different positions:

| Layer | What it does | Who is here |
|---|---|---|
| **Infrastructure** | Owns the system of record — who owns what | **Carta** |
| **Secondary marketplace** | Matches buyers and sellers of actual private shares | **Forge**, **Hiive**, EquityZen, Nasdaq Private Market |
| **Tokenized fractional access** | Sells economic exposure to private shares in small units | **Jarsy** |
| **Fund access / allocation** | Sells units in professionally managed private funds | **Willow Wealth** |

Only Forge and Hiive are directly comparable to each other. The other three do different jobs.

---

## What you actually own

This is the distinction that matters most, and it is easy to miss because all four use similar marketing language about "access to private markets".

| Platform | What the investor holds | Legal wrapper |
|---|---|---|
| Forge / Hiive | The private shares themselves, or an interest in a single-company fund | Direct transfer or SPV |
| Jarsy | A **token representing economic rights** to a share held by a Jarsy-managed LLC | Token → SPV → share |
| Willow Wealth | Units in an evergreen fund holding a diversified portfolio | Fund interest |
| Carta | Nothing — Carta is the record-keeper, not a counterparty | n/a |

Each additional wrapper adds a party whose failure matters. A direct share transfer has issuer risk. An SPV adds the SPV manager. A token on top of an SPV adds the platform, the custodian and the smart contract.

---

## Carta — infrastructure, and a cautionary tale

Carta is the system of record for private company ownership, not a trading venue.

**Scale.** Maintains ownership registers for roughly **40,000 US venture-backed companies** — about 35% of the market — and runs fund administration and SPV services covering around **9,000 funds and SPVs with over $220bn under administration**.

**What it sells:** cap table management, 409A valuations, fund administration, and increasingly the tooling around company-run liquidity events. Tender offer volume administered on Carta rose **200% in the first half of 2026**, which says more about the current exit environment than about Carta itself.

### Why Carta is no longer a marketplace

Carta launched **CartaX** in February 2021 to trade private shares. In January 2024 the founder of Linear published an account of a Carta representative approaching an angel investor using **confidential cap table data** to source order flow for CartaX.

Carta exited secondary transactions, shut CartaX down, and in August 2024 sold its Liquidity brokerage business to Public.

**The lesson generalises beyond Carta:** an infrastructure provider that also runs a marketplace sits on both sides of an information asymmetry. It knows who owns what, what they paid, and who might sell. That is a structural conflict, not a compliance failure, and it is why Carta's retreat to pure infrastructure is arguably a stronger position than the one it abandoned.

---

## Forge and Hiive — the actual marketplaces

These two are genuine competitors, and the comparison is now complicated by ownership.

### Forge Global — now part of Charles Schwab

Forge was the largest private securities marketplace: **$17bn+ transacted since 2014**, **636,000+ registered users**, publicly listed as NYSE: FRGE.

**Charles Schwab completed its acquisition in March 2026**, at **$45/share, about $660m**.

Two things worth noting about that price:

- It is **down from roughly $2bn** at Forge's SPAC listing — a significant markdown on the standalone marketplace thesis
- Schwab's stated intent is distribution: putting pre-IPO access in front of retail clients and advisors

That second point is the important one. Forge's competitive advantage is no longer being the biggest marketplace; it is being plugged into Schwab's client base. A marketplace with a captive distribution channel is a different business from an independent one.

### Hiive — transparency as the wedge

Hiive competes on **price discovery** rather than scale.

- **Live anonymous bid/ask order book** — buyers and sellers see real quotes, rather than negotiating blind through a broker
- Roughly **3,000 company catalog**
- Fees typically **2–3%**, versus Forge's **2.5–5% per side**
- **Higher minimums**, often **$50,000+**, since it targets larger transactions

The trade-off is clear: Hiive gives better information and lower fees to people transacting in size. Forge, especially under Schwab, is oriented toward broader access at smaller sizes.

**Structural point:** in a market where the same company can trade at meaningfully different prices depending on who you ask, an order book is worth something on its own. Opacity is where broker margin lives.

---

## Jarsy — tokenized fractional access

Jarsy is doing something different from all of the above: **breaking the minimum cheque size**.

**Model.** Jarsy-managed LLCs hold private shares. Jarsy issues tokens on the **Base blockchain**, backed 1:1 by economic rights to those shares. Investors buy tokens.

| | |
|---|---|
| Minimum | **$10** |
| Companies | SpaceX, Anthropic, Stripe and similar |
| Funding | **$5m pre-seed led by Breyer Capital**, with Karman Ventures and angels |
| Eligibility | Still **Reg D — accredited investors**, despite the retail-style framing |

**What is genuinely new:** a $50,000 Hiive minimum and a $10 Jarsy minimum are not the same product at different sizes. They serve different people entirely. Fractionalisation is the actual innovation, and the blockchain is the mechanism, not the point.

### The risks that come with the wrapper

This deserves care, and the regulatory picture moved in 2026.

- **You do not own the share.** You own a token representing economic rights to a share held by someone else's LLC. Voting rights stay with the company; information rights are whatever the SPV grants.
- **Three points of failure** stack up: the SPV manager, the custodian, the smart contract. A direct holder faces none of these.
- **The SEC addressed this directly.** Guidance in January–February 2026 from Corporation Finance clarified that tokenized securities are securities, and that **a tokenized wrapper can change what the investor actually owns** — introducing operational and insolvency exposure to the third party that direct holders do not face.
- **The Securities Transfer Association has lobbied against third-party tokenization**, warning that synthetic models blur investor rights and add platform and custody risk.

None of that makes Jarsy unsound. It does mean the token is a claim on a claim, and should be priced accordingly.

---

## Willow Wealth — not in the same market at all

Willow Wealth sells **funds**, not company shares. It belongs in this comparison mainly to show where the boundary is.

**Model.** An allocation platform for private markets — real estate, private credit, private equity — with model portfolios, educational material, and an automated investing option.

**December 2025:** launched direct access to **evergreen funds from Carlyle, Goldman Sachs Asset Management, and StepStone**.

The evergreen structure is the interesting part. Traditional closed-end PE and credit funds call capital over years, so early returns are dragged by undeployed cash. These funds are **already fully invested**, so a subscriber gets exposure to a deployed portfolio **within days**, with periodic liquidity windows.

**Why this is a different product:**

| | Hiive / Forge / Jarsy | Willow Wealth |
|---|---|---|
| Exposure | One company you pick | Diversified portfolio someone else picks |
| Risk | Concentrated, single-name | Spread across many holdings |
| Who decides | You | Carlyle, GS AM, StepStone |
| Return driver | That company's outcome | Manager skill and asset class beta |
| Liquidity | Sell to another buyer, if one exists | Periodic fund redemption windows |

Someone choosing between Hiive and Willow Wealth is not comparing venues — they are choosing between **picking companies** and **buying managed exposure**. That is an asset allocation decision, not a platform decision.

---

## How to think about the landscape

**Three questions separate these platforms better than any feature list:**

**1. What do you own at the end of the chain?**
Shares → SPV interest → token → fund unit. Every step adds a counterparty.

**2. What is the minimum, and why?**
$50,000 (Hiive) versus $10 (Jarsy) is not a pricing difference. It reflects entirely different operating models and customer bases.

**3. Who is choosing the exposure?**
You (Forge, Hiive, Jarsy) or a manager (Willow Wealth).

### Where the pressure is

- **Distribution is consolidating.** Schwab buying Forge, at a third of its SPAC valuation, suggests standalone marketplaces struggle to earn their cost of capital. The value is moving to whoever owns the client relationship.
- **Fractionalisation is the live experiment.** Jarsy's $10 minimum genuinely opens a market that did not exist. Whether the token wrapper survives regulatory scrutiny is unresolved, and the SEC's 2026 guidance signals the question is being asked seriously.
- **Infrastructure and marketplace do not mix.** Carta's exit is the clearest evidence available, and it was self-inflicted rather than regulatory.
- **Evergreen funds are eating the retail alternatives market.** Immediate deployment plus periodic liquidity removes the two things that made private funds unusable for individuals.

---

## Sources

- [Contrary Research — Carta business breakdown](https://research.contrary.com/company/carta)
- [Charles Schwab — completion of Forge Global acquisition](https://pressroom.aboutschwab.com/press-releases/press-release/2026/Charles-Schwab-Completes-Acquisition-of-Forge-Global/default.aspx)
- [Analysis: Schwab buys Forge at $660m, down from $2bn SPAC price](https://lex.substack.com/p/analysis-schwab-buy-private-shares)
- [Hiive — head-to-head fee comparison with Forge](https://www.hiive.com/market-articles/a-head-to-head-comparison-of-hiive-and-forge-fees)
- [The Block — Jarsy launches with Breyer Capital pre-seed](https://www.theblock.co/post/360003/private-equity-tokenization-jarsy-pre-seed-breyer-capital)
- [Sacra — interview with Jarsy CEO Han Qin on fractional pre-IPO](https://sacra.com/research/han-qin-jarsy-fractional-pre-ipo-investing/)
- [SEC — Corporation Finance statement on tokenized securities](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)
- [CoinDesk — transfer agents warn SEC on third-party tokens](https://www.coindesk.com/policy/2026/07/13/wall-street-transfer-agents-lobby-sec-warning-that-third-party-tokens-pose-risks-to-market-integrity)
- [Willow Wealth — evergreen funds from Carlyle, GS AM, StepStone](https://www.willowwealth.com/blog/article/willow-wealth-expands-private-markets-platform-with-launch-of-evergreen-funds-from-carlyle-goldman-sachs-asset-management-and-stepstone)
