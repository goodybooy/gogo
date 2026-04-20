# New Go Folder — Quality & Fit Review

**Date:** 2026-04-19
**Scope reviewed:** `E:\New Go\` — all subfolders except `/Archive/` and `/Company and People/`
**Target role:** Systematic, mid-frequency, global macro quant researcher, buyside. Focus: relative value / basis, event modeling, CTA / trend-following, fundamental carry & rolldown across fixed income (esp. UST and EM).
**Tone:** Blunt. The point is to sharpen the Go, not to be kind.

---

## 1. Executive summary

The folder reads like a **two-year-old study graveyard with a few live organs**. Signal-to-noise is roughly **20 / 80**. The valuable ~20% is concentrated in a handful of items: the Jane Street probability guide, the Chicago Booth FINM 36700 lectures (especially `lec_8_carry`), your own `One Liner.docx`, the Tim Leung pairs-trading papers, the Bloomberg tail-risk VaR paper, and the bond-yield-conventions worksheet you compiled from Mizuho. Those are the real interview-ready, role-relevant assets.

The other ~80% falls into three piles:
1. **WeChat screenshots / Chinese quant blog dumps** — topic titles look exactly right for the target role (CTA, factor development, EVT, PCA, market impact), but the PDFs are images of LLMQuant / 海通 / 量化投资与机器学习 posts. Useful for first exposure, not sufficient depth for a buyside macro interview.
2. **Duplicates and stubs** — multiple CTA/momentum files covering overlapping content, empty docx/pdf stubs (`Typical Work Day.docx`, `常见随机过程.pdf`, `PCA 双因子资产定价预测.txt`), and `.txt` files that contain nothing but a dead weixin URL.
3. **Scope drift** — HFT / market-microstructure material, HRT Proteus posts, options-with-cash-dividends pricing, ML (ESL) — interesting but **not** what a mid-freq macro RV/carry/trend seat actually uses day to day.

**Biggest problem is not the folder — it's what's missing.** For a seat that trades UST RV, swap spreads, EM carry, trend, and event-driven macro, you have **zero** dedicated material on: Treasury cash/futures basis (CTD, net basis, implied repo), swap spreads / ASW, 2s10s / butterflies / curve mechanics, OIS-SOFR, breakevens / linkers, EM sovereign spread indices (EMBI/CEMBI), FX carry baskets (DBV-style), term premium measurement, and backtesting infrastructure at the daily frequency. The `/Project/` folder is mostly image PDFs of old WeChat posts rather than your own polished write-ups — which is the single biggest hole for the interview loop.

**Bottom line:** the folder is sufficient to pass a first-round quant probability / stats interview. It is **not** sufficient for a second-round systematic macro research interview. Fix that gap before you push for more first rounds.

---

## 2. Target role recap (what we're scoring against)

A systematic mid-freq global macro quant researcher on the buyside needs depth in:

- **Fixed income plumbing:** UST cash/futures basis, repo/OIS/SOFR, swap spreads, ASW, curve trades (2s10s, 2s5s10s flys), breakevens, EM sovereign curves.
- **Carry & rolldown:** rates carry, FX carry, EM hard/local currency carry, theory + practical construction.
- **Trend / CTA:** signal construction, smoothing, vol-targeting, trend portfolio diversification, risk parity across asset classes.
- **Event modeling:** auctions, NFP, FOMC, CPI, rating actions, elections — timing, pricing in, residual alpha.
- **Relative value / basis:** pair / basket trades, cointegration, OU modeling, transaction-cost-aware entry/exit.
- **Risk & sizing:** Kelly, vol targeting, VaR / ES / EVT, turnover-cost tradeoff.
- **Statistical rigor:** time-series inference (HAC, stationarity, spurious regression), backtesting pitfalls, out-of-sample discipline.

The scoring rubric below uses these as the fit axis.

---

## 3. Top 10 cross-folder items — read/revisit these first

Ranked 1 (highest priority) to 10.

| # | Item | Folder | Quality | Fit | Why it matters | Deeper? |
|---|------|--------|---------|-----|----------------|---------|
| 1 | `finm36700_2021_lec_8_carry.pdf` | Good Read | **High** | **High** | Rigorous treatment of rates and FX carry, expectations hypothesis, forward rates, rate parity. Directly maps to the carry & rolldown pillar of the target role. Chicago Booth Autumn 2021 lecture. | **Yes** — re-derive every result by hand; then extend to EM carry, breakevens, linker RV. |
| 2 | `jane_street_interview_guide.pdf` | Finished Read | **High** | **High** | The cleanest available primer on probability, expected value, making markets, adverse selection. Exact content first-round quant interviews probe. | Revisit for JS/SIG/OptiverCitadelSecurities-style screens; no need to go deeper on the same material. |
| 3 | `One Liner.docx` | Root | **High** (yours) | **High** | Your own distilled formula sheet — compound vs arithmetic, regression residuals / BLUE / heteroskedasticity, multi-regression, APT, ADF, Granger, Z-spread, Callable bond convexity. This is the single most concentrated interview-ready artifact you own. | **Yes** — clean it up, reorganize by topic, turn it into a real cheat sheet. Current version mixes EN/CN in no order. |
| 4 | `Different Bond Yield Types.Conventions.xlsx` | Finished Read | **High** (yours) | **High** | Real MMY vs conventional yield reconciliation on AXP/GILD/NEE/IBM bonds from Mizuho fills. Rare artifact — actual production-grade FI arithmetic. This alone is a credible resume story. | **Yes** — extend: day-count basis (ACT/360 vs 30/360), accrued interest, dirty vs clean, street yield vs bloomberg yield diff attribution. |
| 5 | `finm36700_2021_lec_6_pricing_factors + pca.pdf` | Good Read | **High** | **Med-High** | Fama-French, momentum, APT, CCAPM, PCA appendix. Correct level for factor-model intuition and interview questions on pricing factors. | **Yes** for factor-land; rates factor models (level/slope/curvature PCA on yield curves) is a direct extension — build it. |
| 6 | `Improving the Accuracy of Tail Risk Forecasts.pdf` (Frank/Lazanas/Menchero, Bloomberg) | To do | **High** | **Med-High** | Serious VaR backtesting methodology inside a multi-factor risk model; fat tails, skew-t, VaR scaling. Directly relevant for ex-ante risk in a macro book. | **Yes** — exactly the kind of paper Millennium/Verition risk research groups write internally. Read and code a toy reproduction. |
| 7 | `No. 1 Optimal Mean Reversion Trading with Transaction Costs and StopLoss Exit.pdf` (Leung & Li) | To do / Pair Trading | **High** | **Med-High** | Rigorous OU + optimal double-stopping + TC + stop-loss. Framework you can actually quote in an RV interview. | **Yes**, paired with No. 2. Then port to UST butterfly spreads or IG CDX vs single-name basis. |
| 8 | `CDS Mean Revert with theory.pdf` (BSIC) | To do | **Med-High** | **Med-High** | CDS basics, curve trades, CDS index arbitrage, CDS vs equity vol pairs trade. Cross-asset macro-RV flavor. | **Yes** if you want the EM/credit angle; pair with CEMBI/EMBI index research (which the folder doesn't cover). |
| 9 | `finm33200_module4.pdf` (Hendricks, linear combos of RVs) | Good Read | **High** | **Med** | Foundational probability/statistics — variance of sums, covariance structure, CLT. Supports everything else. | Only if probability is a weak spot; otherwise skim and move on. |
| 10 | `Resume points.docx` + `resume projs detail write up.txt` + `Cool Proj.docx` | Root / Finished Read | **Med** | **High** (as career asset) | Your current resume bullets and project pool. Content is generic ("conducted statistical analysis", "applying multivariate methods") — insufficient for a systematic macro seat. | **Yes** — rewrite every bullet with (a) specific instrument, (b) signal / modeling approach, (c) quantified outcome (IR, drawdown, t-stat). This is a blocker for interview quality. |

---

## 4. Bottom 5 — deprioritize or delete

| # | Item | Why it's noise |
|---|------|----------------|
| — | `JS 题目.pdf` (Chinese media "实习生月薪14w+" piece) | WeChat news article about Jane Street salary, zero technical content. Keep for morale, not for prep. |
| — | `Finished Read/JS 题目2.txt`, `微信看到的面试题.txt`, `分享一个IF日线策略思路及源码.txt`, `分享三个IC日线策略思路及源码.txt`, `PCA 双因子预测.txt`, `Duration Measures.txt`, `Blog - Moontower.txt`, `Intro to Computational Finance - Website Link.txt`, `Econometrics with R.txt`, `resume projs.txt` | All are single-line files containing only a URL or a file path. Either download the content or delete the stub — stubs clutter the index. |
| — | `Project/Typical Work Day.docx` | Empty file. Ghost. Delete or fill it with an actual narrative ("a typical work day for me" is a real interview question — answer it). |
| — | `/Project/~WRL*.tmp`, `~$*.docx`, `/Good Read/~WRL3731.tmp`, `/Good Read/~$e Liner.docx` | MS Word lock / recovery temp files. Not content. Clean them up. |
| — | `/To do/To read for strat folder/分享一个IF日线策略思路及源码.txt` + similar IF/IC strategy WeChat links | CSI 300 / CSI 500 index futures daily-line strategies from random WeChat accounts. Irrelevant to a US/EM systematic macro seat. |

---

## 5. Per-folder deep dive

### 5.1 `/Finished Read/`
What you've already read and kept. Quality is mixed.

| File | Rank | Quality | Fit | Why / takeaway | Deeper? |
|------|------|---------|-----|----------------|---------|
| `jane_street_interview_guide.pdf` | 2 | High | High | See Top-10 #2. Foundational probability / market-making intuition. | No — you've read it; revisit pre-interview. |
| `Different Bond Yield Types.Conventions.xlsx` | 4 | High | High | See Top-10 #4. Your Mizuho yield convention work. | Yes — extend to day-count, accrued, settlement diffs. |
| `Cool Proj.docx` | ~20 | Med | Med | 7 generic project ideas (stat arb, HFT microstructure, Heston, mean-var + BL, VWAP/TWAP, VIX futures vol, ML asset price prediction). Reads like a ChatGPT brainstorm. None are executed. Use as a menu; pick ONE (statarb or mean-var/BL) and actually build it. | Yes — turn one of these into an actual project with P&L curve, IR, turnover, attribution. |
| `JS 题目.pdf` | Bottom | Low | Low | WeChat article about JS salary. Noise. | No. |
| `JS 题目2.txt`, `微信看到的面试题.txt` | Bottom | N/A | N/A | URL stubs. | No. |

**Folder takeaway:** One great reference (JS guide), one credible resume artifact (bond yield xlsx), one generic project menu. Everything else is drop-able. Folder name lies — these items deserve to be re-read.

---

### 5.2 `/Good Read and Revisit for Go/`
The core study folder. Large, mixed quality. Noticeable duplication across the CTA PDFs, and most content is image-based WeChat screenshots.

| File | Rank | Quality | Fit | Why / takeaway | Deeper? |
|------|------|---------|-----|----------------|---------|
| `finm36700_2021_lec_8_carry.pdf` | 1 | High | High | See Top-10 #1. Rates & FX carry, EH, rate parity — Chicago Booth. | **Yes.** |
| `finm36700_2021_lec_6_pricing_factors + pca.pdf` | 5 | High | Med-High | See Top-10 #5. Fama-French, momentum, APT, PCA. | **Yes** — build yield curve PCA as extension. |
| `finm33200_module4.pdf` | 9 | High | Med | See Top-10 #9. Foundational linear combos of RVs. | Skim. |
| `因子正交分析 (reference for my resume experiene).pdf` | 12 | Med | Med-High | Factor orthogonalization — Gram-Schmidt / residualization of factor exposures. Topic is right (your resume claims "multivariate statistical methods"), but source is a Chinese blog with image-only content. You should be able to re-derive and verbally explain. | **Yes** — own the derivation. Don't cite this file in interview; cite the concept. |
| `相关性，协方差，策略收益和因子收益 (reference for my resume experiene).pdf` | 13 | Med | Med-High | Strategy return vs factor return — variance decomposition, beta vs alpha. Same comment as above: right topic, weak source. | **Yes** — know this cold. |
| `因子开发！.pdf` (16MB) | 14 | Med | Med | Chinese factor development guide. Covers signal construction, IC, IR, turnover. Useful overview; not rigorous. | Read once. |
| `数据处理专题(data neutralize, standardize).pdf` | 15 | Med | Med | Neutralization / standardization / winsorization — daily pre-processing in equity factor work. Generalizes to macro factor work. | Know the 3–4 standard transforms; don't over-study. |
| `常见模型.pdf` | 16 | Med | Low-Med | "Common models" survey — ML grab-bag. Low marginal value given ESL textbook is in the folder. | No. |
| `极值理论（EVT）在VaR与ES计算中的应用.pdf` | 17 | Med | Med | EVT for VaR/ES — Block Maxima and POT, GEV/GPD, shape parameter. Pair with the Bloomberg VaR paper in `/To do/`. | **Yes** if you're pitching a risk/tail-risk angle in interviews. |
| `Sharp Ratio and Probability of Meet Target.pdf` | 18 | Med | Med | Sharpe → probability of hitting a target return. Useful intuition for sizing / horizon choice. | Know the calculation. |
| `Kelly Criterion and Sizing Bet.html` + `Kelly Formula.doc` | 19 | Med | Med | Kelly with edge/odds, half-Kelly, fractional. Classic. Two copies, consolidate. | Know cold for interviews. |
| `CTA - Momentum and PCA.pdf` | 21 | Med | High (topic) | Topic squarely on target role (trend / CTA + dim reduction). Source is WeChat screenshots. | Re-read academic literature instead: Moskowitz-Ooi-Pedersen 2012, Hurst-Ooi-Pedersen "Century of Trend". |
| `CTA - PCA + Mean Reversion.pdf` | 22 | Med | High (topic) | Residualize with PCA, trade mean reversion of residuals. Same quality issue — do the real paper version. | **Yes**, with primary sources. |
| `CTA - PCA Residual+ Mean Reversion.pdf` | 23 | Med | High | Duplicate / continuation of #22. Consolidate. | No. |
| `CTA - Momentum and Smoothing.pdf` | 24 | Med | High (topic) | Smoothing / filtering momentum signals — Kalman / EWMA / moving averages. | Worth understanding the smoothing → lag / variance tradeoff. |
| `CTA - Momentrum 离散变连续处理.pdf` | 25 | Med | Med | Discrete-to-continuous for momentum signals — implementation detail. | Skim. |
| `CTA - 凹凸均线.pdf` | 26 | Med | Med | "Convex / concave moving averages" — Chinese retail indicator. Tangential. | No. |
| `Reason Behind Structural Trade.pdf` | 27 | Med | Med | Reasons behind structural / persistent trades (carry, term premium, risk premia). | Yes, if source is credible — check it. |
| `Math - BS Model.pdf` | 28 | Med | Low-Med | Black-Scholes. Know it, don't over-study for a macro seat. | Skim. |
| `Short Term Sample Hard to Reject.pdf` | 29 | Med | Med | Short samples → low power to reject H0. Classic point; supports backtesting discipline. | Internalize the intuition. |
| `Data Transformation (log).pdf` | 30 | Med | Low-Med | Log transform for returns. Basic. | No. |
| `Median to Standard Deviation.pdf` | 31 | Med | Low | Estimating SD from median / MAD. Niche. | No. |
| `Window Dressing.jpg` / `Pricing Plot.jpg` | 32 | Low | Low | Screenshots. Keep as visual reference. | No. |
| `自动化策略需要考虑到几点因素.pdf` | 33 | Med | Med | "Considerations for automated strategies" — latency, slippage, risk controls. Useful overview. | Skim. |
| `0 coupon bond duration = maturity.txt` / `Duration Measures.txt` | Bottom | N/A | Med (topic) | Empty + URL. | Delete stubs; the concept is covered in FINM 36700 lecture materials. |

**Folder takeaway:** This is your study core, and it has two problems. (1) The high-signal items are 3 Chicago Booth lectures and a handful of your own notes — everything else is WeChat-tier. (2) There's heavy topical duplication on CTA/PCA/momentum across 5–6 near-identical PDFs. Deduplicate, and for each topic force yourself to read **one real academic source** (Moskowitz, Asness, Hurst, Koijen, Pedersen et al.) instead of four WeChat posts.

---

### 5.3 `/Project/`
Theoretically your strongest career asset (project stories = interview fodder). In practice, the weakest folder in the review.

| File | Rank | Quality | Fit | Why / takeaway | Deeper? |
|------|------|---------|-----|----------------|---------|
| `Cool Thinks (try to tie with some portfolio management).doc` | 34 | Med | Med-High | A genuine personal notes file — compound/geometric return, vol drag, Sharpe sizing, correlation estimation via factor models (references HRT Proteus), mean revert vs momentum decomposition via sign of beta, APT construction, term premium, FX carry. Actually useful, but unstructured. | **Yes — this should be the seed for your "Investment Philosophy" prep doc.** Pull the best 6–8 observations into a clean one-pager. |
| `Model - EM Credit Fair Value (Market, Macro Risk Score).pdf` | 35 | Unknown (image) | High (topic) | Title is exactly on target (EM credit fair value model with macro risk score). Content is image-only — couldn't extract text. If this is *your* work, you need a text write-up of it immediately. | **Yes — critical.** Write a 1-pager explaining: data, factors, model form, validation, P&L. This is probably your strongest resume story if written well. |
| `New Strategy to Portfolio add or not check correlation and sharp.pdf` | 36 | Unknown (image) | Med-High | Topic: how to decide whether to add a new strategy — correlation/Sharpe check. Standard question. If this is your framework, put it in words. | **Yes** — write it up. |
| `Proteus and Portfolio Related/HRT Post Talk Proteus Model.pdf` | 37 | Unknown (image) | Med | HRT's Proteus factor model notes. HRT is Hudson River Trading (HFT), which isn't target-role, but the factor-model idea generalizes to correlation estimation for macro books. Tangential. | Skim. |
| `Proteus and Portfolio Related/HRT Data Post (connect new data additional R2 vs cost to new trades in structural alpha).pdf` | 38 | Unknown (image) | Med | Value of new data = incremental R² vs cost. Useful framework. | Skim. |
| `Typical Work Day.docx` | Bottom | Empty | N/A | Empty file. Fill with an actual answer — interviewers ask this. | **Yes — write it.** |

**Folder takeaway:** Your `/Project/` folder should be your single strongest asset, and it is your weakest. You have screenshots of research instead of write-ups of research. For each of the three real items (EM credit, strategy add/not, Cool Thinks), write a clean 1-page narrative with: problem, data, model, result, limitation, follow-up. Without this, you cannot run a second-round research discussion credibly.

---

### 5.4 `/Textbooks/`
Reference material. Good books, not all relevant to the target seat.

| File | Rank | Quality | Fit | Why / takeaway | Deeper? |
|------|------|---------|-----|----------------|---------|
| `Element of quantitative investing - gappy.pdf` (Paleologo) | 11 | High | High | Giuseppe "Gappy" Paleologo — ex-HRT / ex-Millennium risk — "Elements of Quantitative Investing". Among the most practically relevant books for a buyside systematic seat. Factor models, portfolio construction, execution, risk. | **Yes — read cover to cover. Prioritize this over ESL.** |
| `Linear+Algebra+and+Its+Applications+5th+Edition+David+C.+Lay.pdf` | 39 | High | Med | Classic LA reference. Chapter 5-8 (eigenvalues, orthogonality, SVD) is what matters for PCA / factor models / covariance shrinkage. | Yes — target chapters 5, 6, 7. |
| `Elements of Statistical Learning.pdf` | 40 | High | Low-Med | ML canon. Excellent book; **overkill** for a systematic macro seat that will not be doing ML-first research. | Skim only — regression, regularization (ridge/lasso), trees if you want a cross-sectional alpha story. |
| `Linear Algebra. Math102 textbook.pdf` | 41 | Med | Med | Duplicate of Lay coverage, weaker. | Drop — Lay is better. |
| `Vector Calculus 6th edition.pdf` | 42 | High | Low | Vec calc is rarely needed day-to-day in macro RV/carry. Only matters for derivatives pricing / HJM. | Only if going into derivatives seat. |
| `Blog - Moontower.txt` (URL) | 43 | Med (blog) | Med | Kris Abdelmessih's blog — excellent for options/vol/derivatives intuition. Not a textbook. Stop filing as one. | Read selectively, don't commit to full archive. |
| `Econometrics with R.txt` (URL) | 44 | High | High (topic) | Stock & Watson companion — **the right book for a macro quant on time series**. HAC SEs, VAR, cointegration, ARCH/GARCH. | **Yes — treat as a reading target, not a link. Finish chapters 14-16 as your schedule already planned.** |
| `Intro to Computational Finance - Website Link.txt` (URL) | 45 | Med | Med | Zivot CompFinR bookdown. Portfolio theory + R. Overlap with Stock & Watson but less time-series depth. | Second priority vs Econometrics with R. |

**Folder takeaway:** The Gappy book is the most valuable thing in this whole folder and it appears to be untouched. **Read it.** Drop the duplicate LA book. Convert the URL-stubs into actual reading commitments (they're currently just bookmarks).

---

### 5.5 `/To do/`
Reading queue. Some excellent papers here, some noise. Re-prioritize aggressively.

| File | Rank | Quality | Fit | Why / takeaway | Deeper? |
|------|------|---------|-----|----------------|---------|
| `Improving the Accuracy of Tail Risk Forecasts.pdf` | 6 | High | Med-High | See Top-10 #6. | Yes. |
| `To read for strat folder/Pair Trading/No. 1 Optimal Mean Reversion Trading with Transaction Costs and StopLoss Exit.pdf` | 7 | High | Med-High | See Top-10 #7. | Yes. |
| `To read for strat folder/Pair Trading/No. 2 On the Efficacy of Optimized Exit Rule for Mean Reversion Trading.pdf` | 7b | High | Med-High | Follow-on to #7. | Yes. |
| `To read for strat folder/Pair Trading/(Original Document) Pairs Trading with Optimized Positions & Exit Rules.pdf` | 46 | Med | Med-High | Tim Leung's Medium post summarizing the two papers above. Use as TL;DR. | If short on time, read this instead of the papers. |
| `To read for strat folder/Pair Trading/(Original Document 2) A Diversification Framework...` | 47 | Med | Med-High | Leung on diversifying across multiple pairs — risk-parity / correlation-aware allocation. | Yes — natural extension. |
| `To read for strat folder/Pair Trading/(Alternative Short Summary of No 1) Optimal Stopping...Hudson & Thames.html` | 48 | Med | Med | Hudson & Thames blog summary. Same content. | Pick one — don't read three versions. |
| `To read for strat folder/Pair Trading/（Python Pack Tutorial) A Python Package for Optimal Mean Reversion Trading.html` | 49 | Med | Med-High | Hudson & Thames `arbitragelab`. If it still exists, actually code a pair trade with it. | **Yes** — this is the single "do" item to convert theory to P&L. |
| `To read for strat folder/CDS Mean Revert with theory.pdf` | 8 | Med-High | Med-High | See Top-10 #8. | Yes. |
| `To read for strat folder/Long-Short Strategy Overview.pdf` | 50 | Med | Med | LLMQuant blog on long-short equity. Generic. | No — read AQR's systematic L/S papers instead. |
| `To read for strat folder/Equity Implied Vol Cash Dividend.pdf` | 51 | High (Klassen) | Low | Rigorous but scope-drift for macro RV. | Only if targeting a vol/derivatives seat. |
| `To read for strat folder/高频交易 - market impact section.pdf` | 52 | Med | Low-Med | HFT market impact — Aldridge / Almgren-Chriss flavor. Too micro for mid-freq. | Skim the Almgren-Chriss idea only. |
| `To read for strat folder/海通高频因子低频.pdf` | 53 | Med | Low | 海通 equity HFT-to-LF factor report. Wrong asset class + wrong freq for target seat. | Skip. |
| `To read for strat folder/高频因子 海通.pdf` | 54 | Med | Low | Same. | Skip. |
| `To read for strat folder/（Convergence 不converge 转vol trade)因子的发现和检验.pdf` | 55 | Med | Med | "Factor discovery & testing: points, experience, inspiration" — Chinese quant blog. Decent points on IC / IR / overfitting. | Skim — nothing you can't get from López de Prado chapters. |
| `To read for strat folder/Portfolio Analytics - Efficient Portfolio Dimension (PCA clustering).pdf` | 56 | Unknown (image) | Med-High | PCA clustering for portfolio dimension. Relevant — do you actually have content or just title? | Verify content — if valuable, read; else drop. |
| `To read for strat folder/优化 距离.pdf` | 57 | Med | Low | "Optimized distance" — likely DTW / Mahalanobis variant. | Skim. |
| `To read for strat folder/常见随机过程.pdf` | Bottom | Unknown | Med | Common stochastic processes. Stub-like. | Verify content. |
| `To read for strat folder/PCA 双因子资产定价预测.txt` / `PCA 双因子预测.txt` | Bottom | Stub | N/A | Empty + URL. | Drop. |
| `To read for strat folder/均线因子.rtf` | Bottom | Stub | Low | One-line RTF pointing to a weixin URL. | Drop. |
| `To read for strat folder/Model - Probability of Random Event Happen.pdf` | Bottom | Unknown | Low | Stub. | Verify or drop. |
| `To read for strat folder/分享一个IF日线策略思路及源码.txt` / `分享三个IC日线策略思路及源码.txt` | Bottom | N/A | Low | China index-futures daily strategies. Wrong geography/seat. | Drop. |
| `CTA - Math Behind Momentum.pdf` | 58 | Unknown (image) | High (topic) | Title is bang on target (math behind momentum — convergence rates, signal-to-noise). Verify content. | **Yes if real** — else go find Hurst-Ooi-Pedersen. |
| `Two Sigma -WJY Interview.docx` | 59 | Low (notes) | Med | 10 lines of interview notes (factor timing, min pairwise correlation, Bonferroni, BH). Fine seed. | Expand with real prep. |

**Folder takeaway:** Three or four papers here (Frank/Lazanas/Menchero VaR, both Leung papers, CDS-BSIC) are genuinely high-value. Everything else can be triaged hard. Your `/To do/` queue is 20 items deep — cut it to 6 and finish them.

---

### 5.6 Root files

| File | Rank | Quality | Fit | Why / takeaway | Deeper? |
|------|------|---------|-----|----------------|---------|
| `One Liner.docx` | 3 | High | High | See Top-10 #3. Your interview cheat sheet. | **Yes — reorganize and expand.** |
| `Resume points.docx` | 10 | Med | High (career) | See Top-10 #10. Generic language; lacks instrument specificity and quantified outcomes. | **Yes — rewrite every bullet.** |
| `resume projs detail write up.txt` | 60 | ? | ? | File appears nearly empty on inspection. If it's the real source, needs to be populated. | Fill it. |
| `resume projs.txt` | Bottom | Stub | N/A | Contains one path string (`E:\UC ...\需要整理`). Dead. | Drop. |
| `Schedule.docx` | 61 | Med | Med (planning) | Actual schedule plus a dump of chat-GPT study content, resume timeline, exam dates, book chapters, and a reading plan going back to 7/26. Useful historical record of what you've actually done — good for self-awareness, less so as a working doc. | **Yes — create a current 2026-04 → 2026-06 schedule from scratch using the action list in §7.** Don't keep bolting onto the old doc. |
| `CLAUDE.md` | 62 | High | N/A (meta) | Good meta-doc. Keep current. | Update after this review. |

---

## 6. Gaps — what the folder is missing (ranked by how much it blocks the Go)

These are the missing assets that matter most for a systematic mid-freq global macro quant researcher interview.

### 6.1 Critical (block second-round interviews)

1. **UST cash/futures basis mechanics.** CTD, conversion factors, net basis, implied repo rate, gross/net basis carry, delivery option. This is table stakes for any UST-adjacent seat. Nothing in the folder.
2. **Swap spreads and ASW.** Treasury vs IRS, ASW construction, matched-maturity swap spreads, SOFR-UST spread drivers. Nothing.
3. **Curve trades.** 2s10s, 2s5s10s butterfly, DV01-neutral construction, PCA of curve moves (level/slope/curvature). Tangentially touched in FINM lectures, but no dedicated prep.
4. **EM sovereign carry & spread.** EMBI/CEMBI composition, local vs hard currency, carry vs duration decomposition. You have one image-PDF on "EM Credit Fair Value" and nothing else.
5. **Your own project write-ups (narrative form).** The biggest single gap. Without 3-5 one-page polished write-ups of real projects (EM credit fair value; MMY/conventional yield work; a pair trade you've actually backtested), the second round falls apart.
6. **Backtesting methodology at daily freq.** Out-of-sample discipline, walk-forward, transaction costs at real bid/ask, survivorship bias, data-snooping penalties. López de Prado "Advances in Financial Machine Learning" Ch. 7-13 is the reference; not in folder.

### 6.2 Important (block breadth questions)

7. **Term premium / expectations hypothesis — empirical.** The FINM lecture covers theory. No empirical piece (Kim-Wright, ACM term premium).
8. **FX carry baskets.** G10 vs EM, volatility targeting, carry unwind / crisis behavior (2008, 2020). Nothing.
9. **Breakevens / linkers.** TIPS math, real rate vs nominal, BEI decomposition. Nothing.
10. **Trend following — academic canon.** Moskowitz-Ooi-Pedersen 2012 "Time Series Momentum", Hurst-Ooi-Pedersen "A Century of Evidence on Trend-Following Investing", Asness-Moskowitz-Pedersen 2013 "Value and Momentum Everywhere". Not in folder — the CTA PDFs in `/Good Read/` are WeChat summaries, not primary sources.
11. **Systematic portfolio construction.** Risk parity, vol targeting, inverse-vol weighting, HRP. Kelly is there; the operational tools are not.
12. **Event modeling.** Auctions, FOMC, NFP, CPI, ECB — pricing-in, surprise decomposition, residual alpha windows. You listed "event modeling" as a focus — the folder has zero dedicated content.

### 6.3 Nice-to-have

13. **Vol / rate vol surface** (SABR, rate vol term structure). Options-light.
14. **Macro data sources** (FRED, Bloomberg, IMF DOTS, BIS, TIC). A reference sheet of where to get what.
15. **Python/C++ artifacts.** Resume claims both; no code in the folder. At least one clean repo of a backtested strategy should live here (or be linkable to).

---

## 7. Prioritized action list

**Next 7 days (sharpen what you have):**
1. Read `finm36700_2021_lec_8_carry.pdf` — re-derive every carry/FX formula by hand.
2. Read `Element of Quantitative Investing (Gappy).pdf` — Ch. 1-5. This dominates ESL for this seat.
3. Rewrite every bullet in `Resume points.docx` with: instrument, method, quantified outcome. Replace verbs like "conducted", "applied", "engaged" with verbs like "built", "backtested", "shipped".
4. Write up the **EM Credit Fair Value** project as a 1-pager: problem → data → factors → model → validation → P&L → limitation → extension.
5. Clean up `One Liner.docx` — reorganize into four sections: probability/stats, fixed income, factor/portfolio, execution. Remove Chinese/English code-switching within a single line.
6. Delete or fill the ~10 URL-stub and empty-file items listed in Bottom 5 / §5 tables.

**Next 30 days (close the biggest gaps):**
7. UST basis mini-module. Build a one-pager on CTD / implied repo / net basis. Sources: CME delivery-option docs; Tuckman Ch. on UST futures; Kolanovic / McCulley notes if you can find them.
8. Swap spreads / ASW mini-module. Similar one-pager.
9. Curve PCA — compute level/slope/curvature PCA on 2y/5y/10y/30y; write up loadings, variance explained, and one PCA-based RV trade idea.
10. Trend-following primary sources. Read Moskowitz-Ooi-Pedersen 2012 and Hurst-Ooi-Pedersen 2017 in full; replace the WeChat CTA PDFs in your mental index with these.
11. Code a pair trade end-to-end using the Leung framework on a real UST cross-maturity or TIPS-UST breakeven pair. Backtest, report Sharpe / turnover / MDD.
12. Build the Econometrics with R time series chapters (14-16) — cointegration, VAR, HAC SEs — into a Jupyter notebook with actual examples on UST yields.

**Next 90 days (assemble interview stack):**
13. Three polished project one-pagers (EM credit FV; pair trade; UST curve PCA).
14. One credible Python repo on GitHub (the pair trade is the obvious candidate) — clean README, reproducible backtest, risk/performance output.
15. Event-modeling exercise: pick 3 events (NFP, FOMC, 10y auction), measure yield reaction function, residual alpha window. Two-page write-up.
16. Fix the `/Company and People/` descriptions (separate scheduled task already queued).

---

## 8. Scoring rubric used

- **Quality:** High = substantive, rigorous, current, non-duplicative. Med = useful but not rigorous or partially duplicated. Low = shallow, stub, dead link, or noise.
- **Fit:** High = directly used by a systematic mid-freq global macro quant on the buyside. Med = adjacent / supporting. Low = wrong seat, wrong freq, or wrong asset class.
- **Rank:** Global across in-scope folders. 1 = most valuable for the Go; higher numbers = less valuable. "Bottom" = candidate for deletion.
- **Deeper?** Yes = invest more time or build an adjacent artifact. Skim = know the headline, don't spend more than 30 min. No = move on.

---

*End of review — 2026-04-19.*
