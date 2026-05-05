Great question, and the CDS-cash basis is a genuinely different beast from the EUR-USD or quasi-sov basis because the two instruments have **different economic claims, different investor bases, and different market microstructure** — which is exactly why a basis exists at all.

Let me work through this systematically.

## What the basis actually measures

CDS-cash basis (5y) = 5y CDS spread − 5y bond Z-spread (or asset-swap spread).

- **Positive basis** (CDS > bond): CDS protection trades expensive vs cash. Buying the bond and buying CDS = "negative basis package" earns the spread. Implies cash bonds are cheap or CDS is being bid for hedging/positioning reasons unrelated to fundamentals.
- **Negative basis** (CDS < bond): Cash bonds trade cheap vs CDS. Common in EM. Implies bonds are under selling pressure or CDS is being sold (insurance writers chasing carry).

In theory the basis should be near zero plus a small "no-arb cost" reflecting funding, repo, and counterparty risk. In practice it's often ±30-80 bp for EM sovereigns and can blow out massively in stress.

## Factors I'd use to model fair-value basis

I'd group them into five buckets — this is structurally different from the EUR-USD model because the drivers are mostly technical/microstructural, not credit-fundamental.

### 1. Funding and repo

**Repo specialness on the bond.** If the deliverable bond trades special in repo, the cost of carry on a long-cash position is lower → basis tightens (becomes more negative). For EM sovereigns, repo markets are thin, but for benchmark Mexico USD bonds (the on-the-runs in 5y, 10y, 30y points) there's a real repo market. A "GC vs special" indicator on the cheapest-to-deliver bonds is worth tracking.

**USD funding stress (FRA-OIS, GC-OIS, cross-currency basis).** When funding gets expensive, levered basis-package holders (hedge funds running long bond / long CDS) get squeezed and unwind, which widens the negative basis. FRA-OIS or 3m USD xccy basis to a major funding currency is a clean proxy.

### 2. Cash bond supply and positioning

**Net issuance over rolling window.** New issuance from Mexico (or peers) widens the cash bond → basis goes more negative. This is the technical factor most consistently observable.

**Real-money positioning / EM hard-currency fund flows.** EPFR weekly EM hard-currency bond fund flows. Outflows = cash bonds get sold, basis widens negative. CDS doesn't see this flow because it's not the real-money instrument of choice.

**Index inclusion / rebalance dynamics.** EMBI / EMBI Global Diversified rebalancing creates flow that hits cash but not CDS. If Mexico's index weight is changing, there's a mechanical bias.

### 3. CDS market technicals

**CDS positioning / dealer net risk.** Hard to observe directly, but DTCC publishes weekly net notional outstanding for sovereign CDS. Big shifts in net protection bought/sold drag the CDS price independent of credit fundamentals. When real-money buys protection on Mexico to hedge a corporate book or LatAm equity book, CDS widens without the bond moving.

**ISDA definitions / contract risk.** Major one for EM. After the 2014 ISDA definitions change, and following events like the Argentina/Venezuela CDS auction controversies, the market periodically reprices CDS for "contract uncertainty" — what counts as a credit event, how is the auction run, what's deliverable. This is a residual driver that's hard to factor in but matters.

**Single-name CDS liquidity.** SovX index trades much more than single-name Mexico CDS. When liquidity in the single-name dries up, the basis widens just from execution costs, not fundamentals.

### 4. Hedging demand (this is the big one for sovereigns)

**Corporate hedging flow.** Banks and corporates with Mexico exposure (loans, projects, Pemex bonds, MXN earnings translation) hedge via Mexico sovereign CDS as the cheapest macro proxy. So Mexico CDS often trades wide of the bond simply because *there's structural buy-protection demand from non-sovereign-bond holders*. This factor is huge and persistent, and the proxy is something like:

- LatAm bank loan book stress indicators
- Pemex bond OAS (when Pemex blows up, banks hedge via Mexico CDS)
- MXN positioning extremes

**EM crisis hedge demand.** When risk-off happens, real-money funds buy CDS on the most liquid sovereign names (Mexico, Brazil, South Africa, Turkey) as a *portfolio hedge* — not because of name-specific views. This drives positive basis spikes (CDS widens more than bond) during global stress events. Factors:

- VIX or its term structure
- CDX HY / iTraxx Crossover spread (global credit stress)
- JPM EMBI spread index level and 1m change
- DXY momentum

### 5. Idiosyncratic / sovereign-specific

**Local market / FX stress.** USDMXN spot move, MXN-implied vol, local rates (TIIE, Mbono). When the local market sells off, foreign holders of the USD bond face mark-to-market pressure; some hedge via CDS, widening it; others sell the bond, widening it. The two effects can offset, but typically CDS leads in stress and bond catches up.

**Political / fiscal events.** Pemex bailout announcements, budget releases, election outcomes. CDS reacts faster (electronic market, dealers update quotes immediately); bond lags (real-money slow to reposition).

## Factor structure I'd suggest

```
fair_value_basis_5y = α
                    + β1 · peer_basis (LatAm IG sovereign basis avg, ex-Mexico)
                    + β2 · rating_basis (BBB EM sovereign basis avg)
                    + β3 · USD_funding_stress (FRA-OIS or xccy)
                    + β4 · net_issuance_3m (cash supply technical)
                    + β5 · EM_HC_fund_flows (positioning)
                    + β6 · global_crisis_hedge (CDX HY + VIX composite)
                    + β7 · LatAm_corp_hedge_demand (Pemex OAS, regional bank stress)
                    + β8 · CDS_liquidity (SovX-single name spread, DTCC net notional)
```

Same logic as before — residual is the trade signal. Peer basis is the cross-sectional anchor; the rest are the structural drivers.

## Your specific question: credit risk jump — does CDS or bond move more?

This is the most interesting question and the answer is **regime-dependent**, which is exactly why the basis is tradeable.

### Idiosyncratic credit jump (Mexico-specific bad news)

CDS moves first and moves more, in the first hours-to-days.

Reasons:

- CDS is electronically traded by dealers; bond is voice-traded by real-money. Dealers reprice instantly, RM repositions over days.
- CDS has natural sellers (hedge funds writing protection for carry) who get squeezed first when news hits — they widen quotes aggressively.
- Hedgers (banks, corporates, levered credit funds) buy CDS as the fast-hedge instrument because cash bonds are slow to source in size.
- Real-money holders of cash bonds often *don't* sell into the move — they hold to maturity, so the bond doesn't reprice as fast.

**Result: positive basis spike** (CDS wider than bond). Then, over 1-3 weeks, the bond catches up as RM repositions, and the basis normalizes — sometimes overshooting to negative as forced selling exhausts.

This is the classic trade pattern: in a credit shock, **fade the basis blowout** by selling CDS / buying the bond once the shock peaks. Asymmetric trade because the basis can only normalize so much in the "crisis" direction before convergence.

### Systemic / global risk-off (not Mexico-specific)

CDS moves much more than bond, often dramatically.

Reasons:

- Global hedge demand spikes for liquid EM sovereign CDS (Mexico is in the "EM liquid 5" along with Brazil, Turkey, South Africa, Indonesia).
- This is *not* Mexico-fundamental selling, it's macro-portfolio hedging using Mexico as a proxy.
- Cash bonds can actually be *bought* in this environment by funds rotating from EM local to EM hard-currency as a "safer" expression.

**Result: large positive basis spike**, often the largest of the cycle. Examples historically: COVID March 2020, EM taper tantrum 2013, China growth scares.

This is also a fade trade *if* you have conviction it's not a Mexico-specific issue — but the trade is harder because the global stress can persist and basis can stay wide for weeks.

### Slow credit deterioration (rating downgrade cycle, fiscal slippage over months)

Bond and CDS move together, often bond leads slightly because real-money rotates out before dealers reprice CDS. The basis doesn't change much — both legs widen in parallel.

Less interesting from a trade perspective. The basis isn't telling you much.

### Default / restructuring becoming a real possibility

CDS goes parabolic and basis goes deeply positive, often 200-500 bp.

Reasons:

- Recovery assumption matters. CDS pays par minus recovery; bonds trade at expected recovery. As default probability rises, CDS price → (1 − recovery), bond price → recovery. The basis explodes because the two instruments are now pricing different things.
- Cheapest-to-deliver dynamics kick in for CDS — protection holders can deliver any deliverable bond, so the CTD trades special and the rest cheapen.
- This isn't a fade trade — this is a "the basis is telling you something real" signal. Mexico isn't there, but Argentina, Venezuela, Lebanon, Sri Lanka, Ukraine all went through this.

### Quick summary table

| Scenario | CDS reaction | Bond reaction | Basis direction | Trade |
|---|---|---|---|---|
| Idiosyncratic jump | Fast, large | Slow, smaller | Positive spike | Fade after peak |
| Global risk-off | Very large (hedge demand) | Moderate | Large positive spike | Fade if name-specific OK |
| Slow deterioration | Parallel | Parallel | Stable | No edge |
| Default scenario | Parabolic (recovery pricing) | Repricing to recovery | Massive positive | Don't fade — real |

## Implications for your model

1. **Build regime detection into the framework.** A static linear regression will fail in default-scenario regimes (factor relationships break) and in global-crisis regimes (CDS hedge demand factor blows up). At minimum, flag observations where your global-crisis factor is >2σ and either (a) widen confidence intervals on the residual signal, or (b) switch to a regime-specific model.

2. **The bond side has issuance/flow technicals; the CDS side has hedge-demand technicals. Model them separately, not symmetrically.** The factor list above does this — bond flow factors (issuance, EPFR) move the cash leg; hedge-demand factors (corp stress, global vol) move the CDS leg. The basis is the difference of these two technical pressures.

3. **Half-life is shorter than EUR-USD basis.** CDS-cash basis mean-reverts in days-to-weeks for technical dislocations, vs weeks-to-months for funding-driven EUR-USD basis. The trade signal needs to be acted on faster, which makes the "discretionary PM decides executability" workflow more time-sensitive.

4. **Recovery assumption matters at wide basis levels.** If Mexico CDS ever traded at 600+ bp (it has historically, briefly), the basis can't be modeled with a simple linear framework — you need to back out implied default probability and recovery. For Mexico in normal times this isn't relevant, but for the broader universe (Egypt, Pakistan, Tunisia, Turkey at times) it is.

5. **Show PMs the decomposition.** "Mexico basis is +35 bp, model says +15 bp, residual +20 bp." Why? Because (a) global crisis factor 1.5σ rich → explains +8, (b) corp hedge demand normal → explains 0, (c) issuance pipeline empty → explains -3, (d) unexplained +15 bp. PMs care about the *unexplained* component, not the total — the explained part is a known technical they shouldn't trade against.

If you want, I can go deeper on any of these — particularly the regime-detection piece, which is where I think this kind of model most often breaks in production.
