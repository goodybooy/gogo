Great framing. The local ASW basis is the most interesting of the four because it's where market segmentation is the central feature, not a wrinkle. Capital controls, tax asymmetries, onshore-vs-offshore investor bases — these aren't frictions to abstract away, they're the entire reason the basis exists and persists.

Your structural / cyclical / tactical taxonomy is the right way to organize this. Let me work through it that way and add some things you may not have considered.

## First, some setup — what exactly is being modeled

Local ASW = local-currency government bond yield − offshore local-currency swap rate (e.g., CNY 5y CGB yield − 5y CNY NDIRS, or MXN 5y Mbono yield − 5y TIIE swap, or BRL 5y NTN-F − 5y onshore-or-offshore DI swap).

The basis exists because:

* The bond is held primarily by onshore real-money (banks, insurers, pension funds, sometimes central banks, plus a foreign quota where applicable).
* The swap (especially offshore — NDIRS, NDF-implied, or offshore-cleared) is dominated by foreign macro funds, hedge funds, dealer hedging flows, and corporates.

Different investor bases, different funding curves, different regulatory treatment, different tax. The basis is the price of that segmentation — and it can persist for years because the arbitrage that would normally close it is blocked by capital controls, repo restrictions, or tax leakage.

This is fundamentally different from USD swap spread, where the basis is driven by dealer balance sheet under arbitrage that can happen but is expensive. In EM local ASW, the arbitrage often cannot happen at all in scale — which means the basis can deviate further and longer than balance-sheet logic alone would predict.

That structural feature should drive how you build the factor framework.

## Structural factors (slow-moving, regime-defining)

These set the level and range of the basis. They change on timescales of months to years.

### 1. Capital account openness / convertibility regime

The harder it is for foreigners to access the cash bond and for onshore investors to access the offshore swap, the wider and more persistent the basis. CNY is the canonical example — onshore CGB yield and offshore CNY NDIRS can run 30-80 bp apart for quarters. Compare to MXN, where capital flow is mostly free and the basis is much tighter and more mean-reverting. Useful proxies:

* Chinn-Ito index (academic capital account openness)
* IMF AREAER classification
* Onshore-offshore FX spread (CNY vs CNH spot — when this widens, ASW basis tends to widen too)
* Bond Connect / CIBM Direct quotas and flow caps

### 2. Onshore investor base composition

Who structurally owns the cash bond and what's their behavior?

* Banks holding for HQLA / regulatory reasons are price-insensitive — they hold to maturity, don't care about ASW. China is the extreme: ~70% of CGB held by banks. This makes the bond yield "sticky" relative to swap.
* Pension funds and insurers with liability matching — long-duration buyers of bonds, structurally bid for cash, push bond yields below swap (negative ASW basis from cash side).
* Foreign real-money in EMBI/GBI — flow-driven, will sell on EM risk-off, push bond yields up vs swap.
* Central bank as buyer (QE) or seller (QT, FX intervention) — can dominate the cash market entirely in some EMs. Indonesia, Philippines, Czech, Hungary all have central bank balance sheet effects on local bonds.

A factor like "domestic bank holdings as % of outstanding stock" or "foreign holdings %" captures the segmentation strength.

### 3. Tax and regulatory asymmetries

* Withholding tax on coupon payments to foreigners (varies by country and treaty) — makes cash bonds less attractive to offshore, shifts demand to swap.
* Onshore repo market depth and access — if onshore can lever the bond cheaply but offshore can't, the bond gets bid onshore.
* Bank capital treatment of bonds vs swaps (zero risk-weight on government bonds for HQLA, vs IM/VM on swaps).
* CCP access — onshore CCP for swaps may have different margin and access rules than offshore.

These don't move much but they set the equilibrium basis level. Worth encoding as country-level fixed effects in the model.

### 4. Swap market structure

* Onshore IRS (e.g., onshore CNY IRS via Shibor or FR007) vs offshore NDIRS — different curves, different liquidity, different access.
* Whether the offshore swap references an onshore fixing (NDIRS) or a synthetic offshore rate (CNH HIBOR-based).
* Liquidity of the swap curve at the tenor you're looking at — 5y is usually liquid; 2y and 10y less so in many EMs.

## Cyclical factors (medium-speed, regime-shifting over weeks to months)

These are the macro-credit-rates regime drivers that shift the basis around within its structural range.

### 1. Correlation with DM swap spreads (your idea — yes, important)

The global "swap-vs-government" theme — long-end USD/EUR swap spreads negative because of supply, dealer balance sheet, LDI flow — bleeds into EM via:

* Dealer balance sheet capacity is global. When US dealers are constrained, they reduce risk in EM cash bonds first, widening EM ASW basis the same direction as USD.
* Foreign macro funds running curve trades often pair EM rates with DM rates; correlated positioning means correlated unwinds.
* Real-money asset allocation between DM and EM rates responds to relative carry, which is partially driven by swap spread differentials.

A factor like "10y USD swap spread − 10y EUR swap spread" or just "10y USD swap spread" as a global beta input is sensible. It probably picks up 10-20% of the variance in EM ASW basis depending on the country — more for open EMs (Mexico, Poland), less for closed ones (China, India).

### 2. Central bank balance sheet vs dealer balance sheet (your idea — also important, but be careful)

This is two different effects you may want to separate:

* Central bank as bond buyer/seller — direct effect on cash leg only. QE compresses cash yields (negative ASW pressure); QT or FX intervention via reserve sales pushes cash yields up (positive ASW pressure). Indonesia BI's bond buying programs are a clean example.
* Dealer balance sheet capacity for bond inventory — affects cash leg via market-making capacity. Proxied by dealer Treasury inventory (US), repo conditions, primary dealer position reports.

In CNY specifically, PBoC operations through MLF, OMO, RRR cuts affect onshore bond demand much more than offshore swap, so the basis widens/tightens with PBoC stance. A "PBoC net liquidity injection 4w rolling" factor would help for CNY.

### 3. Rates direction and curve shape

* When local rates are rising (selling pressure on bonds), bond yields rise faster than swap rates because foreign and offshore investors lead the swap market while onshore real-money is sticky on the bond. ASW basis widens (bond cheap to swap).
* When rates are falling, swap rallies faster than bond. ASW tightens or goes negative.
* This makes the basis directionally correlated with rates moves — important to include "Δ local 5y swap rate, 4w" as a factor or you'll attribute rates-driven moves to dislocation.

### 4. FX regime and intervention

* When the central bank is selling FX reserves to defend the currency, they're often selling USD assets and not directly affecting the local bond market — but the sterilization operation matters. If they sterilize via bond sales, ASW widens. If they sterilize via OMO drain (raising overnight rate), the swap curve shifts and basis can go either way.
* When foreigners are selling local-currency assets in an FX crisis, they often sell bonds first (most liquid foreign holdings) and unwind swap hedges later. ASW widens dramatically — this is the EM "rates-FX crisis" pattern (Turkey 2018, Argentina recurring, India 2013 taper tantrum).
* Factor: USDXXX 1w realized vol, plus a "central bank FX intervention" indicator (reserve change 1w).

### 5. Onshore-offshore basis (your CNH/CNY-style idea)

* The FX spot/forward basis between onshore and offshore deliverable currencies. CNH vs CNY, INR onshore vs NDF, KRW onshore vs NDF. When this widens, it usually means offshore is expressing a different view than onshore (often more bearish), and the ASW basis widens correspondingly because offshore swap reflects offshore positioning.
* Cleanest factor: 1m FX forward points onshore − offshore, normalized.

## Tactical factors (fast-moving, days to weeks)

These are the technical/positioning factors that drive short-term dislocations — the alpha source for a relative-value book.

### 1. Government issuance and buybacks (your idea — yes, this is the cash bond equivalent of issuance pressure on CDX-cash basis)

* Auction calendar concentration: heavy auction weeks widen ASW (cash cheapens). Easy to factor in: "scheduled net issuance next 2w / outstanding stock."
* Auction tails: large tails on recent auctions = real-time signal of cash demand weakness.
* Buybacks / liability management: when the sovereign buys back bonds, ASW tightens. Mexico does these episodically; others more rarely.
* Switch auctions (sell new bond, buy back old bond) net effect depends on which point of the curve.

### 2. Foreign positioning and flow

* EPFR EM local-currency fund flows (weekly) — leading indicator for foreign cash bond demand, doesn't affect onshore swap as much.
* CFTC positioning for liquid EM FX (proxy for macro positioning generally).
* JPM GBI-EM index flow estimates if available.
* Foreign holdings of local government bonds (most EM CBs publish monthly: Indonesia, Mexico, South Africa, Thailand). Change in this stat is a clean foreign flow indicator.

### 3. CTA / momentum positioning

EM rates trades are a popular CTA / risk-parity allocation. When CTAs flip from long to short EM rates, the swap leg moves before the cash leg (CTAs trade swap, not cash bonds). ASW basis moves with CTA positioning. Proxies are harder — "EM rates 20d momentum z-score" is a workable rough indicator.

### 4. Specific bond technicals

* On-the-run vs off-the-run (newly issued benchmarks trade rich; older bonds trade cheap; affects ASW point-by-point).
* Repo specialness for the deliverable bond — if a 5y bond trades special, ASW tightens at that point.
* Index inclusion / rebalancing — when a bond enters/leaves GBI-EM, mechanical flow.
* Auction concession / post-auction recovery — reliable mean-reverting pattern in many EMs.

### 5. Dealer hedging flows

* Corporate hedge flow (FX-linked bond issuance hedged via swaps) creates idiosyncratic flow into the swap market that doesn't touch cash. Hard to observe directly but visible in deal pipelines.
* Structured product flows (e.g., callable swap structures sold to retail) create one-sided dealer hedging in offshore swap, can push basis.

## Special considerations for offshore swap vs onshore bond

A few things specific to the offshore-swap setup that I'd flag:

### 1. NDIRS fixing risk

If the offshore swap settles against an onshore fixing (e.g., CNY 7-day repo fixing for FR007 NDIRS), there's basis risk between the offshore-traded swap and onshore reality. PBoC can move the fixing without the offshore swap having any way to arbitrage. This adds a residual that's not in any of your factors — it's pure regulatory/political risk. Worth flagging in the model output rather than trying to factor in.

### 2. Collateral and funding asymmetry

The offshore swap is funded in offshore USD (or CNH for CNY). The cash bond is funded in onshore local currency repo. These two funding curves can decouple — and when they do, the "fair" ASW basis shifts. For CNY specifically, when CNH HIBOR spikes (offshore CNY funding squeeze), offshore swap rates jump, ASW basis collapses or goes negative. That's a recurring pattern in CNY ASW that's not captured by global factors.

### 3. CCP access and clearing

Offshore swaps cleared at LCH or CME have different IM/VM regimes than onshore (Shanghai Clearing for CNY). When an offshore CCP changes margin requirements, swap pricing can shift without any change in onshore conditions.

### 4. Tax-driven basis (the China case specifically)

Foreign holders of CGB receive tax-exempt coupons (since 2018) but offshore swap counterparties don't get the equivalent benefit. This creates a structural "rich" bid on cash relative to swap from foreigners — pushing ASW negative. Tax regime changes (which happen) can shift this materially.

## Putting it together — proposed factor structure

```
fair_value_ASW_basis = α_country  (structural fixed effect)
                     + structural:
                       β1 · capital_account_openness
                       β2 · foreign_holdings_pct
                       β3 · domestic_bank_holdings_pct
                     + cyclical:
                       β4 · DM_swap_spread (USD or composite)
                       β5 · CB_balance_sheet_change_4w
                       β6 · Δ_local_swap_rate_4w
                       β7 · FX_realized_vol
                       β8 · onshore_offshore_FX_basis
                     + tactical:
                       β9 · net_issuance_2w
                       β10 · EPFR_local_flows_2w
                       β11 · foreign_holdings_change_1m
                       β12 · OTR_OTR_premium
                       β13 · repo_specialness
                     + ε  (residual = trade signal)
```

Country fixed effect captures the structural level. Cyclical factors capture regime. Tactical factors capture short-term flow. Residual is what you trade.

## A few cross-cutting thoughts on your taxonomy

**1. The structural / cyclical / tactical split is exactly right, and it should drive how you use the model.**

* Structural factor surprises (capital account changes, tax regime shifts) are not tradeable as mean-reversion — they're regime shifts. Detect them and refit the model.
* Cyclical factor moves are tradeable but slowly — half-life weeks to months.
* Tactical factor moves are tradeable on days-to-weeks horizon — this is where most of the alpha is for a discretionary book.

**2. Per-country models are essential for ASW, more than for the other strategies.** Pooling China and Mexico in one regression is incoherent — the structural drivers are completely different. At minimum, run separate models per "openness tier" (open EM: MX, ZA, PL, IDR; semi-open: BRL, INR, THB; closed: CNY).

**3. Half-life varies enormously by country.** Mexico ASW residuals close in days-to-weeks; China ASW residuals can persist for months because the arbitrage is genuinely blocked. The trade signal needs a country-specific expected convergence horizon — without it, PMs will hold "rich" CNY trades forever waiting for convergence that's structurally prevented.

**4. There's a fourth category worth considering: "policy-driven" factors.** Things like PBoC RRR changes, foreign access quota changes (Bond Connect daily quota), tax regime announcements, central bank YCC implementation. These are tactical in timing (announced on a date) but structural in effect (regime-shifting). Worth flagging as a separate event-risk overlay rather than fitting into the regression — these are points where the model should be expected to break and signals should be discounted.

If you tell me which countries are in scope for this strategy I can be more specific — China + Korea + India is a very different problem from Mexico + Brazil + Colombia + South Africa.
