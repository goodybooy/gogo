# Interview Prep

Very excited and looking forward to this meeting.

---

## Background

Graduated 3 years ago, in college I interned with geode capital and point 72 cubist both were in mid frequency stat arb alpha search for us and global equities. After I graduated the master's program from uchicago, I joined Pmc, now just over 3 years, where I spent the first year or so in portfolio analytics, working on the factor model, portfolio analysis tool. ( and tail risk modeling.

And for past two years began with credit and em desk on spread products, started with proprietary curve construction and leveaaged that to build the RV framework to quantify many discretionary basis trades into quantamental relative value strategies, and also built build screeners to model fair value, rich cheap, essentially dislocation.

Also spent time research and enhance new and existing systematics strategies in cdx and fx carry, and more recently with credit research on extending US corp bond fair value spread model into em quasi and corp bond space.

**Goal:** more risk opporutnities taking directly from signals, more ownership to explore different dataset, downstream execution side. (no control of fx spot or 1m forward)

many good relative value opportunities being overlooked due to people's favor of macro call vs RV and given fund size, scalability is really dominating a lot of decision-making processes, like many systematic strategies, mostly focused on traditional signals like carry while there's many other interesting things can be explored.

On the plus side cash is efficient, underweight to index is creating short avoiding high financing cost.

---

## Questions

Would you mind sharing what's the space or horizon you trade and what kind of data or news you follow? I would love to see what similarities I can draw from my experience and in general what's most relatable to your day-to-day decision making process.

In your experience of working with all kinds of people, what characteristics or traits you typically find successful for this role or for your team

I've learned the acquisition, what are some things to completent what DCI had already been doing

---

## em cdx trend

- strategy on weekly horizon
- Beta timing, long short depends on direction and strength of momentum signal
- smoothing out noise of by referencing peer momentum (embig/bond curve, gbiem, hy cdx)
- been liking it for its convex return profile, negative correlation (active portfolio, benchmark ) slight positive skew
- Served as timing signal highlighting key technical levels where the momentum sign may flip.
- Had an occurrence on April this year the em cdx spread rallied 10+ bps on one day and pm has seen flip level very accessible and decided to get position before hand which worked out (discretionary trade as a call option overlay)
- Signal band filter of 5bp (x times tcost) to avoid trading noise/minimum days observation to confirm/incremental position sizing
- 1% pmv for ~7~8bps vol which is about 10% of tracking error, target is 2.5% pmv for 15bp standalone vol. Trade cost 3,5bp
- Vol target sizing vs sizing by cvar (max drawdown), max loss x bps, drawdown 1.5*vol.

### Statistical tests:

1. Auto correlation change, find it correlated time series return and also use this to infer moving average observation window
   1. Tried both index spread and return in measuring momentum, roughly similar. (spread, account for the roll-effect)
2. Backtest different moving windows and perfect one wouldn't exist and vary overtime, so for robustness we've used average of a few observation windows
3. Initially smoothing was done by observing similar momentum measure for comparable indices such as gbiem, embig, hycdx

Main challenge of the problem rises from it signal jump choppy market doesn't show a clear and strong direction, it's not solvable by extending observation window: Introduce a pca regim filter to further avoid the signal from flipping side on false positive. Momentum signal is only valid when there's underlying driving forces collectively goes into same position. The idea is to run pca on underlying constituent cds and related indices. Filter when the number of significant pc is large or % variance explained pass threshold, because the trend is strongest when driven by a massive, systemic macro factors versus idiosyncratic (asset-specific) drivers.

### Pca regim

1. Underlying cds, comparable indices to the basket
   1. Kaiser criterion, elbow rule, % variance explained by threshold
2. Number of significant PC is low, momentum collapse and turn into reversal
3. Pc1: risk on/risk off, pc2: hy-ig, pc3: region/style

### Observation

Sustained Macro Cycles, dollar tightening, money flow into DM, EM tightening since last year.
V-Shaped Recoveries. Covid, Trump ceasefire

Absorption Ratio, which measures the fraction of total variance explained by a fixed, small number of eigenvectors (e.g., the top 3). When the absorption ratio spikes, markets are tightly coupled, and your momentum signal is statistically safe to follow.

Future: cross sectional underlying em cdx constituents (subject to jump to default risk) and combine carr/cdx cash basis

---

## FX carry

DM FXC running both DM and EM fx, descent size (100b+) with trend filter

Main challenge, would be the difference between DM FX and EM FX, behave differently, research was done on how to capture this difference
EM only version: credit adjusted, skew instead of trend
Em fx yield isn't risk-free like DM, two layer
DM slightl positive correlation with yield (ie. rate differensial) (chasing risk free and higher yield), EM opposite

```
EM Carry = true risk-free em rate + risk premium
```

- one is true em risk free which isn't really observable
- one is (sovereign) credit risk component (large component of nominal yield)

different ways to strip out the credit layer: cds, beta to embig credit spread index, sovereign bond oas

### Statistical tests:

- tested which works well in correlation (fx spot return vs yield, vs spread level, credit adjusted yield)
- skew third moment of return instead of trend which works better with EM fx for it's jumpy and high vol nature. Negative correlation to strategy/trend signal

### DM:

1. Excluding EM currency with >50% correlation with DM
2. Low vol (managed fx)
3. Carry/carry-vol/carry momentum (rolling smoothing)
4. Trend filter shrink signal to 0 if against (ewma Z-score)
5. Optimizer maximizing signal/turnover penalty and beta neutral, pmv limits

### EM:

1. Credit adjusted carry signal ranking (beta*cds, beta*curve oas)
2. Skew filter (0 out for large positive return skew) (sensitive to hyperparameter due to fewer observation than trend)
3. Dollar neutral sizing(scale down to smaller of l/s) / equal vol sizing (risk neural)

### Observations:

- Similarities, ZAR replaced by INR (elevated sovereign risk), same long : TRY, MXN, COP, BRL
- Short: CZK, CNH, KRW (funding currencies)
- Carry itself is negatie skew
- Carry blow up in 2008, CHF, JPY
- 2021 low yield low carry environment (size down)
- Beta neutral not tail neutral
- During covid, 2022 are the time credit adjusted stood out.
- Muted for current year, pillot trade for discretionary execution
- 200bps vol, 12.5bps sizing for 25bp vol

EM FX Sensitment overlay: inflow/outflow, COT positioning, EM VXY(FX Vol), RSI

---

## FVS

It's equity implied DD (merton model)
Extending DM model into EM space,

0. Use curve oas than bucket based
1. Ratio adjustment for tenor/rating based bucket (front end, lower rating are adjusted higher) (1.2~1.6) (DM_FVS/EM_OAS)
2. DM look at cross sectional, relative rich cheap between issuers, where EM tries to look at DD Histories betting on mean reversion of credit profile as issuers experience more cyclical impacts (em commodities)

a. 1st lien bond from multi-layer companies + unsecured bonds from single layer companies. if debt < $85 use market value, otherwise use notional
b. Fit regression
c. Use regression to backout unsecured for multi-layer companies Because the unsecured bond from a multi-tier company trades wider than an unsecured bond from a comparable single-tier company. Backout is weighted
d. use fitted regression to get log(oas) ~ dd: oas percentage change per dd
e. percentage cheapness oas - fvs / fvs

A. Compute Cushion/equity vol, marketCap/(marketCap + debt) 1Y ATM Equity option vol for equity vol, if no option, then use RV and approximate IV by ratio

compared this with textbook implementation of calibrate Asset Vol and DD, and usage of enterprise value (market cap+ liability)with equity vol is better

### observations:

- Some bond remain cheap/rich, change is more important than level. Structural cheapness (given DD, HY outperform IG, secured bond outperform unsecured)
- Larger companies are trading tighter (smaller OAS) than small companies given DD
- HY bonds are trading wider than IG bonds given DD
- DD has higher R2 to OAS than fundamental metrics such as ebita, net leverage, revenue growth...
- Private company vol, provided by analyst, mimic public comp, basket comp, private financial sheet volatility.
- CapIQ for balance sheet data
- Pro forma cap table in case for m&a buy out
- negative convexity, at small DD, OAS blow up.
- small size penalty
- backtest oas limit, sensitive to parameters
- fin, capital plan, regulator's policy
- holdco/op co, op co safer (LTV doesn't mean riskier, financial companies, )
- non-banking financial: scale adjust
- utility, opco-holdco, regulated revenut etc
- usage: cross compare with analyst rating, portfolio deviation, rich/cheap by fvs, optimization signal

HY: more supply, sign of improving credit profile, tighten, different to EM sovereign supply shock.

---

## Credit Ideas

Trace/Market Access RFQ (electronic trading venue)

**credit structural alpha:**

- high spread low BBB- bond vs IG aged bonds (opportunitistics, compensate for low liquidity)
- low CCC and below underperform (opposit to BBB- in IG outperform)
- index inclusion/exclusion effec
- earning announcement (estimize)
- equity put signal to credit DD has ATM vol as a input, easily to compute skew (25Delta).

* Given DD, company with more negative skewness should get compensated with higher spread.
* Or signal can be from price space to volume space (Put vs Call open intersts/total interests) discretionary overlay for tender/downgrade risk rebalance credit portfolio after big rates/equity move. signal persist up to a month.
* macro traders who trade bond based on macro properties, rates exposure, (no alpha selection) RV traders who trades company profiles. Many credit investors are total return motiviated hence still caring about rates.

front end credit has extreme left tail in crisis, front end name selection better pair with defensive factors, equity momentum/quality factors (DD, leverage(LTV), profitability, cashflows) to avoid picking for left tail
LTV work better in HY than IG

- !!! recent issued bond more reflective of market sentiment (buy volumne - sell volume)
- !!!! front end credit has extreme left tail in crisis, front end name selection better pair with defensive factors, equity momentum/quality factors (DD, leverage(LTV), profitability, free cashflows) to avoid picking for left tail LTV work better in HY than IG
- SPY account for CDX 50% Vol.
- !!!! DD doesn't align with existing rating, trade where it's DD implies
- !!!! mix DD model with analyst

CDS over Cash has been cash efficient and better return. During stress periods, CDS can sell off very quickly (high insurance buying demand) careful duration hedge, bond choice, hedge ratio when including bond basket (3-7y) against CDS, which may imply curve trade.

---

## EMSA

**1:** synthetic long-EUR / short-USD curve based credit portfolio where every non-basis risk is hedged away. What's left should be a single P&L stream driven by:

- Basis carry — you're paid a spread pickup for holding the (wider, less liquid) EUR leg vs the USD leg.
- Basis roll-down — the EUR and USD spread curves have different slopes, so the two legs roll down at different rates.
- Basis mark-to-market — EUR OAS − USD OAS moving over the holding period.

Pairing is at the issuer (ticker) curve level, match on tenor points 2,3,5,7,10 (curve carry/rolldown, and mark to market)
spread duration neutral, or best to do DTS (eur oas wider)
indiviual bonds hard to match maturity, etc, hence for baseline purpose, curve is ok.
after issuer level, aggregate by country equal, issuer equal weight or index weight

- **1a:** carry/rolldown, z-score based ou process/basis momentum (technical cross-setional approach)
- **1b:** dislocation of the curves, for region, rating, (quasi, corp) sector, or customized bucket (oil importer, exporter) (outlier detect, ML maybe?) (RV cross-sectional)
- **1b':** residual basis: remove beta to xccy_eur_usd (FV approach, more timing like K's quasi)

**2.** portfolio, each tenor, pick the "on the run" bond, and hedge spread duration using the counterparty, and hedge residual duration using duration at the matching tenor or fx for usd eur hedge
weekly/monthly rebalance, t-cost in traded notional usd 3~5 bps for sov.

for each week/month t:

```
universe = refresh_index_members(t, min_size, min_mat, tradable)
curves = fit_oas_curves(universe, t)
nodes = read_basis_nodes(curves, [2,3,5,7,10]) # basis, SD, KRD, MV
signal = baseline=1 | z_ou(nodes) | dislocation_rank(nodes)
book = size_DTS_neutral(nodes, signal, vol_target)
```

issuer:
way1, every bond find the matching
way2, tenor on-the run bond find the matching

sizing:
eur/usd: sprd_dur neutral, may not be notional neutral (less eur needed as eur has more sprd_Dur)
hedge residual using tsy/fx can use factor for rate, pnl a bit too neuanced
aggregate issuers the way earlier mentioned

```
hedges = {bund: krd_eur, ust: krd_usd, fx_fwd: mv_eur}
book = apply_no_trade_band(book, prev_book)
pnl = realize_pnl(book, hedges, t→t+1) # carry+roll+MtM+xccy from curve
pnl -= tcost(turnover, eur_bidask, usd_bidask) from actual cusips
store(pnl, attribution, hedge_residual)
```

report: SR(passive vs active), attribution, turnover, skew, DD, SPX-corr, hedge-residual regression, region/rating split, capacity

factor approach (ideally to go with residualized basis to strip away beta for the signals that takes basis magnitude)
way1: factor only, way2: factor x basis (prefer large basis)

### EUR-USD Bond Basis

issuance
new issue imbalance (upcoming vs outstanding), surprise
issuance acceleartion
EPFR EUR vs USD fund mandate flow
illiquidity, TRACE data, local FX impact

Quasi
	rating uplift trajectory, rating momentum
	sovereign linkage, beta to sovereign

cds
	new issue, issuance calendar, rebalance weight change,
	supply shock: issuance/outsanding

Corp
oas based

**for demo**
	quntile, proportional to signal (ranked signal, raw signal)
	ranked signal: convert to percentile, z score, and inverse normal (geo)
	raw signal: deman first, then signal / sum |signal_demaned|

**for actual:**

1. equal weight within TE budget (then simply need to figure out long vs short)
2. scale proportional to signal and index weight
instead of raw signal deman, take raw_signal * index_weight then demean then multiply with vol to get TE_raw, and use TE_target/TE_raw to get scaler, and times this scalar with that signal
3. scale proportional to signal regardless of index weight (allocate the 100bps tracking error)
(either rank based or numerical raw signal) raw_signal/vol, demean, treat as weight' and dot with vol to get TE_raw, get scaler k = TE_target/TE_raw. final weight = k*weight'

rank based signal means equal distance between any cusip, if convert rank to inverse-normal, means gap follow normal distribution, or use APT to follow outright raw signal
look up issuer's weight in index, can ignore it and only focus on tracking error contribution (which then goes back to the signal agnostic portfolio)

1. index with quasi names, underweight the short leg, and overweight the long leg, and sprd_dur netural
2. index without quasi name, only sovereign, uw sovereign, long the quasi name

demo: quintile long short (equal weight for issuer, then to index weight)

quasi vs sov time series ret/1y mws

Refinitive - bond issuance Debt Management Office

Sizing by cvar
Survivorship bias
Tcost measuring by sharp/return gave up

relative value trades being a big portion in the portfolio construction, to complement discretionary trades such outright duration call, this was our effort to enhance to the decision making process by quantify and properly track and model the structural premiums in a quantamental way, Many of the structural alpha trades were extended from US credit desk's framework. Think of in equity space we've seen implied vol > realized vol for most of the time and in equity, similarly there's many long short basis opportunities in em bond space.

---

## Quasi vs Sov

quasi - sov + UST residual duration

1. simple equal weight by country/issuer of quasi vs sovereign to evaluate market structural premimum
2. cta type reversal, momentum crossover, basis momentum, ou half life. Rich cheap
   1. Front end/belly/backend momentum
3. screening, cheap to neighbor, sector, rating, tenor bucket

**Regression based fair value:**

1. peer basis (different quasi type)
2. fx vol
3. uplift to baseline rating vs standalone
4. ticker rating vs sovereign

sprdDur/mws neutral vs pmv neutral
Quasi own factors (operation, government regulation, fiscal burden)

---

## EUR vs USD

EUR EM bond — long USD EM bond — short (same issuer, matched tenor) France/German government bond — hedge EUR duration US Treasury — hedge USD duration

**fair value:**

1. peer basis
2. eur_usd xccy basis
3. 1y1y_usd - 1y1y_eur
4. Eurusd fx vol

hard to short EUR, EUR are at tight
often pmv neutral, eur bond has more sprd_dur than usd (more risk)

---

## CDS vs Cash

Positive basis (sweet entry point) , Buy CDS (sell insurance) - Bond + UST (dur)

Event based:
new issue (refinitive calendar), month end, corp event (us case)
Index rebalance

**fair value:**

1. corp/quasi basis (buy cds as a proxy hedge) push CDS wider when quasi is selling off
2. fx vol
3. Hedging demand

Cash generator, negative correlation, positive skew
Front end: jump to default risk

---

## ASW

Em bond + IRW + FX Hedge (3~5y focus)
long bond pay fixed (short) swap for carry

**Fair value:**
carry momentum, funding carry
Beta to rates level
Dm swap spread correlation (lagged)
fx vol
onshore offshore fx basis (different market participant for onshore bond vs offshore swap)

Cash consumer
No bond future in em, bond future price ~ bond price - carry + basis. Segmented market
Cash bond buyers (local banks, insurance, pension funds, sovereign wealth funds)
IRS (foreign banks, hedge funds)

Bond's positive convexity (convexity mismatch)
China structural negative (huge demand onshore and money being regulated)

---

## PortM

Kologorov Arnold Network – neural network, instead of a fixed weight to input, it actually a function form very helpful to capture non-linearity between factors.
<https://www.reddit.com/r/MachineLearning/comments/1jyz2vg/d_what_happened_to_kans_kolmogorovarnold_networks/>

Brazil Rates vs USD Rates, if compute a beta, it's almost zero, with the neuralnet work with addition input Brazil CDS, it captures than when CDS is high >300bps, negative correlation between Brl and USD rates shows rather than positive correlation

Rates and Credit tend to have negative correlation, but when Breakevens are high (>3%), they showing positive correlation, 2022

Used for market positioning, hedging efficiency (backtest R2)

Spread log normality with floor
Rate factor normal > 100bps, lognormal below 100
100bps/yr dur for 10y

### Analysis:

	CVAR tool (natually extended from stress test)
Historical TE (adjustment level ratio for log normal factors), how would portfolio perform in certain historical episode (historical correlation matrix) (4y sprd dur risk today adjusted by oas level ratio)
	TE by Exposure change, vol change, interaction term (total – exposure – vol)
		Correlation, weight x vol cross effect
Trade efficiency, basket of trades to express beta, higher carry/vol, efficiency
	Hedge ratio across different regim (scenario anlaysis)
Down beta, up beta, (to reveal assymetry skewness)
	New trade standalone, marginal vol contribute, beta, correlation to existing trade
	Strategy correlation,
 Standalone/marginal
	By country/risk factor (Rate, credit, EM dur, securitized, fx )

	Factor model > covariance matrix
Can use factor exposure and factor to approximate covariance matrix and portfolio instead of using the full say 5000+ stocks, + many of them won't have full history. And factor model allows many analysis (decomposition etc)

### Signal Halflife:

IC (signal, Ret_t+1), (signal, Ret_t+2)， check when decay/signal halflife
Signal autocorrelation
If you find that the IC drops off a cliff at week 4, you know that keeping a position open for 2 months is destroying your Sharpe ratio.
Alpha Decay
Rolling PNL vs backtest, tcost consumption, correlation breakdown…
Scenario analysis (backtest vs live trading)

---

## MarketComments

Asia credit has high demand recently, recent UST sell of are creating lots of entry point, front end and belly, not so much in the back end for high beta to rates sell off, when stabalize, real money continue compress high quality IG spreads.
Asia quasi issuers recent issue with some premium offered to investor, pay up for meaningful funding
Hy SPACE, Indo commodity names policy uncertainty, supply concern not doing well. Vedanta outperform

IG tight around 50 (10-year average of ~130bps), yield 5.22%
High supply, outpace demand, 2 T issuance MA financing (Paramont on Wanerbro), large cloud AI capex
Easing bias on hold, inflation convern (middle east oil price) 3.5~3.75
HY around 300 ($108), EM 158. Very tight, recent 1 year >90percnetile
Front end strong demand. (basis momentum, front end vs backend)

---

## Day

Morning by colleagues from NY or London and quick request on portfolios strategy vol, , or model runs or output questions (model support discretionary trades). More or less on operation side where I check first if large scale communicate with tech team.

Email checks on desk activity, market comments communication.

Time for some research, coding before morning collaborative meetings with other team, maybe on new time series on boarding or new securities getting priced with pricing team, or new enhancement on trading tools. Before after lunch. Desk requests also comes along, some bulk private placement trade, quick check on yield pickup versus public bond more like desk quant roles in asset managers.

Rest of the time on research more long term project or some research paper reading.

Colleague work in optimization (separated managed mandates/accounts), buy and hold investors, book yield, rating, sector restrictions (was able to contribute with my curve calibration for the expected alpha part (rich cheap) into optimization) mixed integer quadratic optimization.
Another one in local rates product.
