# CLAUDE.md — New Go

## Overview

This is **HX's home directory** for quantitative research and job preparation. The contents here are mostly **fundamental, generic knowledge base** material. At some point a remote branch will appear containing actual work-related contents — memory can be updated at that time.

## Goal

Preparing for a **systematic, mid-frequency, global macro quantitative researcher** role on the buyside. Focus areas:
- **Relative value & basis trades**
- **Event modeling**
- **CTA / trend-following**
- **Fundamental carry and rolldown** across a variety of fixed income instruments, with emphasis on **US Treasuries** and the **emerging market** space

## Purpose

This is a study folder for **quantitative research** topics and **job interview preparation**, covering quant finance concepts, strategy research, company/people intel, and resume materials.

## Folder Structure

### `/Archive/`
Old or superseded files (e.g. schedule copies).

### `/Company and People/`
Company research and networking materials for the quant job search — firm overviews, LinkedIn profiles, job descriptions, and contact lists. Includes firms like Millennium, D.E. Shaw, Walleye, Tudor, QRT, TSY Capital, Alphadyne, PDT, and others.

### `/Finished Read/`
Materials already reviewed — Jane Street interview guide, bond yield conventions spreadsheet, interview questions (JS 题目), and misc interview problems.

### `/Good Read and Revisit for Go/`
Core study materials worth revisiting. Topics include:
- **CTA / Momentum**: momentum strategies, PCA + mean reversion, smoothing, 凹凸均线
- **Fixed Income**: zero coupon bond duration, duration measures, carry (FINM 36700)
- **Risk & Sizing**: Kelly criterion, Sharpe ratio vs probability of meeting target, EVT for VaR/ES
- **Factor Research**: factor development (因子开发), factor orthogonalization, correlation/covariance of strategy & factor returns
- **Math / Models**: Black-Scholes, pricing factors + PCA (FINM 36700), data transformation (log), common models (常见模型)
- **Data Processing**: neutralization, standardization
- **Other**: window dressing, structural trade reasoning, short-term sample rejection, automated strategy considerations

### `/Project/`
Project write-ups and portfolio-related work — EM credit fair value model (macro risk score), strategy addition via correlation/Sharpe check, HRT Proteus model discussion, typical work day description.

### `/Textbooks/`
Reference textbooks and learning resources — Elements of Statistical Learning, Linear Algebra (Lay), Vector Calculus, Element of Quantitative Investing (Gappy), Moontower blog, Econometrics with R, Intro to Computational Finance.

### `/To do/`
Materials queued for reading. Includes CTA math behind momentum, tail risk forecasting, portfolio analytics (PCA clustering), and a subfolder `To read for strat folder/` with papers on CDS mean reversion, equity implied vol, long-short strategy overview, PCA dual-factor pricing, high-frequency factors, market impact, and more.

### Root Files
- **Resume points.docx** — resume bullet points
- **resume projs.txt / resume projs detail write up.txt** — project descriptions for resume
- **One Liner.docx** — one-liner summaries (likely for networking/elevator pitches)
- **Schedule.docx** — study or interview schedule

## Sample folder judgement

A task running on the "New Go" folder — goal is to judge each folder/file on two axes (quality, and fit to a systematic mid-frequency global macro quant researcher role: RV/basis, event, CTA/trend, FI carry/rolldown, UST + EM focus) and produce a consolidated review.

**Scope**: walks E:\New Go, skips /Archive/ and /Company and People/.

**Scoring**: every item gets a global relevance rank (1 = most relevant), a High/Med/Low quality grade, a blunt 1–3 sentence "why it relates or not", and a go-deeper yes/no/maybe flag.

**Output**: one consolidated markdown file with:
- Executive summary
- Target role recap
- Top 10 cross-folder items
- Bottom 5 / deprioritize
- Per-folder deep dive tables
- Gaps — topics the role requires that aren't in the folder
- Prioritized action list

**Delivery**: saves a copy to E:\New Go\ and commits the review (`new-go-review-2026-04-19.md`) to the root of the Github repo at E:\Github Go (tracking main on github.com/goodybooy/gogo).

**Side flag**: `github_token.txt` is sitting uncommitted in the repo root and not gitignored — worth rotating and ignoring if it's still a live token.
