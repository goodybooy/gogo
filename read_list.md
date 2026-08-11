Hub A — Friend A
URL: https://objects-lighter-viewers-personal.trycloudflare.com
Token: QlCcQ5cUpItnCcpPYbgOIz9KcW3J5zNGDxVkrQolwJc

Hub B — Friend B
URL: https://auckland-announcements-cotton-species.trycloudflare.com
Token: qDQArsOmA3rVzzHTE8FlMqsLgVYsoTkc6Hrvh0V0LRQ

https://thehedgefundjournal.com/blackstone-credit-acquires-dci/



no leakage of data, stored in date files instead of front load into dataframe

check signal decay,  contemporaneous R2 vs signal R2

survivorship (defaulted bonds removed form index)

have a prior of why it works and what are the drivers before backtest



quintile, proportional to inverse-normal of signal, proportional to signal, equal risk contribution (cross asset), inverse vol

quadratic optimization max alpha - vol - tcost (vol term is the quadratic one)

MVO is one type of QP, but in reality no one use MVO for expected return, but rather replace with 

alpha = IC x sigma x z and w* = 1/lambda*simga^-1 *alpha

alpha must be in return unit (oas(maybe yes maybe not) + carry + 0.5*cheapness(RC or to FVS)*sprd_dur *

adjustment: analyst recommendation, shift in cheapness if OW etc...

## Grinold's Alpha Forecasting Formula

$$s_i = \mathrm{IC} \times \sigma_i \times z_i$$

where $z_i$ is your signal as a cross-sectional z-score, $\sigma_i$ is the asset's return volatility, and IC is the information coefficient — the correlation between your signal and subsequent realized returns.

Every piece has a job: $z_i$ **gives the shape** (who's ranked where), $\sigma_i$ **gives the scale** (a high-vol currency moves more per unit of edge), **IC gives the confidence** (how much of that movement you can actually claim).

### Worked example

Suppose your IC is **0.03** (realistic for a decent FX signal; 0.05+ is strong, 0.10 is suspicious). BRL vol is 12% annualized, and BRL ranks 2nd of 20 → $z = 1.64$.

$$s_{\mathrm{BRL}} = 0.03 \times 0.12 \times 1.64 = 0.0059$$

**But careful — units.** That's the expected return over *one forecast horizon*, if IC was measured against that horizon's returns. If you computed IC against daily returns, this is a daily number: 0.59bp/day. Annualize:

$$0.0059 \times 252 = 1.49 = \textbf{1.49\% per year per unit weight}$$

### Notes

Rank-based signals convert to a z-score by applying the inverse normal distribution to rank/percentile.

$$\mathrm{IC}_t = \mathrm{Corr}\left(z_{i,t},\ r_{i,t+1}\right) \quad \text{across } i \text{ at each date } t$$

Compare this with proportional stocks/APT.

---

## Web Browse Fetch — 2026-08-07

- Serenity (@aleabitoreddit): 08-07 08:50 UTC — 称赞 Rosenblatt 对光模块板块渠道调研靠谱，$AAOI/$LITE/$SIVE 等"激光派对"已在预期时间窗口附近回暖
- Serenity (@aleabitoreddit): 08-07 12:55 UTC — 补充 $AAOI 财报要点：DSP/TIA 瓶颈利好 $MXL/$SMTC/$MTSI，指引 Q4 营收超 $500M
- Serenity (@aleabitoreddit): 08-07 20:21 UTC — 白宫加码关键矿产：$WWR 获 $25M（石墨）、$SRL(ASX) 获 $400M（钪）、$FEAM 获 $8M（硼）、$HREE 获 $4.8M（磁体稀土）
- （Julian Petroulas、Alex Moon、Benjamin Hedge 本次均无新内容，未包含在本次记录中。）

---

## Web Browse Fetch — 2026-08-06

- Serenity (@aleabitoreddit): 08-06 01:23 UTC — $VIAV 反驳CPO延迟称"全是胡扯"，已有CPO测试订单、本季度录得营收12月加速，1.6T明年与800G打平
- Serenity (@aleabitoreddit): 08-06 04:12 UTC — $AEVA 成为CPO/NPO光源玩家，因签JDA盘后+18.26%，对$SIVE等上游供应商正面
- Serenity (@aleabitoreddit): 08-06 07:13 UTC — 随想帖，正文订阅墙锁定，无ticker
- Serenity (@aleabitoreddit): 08-06 09:56 UTC — 调侃没人会念 $AAOI（Applied Optoelectronics）名字的玩笑帖
- （Julian Petroulas、Alex Moon、Benjamin Hedge 本次均无新内容，未包含在本次记录中。）

---

## Web Browse Fetch — 2026-08-05

- Serenity (@aleabitoreddit): 08-05 00:16 UTC — $RKLB 获美国太空军 $397M 合同，建造 Flatellite 卫星并由 Neutron 火箭发射
- Serenity (@aleabitoreddit): 08-04 11:09 UTC — 特朗普政府起草禁令拟禁中国光模块/DC器件，利好西方供应链 $AAOI/$SIVE/$LITE/Coherent，打击 Innolight/Eoptolink
- Serenity (@aleabitoreddit): 08-04 12:11 UTC — Bessent 称周二三或达成开放霍尔木兹海峡协议，市场或喜闻
- （Julian Petroulas、Alex Moon、Benjamin Hedge 本次均无新内容，未包含在本次记录中。）


