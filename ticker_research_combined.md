# Ticker Research Report — Combined

*High-Level Overview | Sources: April 14, 2026 · May 7, 2026 · May 8, 2026 · May 14, 2026*

---

## AI Infrastructure & Semiconductors

---

### 1. Cerebras Systems — Private (IPO Pending)

Cerebras builds the world's largest AI chips, including the Wafer Scale Engine (WSE), which packs an entire wafer's worth of transistors into a single chip. The company competes directly with Nvidia in AI training and inference hardware. It has since pivoted from pure chip sales toward operating its own AI cloud — customers pay for inference capacity rather than buying hardware outright.

#### Key Facts

| Metric | Value |
|---|---|
| Latest Valuation | $26.6B (IPO target, May 2026) |
| Prior Valuation | $23.1B (Series H, Feb 2026) |
| Total Funding | ~$2.9B across 8 rounds |
| 2023 Revenue | $78.7M |
| 2024 Revenue | ~$421M (estimated) |
| 2025 Revenue | ~$510M (+76% YoY) |
| 2025 Net Income | $87.9M (turned profitable) |
| Key Deal | $10B+ compute agreement with OpenAI through 2028; binding AWS term sheet |
| IPO Target | Nasdaq (ticker: CBRS), pricing May 13, 2026 |
| HQ | Sunnyvale, California |

#### Funding Timeline

| Round | Date | Amount | Valuation |
|---|---|---|---|
| Series F | 2021 | $250M | $4B |
| Series G | Sep 2025 | $1.1B | $8.1B |
| Series H | Feb 2026 | $1B | $23.1B |

#### IPO — Second Attempt

Cerebras originally filed for an IPO in October 2025 but withdrew after the U.S. government raised national security concerns over heavy reliance on UAE-based investor G42. It refiled in April 2026 after restructuring that relationship. The current offering targets 28M shares at $115–$125/share, aiming to raise $3.5B at a ~$26.6B valuation. Demand ran hot — Bloomberg reported ~$10B in orders for the $3.5B on offer, suggesting pricing above the range.

Key investors include Tiger Global, AMD, Fidelity, Benchmark, Coatue, and Altimeter. CFIUS cleared the company after G42's stake was restructured to non-voting shares.

**Risks.** Customer concentration is significant — two customers accounted for 86% of 2025 revenue. Competitors in the S-1 include every major cloud provider (AWS, Azure, GCP, Oracle, CoreWeave) plus Nvidia as the dominant underlying hardware. The wafer-scale approach is technically differentiated but capital-intensive to scale, and the pivot to cloud inference puts it in direct competition with deep-pocketed hyperscalers.

---

### 2. Astera Labs (ALAB) — Public Stock

Astera Labs designs purpose-built connectivity semiconductors for AI and cloud infrastructure. Its product portfolio targets the data-movement bottleneck inside modern AI servers: **Aries** (PCIe and CXL retimers that preserve signal integrity over long board traces and cable runs), **Taurus** (smart cable modules for high-bandwidth Ethernet and storage links), **Leo** (CXL memory connectivity controllers enabling memory expansion and pooling across servers), and **Scorpio** (PCIe Gen 5/6 fabric switches for GPU-to-GPU and CPU-to-GPU connectivity inside AI clusters). Founded in 2017 and headquartered in Santa Clara, California, the company IPO'd on Nasdaq in March 2024 at $36/share and quickly became one of the most-watched AI infrastructure pure-plays. Customers include major hyperscalers and the leading AI accelerator vendors; revenue scales directly with the GPU build-out cycle.

#### Key Metrics

| Metric | Value |
|---|---|
| Stock Price | ~$140 (verify latest) |
| Market Cap | ~$22B |
| P/E (Forward) | ~80x (high-growth premium) |
| 52-Week Range | ~$60 – ~$190 |
| 2024 Revenue | $396M (FY, +242% YoY) |
| Sector | Semiconductors / AI Infrastructure |
| HQ | Santa Clara, California |

#### Stock Performance

ALAB has been a high-beta proxy for the AI infrastructure trade since its March 2024 IPO. The stock has rallied on each successive hyperscaler capex update through 2024–2025, with notable surges around the Scorpio fabric switch announcement and the company's design wins inside Nvidia's Blackwell and successor Rubin reference platforms. Shares pulled back during the AI-spending-pause concerns in early-to-mid 2025 before resuming the uptrend on capex confirmation. Current valuation prices in sustained 50%+ revenue growth driven by Scorpio ramp and broader Gen 5/6 PCIe adoption. The stock trades at a meaningful premium to other connectivity names (CRDO, MRVL) reflecting its concentrated AI exposure and faster revenue trajectory.

#### Comparable Companies

| Company | Ticker | Focus | Market Cap |
|---|---|---|---|
| Broadcom | AVGO | Diversified semis incl. networking, AI accelerators | ~$1.4T |
| Marvell | MRVL | Custom AI silicon, optical DSPs, data-center networking | ~$80B |
| Credo Technology | CRDO | Active electrical cables, SerDes IP for AI infra | ~$15B |
| MaxLinear | MXL | Optical/Ethernet PHYs for data center | ~$1.5B |

---

### 3. DRAM / Memory Chip — ETF & Pure Plays

#### Why Memory Matters Right Now

DRAM and NAND have historically been brutally cyclical — boom and bust on a ~24-month cadence driven by capex overshoot and inventory cycles. The 2024–2026 cycle is structurally different because **HBM (High-Bandwidth Memory)** demand for AI accelerators (Nvidia H100 / H200 / Blackwell, AMD MI300X, custom hyperscaler ASICs) has pulled DRAM wafer capacity into a long-supply situation, leaving commodity DRAM tight. Pricing power has returned and the leading-edge players (SK Hynix, Samsung, Micron) are running their HBM lines near peak utilization with multi-quarter customer pre-payments.

#### Roundhill Memory ETF (BATS: DRAM)

Launched April 2, 2026 — the first U.S.-listed pure-play memory semiconductor ETF. Surged ~70% in its first 24 sessions and pulled in over $5 billion in assets (including $1B+ in a single day), making it one of the fastest-ramping ETF launches on record. The fund holds ~14 names with ~70% concentration in Micron (MU), SK Hynix, and Samsung. Expense ratio: 0.65%. The thesis is straightforward: memory is the critical bottleneck in AI inference pipelines (HBM for GPUs, DRAM for servers), and HBM pricing is inflecting.

**Tuttle Capital Angle.** Tuttle Capital Management is known for launching aggressive leveraged and thematic single-stock or niche ETFs quickly (they've done 2x leveraged ETFs on names like NVDA, TSLA, META, etc.). As of the research date, a dedicated Tuttle Capital 2x DRAM ETF has not yet been confirmed in public filings or announcements — though given Tuttle's history of rapidly following hot thematic trades with leveraged wrappers, a 2x memory/DRAM product would be consistent with their playbook. Worth monitoring SEC filings and ETF launch announcements for a potential DRAX or similar ticker.

#### Pure-Play Memory Exposure

| Ticker | Company | Memory Exposure |
|---|---|---|
| MU | Micron Technology | DRAM + NAND, only US-domiciled major; HBM3E qualified at Nvidia |
| 000660.KS | SK Hynix | HBM market leader (~50%+ share), Nvidia preferred supplier |
| 005930.KS | Samsung Electronics | DRAM + NAND, HBM catching up to Hynix |
| WDC | Western Digital | Post-spin pure HDD; NAND business spun out as Sandisk |
| SNDK | Sandisk | NAND-focused, post-Western Digital spin (Feb 2025) |
| 285A.T | Kioxia | NAND (former Toshiba Memory), IPO'd late 2024 in Tokyo |

#### Diversified Semi ETFs with Meaningful Memory Weight

| Ticker | Name | Memory Exposure |
|---|---|---|
| SOXX | iShares Semiconductor ETF | ~8–10% memory (mostly MU + WDC) |
| SMH | VanEck Semiconductor ETF | ~6–8% memory |
| XSD | SPDR S&P Semiconductor ETF | Equal-weight, broader exposure to memory smaller-caps |
| USD | ProShares Ultra Semiconductors (2x) | Leveraged proxy for SMH/SOXX exposure |

#### Trading Considerations

A clean DRAM/HBM thematic ETF would have to weigh international names heavily — Hynix and Samsung dominate global HBM share, so Korea-domiciled local shares or ADRs are essential to a faithful exposure. For US-only access, **MU is the cleanest single-name proxy**. The cleanest cycle-trade is long the leading-edge HBM winners (Hynix, Micron) vs. short legacy/commodity DRAM exposure or NAND-only names. Watch for cycle-turn signals: HBM ASP rolls, hyperscaler capex guides, and Korean memory monthly export data. A 2x leveraged version would amplify both the upside from HBM supercycle dynamics and the downside from DRAM pricing cycles — high risk, high reward instrument.

---

## AI Software & Services

---

### 4. Perplexity — AI Search Company

#### Product Overview

Perplexity AI is an "answer engine" that uses large language models combined with real-time web search to give cited, sourced answers to user queries — positioning itself as a direct alternative to traditional search engines (Google) and chat-based AI (ChatGPT). Its core differentiator is providing synthesized answers with source citations rather than a list of links. As of 2026, it has expanded beyond search into:

- **Deep Research** — multi-step research workflows
- **Model Council** — lets users compare outputs from GPT-5.2, Claude 4.6, and others simultaneously on the same query
- **Perplexity Computer** — an agentic product that can execute complex workflows using 19 AI models, spawning subagents for sub-tasks

#### Funding & Valuation

Perplexity's funding trajectory has been extraordinary:

- January 2024: ~$500M valuation
- December 2024: ~$9B valuation
- May 2025: **$500M Series E** (largest single round)
- September 2025: **$200M at $20B valuation**
- Early 2026: Valuation reaches **~$21.21B** (Series E-6)
- Total raised: **~$1.72B across 11 rounds from 61 investors**
- Key investors: NVIDIA, SoftBank Vision Fund 2, Accel, IVP, NEA, Bessemer, Databricks, Jeff Bezos

#### Business Model

Revenue streams:

- **Perplexity Pro:** $20/month (standard premium)
- **Perplexity Max:** $200/month (launched July 2025, enterprise-grade)
- **Enterprise contracts**
- In **February 2026**, Perplexity abandoned its AI-integrated advertising strategy, pivoting fully to a **subscription-first model** to preserve the objectivity of its answers

Financial milestones:

- ARR grew from **$80M** (late 2024) → **$200M** (February 2026) → **$450M+** (April 2026, after a 50% MoM revenue surge)
- Management targets **$656M revenue** by end of 2026
- Signed a **$750M, 3-year GPU compute deal with Microsoft Azure** (January 2026)

#### Competition & Recent News

- Primary competitors: Google Search, OpenAI's ChatGPT/SearchGPT, Anthropic, and Microsoft Bing/Copilot
- Launched **"Billion Dollar Build"** — an 8-week competition with $1M seed funding for founders building AI companies using Perplexity Computer
- Over **30M active users** generating 780M+ monthly queries
- **Legal challenges:** The BBC, New York Times, Reddit, and multiple Japanese newspapers have filed copyright infringement suits over Perplexity's content scraping and summarization

---

### 5. Scale AI — Private

Scale AI provides data infrastructure for AI development, including data labeling, model evaluation, and synthetic data generation. Originally a labeling company, Scale evolved into a critical AI supply chain player serving OpenAI, Google, Microsoft, Meta, and the US Department of Defense.

#### Key Facts

| Metric | Value |
|---|---|
| Latest Valuation | $29B (post-Meta investment) |
| Total Funding | ~$15.9B |
| Meta Investment | $14.8B for 49% non-voting stake (Jun 2025) |
| 2024 Revenue | $870M (ARR $1.5B by year-end) |
| 2026 Revenue Target | ~$2B (+130% YoY) |
| Key Contracts | OpenAI, Google, Microsoft, DoD ($249M) |
| HQ | San Francisco, California |

Former CEO Alexandr Wang moved to a senior role inside Meta as part of the deal. Scale is now led by former Uber executive Jason Droege as CEO. No IPO has been announced.

---

### 6. Luma AI — Private

Luma AI develops generative AI models for video and image creation. Its flagship product, Dream Machine, enables users to generate photorealistic videos from text and image prompts. The company targets creators, advertisers, and film studios.

#### Key Facts

| Metric | Value |
|---|---|
| Latest Valuation | $4.0B (Nov 2025) |
| Total Funding | $1.07B across 6 rounds |
| Latest Round | $900M (led by Humain, Saudi-backed) |
| 2024 Revenue | ~$8M |
| Business Model | Subscription (creators) + Enterprise (studios) |
| Founded | 2021 |
| HQ | Palo Alto, California |

Key investors include Amazon, Andreessen Horowitz, and Amplify Partners. Luma competes with Runway, Pika, and OpenAI's Sora in the AI video generation space.

---

### 7. Cadence Design Systems (NASDAQ: CDNS)

**Overview.** Cadence is one of the two dominant EDA (Electronic Design Automation) software companies alongside Synopsys. EDA software is the toolchain that chip designers use to design, simulate, verify, and sign off semiconductor layouts before fabrication. Every chip made by NVIDIA, AMD, Apple, Qualcomm, and custom silicon teams runs through Cadence or Synopsys tools. As chip complexity explodes with AI, EDA spend is growing structurally.

**Q1 2026 Earnings.** Revenue $1.474B, up 19% YoY — every segment grew double digits. Non-GAAP EPS $1.96. Record backlog of $8B, described as "ahead of plan." Full-year 2026 revenue guidance raised to $6.125–$6.225B (~17% growth, midpoint up $65M organically). Non-GAAP EPS guidance raised to $7.85–$7.95. IP segment +22% YoY; Core EDA +18%; System Design & Analysis +18%.

**AI Angle.** Cadence is embedding AI across its design flow through its "Cadence.AI" suite. New agentic AI tools — ChipStack, ViraStack, InnoStack — are driving consumption-based revenue on top of core subscriptions. A TSMC alliance and AI Super Agents are boosting customer adoption. The AI chip design boom is directly expanding Cadence's addressable market — more custom AI chips = more EDA hours. Stock ~$348.50 as of May 8, up ~15% YTD. Analyst consensus: 12 Buy, 2 Hold, 1 Sell.

**Investment Thesis.** Cadence is a structural compounder — sticky subscription revenue, high switching costs (chip teams can't mid-cycle switch EDA vendors), and direct leverage to the AI chip design wave. Trades at ~45x forward earnings, which is elevated but has been historically justified by consistent double-digit growth. Key risk: the Synopsys–Ansys merger (if approved) creates a stronger competitor in system simulation; also macro slowdown in semiconductor capex.

---

### 8. Obsidian — Note-Taking / PKM App

#### Product Overview

Obsidian is a **local-first, markdown-based personal knowledge management (PKM)** application developed by Dynalist Inc. (a two-to-three person team). It stores notes as plain `.md` files in a folder ("vault") on the user's device — you own your data and it's never locked in a proprietary format. Key distinguishing features:

- **Bidirectional linking** between notes (wiki-style `[[wikilinks]]`)
- **Graph View** — visual map of note connections (updated in 2025 with improved algorithms)
- **Canvas** — infinite whiteboard for embedding live notes, images, and web pages
- **1,400+ community plugins** enabling workflows from Zettelkasten to GTD to code execution
- **Obsidian CLI** — introduced in v1.12, enables terminal-based scripting and automation
- **Bases plugin** (v1.9) — transforms any set of notes into a queryable database

As of March 2026, Obsidian is on version **1.12.x**.

#### Business Model — Bootstrapped and Profitable

Obsidian is **fully bootstrapped** (no venture funding raised). The core app is **free** for personal use — the commercial license requirement was dropped in early 2025. Revenue comes from optional paid services:

- **Obsidian Sync:** $4/month — end-to-end encrypted sync across devices
- **Obsidian Publish:** $8/month — publish vaults as websites
- **Catalyst:** one-time $25+ — early access to insider builds and community badge

The company is reportedly valued at approximately **$350 million** (informal estimate) while running with roughly **3 engineers** — a widely-cited example of a highly efficient, profitable indie software business. Approximately 80% of clients use the free tier, with the Sync and Publish services sustaining the company.

#### Recent Updates (2025–2026)

- **v1.9 (Aug 2025):** Bases plugin (note-as-database), improved Graph View algorithm
- **v1.11:** Theming enhancements via Chromium 139 corner shape support
- **v1.12 (March 2026):** Obsidian CLI, Bases search, image resizing, auto-cleanup of unused images, native iOS share sheet, improved copy/paste to rich text apps

AI is available **only via community plugins** (e.g., AI Assistant plugin), not natively baked in — a deliberate choice reflecting the team's focus on local-first privacy.

#### Competitive Landscape

| App | Model | Users | Notes |
|---|---|---|---|
| **Notion** | Cloud-first, freemium SaaS | 100M+ | $10B valuation; 70%+ of Fortune 500 |
| **Obsidian** | Local-first, bootstrapped | Millions (est.) | Privacy-first; ~5% enterprise adoption |
| **Logseq** | Open-source, local-first | Smaller | Free; strong among developers |
| **Roam Research** | SaaS, subscription | Niche | $15/mo; early mover in linked notes |
| **Anytype** | Open-source, local+sync | Growing | Privacy-focused alternative |

---

## Power & Energy Infrastructure

---

### 9. Vertiv Holdings (NYSE: VRT)

#### Business Overview

Vertiv Holdings (NYSE: VRT) is a global provider of critical digital infrastructure and continuity solutions, primarily serving data centers, communication networks, and commercial/industrial facilities. Its product portfolio spans thermal management systems, power management equipment, IT infrastructure, and related services — essentially everything needed to keep data centers online and operating efficiently. The company went public via a SPAC merger in 2020 and has since transformed into one of the premier plays on AI-driven data center buildout.

#### Recent Financials & Earnings

Vertiv reported strong Q1 2026 results:

- **Net sales: $2.65 billion** — up 30% year-over-year, beating guidance by ~$50 million
- **Adjusted operating profit: $551 million** — up 64% YoY, beating guidance by ~$56 million
- **EPS: $1.36**, beating analyst consensus of $1.29 by $0.07

For full year 2026, Vertiv raised its guidance:

- Revenue outlook: **$13.50–$14.00 billion**
- EPS guidance: **$5.97–$6.07**

#### Growth Drivers

The primary growth engine is the AI data center boom. Hyperscalers and co-location providers are accelerating capital expenditures on compute infrastructure, and Vertiv's cooling, power distribution, and rack systems sit at the critical path of that buildout. The company was added to the **S&P 500 in March 2026** following a sustained transformation from an industrial spin-off to what analysts now describe as a "secular AI powerhouse." Management has flagged robust order backlogs and strong demand signals across North America, Europe, and Asia-Pacific.

#### Analyst Sentiment

Wall Street is broadly bullish:

- **Consensus: Strong Buy** (based on 18 analysts — 22 Buy, 3 Hold, 0 Sell)
- **Average price target: ~$339**, with a high of $414 and a low of $260
- **Forward growth projections:** Earnings forecast to grow ~22% per annum, revenue ~18% per annum

#### Notable News

- Added to S&P 500 in March 2026
- Consistent guidance raises throughout 2025–2026, reinforcing investor confidence
- Stock was under pressure earlier in 2025 alongside broader AI infrastructure names, but recovered strongly on earnings beats

---

### 10. Vistra Corp. (NYSE: VST)

#### Business Overview

Vistra Corp. (NYSE: VST) is the largest competitive power producer in the United States by installed capacity, with a diverse fleet that includes natural gas, nuclear, coal, solar, and battery storage assets totaling roughly 41,000 MW. It operates primarily across Texas (through its TXU Energy retail brand) and other deregulated electricity markets. Vistra is increasingly positioned as an "AI power" story — a critical provider of electricity to the data centers and hyperscalers that underpin the AI buildout.

#### Recent Financials & Earnings (Q1 2026)

Vistra reported on May 7, 2026:

- **Q1 2026 Adjusted EBITDA: $1.494 billion** (record, up ~20% YoY)
- **GAAP net income: $1.029 billion**
- **EPS: $1.31**, beating the $1.28 consensus estimate
- **2026 guidance reaffirmed:** Adjusted EBITDA of **$6.8B–$7.6B** (up ~22% vs. full-year 2025's $5.91B)
- **Free cash flow before growth (FCFbG) guidance: $3.925B–$4.725B**

#### Growth Drivers (Data Center / AI Power Angle)

- **Long-term PPAs with hyperscalers:** Vistra has signed 20-year power purchase agreements with Amazon and Meta Platforms, providing highly visible revenue
- **Nuclear fleet value:** Vistra's nuclear assets are especially prized given 24/7 carbon-free power is increasingly sought by tech companies under sustainability mandates
- **Cogentrix acquisition ($4B):** Adds ~5,500 MW of flexible gas generation, designed for peak demand balancing as data center load spikes
- **Morgan Stanley projects** U.S. data center electricity demand could reach **80 GW by 2028**, directly benefiting Vistra
- Fitch upgraded Vistra to **investment grade (BBB-)**, citing improved fundamentals and long-term contracted revenues

#### Analyst Sentiment

- **Consensus: Strong Buy** (19 Buy, 0 Hold, 1 Sell)
- **Average price target: ~$225.67** (vs. recent price ~$160, implying ~40%+ upside)
- Notable targets: JP Morgan, Wells Fargo, Jefferies all bullish
- Stock has risen **~324% since the start of 2024**, but pulled back ~25% from highs, prompting some analysts to flag it as a buying opportunity

#### Notable Recent News

- Q1 2026 beat announced May 7, 2026 — stock rose ~3.8% pre-market to ~$164
- Fresh dividend hike to **$0.229/share** per quarter
- Completed a **$4 billion senior notes offering**
- Fitch investment-grade upgrade — a significant milestone for a company that carried junk ratings for much of its post-bankruptcy history

---

### 11. Bloom Energy (NYSE: BE) — Public Stock

Bloom Energy designs and manufactures solid oxide fuel cell (SOFC) systems that generate clean, reliable on-site electricity. Originally focused on commercial and industrial power, the company has pivoted heavily toward AI data center power solutions, partnering with Oracle for up to 2.8 GW of fuel cell deployments.

#### Key Metrics

| Metric | Value |
|---|---|
| Stock Price | $198.71 |
| Market Cap | $49.6B |
| P/E (Trailing) | N/A (currently unprofitable) |
| P/E (Forward) | ~114.7 |
| 52-Week Range | $16.01 – $203.41 |
| Sector | Industrials / Clean Energy |
| HQ | San Jose, California |

#### Stock Performance

Bloom Energy shares surged approximately 291% over the past year, driven by massive AI data center demand and the Oracle partnership. The stock moved from ~$16 to over $198, making it one of the best-performing energy stocks of the year.

#### Comparable Companies

| Company | Ticker | Focus | Market Cap |
|---|---|---|---|
| Plug Power | PLUG | Hydrogen fuel cells (mobility/forklifts) | ~$5B |
| FuelCell Energy | FCEL | Carbonate fuel cells (utility-scale) | ~$1.5B |
| Ballard Power | BLDP | PEM fuel cells (heavy-duty transport) | ~$2B |
| Oklo | OKLO | Nuclear micro-reactors (data centers) | ~$6B |

---

### 12. Hammond Power Solutions (TSX: HPS.A)

**Company Overview.** Hammond Power Solutions (TSX: HPS.A) is a Canadian manufacturer of dry-type transformers and power quality solutions, serving industrial, commercial, and data center markets. It's a Toronto-listed small/mid-cap with growing exposure to the North American data center buildout and grid electrification theme — a picks-and-shovels AI infrastructure play.

**Q1 2026 Earnings (reported May 5, 2026).** Record quarterly sales of $265M, up 31.5% year-over-year. Adjusted EPS came in at $2.08 vs. $1.60 in Q1 2025 (+30%), though GAAP EPS declined to $1.64 from $2.20 due to non-recurring items. Growth was driven by strength in U.S. and Mexico custom product shipments and data center-related orders. A new Mexico factory began shipping in Q1, adding capacity for future growth. Backlog grew 4.1% from year-end 2025 — a forward indicator of continued demand.

**Analyst Reaction.** RBC raised its price target to C$350 (from C$250) with an Outperform rating. National Bank Financial raised its target to C$325 (from C$235). The stock has been re-rated sharply higher as the market prices in sustained data center transformer demand.

**Investment Thesis.** HPS.A is a direct beneficiary of the AI infrastructure buildout — data centers require large custom transformers, and lead times are long (6–18 months), meaning backlog provides good visibility. It trades at a premium to historical multiples but has been consistently beating estimates. Key risks: tariff exposure (U.S./Canada trade friction), commodity cost pass-through, and cyclicality if data center capex slows.

---

### 13. ABB Ltd (SWX: ABBN) — Switzerland

**Overview.** ABB is a Swiss industrial conglomerate spanning electrification, motion, process automation, and robotics. It's one of the largest automation and power technology companies globally, with a growing footprint in AI-driven data center power infrastructure — a key re-rating driver in 2025–2026.

**Q1 2026 Earnings.** Net income attributable to shareholders was $1.32B, up 20% YoY. Basic EPS of $0.73 vs. $0.60 a year prior. Free cash flow of $1.3B was the strongest Q1 in company history. Following a jump in data center-related orders, ABB raised full-year comparable revenue growth guidance to high single-digit to low double-digit percent, up from the prior 6–9% range. Shares hit a 1-year high of ~$103.31 on May 6 (+3.4% on the day).

**Robotics Spinoff — Major Catalyst.** ABB announced it will spin off its robotics division (industrial robots, software) as a separately listed company in Q2 2026, with likely listings in Switzerland and Sweden. This is a significant strategic move — it allows ABB to focus on its higher-margin electrification unit (which is directly benefiting from AI data center buildout) while unlocking value in the robotics business as a pure-play. The spinoff is an event-driven catalyst worth watching for both the parent and the new entity.

**Investment Thesis.** ABB sits at the intersection of two mega-themes: AI data center power infrastructure (electrification) and physical AI/automation (robotics). Post-spinoff, the parent becomes a cleaner electrification/automation story. Key risk: European industrial exposure and FX headwinds from CHF strength.

---

### 14. Allo Energy — Private

"Allo Energy" does not appear to be a publicly traded company. Two private companies match this name:

#### ALLO Energy Ltd (UK)

A private limited company registered in Scotland, focused on smart-home energy AI and optimization. Limited public financial data available.

#### Alléo Energy (US)

A US-based private company working on carbon-negative green hydrogen production. Also limited public disclosure. If you meant a different company (e.g., Aalo Atomics for nuclear energy), let me know and I can research that instead.

---

### 15. Aalo Atomics — Private

Aalo Atomics is a US nuclear startup designing factory-built sodium-cooled fast modular reactors (the "Aalo Pod" at ~10 MWe each, configurable into a multi-pod "Aalo Park" of ~50 MWe). The company is positioned squarely at the AI-data-center power bottleneck — the thesis is that hyperscalers cannot get enough firm clean power from the grid through 2030+, and small, fast-deployable factory-built nuclear can fill the gap. Aalo's design is Gen IV non-LWR (non-light-water reactor), derived from the MARVEL microreactor that co-founder Yasir Arafat led at Idaho National Lab. Founded in 2022 in Austin, Texas, with continuing R&D operations in Idaho.

#### Key Facts

| Metric | Value |
|---|---|
| Latest Valuation | Not disclosed (Series A, Mar 2024) |
| Total Funding | ~$30.5M+ disclosed across Seed + Series A |
| Series A | $29.5M (Mar 2024, led by 50Y) |
| Reactor Design | 10 MWe sodium-cooled fast modular ("Aalo Pod") |
| Target Market | AI data center power, defense bases, remote industrial |
| Founded | 2022 |
| HQ | Austin, Texas |

Key investors include 50Y, Valor Equity Partners, Hitachi Ventures, Harpoon Ventures, and Earthshot Ventures. Partnered with Idaho National Lab for prototype testing. Competes with Oklo (OKLO), NuScale (SMR), X-energy, and Last Energy in the small modular reactor (SMR) space — Aalo's differentiator is factory-built modularity at 10 MWe and a sodium-cooled fast design (vs. Oklo's heat-pipe design).

#### Comparable Companies

| Company | Ticker | Focus |
|---|---|---|
| Oklo | OKLO | Heat-pipe microreactors (1.5–15 MWe) for data centers |
| NuScale Power | SMR | Light-water SMRs (77 MWe modules) |
| X-energy | Private | High-temp gas-cooled SMRs, Amazon-backed |
| Last Energy | Private | 20 MWe modular reactors for European markets |

---

### 16. Power Infrastructure ETFs — GRID & VOLT

Two ETFs best capture the "power infrastructure" theme:

#### GRID — First Trust NASDAQ Clean Edge Smart Grid Infrastructure

Top 5 Holdings: Eaton Corp (8.3%), National Grid (8.0%), Johnson Controls (8.0%), ABB Ltd (7.6%), Schneider Electric (7.2%).

| Metric | Value |
|---|---|
| AUM | $7.6B |
| Expense Ratio | 0.56% |
| 1-Year Return | +61.1% |
| Holdings | ~65 stocks |
| Focus | Smart grid, electric utilities, energy storage |

#### VOLT — Tema Electrification ETF

Top 5 Holdings: Bel Fuse (6.6%), Powell Industries (6.5%), NextEra Energy (6.4%), Quanta Services (4.9%), American Electric Power (4.7%). VOLT is more concentrated and actively managed vs. GRID's passive index approach.

| Metric | Value |
|---|---|
| AUM | ~$500M |
| Expense Ratio | 0.75% |
| 1-Year Return | +60% |
| Holdings | ~29 stocks (concentrated) |
| Focus | US electrification, grid infra, nuclear |

---

## Aerospace & Defense

---

### 17. Firefly Aerospace (NASDAQ: FLY) — Public Stock

Firefly Aerospace is an end-to-end responsive space company offering **launch, lunar, and on-orbit services**. Its core product lineup spans: the **Alpha** small-lift rocket (~1,030 kg to LEO at ~$15M per launch), the **Blue Ghost** lunar lander (first commercial lander to fully succeed on the Moon — Mission 1 touched down at Mare Crisium on March 2, 2025), the **Eclipse** medium-lift vehicle (formerly MLV, co-developed with Northrop Grumman, first flight targeted 2027), and the **Elytra** orbital-transfer-vehicle family for LEO / GEO / cislunar mobility. Founded in 2014 (relaunched 2017 after restructuring) and headquartered in Cedar Park, Texas. The company IPO'd on Nasdaq under ticker `FLY` in August 2025, pricing at $45 and closing its debut day at ~$60 for a ~$8.5B valuation, raising $868M.

#### Key Metrics

| Metric | Value |
|---|---|
| Stock Price | ~$42 |
| Market Cap | ~$7.0B |
| P/E (Trailing) | N/A (currently unprofitable) |
| Q1 2026 Revenue | $80.9M (record) |
| 2025 Revenue | $159.9M (+163% YoY) |
| 2026 Guidance | $420M–$450M (~80% booked) |
| YE 2025 Cash | ~$793M |
| 2025 Net Loss | $298M |
| 2025 FCF Burn | ~$238M |
| Sector | Aerospace & Defense |
| HQ | Cedar Park, Texas |

#### Stock Performance & Recent Developments

FLY debuted on Nasdaq on **August 7, 2025** at $45 and surged ~34% on its first day to close at $60.35 (~$8.5B valuation). The stock has since pulled back to ~$42 (market cap ~$7.0B) on profitability concerns. Stock up ~34% in 2026 YTD. Key 2026 catalysts:

- **Alpha return-to-flight on March 11, 2026** (Flight 7) after a five-month stand-down following a September 2025 ground-test anomaly that destroyed a booster
- **VICTUS DIEM responsive-launch simulation** with Lockheed Martin and the US Space Force in March 2026 — sub-12-hour payload processing, sub-36-hour launch readiness
- **$176.7M NASA CLPS award** (July 2025) for a 2029 lunar south-pole mission
- **SciTec acquisition** lifted the FORGE missile-warning ground-system contract from $263M to $372M
- Partnership with Nvidia/SciTec to fly an AI computing module on a late-2026 lunar imaging mission
- Selected to support a $3.2B Space Force Space-Based Interceptor program
- Analysts: 9/9 Buy, avg. 12-month target $40.13

**Key risks**: persistent cash burn, Alpha launch-cadence execution, MLV/Eclipse first-flight slippage, and lumpy government-contract timing.

#### Comparable Companies

| Company | Ticker | Focus |
|---|---|---|
| Rocket Lab | RKLB | Small/medium launch + satellite buses + Neutron |
| Intuitive Machines | LUNR | Commercial lunar landers (Nova-C) + NASA CLPS |
| AST SpaceMobile | ASTS | Space-based cellular broadband (LEO) |
| Sidus Space | SIDU | Satellite-as-a-service + on-board AI |

---

### 18. AST SpaceMobile (NASDAQ: ASTS)

**Overview.** ASTS is building a space-based cellular broadband network — satellites that connect directly to standard smartphones without special hardware, partnered with AT&T, Verizon, Rakuten, and others. The vision is global coverage including remote and rural areas currently without cellular service.

**Q1 2026.** Revenue $14.7M (well below ~$37M analyst estimate). Net loss $191M. Cash on hand: $3.5B — providing a long runway. Full-year revenue guidance reaffirmed at $150–$200M. The company is targeting 45 BlueBird satellites in orbit by year-end. BlueBird 6 (largest commercial comms array antenna ever deployed in LEO) unfolded in Feb 2026; BlueBird 7 launched April 19 aboard Blue Origin's New Glenn but experienced a failure, potentially leaving ASTS ~7 satellites short of its 45-unit target. Stock surged ~20% post-earnings on the guidance reaffirmation despite the miss. FCC approval for direct-to-device broadband service secured; peak speeds of 98.9 Mbps demonstrated. Stock around $74, off highs; satellite execution and SpaceX IPO (potential competitive threat) are key overhangs.

---

### 19. Sidus Space (NASDAQ: SIDU) — Public Stock

Sidus Space is a micro-cap satellite company providing space-as-a-service through its LizzieSat multi-mission platform, onboard AI computing (FeatherEdge), and mission software (FeatherWare). The company designs, manufactures, and operates small satellites for near-real-time Earth observation and data analytics.

#### Key Metrics

| Metric | Value |
|---|---|
| Stock Price | ~$4.93 |
| Market Cap | ~$328M |
| P/E (Trailing) | N/A (unprofitable) |
| 2025 Revenue | $3.4M |
| 52-Week Low/High | ~$0.80 / ~$5.00 |
| Sector | Aerospace & Defense |
| HQ | Cape Canaveral, Florida |

#### Stock Performance

SIDU surged ~97% in late March/early April 2026 after being selected for the Missile Defense Agency (MDA) SHIELD program — an IDIQ contract with a $151B ceiling. YTD the stock is up roughly 44%. However, the company remains deeply unprofitable with a net loss of $29.5M in 2025.

#### Comparable Companies

| Company | Ticker | Focus |
|---|---|---|
| Rocket Lab | RKLB | Small launch vehicles + satellite buses |
| AST SpaceMobile | ASTS | Space-based cellular broadband |
| York Space Systems | Private | Tactical small satellites |
| Iridium | IRDM | Global satellite communications |

---

### 20. Astranis — Private

Astranis builds small (~400 kg class) geostationary communications satellites using its proprietary "MicroGEO" platform — roughly an order of magnitude smaller and cheaper than traditional GEO satellites built by Boeing, Lockheed, or Maxar. Each MicroGEO is dedicated to a single customer or coverage area, enabling targeted bandwidth delivery at significantly lower cost per Mbps. Founded in 2015 in San Francisco, the company launched its first commercial satellite "Arcturus" in April 2023 to provide broadband internet to Alaska through Pacific Dataport. Astranis sits at the intersection of two structural tailwinds: (1) the broader space-based connectivity market alongside Starlink and OneWeb, but with a differentiated focus on regional/enterprise bandwidth rather than global LEO constellations; and (2) the in-flight connectivity, government, and rural/remote enterprise markets where dedicated MicroGEO capacity beats shared LEO bandwidth on latency and reliability for fixed coverage areas.

#### Key Facts

| Metric | Value |
|---|---|
| Latest Valuation | ~$1.6B (Series D, Feb 2024) |
| Total Funding | ~$753M across 6+ rounds |
| Series D | ~$200M (Feb 2024) |
| First Launch | Arcturus (Pacific Dataport / Alaska), Apr 2023 |
| Satellite Class | MicroGEO, ~400 kg, dedicated single-customer GEO |
| Founded | 2015 |
| HQ | San Francisco, California |

Key customers include Pacific Dataport (Alaska connectivity), Anuvu (in-flight WiFi), and Andes (Latin America coverage). Key investors include Andreessen Horowitz, BlackRock, Fidelity, Founders Fund, Refactor Capital, and Y Combinator. Backlog reportedly includes multiple satellites for additional regional and enterprise customers; the next manufacturing milestone is scaling production cadence to multiple satellites per year.

#### Comparable Companies

| Company | Ticker | Focus |
|---|---|---|
| Viasat | VSAT | Large GEO satellites + Inmarsat acquisition (in-flight, govt) |
| EchoStar/Hughes | SATS | GEO + leased capacity, Boost Mobile parent |
| Iridium | IRDM | LEO satellite communications |
| AST SpaceMobile | ASTS | LEO direct-to-cell broadband |
| Starlink (SpaceX) | Private | LEO mass-market broadband |

---

### 21. Castelion — Private

Castelion is a modern defense production company specializing in advanced hypersonic strike systems. Founded in 2022, it became a unicorn in just 3 years. The company applies modern hardware development and manufacturing processes to address national security challenges, with its flagship product being the Blackbeard hypersonic missile system.

#### Key Facts

| Metric | Value |
|---|---|
| Latest Valuation | $2.8B (Series B, Jul 2025) |
| Total Funding | ~$504M across 5 rounds |
| Series B | $350M–$360M (Jul 2025, 12 investors) |
| Employees | ~166 (as of Mar 2026) |
| Flagship Product | Blackbeard hypersonic missile |
| Founded | 2022 |
| HQ | El Segundo, California |

#### Key Developments

In January 2026, Castelion broke ground on Project Ranger, a 1,000-acre manufacturing campus in Rio Rancho, NM, designed for high-cadence production of hypersonic strike systems. The company completed a major flight test at Point Mugu Sea Range with the Naval Air Warfare Center Weapons Division. Backed by a16z and other top-tier investors. Plans for continued high-tempo testing in 2026 with increasingly complex capability demonstrations.

---

## Robotics & Physical AI

---

### 22. BOT — RoboStrategy Inc (NASDAQ: BOT)

**Overview.** RoboStrategy Inc. (Nasdaq: BOT) listed on May 11, 2026. It's the first publicly traded closed-end fund designed to give retail and institutional investors access to private, pre-IPO, and public robotics and physical AI companies in a single stock. Think of it as a listed VC vehicle for the humanoid/physical AI wave.

**Structure.** Non-diversified closed-end management investment company. At least 13 portfolio companies, average investment size ~$7.2M per round. Holdings include Figure AI, Apptronik, Dyna Robotics, Standard Bots, Dexmate, and others across autonomous systems and the robotics supply chain. The fund gives public market investors access to names that are typically only available to venture capital.

**Why It's Interesting.** The humanoid robot space (Figure AI, 1X, Apptronik, etc.) is largely private and inaccessible to public investors. BOT is one of the only listed vehicles providing direct exposure without waiting for individual IPOs. It's essentially a bet on the physical AI / embodied intelligence theme as a basket. Key risk: NAV discount/premium volatility typical of closed-end funds, early-stage portfolio with no near-term profitability, and illiquid underlying positions.

---

### 23. Harmonic Drive Systems (TSE: 6324) — Japan

**Note on ticker.** The correct TSE ticker is **6324**, not 6342. Trades in Tokyo; OTC ADR ticker is HSYDF.

**Overview.** Harmonic Drive Systems manufactures precision control components — primarily strain wave gears (the "harmonic drive" mechanism), rotary and linear actuators, motors, sensors, and controllers. These components are critical in robotics, aerospace, semiconductor equipment, and e-mobility. Harmonic drive gears are the de facto standard in robot joints requiring high precision and zero backlash — virtually every industrial and humanoid robot arm uses them or equivalent technology.

**Financials.** Trailing 12-month revenue ~$381M (as of Sep 2025). Current price ~¥6,970 (+5.6% recent session). The company unveiled a 2026–2030 growth plan focused on AI robots, aerospace, and e-mobility. Near-term earnings are under pressure (profit slump noted) but management guided a strong rebound in FY2027 as humanoid robot demand ramps. Next earnings: Aug 11, 2026.

**Investment Thesis.** Pure-play picks-and-shovels bet on the humanoid robot wave — every robot that ships is a potential customer for precision actuators. Demand from Figure AI, Boston Dynamics, Unitree, and Chinese humanoid makers is a major growth vector. Valued at a premium to historical multiples; the stock is essentially pricing in a multi-year humanoid ramp. Key risk: customer concentration, Japanese yen dynamics, and competition from Chinese precision component makers.

---

## Technology Hardware

---

### 24. Dell Technologies — Trump Endorsement

**The Call.** On May 8, 2026, during a White House Mother's Day event, President Trump publicly urged Americans to "go out and buy a Dell computer" in a show of support for domestic tech manufacturing. The endorsement was accompanied by a Truth Social post and immediately sent shares surging — DELL hit an all-time record of $263.99 intraday (+14.6%), ultimately closing up ~12%. It was Dell's best weekly performance in over two years, with the stock gaining ~24% on the week.

**Background: The Dell–Trump Relationship.** The endorsement followed a $6.25 billion donation from Michael and Susan Dell to "Trump Accounts" — a federal wealth-building initiative for children — announced in December 2025. Michael Dell has re-entered the top 10 wealthiest Americans in 2026 partly on the back of the stock's run.

**Fundamentals Supporting the Move.** Beyond the political tailwind, Dell's AI business has been accelerating rapidly. AI-optimized server revenue surged 342% year-over-year in Q4 fiscal 2026, positioning Dell as a major beneficiary of the data center buildout cycle alongside names like VRT and VST. The Trump call served as a catalyst on top of an already improving fundamental picture.

**Key Risk.** The stock's move is partially sentiment-driven and could give back quickly if the political relationship sours or the broader AI capex cycle slows. The stock was already up significantly YTD before the endorsement, so valuation risk is real at current levels.

---

## Alternative Investments & Funds

---

### 25. Situational Awareness Fund (LP)

Founded by Leopold Aschenbrenner — ex-OpenAI Superalignment researcher, age 23 — and seeded by Nat Friedman, Daniel Gross, and Patrick & John Collison (Stripe founders). Started at ~$225M AUM; grew to ~$5.5B in U.S. equity exposure by Feb 2026 13F. The thesis is AGI-infrastructure: bet on the physical bottlenecks (power, compute capacity) rather than the model builders. Portfolio is concentrated (~24–30 positions) and heavy in power plays and Bitcoin miners pivoting to AI hosting — Bloom Energy (largest holding), Coherent, Tower Semi, SanDisk, Core Scientific, Riot Platforms, IREN, BitDeer, Hut 8, Applied Digital. Worth tracking 13F filings for positioning signals on the AI infrastructure theme.

---

### 26. Fundrise — Private Platform (Real Estate + Innovation Fund)

Fundrise is the largest direct-to-consumer private-alternatives platform in the US, founded in 2010 by brothers Ben and Dan Miller and headquartered in Washington, DC. The platform pioneered the "eREIT" wrapper to give non-accredited retail investors institutional-style access to private real estate, and has more recently expanded into private tech via the **Fundrise Innovation Fund** and into private credit via the **Fundrise Income Fund**. As of 2025–2026, total AUM has grown to roughly $3–4B across ~500K+ retail investors, with entry minimums as low as $10. Fundrise itself is **private — not publicly traded** — though it has periodically signaled interest in eventually going public.

#### Key Facts

| Item | Detail |
|---|---|
| Founded | 2010 |
| HQ | Washington, DC |
| Status | Private (not publicly listed) |
| AUM | ~$3–4B (verify latest) |
| Investor count | ~500K+ retail |
| Minimum investment | As low as $10 (Innovation Fund), $1k for some products |

#### Product Line

- **eREITs** — diversified private real estate (residential, commercial, industrial), the original product
- **eFunds** — single-asset or concentrated real estate funds
- **Fundrise Innovation Fund** — late-stage private tech, launched 2022; reported holdings have included Anthropic, Databricks, Canva, ServiceTitan, ScaleAI, and similar growth-stage names. Effectively a retail-accessible venture-growth fund.
- **Fundrise Income Fund** — private credit, real-estate-backed lending
- **IRA wrapper** — same products inside a retirement account

#### Why This Matters

Fundrise sits at the intersection of two retail-access trends: (1) **democratization of private real estate**, where Fundrise was first-mover and remains category leader vs. Cadre, RealtyMogul, and Yieldstreet; and (2) **democratization of late-stage venture**, where the Innovation Fund competes with ARK Venture (ARKVX), Linqto, EquityZen, and now the Robinhood Ventures product (see §27 below). Unlike most accredited-only platforms, Fundrise is open to **any retail investor at any income level**, which is the key structural differentiator.

#### Comparable Platforms

| Name | Ticker | Focus |
|---|---|---|
| ARK Venture Fund | ARKVX | Late-stage venture, retail-accessible interval fund |
| Forge Global | FRGE | Public broker-dealer for private secondaries |
| Yieldstreet | Private | Multi-asset alternatives, accredited focus |
| Cadre | Private | Commercial real estate, accredited |
| RealtyMogul | Private | Crowdfunded real estate |
| EquityZen / Linqto | Private | Accredited-only private secondaries |

---

### 27. Robinhood Venture Fund — Private-Market Access Product

Robinhood Markets (HOOD) has aggressively pushed into private-market and alternative-asset access for retail investors as a strategic complement to its public-market brokerage. "Robinhood Venture Fund" most plausibly refers to one of three related initiatives Robinhood has been building out:

- **Robinhood Ventures / private-company access** — a Gold-subscriber-tier program (announced 2024–2025) giving accredited and select retail customers exposure to late-stage private companies, similar in spirit to EquityZen, Forge, and Linqto.
- **Robinhood Strategies / managed alternatives sleeve** — launched March 2024, a managed-portfolio offering that can include alternative-asset sleeves alongside traditional ETFs.
- **A separate registered closed-end or interval fund** product, if HOOD has filed one with the SEC for broad retail distribution.

#### Why This Matters

Pre-IPO companies are staying private much longer than a decade ago — median age at IPO has roughly doubled since 2010, and the most valuable startups (OpenAI, SpaceX, Stripe, Anthropic, Databricks) regularly trade in private secondaries at $50B–$500B valuations before any public-market access. That means the bulk of value creation in late-stage tech now happens **before** retail can buy it. Robinhood, EquityZen, Forge Global (FRGE), Linqto, and ARK Venture Fund (ARKVX) are racing to package that access — through accredited-only secondaries, interval funds, and tokenized share wrappers.

#### Key Facts

| Item | Detail |
|---|---|
| Parent | Robinhood Markets (HOOD), Nasdaq listed |
| Product type | Late-stage private-company access (likely Gold subscriber tier) |
| Regulatory wrapper | Verify — could be interval fund, accredited-only feeder, or tokenized share product (notably the EU tokenized OpenAI / SpaceX shares launched 2025) |
| Comparable platforms | EquityZen, Forge Global (FRGE), Linqto, ARK Venture Fund (ARKVX) |
| Target customer | Retail (interval-fund route) or accredited (secondary-marketplace route) |

#### Comparable Products

| Ticker | Name | Structure |
|---|---|---|
| ARKVX | ARK Venture Fund | Interval fund, retail-accessible, holds private + public |
| FRGE | Forge Global | Public broker-dealer for private secondaries |
| HOOD | Robinhood Markets | The brokerage parent itself |
| — | EquityZen | Accredited-only private secondary marketplace |
| — | Linqto | Accredited-only private investment platform |

#### What to Pin Down Before Sizing Exposure

The exact structure and accessibility of "Robinhood Venture Fund" matters a lot for the investment thesis: a registered interval fund (any retail can buy, daily-NAV-ish) trades very differently from an accredited-only feeder or a non-US-only tokenized wrapper. Also worth checking: NAV transparency cadence (monthly vs. quarterly), redemption gates and fees, and whether the fund holds direct private positions vs. a fund-of-funds.

---

### 28. Moonvest ETF (MNVT) — Public ETF (Active, Creator-Led)

The Moonvest ETF (`MNVT`, listed on Nasdaq) is a newly-launched **actively managed, creator-led equity ETF** run by Alex G ([@AlexMoonvest](https://x.com/AlexMoonvest)) and co-founder Venkat ([@venkat4754](https://x.com/venkat4754)). It is the institutionalization of Alex G's personal investing strategy — multi-industry, multi-geography, multi-style — packaged into an ETF wrapper for US investors. The vehicle is high-risk / higher-potential-reward by the manager's own description, with a contrarian "fallen-but-fixable" stock-picking thesis at its core.

#### Strategy

The fund targets stocks with **asymmetric risk-reward profiles trading significantly below their 52-week highs**. The manager's stated edge is deep fundamental analysis to **distinguish temporary setbacks from structural headwinds** — i.e. catch the dislocations where the market has lumped a recoverable name in with the truly broken ones. In practice this is a contrarian / deep-value / "buy the drawdown" approach, applied across sectors and geographies rather than confined to a single thematic.

#### Why Launch as an ETF

The manager cited three reasons in the launch announcement:

1. **Simplicity** — direct, single-ticker access for investors who already align with the manager's style.
2. **Tax efficiency** — ETF in-kind redemption mechanism reduces capital-gains drag vs. trading in a taxable personal account.
3. **Transparency** — holdings and trades published with a **1-day lag**, plus daily returns. This is more transparent than typical quarterly 13F disclosure.

The manager has also publicly committed to investing a significant portion of personal portfolio into the fund (manager skin-in-the-game).

#### Key Facts

| Item | Detail |
|---|---|
| Ticker | MNVT |
| Exchange | Nasdaq |
| Structure | Actively managed equity ETF |
| Strategy | Contrarian / asymmetric upside, names well below 52-week highs |
| Disclosure | Holdings and trades on T+1 lag |
| Managers | Alex G (@AlexMoonvest), Venkat (@venkat4754) |
| Listed | 2026 (recent) |
| Distribution channel | Creator-driven via X and RedNote (Xiaohongshu) audience |

#### What This Fits Among (Creator-Led / Active Style ETFs)

| Ticker | Name | Style |
|---|---|---|
| ARKK / ARKQ / ARKW | ARK Innovation suite | Cathie Wood, high-conviction disruptive innovation |
| AVUV | Avantis US Small Cap Value | Systematic small-cap value |
| RPV | Invesco S&P 500 Pure Value | Rules-based deep value tilt |
| FALN | iShares Fallen Angels HY Bond | Fallen-angel concept, but in credit not equity |
| TWLV | Roundhill MAGS / similar manager-led actives | Active concentrated equity |

#### Investor-Lens Considerations

- **Creator-led product risk**: returns are tied to the manager's continued engagement and judgment. Key-person risk is real for single-manager active funds; succession is rarely defined.
- **Audience overlap with strategy**: RedNote distribution suggests a sizable Chinese-speaking retail following — flows can be momentum-y around the manager's social-media activity, which can amplify NAV/AUM volatility.
- **Drawdown-buying strategies have well-known failure modes**: catching falling knives in true structural declines (e.g. melting-ice-cube businesses, fraud, regulatory cliff). The "temporary setback vs. structural headwind" call is exactly where active managers earn or lose their fees.
- **Compare honestly to a passive value tilt**: the right benchmark is not the S&P 500 — it's RPV, IUSV, or AVUV. Beating large-cap passive doesn't validate the strategy; beating a value benchmark net of fees does.

---

### 29. Connie & Kelly — Pluscios Management

#### Identification

"Connie & Kelly" refers to **Constance (Connie) Teska** and **Kelly Chesney**, co-founders of **Pluscios Management LLC**, a boutique hedge fund-of-funds investment management firm based in **Evanston, Illinois**. The firm is **WBENC-certified** (Women's Business Enterprise National Council), making it a women-owned investment firm — a notable distinction in the hedge fund industry.

#### Background

Both founders previously worked at **JPMorgan**, where Connie served as President of JPMorgan Capital Management, the bank's hedge fund investment group managing both proprietary and client capital. She was a founding member of that group and ran it for nine years. Kelly also worked in JPMorgan's capital markets and alternatives functions. They left JPMorgan together in **2006** to found Pluscios.

Connie brings 30+ years of capital markets and alternative investing experience (including prior work as a lawyer structuring derivatives and fund vehicles). Kelly brings 25+ years in similar disciplines, serving as the firm's COO.

#### Strategy & AUM

Pluscios is a **hedge fund-of-funds** manager with a differentiated angle: rather than a traditional diversified FOF, the firm focuses on finding **niche, opportunistic, idiosyncratic managers** — often diversity-led and emerging managers — who offer differentiated return streams. Services include:

- Custom diversity-focused allocations
- Manager due diligence
- Diversified hedge fund-of-funds portfolios
- Advisory/consulting

Approximately **80% of the client base is institutional**. The most recent publicly available AUM figure (from 2017 SEC filings) was approximately **$216 million across 4 private funds**; current figures are not publicly disclosed. The firm is boutique-scale.

#### Notes on Limited Public Profile

Pluscios is a smaller, niche firm with limited media coverage. There are no notable recent press releases, 13F filings reflecting large public equity positions, or widely-reported flagship positions. The firm's edge is in manager selection and FOF construction rather than direct public market investing.

---

## Crypto & Derivatives

---

### 30. SpaceX USDT Perpetual Swap Contract

#### What It Is

A SpaceX USDT perpetual swap (also called a perpetual futures contract) is a crypto derivatives product that allows traders to gain synthetic price exposure to SpaceX — a private company with no public shares — without expiration date. These contracts track a reference price linked to SpaceX's secondary-market valuation (derived from private share tender offers and secondary trading platforms) and are settled in USDT (Tether). They are **not equity**: holders receive no shareholder rights, dividends, or ownership stake.

#### Which Exchanges Offer It

As of May 2026, multiple crypto exchanges have launched or announced SpaceX USDT perpetual futures:

- **OKX** — launched perpetual futures for SpaceX (alongside OpenAI and Anthropic) as of ~May 6, 2026, framing it as part of a "pre-IPO frenzy" of private company derivatives
- **MEXC** — lists SPACEX_USDT perpetual futures (ticker: `SPACEXUSDT`)
- **BTCC** — launched SPACEXUSDT perpetual futures with up to **50x leverage**, listed in its tokenized stocks section
- **Hotcoin** — announced SPACEXUSDT perpetual futures pre-market trading

#### How It Works / Margin & Funding Mechanics

- **No expiration:** Unlike traditional futures, perpetual contracts have no delivery date and can be held indefinitely
- **Funding rate mechanism:** Periodic payments (typically every 8 hours) flow between long and short holders to keep the contract price anchored near the reference/spot price. When longs are dominant (contract trades at premium), longs pay shorts; when shorts dominate, the reverse occurs
- **Collateral/margin:** Traders post USDT as margin; leverage up to 50x is available on some platforms (BTCC), meaning a 2% adverse move can trigger liquidation at max leverage
- **Reference price:** Derived from secondary-market SpaceX share trades and tender offer valuations — not a live public market price. A December 2025 tender offer valued SpaceX at ~**$800 billion**; some IPO speculation has floated valuations as high as **$1.75 trillion**

#### Risks & Notable Developments

- **Illiquid reference price:** SpaceX is private, so the underlying valuation anchor is thin and episodic, making pricing highly speculative
- **No regulatory clarity:** These products exist in a grey zone in many jurisdictions
- **IPO speculation:** Much of the contract's appeal is tied to bets on a SpaceX IPO — if an IPO is delayed or cancelled, the contract may lose catalysts
- **Counterparty risk:** These are exchange-native derivatives with no central clearing in most cases
- The trend of crypto exchanges packaging well-known private tech companies (SpaceX, OpenAI, Anthropic) into perpetual futures is accelerating as of early-to-mid 2026

---

## Unknown / Pending Verification

---

### 31. VCX — Ticker Verification Needed

The ticker `VCX` does not map cleanly to a high-profile name as of April 2026. A handful of possibilities exist and the right fit depends on context:

- **Recent IPO or small-cap listing** — 2024–2026 saw a flood of small-cap listings in quantum, AI infrastructure, biotech, and fintech; some used three-letter tickers like this.
- **SPAC or de-SPAC entity** — `VCX`-style tickers have been used by vehicles in commodity trading, EV, and aerospace sectors.
- **Non-US listing** — e.g. TSX Venture (`VCX.V`) is commonly used for junior resource or tech companies; could also be a London or HKEX listing.
- **Vivos Therapeutics, Vincerx Pharma, or similar small-cap healthcare** name — none of these uses `VCX` exactly but often gets confused.

#### What's Needed to Fill This Out

| Question | Helps Narrow Down |
|---|---|
| Where did the ticker come from? | News article, screener, friend's tip, etc. |
| What sector or theme? | Memory / AI / energy / healthcare / mining |
| US listing or international? | Determines ADR status and liquidity |
| Approximate market cap? | Distinguishes large-cap from speculative micro-cap |

Once any one of those is confirmed, this section can be filled out with the same Key Metrics / Stock Performance / Comparable Companies structure as the rest of the report.

---

### 32. Queued for Research

The following names have been flagged for follow-up research — bare tickers/names only at this stage, no write-up yet:

- **Towa**
- **SIVE (SIVEF)**
- **Cien**
- **CRDO**
- **AAOI**

*Queued May 16, 2026.*

---

tema space

ripple, blackrock tokenize

cognition and another competitor high school classmate in (check offering forge)

jbl stock

星迈创投，鲸准jingdata

---

***Disclaimer:** This report is for informational purposes only and does not constitute investment advice. Data sourced from public filings, news reports, and financial databases. Sources: April 14, 2026 · May 7, 2026 · May 8, 2026 · May 14, 2026. Verify all figures before making investment decisions.*
