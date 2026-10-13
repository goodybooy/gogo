Very excited and looking forward to this meeting. 

Graduated college about three years ago, during college, internships exposure was on mid frequency equities. After I finish my master program from uchicago, I joined Pimco now close to 4 years, where I spent the first year in portfolio analytics, working on the portfolio related modeling such as factor models, risk/return decomposition 

And then I began working closely with trade desk, a fraction of my time I work with discretionary pms to perform analysis and modeling on market patterns to help systemaize relative values trades 

by building mostly mean reversion based models and monitors to flag market dislocation and surface potential trades to pm and traders to take. 

Also help with the portfolio management on risk aspect, exante basis (trades correlation, stress scenario as well as (dispersion)) asset allocation type analysis for separated managed account. 

Then I focus more on systematic side, project in swap spread, curve, cdx momentum and fx carries, and more recently working with credit team on indices and single names work focus on monetization of signal and portfolio constuction. 

###### Why move 

I definitely enjoyed time here with broad exposure of fixed income space and the opportunity to experience both the technical and business aspect of the portfolios management. It’s been over three years, have been noticed systematic approach isn’t that recognized in a top down driven institution. So i thought of to start conversations at the current point with some experience looking for a more dynamic team with opportunities for more ownership to bring things end to end and making an impact. 

###### Q&A 

In your experience, what characteristics or traits you typically find successful for this role or for your team 

How does the investment process look like in terms of reserach work into production line 

IAC in macro space 

How would you think macro fixed income would eveloe in coming years, in terms of opportunity for systematic approaches 

AI streamlined automate lots of scheduled batch jobs, monitors, dashboard 

Unconstructed text into features (avoid look ahead, model are build afterwards) Code reivew, pipeline optimization 

Hypothesis and prior why it works 

Data, distribution check, completeness, outliers (look a head bias) 

Analysis, scatter plots,factor vs forward return, R2, quntile monotonicity, autocorrelation to imply halflife and predictive power degradation 

Signal Construction, preprocess (winsorize, z-score inverse normal), resid to beta, smoothing 

Portfolio Backtest 

(check Sys too) 

## cdx trend 

Out of respect, I'll keep the implementation details light and focus on the methodology and approach 

It's a long short beta timing strategy on weekly horizon as a defensive sleeve with its positive convexity profile added to the portfolio 

###### Hypothesis: 

HY: equity price news faster while CDX lags, (equity vol propagate to credit spread with a lag) 

DM HY Beta timing takes a more complex approaching considering bottom up fair value using default probability model/merton model 

EM: highly driven by dealer balance sheet persists over days to weeks, real money manager shock takes weeks to absorb 

Momentum compensating for vol, bearing crash risk. The strategy earns steadily during trends and loses sharply during reversals 

###### Data: 

return and spread of hy cdx, em cdx, and embig total return, embig spread return 

###### Analysis: 

Autocorrelation (spread return vs total return) 

Log - Spread only, because carry component is naturally correlated (return based inflate results) 

1w, 2w, 4w, 8w, 13w, 26w. Looking for a plateau, not a peak. (for degration and holding period inference) for both x and y to get past x weeks change predict future x weeks 

Contamination check. If EM momentum is really HY momentum arriving late, that's the finding. Regress EM returns on lagged HY 

###### **Signal Construction** 

Signal = average percentage (spread) return over (1m,2m,3m) moving average for basket of indices (em cdx, hy cdx, embig spread) (robust) 

###### **Characteristics and Observations** 

Slight positive skew (trend with positive skew offset carry negative skew) 

Negative correlated to em indices 

Mechanical convex (scatter plot strategy return vs index return) 

Long vol mechanically 

Defensive, diversifier during drawdown positive in 2008, 2011, 2015-16, 2020, 2022 

One of the big challenge of the problem is the signal is jump during choppy markets, extending observation window will just smooth out both noise and signal: Introduce a pca regim filter, our prior is that momentum signal is strongest when there’s underlying driving forces collectively goes into same position. The idea is to run pca on underlying constituent cds and related indices, fx. Signal filter when the number of significant pc is large or % variance explained pass threshold, because the trend is strongest when driven by a massive, possibly by systemic macro factors versus idiosyncratic (asset-specific) drivers. 

###### **PCA Gated Enhance** 

underlying cds (or bring related indices into pca instead) 

- 1.kaiser criterion, 2. elbow rule, 

- 3.% variance explained threshold. 

When number of PCs is low, momentum collapses and turns into reversal, when number of PCs is high, returns are strong 

pc1: risk-on, risk-off, pc2: hy-ig, pc3: region/sector(oil import export) vs correlation, PCA tells more information, such as the pc interpretations 

signal name CDX may not be liquid 

是因为市场有"惯性"（自相关），还是因为资产有长期方向（漂移） 



<!-- Start of picture text -->
XI NEED PES (Oi ry) , BABES:<br>Elvari] = Cov(ri-1,71) +<br>Bax tatt RB<br><!-- End of picture text -->

IG is flow drive (supply demand, buy pressure, mean revert), HY is equity driven Upfront=(par_sprd − coupon)×RPV01 

Limit: single asset time series, SR doesn’t benefit from taking many trades. Rebalance 8-12times peryear, that’s 8-12independent prediction only 

Other than PCA can also use averagepairwise correlation 

Index weighted average pairwise correlation, average will average away if extreme cluster with low ones 

Cross-asset (if include fx) pca is better because it checks for any combination (capture interaction) 



<!-- Start of picture text -->
n<br>m=_ Typ<br>‘approaches 1/ as n grows large. For al<br><!-- End of picture text -->

###### **Future** 

Binary to incremental, decide notional scale to meet target vol first, then notional scale * conviction (-1, 1) 

Capped Z score signal for strength, z-score/2 to get conviction, at most 1 which is binary 100% long. 

Continuous PCA filter(rather than filter on/off) 

------------------------------------------------------------------ 

Served as timing signal highlighting key technical levels where the momentum sign may flip. 

Had an occurrence on April this year the em cdx spread rallied 10+ bps on one day and pm has seen flip level very accessible and decided to get position before hand which worked out (discretionary trade as a call option overlay) 

Signal band filter of 5bp (x times tcost) to avoid trading noise/minimum days observation to confirm/incremental position sizing 

1% pmv for ~7~8bps  vol which is about 10% of tracking error, target is 2.5% pmv for 15bp standalone vol. Trade cost 3,5bp 

Vol target sizing vs sizing by cvar (max drawdown), max loss x bps, drawdown 1.5*vol. 

###### Statistical tests: 

1. Auto correlation change, find it correlated time series return and also use this to infer moving average observation window 

   - a. Tried both index spread and return in measuring momentum, roughly similar. (spread, account for the roll-effect) 

2. Backtest different moving windows and perfect one wouldn’t exist and vary overtime, so for robustness we’ve used average of a few observation windows 

3. Initially smoothing was done by observing similar momentum measure for comparable indices such as gbiem, embig, hycdx 

###### Observation 

Sustained Macro Cycles, dollar tightening, money flow into DM, EM tightening since last year. 

V-Shaped Recoveries. Covid, Trump ceasefire 

Absorption Ratio, which measures the fraction of total variance explained by a fixed, small number of eigenvectors (e.g., the top 3). When the absorption ratio spikes, markets are tightly coupled, and your momentum signal is statistically safe to follow. 

Future: cross sectional underlying em cdx constituents (subject to jump to default risk) and combine carr/cdx cash basis 

## FX carry 

This strategy is an alternative version to the DM FX focused one, for DM FX, carry return is mostly associated with **yield differential** , however, when we focus more EM FX, yield isn’t entirely risk-free like DM, so the hypothesis is that for EM FX, THE sovereign risk is large component of nominal yields, exploit the true carry return, need to strip out credit component 

And major enhancements is that people has been looking at momentum filter in carry trades, to downsize when against the trend, we actually looked at skew, the third moment of return, to capture risk premia at extreme moves with elevated vols. 

###### Hypothesis 

###### High Level Current Implementation 

- Long-short, dollar-neutral, equity-beta-neutral, DXY-beta-bounded 

- Vol-targeted, weekly rebalance, ~1-month forward implementation 

- Carry signal augmented with momentum filter (and optional value/PPP overlay) 

###### Analysis 

First establish premium exist, in DM, beta ~0.5 means FX doesn’t depreciate from higher implied yield, while beta for em much higher, means depreciate more than yield bring (fx change_depreciation) ~ beta*implied yield 

Regression, see how much credit explain implied yield (if implied yield does embed credit risk), time series and cross sectional 

(fx spot return vs yield, vs spread level, credit adjusted yield) 

different ways to strip out the credit layer 

cds, beta to embig credit spread index, sovereign bond oas 

- Quintile portfolio 

1 day lagged return to account for different closing time zone 

###### Signal Construction 

FX implied yield – CDX 

FX implied yield –curve OAS 

FX implied yield – beta of the previous 2 

Level vs change 

###### Portfolio 

###### Preprocess 

DM correlation filter — 5y rolling weekly correlation to each of 10 DM currencies, take average; exclude when avg corr > 0.5. Hysteresis ±0.05 around the threshold. 

Vol filter — EWM 66d HL, vs both EUR and USD; exclude if annualized vol < 1% vs both. Catches pegs and heavily managed currencies. (DM) 

Min universe size — at least 12 currencies on any date; if the filters are too aggressive, fall back to the 12 lowest avg-DM-correlation names. (DM) 

Signal 

Rank carry signal, top % -> 1, bottom % ->-1 else 0, or continuous rank and Z-score (inverse normal) 

# <mark>Filter (Trend DM, Skew, Sentiment EM) ee</mark> modifies raw signal 

EM FX Sensitment: inflow/outflow, COT positioning, EM VXY(FX Vol), RSI 

Skew, not many observations, sensitive to hyperparameter 

Winsorize (not much for rank signal, but for z-score based signal) 

Demean (APT with column of 1, intercept is doing the same thing) 

Linear: 

1. APT [1, beta duration, beta spy] 

2. Compute vol under raw weight, then scale to target vol 

3. Can include t-cost, but need to have signal in return space in order to be comparable 

4. PMV limit on single asset can only be clipped 

Optimizer Quadratic Optimization (CVXPY, Groubi) 



<!-- Start of picture text -->
Alpha a; = IC X oye¢ x sft! x 252<br><!-- End of picture text -->



<!-- Start of picture text -->
max a/w — || ~ wpe 2<br>trade buffer (don't trade small size)<br>like a t-cost style in objective<br><!-- End of picture text -->



<!-- Start of picture text -->
subject to<br>w'Zw <a portfolio vol < 1.5%<br>Y; !wi| < 0.60 gross PMV avoid multicgllinearity blowupeye<br>|X; w;| < 0.20 net PMV or 0 to be neutralhard  butlimitto riskinfeasibility,avoid book blowup _  can try 0.05<br>Brow =0 equity neutral<br>|8sppxy w| < 0.025 DXY beta<br>-Lj < w; < Lj Le {6%, 6%, 4.5%, 3%} by liquidity tier or single name pmv limi<br>|w; — Wprey,i| < 0.01 turnover cap per ccy<br><!-- End of picture text -->

Covar is short term vol + long term correlation 

Optimizer vs Linear (linear sequence is more clear while optimizer can do many constraint but unstable/blackbox) 

In theory real carry should work better than nominal; in practice nominal works better. 

Observations: 

Similarities, ZAR replaced by INR (elevated sovereign risk), same long : TRY, MXN, COP, BRL 

Short: CZK, CNH, KRW (funding currencies) 

Carry itself is negatie skew 

Carry blow up in 2008, CHF, JPY 

2013 taper tantrum and 2015-2016 lift from 0 policy rate 

2021 low yield low carry environment (size down) 

Beta neutral not tail neutral 

During covid, 2022 are the time credit adjusted stood out. 

Muted for current year, pillot trade for discretionary execution 

200bps vol, 12.5bps sizing for 25bp vol 

------------ 

###### G10 + EM FX 

Higher-yielding currencies outperform lower-yielding ones over time when sized appropriately and conditioned on a benign environment. Capture by going long high-carry, short low-carry currencies. 

Prior 

The parity conditions. CIP holds by arbitrage: (1+ is) = R/S, *(1+i¢) . UIP is the testable claim that FL = E,[S:+x] — the unbiasedness hypothesis. If UIP held, the interest pickup would be exactly offset by spot depreciation and carry would earn nothing. 

Why UIP fails: 

- Volatility swamps the signal — spot is far more volatile than interest differentials, 

- Frictions prevent enforcement — conversion costs, capital flow restrictions, dealer balance-sheet constraints; particularly binding in EM where capital controls and NDF/DF segmentation create persistent wedges 

- Risk premium — carry compensates for beta to risk assets; it blows up in risk-off, which is the compensation structure 

- Value in disguise (Balassa-Samuelson) — high-rate economies often have high productivity growth, so currencies appreciate in real terms 

DM FXC running both DM and EM fx, descent size (100b+) with trend filter 

###### DM: 

1. Excluding EM currency with >50% correlation with DM 

2. Low vol (managed fx) 

3. Carry/carry-vol/carry momentum (rolling smoothing) 

4. Trend filter shrink signal to 0 if against (ewma Z-score) 

5. Optimizer maximizing signal/turnover penalty and beta neutral, pmv limits 

###### EM: 

1. Credit adjusted carry signal ranking (beta*cds, beta*curve oas) 

2. Skew filter (0 out for large positive return skew) (sensitive to hyperparameter due to fewer observation than trend) 

3. Dollar neutral sizing(scale down to smaller of l/s) / equal vol sizing (risk neural) 

## Credit 

This has been a very recent focus on monetization of IG and HY credit signals for example value from default model like merton, event-driven, mean reversion signals (excess spread to peers) in broader universe like asia hard currency corp and quasi credit. 

One highlight would be the portfolio construction, value signals at the end of the day are long cheap bonds and sell rich bonds, however, empirically, this would contain some credit beta although forming a DTS neutral portfolio and show biases by long high oas bonds as high oas bonds tend to be cheap and tight oas bonds tend to be rich. as a result, portfolio would have oas exposure biases. One example would be for bonds in boundaries of two oas bucket, it could go from cheapest to richest just because sell off moved to a higher oas bucket. So we’ve studies a new method that’s based on dynamic ranking based on neighbors, without the fixed bucket rule, and as a results, we are able to preserve the original signal and return with much less turnover and reduced beta and bias exposure. 

Regress on OAS (residualize), buckets with overlap 

Another study was done on the credit curve trades, discretionary pms and systematic mean reversion signals likes to express mini curve trades, for example a 3year 5year or 7year 10year these mini curve trades to pickup carry/rolldown as an RV expression. However, because there’s not that many issuance for 3 year or 7 year, very often people are trading aged bonds against a new issued one, so the trade is not just pure curve risk, but embeds a liquidity premium for aged bonds. We’ve done analysis trying to show that aged bond embeds liquidity premium, which is actually another bias value signal expose to. So a portion of turnover is attributed to rebalance on bond oas moves from liquidity, after study it could well be just another component of return like carry/rolldown that no need extra turnover for. 

There’s follow up studies on new issued bond behaviors and like many signal that actually work well for new issues but not aged bonds, likely driven by different investors base in new issue vs aged illiquid bonds. 

#### Credit Ideas 

Trace/Market Access RFQ (electronic trading venue) All to All 

credit structural alpha: 

high spread low BBB- bond vs IG aged bonds (opportunitistics, compensate for low liquidity) 

low CCC and below underperform (opposit to BBB- in IG outperform) 

index inclusion/exclusion effec 

earning announcement (estimize) 

equity put signal to credit DD has ATM vol as a input, easily to compute skew (25Delta). 

- Given DD, company with more negative skewness should get compensated with higher spread. 

- Or signal can be from price space to volume space (Put vs Call open intersts/total interests) discretionary overlay for tender/downgrade risk rebalance credit portfolio after big rates/equity move. signal persist up to a month. 

macro traders who trade bond based on macro properties, rates exposure, (no alpha selection) RV traders who trades company profiles. Many credit investors are total return motiviated hence still caring about rates. 

front end credit has extreme left tail in crisis, front end name selection better pair with defensive factors, equity momentum/quality factors (DD, leverage(LTV), profitability, cashflows) to avoid picking for left tail 

LTV work better in HY than IG 

!!! recent issued bond more reflective of market sentiment (buy volumne - sell volume) 

SPY account for CDX 50% Vol. 

!!!! DD doesn't align with existing rating, trade where it's DD implies 

!!!! mix DD model with analyst 

CDS over Cash has been cash efficient and better return. During stress periods, CDS can sell off very quickly (high insurance buying demand) careful duration hedge, bond choice, hedge ratio when including bond basket (3-7y) against CDS, which may imply curve trade. 

## FVS 

Extending DM model into EM space, 

0. Use curve oas than bucket based 

1. Scaler adjustment for tenor/rating bucket (front end, lower rating adjusted higher ln(oas) ~ a*DD + b*sov_oas + c*ln(mktcap) 1.2~1.6x 

FVS regression OAS ~ DD or residual to OAS/MktCap,same slope, different intercept -> pool fitting with shift/scale, if relationship differs -> fit separately 

FVS final = FVS_dd + adjusmtnet(size,oas) 

2. DM look at cross sectional, EM tried to look at DD Hist beeting on cyclical mean reversion of credit profile issuers given more volatile (commodity cycle). 

backtest oas limit, sensitive to parameters 

isotonic regression to avoid jumps/idio event for time series observation 

Steps 



<!-- Start of picture text -->
a. 1st lien bond from multi-layer companies + unsecured bonds from single layer companies.<br>if debt < $85 use market value, otherwise use notional<br>b. Fit regression<br>size weighted if FVS residual ~market_cap/sov_oas is pharallel shift, then just do 2<br>step FVS final=FVSDD+AdjustmentSize, where adjustment size can be a regression of<br>residual to log*(market cap), if residual ~ market_cap/sov_oas regression not the same<br>shape, then separate the two groups<br>c. Use regression to backout unsecured for multi-layer companies<br>Because the unsecured bond from a multi-tier company trades wider than an unsecured bond from<br>a comparable single-tier company. Backout is weighted<br>d. use fitted regression to get log(oas) ~ dd: oas percentage change per dd<br>e. percentage cheapness oas - fvs / fvs<br><!-- End of picture text -->

A. Compute Cushion/equity vol, marketCap/(marketCap + debt) 1Y ATM Equity option vol for equity vol, if no option, then use RV and approximate IV by ratio 

compared this with textbook implementation of calibrate Asset Vol and DD, and usage of enterprise value (market cap+ liability)with IV equity vol is better 

###### KMV 



<!-- Start of picture text -->
E=V, N(d) — De? N(do)<br>here<br>=<br>dy In(V4/D)AIP + FOF(r+ $2 0 AT%)T yy ov T<br>COAVT<br>his is one equation with two unknowns (V4 and o4), so KMV adds a second<br>quation linking equity volatility to asset volatility. Because equity is a function of<br>ssets, It6's lemma gives the relationship between their volatilities:<br>V.<br>of= a N(di)oa<br><!-- End of picture text -->

Default point (near term debt + ½ long term debt) vs total debt 

Expected Default Frequency empirical (rising EDF doesn’t mean firm is fundamentally weak because broad market selloff, equity price crash, is in the model input and can be driving DD) 

EDF 1Y forward vs Merton debt maturity (5y etc) 

###### observations: 

Some bond remain cheap/rich, change is more important than level. Structural cheapness (given DD, HY outperform IG, secured bond outperform unsecured) 

Larger companies are trading tighter (smaller OAS) than small companies given DD 

HY bonds are trading wider than IG bonds given DD 

DD has higher R2 to OAS than fundamental metrics such as ebita, net leverage, revenue growth... 

Private company vol, provided by analyst, mimic public comp, basket comp, private financial sheet volatility. 

CapIQ for balance sheet data 

Pro forma cap table in case for m&a buy out negative convexity, at small DD, OAS blow up. 

small size penalty 

fin, capital plan, regulator's policy 

holdco/op co, op co safer (LTV doesn't mean riskier, financial companies, ) 

non-banking financial: scale adjust 

utility, opco-holdco, regulated revenut etc 

usage: cross compare with analyst rating, portfolio deviation, rich/cheap by fvs, optimization signal 

HY bond: more supply, sign of improving credit profile, tighten, different to EM sovereign supply shock. 

FVS - suits (wiki Relative Value Cheapness - @1 Overview and Architecture) cash bond cheapness by rating/maturity equity-implied cheapness sector-level scenario analysis cross-currency and steepness trade ideas (DX index cheapness via two distinct regression approaches single-bond cheapness history 

###### Optimize 

setup gurobi translation infeasibility conflict, relax constraint, nearest feasible solution compliance, cardinality (mixed integer constaint) Trade Gen Minimum trade sizes Lot sizes Rounding requirements Dealer inventory considerations 

FVS Port 

quintile to first test, then optimization (port consturction (~smbta em), rebalance, constraint(customized, buy&hold book yield)) 

rich/cheap vs peer group (1) PIMCO FVS DD and (2) where no FVS DD coverage, ESP (Excess Spreads over Peers - Rating x Maturity x Sector Level 3) cheapness boost with analyst agreement Local Model: we calibrate EUR bonds within the EUR Universe only Global Model: EUR and USD together, embeds idio (EUR vs EUR peer) + structural (EUR vs USD) approximated by using Local_FVS_cheapness(i) = Global_FVS_cheapness(i) - Median (Global_FVS_cheapness(k), k € {EUR bonds}) XCCY pair arbitrage: OAS USD ~ OAS EUR + XCCY Basis, compare OAS diff (relative mispricing) 

icontraint: 

mws = @, dwe = @ concentration limit sector ticker weight to index PMV liugidity score curve constraint within 5% of index distressed names price < 50, oas > 1000 (pmv limit) 

Things to care during backtest alpha per year position vs baseline model 

Variants 

Baseline: 

FVS cheapness Excess Spread over Peer Analyst rating shift/override cheapness 

Panel Model Cheapness — sector-level, equity-scenario-conditioned 

The anchor moves from issuer to sector-level fair value, and crucially adds 5 SPX scenarios (Soft Landing +20%, Overheating +10%, Hard Landing -10%, Stagflation -20%). Formulation intuition: fair spread for a sector is modeled as a function of equity level, so: Cheapspanel (SPX)=OASs-FVS*s(SPX scenario) \text{Cheap}*{\text{panel}}_{s}(\text{SPX}) = \text{OAS}_s - \widehat{\text{FVS}} s(\text{SPX scenario})Cheapspanel(SPX) =0ASS-FVSs(SPX scenario) Why it adds power / when it wins: the base Merton FVS is current-state. Panel model tells you how cheapness reprices under equity regimes — it's a conditional/stress signal. It dominates when you care about robustness of the RV to a macro move rather than the point estimate. In a Hard Landing, a bond that looks cheap now may be rich once you condition on SPX -10%. This is orthogonal to base FVS in the scenario dimension — it prices the beta of cheapness to equities, which the static model ignores. 

CDX Bottom Up 

roll-down adjusted cheapness of CDX/Cash basis 

CheapCDX=raw basis(CDX spread-Cash spread)+roll-down adjustment(rollcash-rol1CDXx) 

(concern this is relative measure to its own cdx, rather than a common baseline (like the fvs)) 

(On the side, one way to do fair value for CDX is to aggregate up bond's FVS than OAS) 



<!-- Start of picture text -->
CUSIP-Level Cheapness — the time-series (self) anchor<br>bond's own history — OAS, FVS, cheapness IG/HY plotted over time for a single<br>identifier<br>Cheapits(t)=OASi(t)-FVSi(t),judged vs its own past range\text{Cheap}*{\text{ts}}i(t)<br>= \text{OAS}i(t) - \text{FvS} i(t), \quad \text{judged vs its own past range}<br>Cheapits(t)=OASi(t)-FVSi(t),judged vs its own past range<br>Why it complements the cross-section: the base score is cross-sectional (“cheap vs<br>peers now"). This is time-series ("cheap vs its own normal”). A bond can be<br>cross-sectionally cheap but time-series rich (its whole cohort widened) or vice<br>versa. When it wins: for a single-name entry/exit timing decision — the<br>cross-sectional model says which bonds, the time-series view says when. It's also<br>your reversion/half-life sanity check at the name level.<br><!-- End of picture text -->

## EMSA 

It’s a synthetic series try to quantify risk premia in relative value trades, for example swap spread, curve basket, cdx-cash basis, dollar eur bond basis, quasi basis. 

For example, the benchmark version, it’s naively for example long Eur bond vs Dollar bond, spread duration, fx hedged, mostly used to evaluate discreiontary trade performance, then we add mean reversion and carry component to them, for example, what if it’s a relatively straight forward strategy to maximize carry and picking cheap ones vs peer. Then we try to do some regression based fair value model for example includes a few feature variables and see the outliers from residual. 

Half life stop loss 

Attribution and access distribution (tail risk, or negative correlated with portfolio) 

1: synthetic long-EUR / short-USD curve based credit portfolio where every non-basis risk is hedged away. What's left should be a single P&L stream driven by: 

Basis carry — you're paid a spread pickup for holding the (wider, less liquid) EUR leg vs the USD leg. 

Basis roll-down — the EUR and USD spread curves have different slopes, so the two legs roll down at different rates. 

Basis mark-to-market — EUR OAS − USD OAS moving over the holding period. 

#### Curve based 

Pairing is at the issuer (ticker) curve level, match on tenor points 2,3,5,7,10 (curve carry/rolldown, and mark to market) 

spread duration neutral, or best to do DTS (eur oas wider) indiviual bonds hard to match maturity, etc, hence for baseline purpose, curve is ok. 

after issuer level, aggregate by country equal, issuer equal weight or index weight 

**1a:** carry/rolldown, z-score based ou process/basis momentum (technical cross-setional approach) 

**1b:** dislocation of the curves, for region, rating, (quasi, corp) sector, or customized bucket (oil importer, exporter) (outlier detect, ML maybe?) (RV cross-sectional) **1b':** residual basis: remove beta to xccy_eur_usd (FV approach, more timing like K's quasi) 

#### Portfolio Based 

portfolio, each tenor, pick the "on the run" bond, and hedge spread duration using the counterparty, and hedge residual duration using duration at the matching tenor or fx for usd eur hedge 

monthly rebalance, t-cost in traded notional usd 3~5 bps for sov. for each week/month t: 

universe = refresh_index_members(t, min_size, min_mat, tradable) curves = fit_oas_curves(universe, t) nodes = read_basis_nodes(curves, [2,3,5,7,10]) # basis, SD, KRD, MV signal = baseline=1 | z_ou(nodes) | dislocation_rank(nodes) book = size_DTS_neutral(nodes, signal, vol_target) 

issuer: way1, every bond find the matching way2, tenor on-the run bond find the matching 

Sizing: 

eur/usd: sprd_dur neutral, may not be notional neutral (less eur needed as eur has more sprd_Dur) 

hedge residual using tsy/fx can use factor for rate, pnl a bit too neuanced aggregate issuers the way earlier mentioned 

hedges = {bund: krd_eur, ust: krd_usd, fx_fwd: mv_eur} book = apply_no_trade_band(book, prev_book) pnl = realize_pnl(book, hedges, t→t+1) # carry+roll+MtM+xccy from curve pnl -= tcost(turnover, eur_bidask, usd_bidask) from actual cusips store(pnl, attribution, hedge_residual) report: SR(passive vs active), attribution, turnover, skew, DD, SPX-corr, hedge-residual regression, region/rating split, capacity 

#### FV Residual 

(ideally to go with residualized basis to strip away beta for the signals that takes basis magnitude) way1: factor only, way2: factor x basis (prefer large basis) 

###### EUR-USD Bond Basis 

issuance new issue imbalance (upcoming vs outstanding), surprise issuance acceleartion EPFR EUR vs USD fund mandate flow illiquidity, TRACE data, local FX impact 

###### Quasi 

rating uplift trajectory, rating momentum sovereign linkage, beta to sovereign 

CDS 

new issue, issuance calendar, rebalance weight change, supply shock: issuance/outsanding 

###### **Swap Spread (dm trades invoice spread)** 

carry momentum, skew (cross-sectional) 

Basket to maximize Carry, mean reversion, neutral to major market factors 

Carry measure: dm: secular downardd trend in swap spread, libor transition (stale fall back spread, libor more credit/liquidity), CTD/wild card option on futures 

###### Empirical duration beta, hedging 

Asia domestic bank, government buybacks (bond yield < swap) 

###### **Curve** 

Direction: value (simple rule based policy cycle unemployment/inflation rate)/Analyst (execution overlay) 

Carry 

mean reversion 1.time series level, 2. DM/EM curve spread 

hiking cycle correlation, EM lead hike, lags easing 

7s30s for dm, avoid 2s fed influence, 10s mortgages, 20s messy/premium 

Cross sectional (curve neutral) + time series (curve exposure) 

**Swap** (macro momentum, economic fundamentals) 

###### **EM FX ELECTION** 

###### **DM Rates: MonthEnd, Large Corp Bond Issuance** 

for demo 

quntile, proportional to signal (ranked signal, raw signal) ranked signal: convert to percentile, z score, and inverse normal (geo) raw signal: deman first, then signal / sum |signal_demaned| 

for actual: 

1.equal weight within TE budget (then simply need to figure out long vs short) 

2.scale proportional to signal and index weight 

instead of raw signal deman, take raw_signal * index_weight then demean then multiply with vol to get TE_raw, and use TE_target/TE_raw to get scaler, and times this scalar with that signal 

3.scale proportional to signal regardless of index weight (allocate the 100bps tracking error) 

(either rank based or numerical raw signal) raw_signal/vol, 

demean, treat as weight' and dot with vol to get TE_raw 

get scaler k = TE_target/TE_raw. final weight = k*weight' rank based signal means equal distance between any cusip, if convert rank to inverse-normal, means gap follow normal distribution, or use APT to follow outright raw signal 

look up issuer's weight in index, can ignore it and only focus on tracking error contribution (which then goes back to the signal agnostic portfolio) 

1. index with quasi names, underweight the short leg, and overweight the long leg, and sprd_dur netural 

2. index without quasi name, only sovereign, uw sovereign, long the quasi name demo: quintile long short (equal weight for issuer, then to index weight) 

quasi vs sov time series ret/1y mws 

Refinitive - bond issuance Debt Management Office 

Sizing by cvar 

Survivorship bias 

Tcost measuring by sharp/return gave up 

Cash consumer 

No bond future in em, bond future price ~ bond price - carry + basis. Segmented market Cash bond buyers (local banks, insurance, pension funds, sovereign wealth funds) IRS (foreign banks, hedge funds) 

Bond’s positive convexity (convexity mismatch) 

China structural negative (huge demand onshore and money being regulated) 

## PortM 

Kolmogorov Arnold Network – neural network, unlike neutral networks that more of a blackbox of fixed activation functions, it uses learnable univariate functions, spline, and aggregate them together to fit, then it search among common function forms to map to be interpretable functions, it’ been very helpful to to capture non-linearity between factors. 

<u>https://www.reddit.com/r/MachineLearning/comments/1jyz2vg/d_what_happened_to_ka ns_kolmogorovarnold_networks/</u> 

Brazil Local Rates vs USD Rates, if compute a beta from regression, it’s almost zero, with the KAN approach, we add an additional input Brazil CDS, it captures than when CDS is high >300bps, negative correlation between Brl and USD rates more like a risky asset, when CDS is tight, it’s been more positive correlation back to risk free rate. 

Rates and Credit tend to have negative correlation, but when Breakevens are high (>3%), under high inflation concerns they showing positive correlation like we see in 2022 

Used for market positioning, hedging efficiency (backtest R2) 

Spread log normality with floor 

Rate factor normal > 100bps, lognormal below 100 

100bps/yr dur for 10y 

Mathematical factor model vs empirical (equity， crosssectional then time series) R = carry + rolldown - krd * rate_chg - sprd_dur * sprd_chg 

FI 

Factor > Asset  which may expose to common/overlapping risk 

For assets with limited histories, construct exposure matrix 

Various analysis, te decomposition, stress/scenario perform under different market environments 

TE/Factor exposure breakdown (credit/rates/country) 

Rates (key rate, curve) 

Credit(Bond, cds) contribution by sector, oas bucket 

Commodities Marginal Vol contribution (position, covar, interaction) 

exante-vol, index beta vs ex-post/attribution (beta, single name) CVaR(additive vs nonaddivie var)/Tail Risk 

###### Historical TE 

Draw down/Scenario Analysis (factor shocks to see non-linearity) 

Country Concentration TE/single name dispersion liquidity profile 

Competitor beta, vol, drawdown comparison (open position) 

crowdness 

Ad hoc: 

correlation/vol difference scenario, hedge ratio 

best duration expression from carry perspective, (bond, swap, fx, neighbor country) dispersion across similar mandates (due to different constraints) 



<!-- Start of picture text -->
Within portfolio, how concentraded<br>cr= SthP}<br>(X24)<br>x; = oj\wi|<br>zi = |wi|.<br>(1/CR is effective positions)<br>Competitor analysis<br>Average pairwise correlation<br>Cosine similarity on position, on factor loading (all loads on oil beta)<br>Stocks within factor, value, low vol, momentum etc, measure average pairwise<br>correlation for the stocks within the factor group to see if the factor is crowded<br>Some factor forward return positive/negative depends on if crowded or not<br><!-- End of picture text -->



<!-- Start of picture text -->
_ Vig (iwi) (ojwy) pij<br>BVT<br>{ty 3 DigsSS (Gi |wi|)(oj|w;|) cn<br><!-- End of picture text -->



<!-- Start of picture text -->
mean of the (3) off-diagonal entries in the correlation<br><!-- End of picture text -->

matrix 



<!-- Start of picture text -->
1. popularity: check what factor are people loading up to Compute and sum<br>up factor loading for each factor among M managers From holding, each<br>bond/stock has a beta loading to the factor, loading * weight<br>Factor Aggregate Exposure<br>Value 25<br>Momentum 18<br>Carry 70<br>Quality 15<br>Size 12<br>Result:<br>Carry is the factor everybody is trading.<br>2. Crowdness,<br>a. cosine similarity on holding to get if people are corwded in holding<br>b. average pairwise correlation for stocks within that factor<br>i. equal weight, manager holding weight, my portfolio weight, so measure<br>will be relevant tomy<br><!-- End of picture text -->



<!-- Start of picture text -->
V, = (wo + Aw)! (Zp + AZ) (wo + Aw)<br>CO TT<br>(wo + Aw)'Zo(wo + Aw) = wh Lowy + woLpAw + Aw’Zpwy + Aw’DpAw<br>V, = wiLpwy + 2w,LpAw + Aw'DpAw + wiAL wo + 2uj,A¥ Aw + Aw'AY Aw<br>—=——_a _Ce<br>AV = 2w)jDpAw + Aw’DpAw + wp AE wo + 2wpALD Aw + Aw'AYD Aw<br>ee<br>position risk model interaction<br><!-- End of picture text -->



<!-- Start of picture text -->
V= ff +w'D.w<br>~~  o_<br>factor idio<br>AV= 2fj%Af + fpAQfyo +2wh}DoAw + whAD wo + interactions<br>—— —— — ——"<br>exposure change —_ factor vol/corr change idio position idio vol change<br><!-- End of picture text -->

Vol change decomposition 



<!-- Start of picture text -->
r, = Beh, + &<br>Beta factor loading on factor F<br>a-b=|al * |b] « cos()<br>to test independent or not, can only use dot product/cosine, to measure, 0<br>correlation doesn’t guarantee independent<br>vector space<br>neB'p,' = 0. pure noise;<br>Buy orthogonal alpha to factor<br>Pab= >> Pal;<br>o<br>=Yowin<br>7<br>= owasa + 7 wi (Be,) + SO7  wie<br>= 7 via + DO7  win + bike7  + So7  wiee<br>~ factor tilt Pn<br>+ idiosyncratic tilt Pal.<br>+ factor timing Pn<br>+ idiosyncratic timing Pal,<br><!-- End of picture text -->

Sys 

###### data preprocess 

outliers, log transformation, check distribution 

stats analysis 

duration/spread_duration neutral excess return contemporanous expanatory power 

stats test 

IC rolling cross sectional (like fama)  (spearman, pearman) auto correlation R2, t-stats 

signal decay (R2/tstat drop, IC drop), infer rebalance period (platue than peak) Quantile/Monotonicity is DD adding things new, fama style regression against or together with leverage, 

profitability etc 

does DD survive after control OAS level 

###### backtest: 

cheapness to DD 

point-in-time inputs (no look-ahead in equity vol / balance sheet data) survivor ship bias (bonds kicked out of index) 

z-score accidently used future info 

each bond z score cheapness 

1. winsorize z score (proportional to z score), 

2. rank based z score then inverse normal(symmetric, no tail version) DD is about Maginitude, so winsorize is preferred、 

robust z-score minus median instead of mean 

sector, rating neutral 

subtract sector mean (regression one hot encoding) 

smoothing signal (reduce turnover) 

###### construction 

rank/quintile (equal distance between #1 and #2 vs normal dis) 

Proportional 

inverse ranked percentile to z score 

optimizer (duration, mws neutral, dollar neutral if long short, pmv caps, tcost/turnover penalty, short term vol vs 1y long term horizon) 

report pre- and post-cost Sharpe, skew, drawdown, IR, hit rate, max DD, factor betas 

robustness check, choice of hyperparameters 

Sharp 1 everywhere better than final sharp 1.5 

Drop top days 

signal combine 

(standardize, equal weight, IC weighted, MVO optimal weight, orthognal weight (residual)) 

###### post analysis/portfolio risk 

decompose realized P&L into: DD-level, ΔDD, residual-vs-OAS, and leftover. If most P&L is coming from the residual-vs-spread leg 

bottom up portfolio would like to see vol coming mostly from residual, than dur, sprd_dur, 

sector/rating/country exposure or credit beta 

concentration ratio - effective position 



<!-- Start of picture text -->
CR= EAELiz?<br>xj = o;\w;<br><!-- End of picture text -->

average pairwise correlation (<0.3 good)- effective bets 



<!-- Start of picture text -->
r= —2 Sy<br>NN-)D >A j=l> ny<br><!-- End of picture text -->



<!-- Start of picture text -->
Eij(oiw:)(ow3)<br>5 Zeid EWING) Pi<br>% Viz; (ailwil)(o;|w;\)<br><!-- End of picture text -->

signal decay 

transfer coefficient ex-ante, ex-pos (lost from constaint + execution) realized vs assumed t-cost (variable funding, t-cost, stress period) 

slippage (execution, TRACE) 

time series signal R2 (alpha decay (scenario)) 

DD residual half life 

Crowding 

credit: carry, value(DD), momentum, quality/defensive(leverage, profitability), size, low 

(spread vol) 

credit beta (sprd_dur, sensitivity), liquidity, curve, rating (fallen angel) 

IR = IC X *sqrt(breadth)*TC(transfer coefficient) 

factor volatility and residual volatility 

tail risk 

jump to default 

residual correlation converge in stress scenarios (cvar, tail risk that factor model doesn't capture) 

thru stresstest/factor shocks see portfolio lienarity or not 

###### scalability 

alpha - turnover*cost/AUM 

alpha 5%, but turnover at 800% with 25bp per 100% turnover doesn't leave much left 

attribution decompostion, if top 10% name account for 80% alpha, may not be very scalable, 

among these, liquid or illiquid names 

bring signal to simple equal weight, see if results decay linearly with no jump Stresstest slippage assumption to back out max scale doable by alpha 

### Data structures worth knowing cold 

|Structure|Usewhen|Keyops|
|---|---|---|
|Hashmap/ set|Lookup,dedup,counting,complements|O(1) avg|
|Array+twopointers|Sortedinput, pairs, in-place|O(n)|
|Stack|Nesting,"previoussmaller/greater”,undo|O(1)push/pop|
|Monotonicstack|Nextgreaterelement,histogramproblems|O(n) total|
|Deque|Slidingwindowmax/min|O(1)bothends|
|Heap|Top-k,streaming median,mergek lists|O(logn)|
|Union-Find|Connectivity,cycledetection,Kruskal|~O(1)amortized|
|Trie|Prefixsearch,wordproblems|O(len)|
|Binarytree/BST|Hierarchies,ordereddata|O(h)|
|Graph(adjlist)|Anythingrelational|=|





<!-- Start of picture text -->
Patterns — this is what actually gets tested<br>Two pointers. Opposite ends for sorted-array pairs, container-with-most-water, 3Sum. Same<br>direction for removing duplicates and partitioning.<br>Sliding window. Fixed or variable size. The variable version — expand right, contract left<br>while a condition is violated — covers "longest substring with at most k distinct," "minimum<br>window substring." and most string problems.<br>Binary search. Not just on sorted arrays. Binary search on the answer is the medium-level<br>trick: "minimum capacity to ship in D days," "split array largest sum." You're searching over<br>the answer space and usinga feasibility check as the predicate.<br>BFS / DFS on grids and graphs. Islands, rotting oranges, course schedule. BFS for shortest<br>path in unweighted graphs, DFS for connectivity and cycle detection.<br>Topological sort. Course Schedule I and II. Kahn's algorithm (BFS with in-degrees) is easier<br>to write correctly than the DFS version.<br>Dynamic programming. The medium set is mostly:<br>« 1D:house robber, coin change, longest increasing subsequence, word break<br>« 2D:unique paths, edit distance, longest common subsequence, 0/1 knapsack<br>« Theskill is defining the state, not the recurrence<br>Backtracking. Permutations, combinations, subsets, N-queens, word search. One template<br>covers nearly all of them.<br>Intervals. Merge, insert, non-overlapping. Sort by start (or end, for greedy scheduling) and<br>sweep.<br>Prefix sums. Subarray sum equals k, range queries. Combine with a hash map for the count<br>version.<br>Heap for top-k. K closest points, kth largest, mergek sorted lists.<br>Fast/slow pointers. Cycle detection in linked1 \ finding the middle, Floyd's algorithm.<br><!-- End of picture text -->

----------- 

Analysis: 

CVAR tool (natually extended from stress test) 

Historical TE (adjustment level ratio for log normal factors), how would portfolio perform in certain historical episode (historical correlation matrix) (4y sprd dur risk today adjusted by oas level ratio) 

TE by Exposure change, vol change, interaction term (total – exposure – vol) 

Correlation, weight x vol cross effect 

Trade efficiency, basket of trades to express beta, higher carry/vol, efficiency 

Hedge ratio across different regim (scenario anlaysis) 

Down beta, up beta, (to reveal assymetry skewness) 

New trade standalone, marginal vol contribute, beta, correlation to existing trade Strategy correlation, 

Standalone/marginal 

By country/risk factor (Rate, credit, EM dur, securitized, fx ) 

Factor model > covariance matrix 

Can use factor exposure and factor to approximate covariance matrix and portfolio instead of using the full say 5000+ stocks, + many of them won’t have full history. And factor model allows many analysis (decomposition etc) 

Signal Halflife: 

IC (signal, Ret_t+1), (signal, Ret_t+2)， check when decay/signal halflife Signal autocorrelation 

If you find that the IC drops off a cliff at week 4, you know that keeping a position open for 2 months is destroying your Sharpe ratio. 

Alpha Decay 

Rolling PNL vs backtest, tcost consumption, correlation breakdown… 

Scenario analysis (backtest vs live trading) 

2 Mathematical Proofs 8. DailyDoseofDS.com of Ordinary Least Squares ~ 

Objective: Find 0, such that : y = X0 Shapes: y—(n,1) X (n,m) 0- (m,1) 



<!-- Start of picture text -->
Proof #1 Proof #2<br>1) Linear Regression Equation: 1) Minimize Squared Error:<br>_<br>2<br>y= X0 L = |ly — X6l|<br>2) We cannot invert X to get 0 2) Split the squared norm into 2 terms<br>g6=x! T<br>wi<br>...this is because X may noty be square. L=(y—.. Pa X60)" (y—Tr X86)r<br>Hence, non-invertible. =vyy-y X0—(X8)'y + (X60) XO<br>3) Multiple both sides of (1) by X7 3) Minimize by differentiating w.r.t 0<br>XXXTy=XTxoT T | |, and then solve for 0<br>4) Invert is  X7X  square. Hence, invertible*. Wo = -2XxTy + 2x7 x0<br>FP VE 4) Set the derivative to zero<br>9=(X°X)X y | _axTy+exTxe=0<br>rearrange...<br>XTXO=XTy<br>5) Invert X7X<br>*In case of perfect multicollinearity, this won't be invertible. YIULY).VIVLY:<br><!-- End of picture text -->

## MarketComments 

Asia credit has high demand recently, recent UST sell of are creating lots of entry point, front end and belly, not so much in the back end for high beta to rates sell off, when stabalize, real money continue compress high quality IG spreads. 

Asia quasi issuers recent issue with some premium offered to investor, pay up for meaningful funding 

Hy SPACE, Indo commodity names policy uncertainty, supply concern not doing well. Vedanta outperform 

IG tight around 50 (10-year average of ~130bps), yield 5.22% 

High supply, outpace demand, 2 T issuance MA financing (Paramont on Wanerbro), large cloud AI capex 

Easing bias on hold, inflation convern (middle east oil price) 3.5~3.75 

HY around 300 ($108), EM 158.  Very tight, recent 1 year >90percnetile 

Front end strong demand. (basis momentum, front end vs backend) 

Day 

Morning by colleagues from NY or London and quick request on portfolios strategy vol, , or model runs or output questions (model support discretionary trades). More or less on operation side where I check first if large scale communicate with tech team. 

Email checks on desk activity, market comments communication. 

Time for some research, coding before morning collaborative meetings with other team, maybe on new time series on boarding or new securities getting priced with pricing team, or new enhancement on trading tools.  Before after lunch. Desk requests also comes along, some bulk private placement trade, quick check on yield pickup versus public bond more like desk quant roles in asset managers. 

Rest of the time on research more long term project or some research paper reading. 

Colleague work in optimization (separated managed mandates/accounts), buy and hold investors, book yield, rating, sector restrictions (was able to contribute with my curve calibration for the expected alpha part (rich cheap) into optimization) mixed integer quadratic optimization. 

Another one in local rates product. 



<!-- Start of picture text -->
AeA, MADURA<br>Xt MEN aRRS (Gila m1) , BBKESE:<br>E[re1<br>ri] = —_—_S>|_Cov(ri1,Bax tattSS"71) + RBSw?<br>ARRAS, MBSXRSAA.<br>RIBASRS IEAATRED: PERRK, SABOTAGE. DOWMMTASRR<br>Nee-HSSTas. RANE. firheAR.<br>BSI RSN: RATHERSK, WAUWEASALE, (RARE<br>AS, FSRITES. (SXEORARAEER, MASSA<br>K. EXIM AE.<br>‘ASSIA Lo-MacKinlay 5: BMA#+ SVB Ae+<br>RSs. BoeSe" —jZv Awa,<br>RSp 7 BARBSSia V<br><!-- End of picture text -->

relative value trades being a big portion in the portfolio construction, to complement discretionary trades such outright duration call, this was our effort to enhance to the decision making process by quantify and properly track and model the structural premiums in a quantamental way, Many of the structural alpha trades were extended from US credit desk’s framework. Think of in equity space we’ve seen implied vol > realized vol for most of the time and in equity, similarly there’s many long short basis opportunities in em bond space. 

###### Quasi vs Sov 

quasi - sov + UST residual duration 

1. simple equal weight by country/issuer of quasi vs sovereign to evaluate market structural premimum 

2. cta type reversal, momentum crossover, basis momentum, ou half life. Rich cheap 

   1. Front end/belly/backend momentum 

3. screening, cheap to neighbor, sector, rating, tenor bucket 

Regression based fair value: 

1. peer basis (different quasi type) 

2. fx vol 

3. uplift to baseline rating vs standalone 

4. ticker rating vs sovereign 

sprdDur/mws neutral vs pmv neutral 

Quasi own factors (operation, government regulation, fiscal burden) 

EUR vs USD 

EUR EM bond — long USD EM bond — short (same issuer, matched tenor) France/German government bond — hedge EUR duration US Treasury — hedge USD duration 

fair value: 

1. peer basis 

2. eur_usd xccy basis 

3. 1y1y_usd - 1y1y_eur 

4. Eurusd fx vol 

hard to short EUR, EUR are at tight 

often pmv neutral, eur bond has more sprd_dur than usd (more risk) 

###### CDS vs Cash 

Positive basis (sweet entry point) , Buy CDS (sell insurance) - Bond + UST (dur) 

Event based: 

new issue (refinitive calendar), month end, corp event (us case) 

Index rebalance 

fair value: 

1. corp/quasi basis (buy cds as a proxy hedge) push CDS wider when quasi is selling off 

2. fx vol 

3. Hedging demand 

Cash generator, negative correlation, positive skew 

Front end: jump to default risk 

###### ASW 

Em bond + IRW + FX Hedge (3~5y focus) 

long bond pay fixed (short) swap for carry 

Fair value: 

carry momentum, funding carry 

Beta to rates level 

Dm swap spread correlation (lagged) 

fx vol 

onshore offshore fx basis (different market participant for onshore bond vs offshore swap) 

<u>https://www.schroders.com/en/nordics/professional/insights/schroder-gaia-two-sigma-di versified-a-diverse-investment-approach-where-we-combine-human-oversight-with-syst ematic-investment/</u> 

###### Career, education decisions 

In my undergrad studied stats and computer science, have done a few research experience during my undergrad, in biolab, in a summer research program at UCLA, sort of seeing which space I can apply skills into. During my first internship with Geode capital, I found it particular interesting with quantitative investing, however, at that year the team there was acquired by Fidelity expanding Fidelity’s systematic business and due to this acquisition, they weren’t able to help with return offer that year. 

So I decided to continue with a master to depen my skillsets, it’s mostly about application i would say, in terms of how the techniques are applied in solving investment related problems. 

During my master, I interned with cubist working on systematic mid frequency equities, definitely enjoyed the depth of work there, however, it would been better if there’s more interatction or collaborations. The biggest take away from there is instead of finding a 

rock star 4 sharp strategy, should aim to find many less correlated predictors even with lower sharp, and rely on diversification to bump up the portfolio sharp. 

Intention to look for place with more open collaborations which happen to be case for fixed income institutions and quiet enjoy the different dimensionality in fixed income which brings more things to explore. 

###### Current team in pimco, what value do we bring in 

Current site with the EM team, within complex, there’s two mandates the local currency bonds and hard currency bonds, so there’s exposure to both the rates and credit part. Team members we have pms who makes macro views and we have traders who own the relative value part of the portfolio, that would be for example curve trades, swap spread, CDX vs Cash, the kind of basis trades. Quant side, there me and two other senior researchers, and i am mostly focused on linear products, (working with trader to systematize RV trades), and with pms on portfolio related analysis and the systematic stategies which I mostly focus on 

Systemtize relative value trades which wouldn’t be possible for human traders to track manually, 

Systematic approach to complement the portfolio on systematic alphas different correlate to rest of the book (more defensive) 

Portfolio analysis utilizing factor model, to show the underlying driving risk 

credit space with quantitative approach, this is something that a macro top down manager may not have been realized, with growing credit all to all, i believe there’s a lot to explore in the systematic credit 

###### Prepare portfolio for upcoming rate hike/shock 

Such analysis would leverage portfolio factor model, 1. Decompose portfolio from assets to risk factors, key rate duration, curve, credit spread, commodify 2. Apply relevant shocks to a few factors and to propagate to implied shocks, 

Under extreme shocks, for portfolios with convexity or tail risk, it will show up the non-linearity 

scenario analysis to see if portfolio is positioned well for it, whether to trim tail risk, or adding more defensive strategies (momentum) 

Growth hike vs inflation hike is different 

Can try a regim modeling, either construct with prior on classic factors, to define the 4 quadrants, 

Reflation / Inflationary Boom （commodity, em equity, fx, breakeven) 

Goldilocks / Disinflationary Boom  （credit, rates 60/40) 

Stagflation / Inflationary Bust (gold, tips, cash) 

Deflation / Deflationary Bust (jpy, chf, long duration) 

Or unsupervised (gaussian mixture) have the data infer the different regime 

Rather than prediction what’s next to come, make sure portfolio is robust to standthru different regime, and tacitial positioning short term regim changes, vol picks up etc. 

###### Add new strat to port 

robustness of idea, quality and quantity of historical data and value added (risk and return) to the portfolio. 

alpha contribution, risk, liquidity and capital requirements. 



<!-- Start of picture text -->
Step 1: Choose a universe or group of stocks from which<br>you'll construct your factor.<br>Step 2: Define a metric that you will use to determine<br>5 .<br>a stock's exposure to the factor (e.g., book-to-price for<br>Value, or a stock's standard deviation for Low Risk).<br>Step 3: Calculate that metric.  for every stock in|  your<br>universe, normalize the metrics,° and then sort the<br>stocks into long and short portfolios based on their<br>values (stocks with positive values in the long portfolio,<br>and negative valuesi, in.  the short portfolio)..<br>Step 4: Multiply the returns of the stocks by their<br>weights in the long and short portfolios, and sum up all<br>.<br>the values to arrive at your factor return for the day.<br><!-- End of picture text -->



<!-- Start of picture text -->
3. Weighting After we've calculated the “risk” of each<br>stock in our universe in Step<br>2, we need to determine how<br>we weight the stocks within the factor's long and short<br>portfolios. In this Street View, we'll explore two different<br>weighting schemes:<br>‘¢ Quintiles: Factor constructed by going long (short) an.<br>equi-weighted portfolio of stocks in the top (bottom)<br>quintile of the chosen low risk measure, with quintiles<br>computed over the chosen universe. Note that this scheme<br>would give weights to stocks in the most extreme quintiles<br>and ignore stocks in the middle.<br> Loadings:withchosen each risk Factor constructedstock's measure weight being using the z-score’ all stocksof inits the universe value for the<br>4. Neutrality The factor should be constructed in a way that<br>__isolatesits unique risk and removes the impact of the overall<br>stock market. We'll t ttrality options:<br>Store markets Well shalyze fWo NEUETSIITY OPEONS:<br>* “Dollar’-neutral: Factor constructed with equal dollar amounts<br>allocated to the factor's long and short portfolios<br>* Beta neutral: Factor constructed to be equity beta neutral<br>(ie. equal amount of equity risk in the factor’s long and short<br>portfolios)<br><!-- End of picture text -->

###### Work with pm 

Recently pm has an idea to look into sovereign cds around major rates move or election events, this is going to be a event study, i first checked with data team to see what’s been available, election calendar, front end curve moves, fx vol etc. then I also chatted with dm credit team on if they’ve done anything similar in their space. 

Then it’s mostly my work showing if there’s risk premia after rates sell off or going into election, i am also proposing to add polymarket events as a tracker to show, end result is likely a monitor tracks over priced dislocations and perhaps next step if see if can extend to a more scalable systematic strat 

Has been highly involved in machine learning techniques, with ai has there been more shifting toward ai approach in investment decision or ai is more leveraged in engineering coding aspect. 

### Calculating skew is very similar to 

###### Asset Universe 

- + USD 7y vs TY 

- EUR 10y vs RX 

- + GBP 10yvsG 

###### Timing Signals: 

- + 50% Carry momentum 

   - Signal = MA(Carry, 15d) - MA(Carry, 45d) 

- + 50% Skew 

   - Spread = OTR Bond Yield - Swap rate 

   - Signal= Skew(Spread, window) 

##### Previous version 

###### Timing Signals: 

+ Carry momentum 

- Signal = MA(Carry, short)— MA(Carry, long) 

- . Short window: 7d, 15d, 30d e Long window: 21d, 45d, 150d 

+ Fast Reversal 

Spread = swap rate — futures implied rate 

- Signal= MA(spread, short)MA(spread, long) 

- . Short window: 2d, 34, 5d bd Long window: 6d, 9d, 15d 

Full Sample backtest Sharpe ratio of ~0.9 

Policy-cycle toggle: rules-based DM steepener vs flattener tied to hiking/easing (optionally, use unemployment, inflation, debt trendsto set direction). | 



<!-- Start of picture text -->
25Q1<br>Curve<br><!-- End of picture text -->



<!-- Start of picture text -->
6 DM country, 2s5s, 5s10s, 10s30s<br><!-- End of picture text -->



<!-- Start of picture text -->
Carry, value (unemployment and inflation rate)<br><!-- End of picture text -->



<!-- Start of picture text -->
Carry momentum, skew<br><!-- End of picture text -->

Cross-sectional (L/S within curve segment, curve neutral~) time-series (L/S based on history, allow curve exposure) 

Best Ideas Q4 2022: 

1. Momentum in curve trades: 

- G6 Curve trades exhibit time series momentum like most other asset classes with a long term Sharpe ratio of ~0.75 with low to zero correlation to the underlying assets. One caveat is that we need to be careful of the vol of the 2 legs, especially over the last 10 years or so when the front end has been kept low artificially. Applying a volatility filter that scales down positions when the vol ratio of the 2 legs deviates significantly from 1 achieves this purpose. In the below backtest 2s10s performance is flat since 2012 for exactly this reason. 

Given inflation is topical this year, I am here considering possible trades to take advantage of that. 

###### Inflation conditioned risk premium around MPC 

- Long EM duration prior to MPC when inflation expectation is high 

Question: MPC is one of the most influential events for rates market, is there any risk premium to be harvested around MPC? We approached it with some (big brush) data driven / statistical framework. (1). On average, what return profile we see around MPC? I grouped 6 DM countries and 6 Latam /Europe EM countries to represent ‘DM’, ‘EM’, look at average return from 3 days prior to 3 days after MPC -> it seems to show: positive return before MPC, non-negative return on MPC, negative return post MPC 



<!-- Start of picture text -->
Swap spread<br>Empirical duration beta<br>Dm swap spread beta adjusted<br>Region bucket comparable<br>Change of level<br>Curve<br>Simple rule based hiking/easing<br>Basket mean revert curve basis<br><!-- End of picture text -->

