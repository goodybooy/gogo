Hub A — Friend A

* URL: `https://enormous-change-projection-founder.trycloudflare.com`
* Token: `QlCcQ5cUpItnCcpPYbgOIz9KcW3J5zNGDxVkrQolwJc

Hub B — Friend B

* URL: `https://admit-ruling-threshold-suppliers.trycloudflare.com`
* Token: `qDQArsOmA3rVzzHTE8FlMqsLgVYsoTkc6Hrvh0V0LRQ
  
  
  
  

roko capital management 2024 quant graduate programme.md github



hy vs ig difference

merton model



when will be biased (blue)

regression vs isotonic



https://www.nomura.com/events/10th-annual-global-quantitative-investment-strategies-conference/resources/upload/Style_Premia_Ilmanen.pdf



[Congratulations to Michael Mark for his PhD! - EPFL](https://actu.epfl.ch/news/congratulations-to-michael-mark-for-his-phd/)

[Self-Exciting Point Processes: Identification and Control](https://infoscience.epfl.ch/entities/publication/2665a7b1-5c55-4ad9-86b5-28692ff6c06f)

combine sharps sqrt(100)

What if xxx happen, fail, what if hypothesis fail, what’s the alternative solution/etc



N=2n players, random bracket. What's P(players i and j meet)?

-----

recent rates dispersion environment (tie with macro allocator)

-----

rates attribution ytian

------

dispersion optimization

------





Four Questions on Rate Hikes/Cuts
---------------------------------

### The framing that should open every answer

**You never profit from a hike. You profit from a hike that differs from what the forwards already price.**

If OIS forwards imply three cuts and you expect three cuts, buying duration earns you carry and nothing else. The trade only exists in the gap between your path and the market's.

So the first question back to the allocator is always: _what does the curve already imply, and where do you differ — on the number of moves, the timing, the terminal rate, or the distribution around it?_ Those four differ, and each maps to a different instrument.

* * *

### 1a. Expressing a policy view in G10 rates

| View                               | Instrument                                 | Why                                                                                  |
| ---------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| Path over next 1–2y differs        | **STIR futures / OIS** (SOFR, SONIA, €STR) | Purest policy expression. Almost no term-premium beta                                |
| Terminal rate differs              | 2y–5y swaps, or forward-starting swaps     | Captures where the curve settles, not the path to it                                 |
| Timing differs, level doesn't      | **Calendar spreads** on STIR futures       | Long one contract, short another — isolates timing                                   |
| Cuts coming                        | **2s10s steepener**                        | Front end rallies more than the long end. Bull steepener is the classic easing trade |
| Hikes coming                       | **Bear flattener**                         | Front end sells off more                                                             |
| Path is right but vol is mispriced | Payer/receiver **swaptions**               | Buys convexity, defined risk, pays for being early                                   |
| Conditional view                   | Conditional curve trades (swaption-based)  | "Steepener, but only if rates rally"                                                 |

**Two things to check before sizing:**

**Carry and roll.** An outright long-duration position on an upward-sloping curve pays you to wait. On an inverted curve it costs you. That changes how long you can hold a view that's early.

**Why the move is happening.** A cut driven by disinflation is a bull steepener. A cut driven by a growth shock with fiscal concerns can be a _bear_ steepener at the long end — the front end rallies while term premium rises. Same policy action, opposite long-end outcome.

* * *

### 1b. Expressing it in G10 FX

**Start by killing the naive version.** "Central bank hikes → currency strengthens" is wrong as stated, because the rate differential is already in the forward. That's CIP, and it holds in G10 up to a small basis.

What FX responds to is **changes in the expected path relative to what was priced** — and relative to the other leg of the pair, since every FX trade is a relative rate view.

| View                                    | Expression                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------ |
| Fed hikes more than priced, ECB doesn't | Short EURUSD                                                                               |
| Policy divergence broadly               | Long USD vs a **basket** — cleaner than a single pair, which carries idiosyncratic drivers |
| Direction unclear, vol mispriced        | FX options, straddles                                                                      |
| Asymmetric risk                         | Risk reversals — and note where the skew already sits                                      |

**The distinction that matters most: good hikes vs bad hikes.**

Hiking into strong growth generally strengthens the currency. Hiking to defend against inflation or currency weakness often doesn't — the market reads it as a policy error or a credibility problem. Turkey and, at times, GBP in 2022 are the reference cases.

**And check whether the pair is a carry pair.** If you're long a currency because you expect hikes, and it's also the high-yielder, you're stacking a rate view on top of a crowded carry position. Those unwind together.

* * *

### 2a. Preparing an existing G10 rates portfolio

**Step 1 — measure what you actually have.** Total duration is not enough. You need the **key rate duration profile**, because a hike/cut cycle affects tenors very differently.

PC1 exposure=k′v1​,PC2 exposure=k′v2​

Level exposure tells you the parallel risk; slope exposure tells you how a bear flattener or bull steepener hits you. A portfolio can be duration-neutral and still lose badly in a steepening.

**Step 2 — scenario, don't just shock parallel.** Run: +100bp parallel, bear flattener, bull steepener, front-end-only repricing. The spread between those outcomes is the real risk.

**Step 3 — choose the hedge by what it costs.**

| Hedge                    | Cost                   | Keeps                                        |
| ------------------------ | ---------------------- | -------------------------------------------- |
| Sell duration outright   | Gives up carry         | Simple, no basis                             |
| Curve trade (flattener)  | Carry depends on shape | Keeps some duration, targets the actual risk |
| Payer swaptions          | Premium                | Keeps carry and upside; convex               |
| Shorten to the front end | Gives up roll          | Reduces long-end term-premium exposure       |

**Step 4 — check for negative convexity.** MBS and callables extend duration into a selloff. If the book holds them, the hedge you size today will be too small when you need it.

* * *

### 2b. Preparing an existing G10 FX portfolio

**Step 1 — identify the hidden rate exposure.** A G10 FX carry book is _structurally_ a rate-differential position: long high-yielders, short low-yielders. If the funding currency starts hiking, you're on the wrong side of a rate convergence _and_ of a positioning unwind.

**The August 2024 yen carry unwind is the case study** — BoJ tightening plus a soft US payroll print, and the positioning compression was worse than the fundamental move.

**Step 2 — measure the actual beta, not the notional.** Regress the book's returns on short-end rate differentials and on a risk factor (VIX or SPX). Carry books typically carry large equity beta that only shows up in stress.

**Step 3 — hedges, cheapest first:**

* **Reduce the crowded leg** — usually the funding side is where the pain concentrates
* **Risk reversals** — carry currencies have negative skew, so the skew is already expensive; check what you're paying
* **Shift from spot to options** to cap the tail while keeping some carry
* **Add a divergence trade** that profits if the expected policy gap widens, partially offsetting

**Step 4 — the correlation warning.** FX-rates correlation is regime-dependent. In a risk-on hiking cycle, high-yielders strengthen. In a risk-off hiking cycle, they weaken despite the rate pickup. A hedge calibrated on the first regime fails in the second.

* * *

### What I'd ask them before answering any of this

* **What's already priced**, and where specifically do you differ?
* **Mandate** — benchmark-relative or absolute return? That changes whether "reduce duration" means anything.
* **Derivatives permitted?** No swaptions means no cheap convexity, and the whole hedging menu shrinks.
* **Horizon** — a view that's right in six months but costs carry for three is a different position from a view you can hold indefinitely.
* **What else is in the book** — the rates and FX exposures may already offset, or compound.

That last one matters most. The value an allocator gets isn't the trade idea; it's knowing what their _aggregate_ exposure to the policy path already is before adding anything.







momentum and vol environment 

skew factor/swaption factor

EMDM convergence trade\EM Election event study

sell america

regime change

prepare liquidity shock portfolio

four quadrant/CORE CPI PCE


