# Linear Algebra

## Matrix multiplication — four readings

- $(AB)_{ij} = \sum_k A_{ik}B_{kj}$ — row $i$ of $A$ dotted with column $j$ of $B$
- **column view**: $Ax = \sum_j x_j a_j$ — a *linear combination of $A$'s columns*, weights from $x$
  - so $Ax$ always lands in the **column space** of $A$
  - $Ax = b$ solvable $\iff$ $b \in \text{col}(A)$
- **row view**: $x'A$ — linear combination of $A$'s rows
- **outer product view**: $AB = \sum_k a_k b_k'$ — sum of rank-1 matrices
  - this is the view that makes SVD and low-rank approximation obvious

## Rank, span, null space

- $\text{rank}(A)$ = number of linearly independent columns = dimension of $\text{col}(A)$
  - also equals number of independent *rows* — row rank = column rank, always
- $\text{null}(A) = \{x : Ax = 0\}$
- **rank–nullity**: $\text{rank}(A) + \dim\text{null}(A) = n$ (number of columns)
  - intuition: each column either adds a new direction to the output, or adds a degree of freedom to the null space
- $A$ is invertible $\iff$ full rank $\iff$ null space is $\{0\}$ $\iff$ $\det A \neq 0$
- **finance**: sample covariance $\frac{1}{T-1}\tilde X'\tilde X$ has rank $\le \min(T-1, n)$
  - with $n=1000$ assets and $T=500$ days, rank $\le 499$ — **singular**
  - so there exists $w \neq 0$ with $\tilde X w = 0$: a portfolio with *predicted variance exactly zero*

## Inner products, norms, orthogonality

- $\langle u,v\rangle = u'v = \sum_i u_iv_i$, $\quad \|u\| = \sqrt{u'u}$
- $\cos\theta = \dfrac{u'v}{\|u\|\|v\|}$, orthogonal $\iff u'v = 0$
- **Cauchy–Schwarz**: $|u'v| \le \|u\|\|v\|$ $\Rightarrow$ $|\rho| \le 1$
- random variables form an inner product space with $\langle X,Y\rangle = \text{Cov}(X,Y)$, $\|X\| = \sigma_X$
  - so **correlation is literally the cosine of an angle**
  - $\text{Var}(X+Y) = \sigma_X^2 + \sigma_Y^2 + 2\rho\sigma_X\sigma_Y$ is the law of cosines
  - $\rho = 0 \Rightarrow$ Pythagoras: risks add in quadrature
- must **demean first** — otherwise $\|X\|^2 = E[X^2] \neq \text{Var}(X)$, and the geometry is wrong

## Projection

- project $y$ onto $\text{col}(A)$: $\hat y = Py$ with
  $$P = A(A'A)^{-1}A'$$
- properties: $P' = P$ (symmetric), $P^2 = P$ (idempotent — projecting twice does nothing)
- residual $e = (I-P)y$ is **orthogonal** to $\text{col}(A)$: $A'e = 0$
  - this *is* the normal equation $A'A\beta = A'y$, i.e. OLS
  - $\hat\beta = (A'A)^{-1}A'y$
- eigenvalues of a projection are only 0 and 1 (dimension of the 1-eigenspace = rank)
- **finance**: neutralising a portfolio to exposures $B$ is $w^\perp = (I - B(B'B)^{-1}B')w$
  - minimum-distortion weights satisfying $B'w = 0$
  - $B = \mathbf 1$ $\Rightarrow$ plain demeaning (dollar neutrality)
  - transfer coefficient $= \text{Corr}(w, w^\perp)$ = cosine of how far the constraints rotated you

## Eigenvalues and eigenvectors

- $Av = \lambda v$ — a direction the matrix only *stretches*, never rotates
- solve $\det(A - \lambda I) = 0$ for $\lambda$, then $(A-\lambda I)v = 0$ for $v$
- $\sum_i \lambda_i = \text{tr}(A)$, $\quad \prod_i \lambda_i = \det(A)$
  - fast sanity check on any hand computation
- $A^k$ has eigenvalues $\lambda^k$, same eigenvectors; $A^{-1}$ has $1/\lambda$
  - so **inverting amplifies the smallest eigenvalue** — the source of all ill-conditioning pain

## Symmetric matrices — spectral theorem

- $A$ real symmetric $\Rightarrow$ eigenvalues **real**, eigenvectors **orthogonal**
  $$A = Q\Lambda Q', \qquad Q'Q = I$$
- covariance matrices are symmetric, so this always applies — no complex arithmetic, clean orthogonal basis
- orthogonality is what makes variance shares **additive**: each PC captures variance no other touches
- use `np.linalg.eigh`, not `eig` — exploits symmetry, returns real, guarantees orthogonal

## Positive (semi-)definite

- PSD: $x'Ax \ge 0 \;\forall x$ $\iff$ all $\lambda_i \ge 0$
- PD: strict, $\iff$ all $\lambda_i > 0$ $\iff$ invertible and PSD
- any covariance matrix is PSD: $w'\Sigma w = \text{Var}(w'r) \ge 0$
- $A'A$ is always PSD for any $A$
- **why it matters**: $w'\Sigma w$ PSD $\Rightarrow$ MVO objective is concave $\Rightarrow$ convex problem, global optimum
  - a badly estimated $\Sigma$ with negative eigenvalues makes the problem **non-convex** and the solver returns nonsense
  - fix: clip eigenvalues at 0, or shrink

## Quadratic forms

- $q(x) = x'Ax$ — scalar. Only the symmetric part of $A$ matters
- $\nabla_x (x'Ax) = 2Ax$ for symmetric $A$; $\quad \nabla_x(b'x) = b$
- **portfolio variance** $\sigma_p^2 = w'\Sigma w$
  - $\Sigma w$ is an $n$-vector: $(\Sigma w)_i = \text{Cov}(r_i, r_p)$ — **marginal** risk
  - $\dfrac{\partial\sigma_p}{\partial w_i} = \dfrac{(\Sigma w)_i}{\sigma_p} = \rho_{i,p}\,\sigma_i$ — chain rule through the square root
  - total contribution $RC_i = w_i(\Sigma w)_i/\sigma_p$, and $\sum_i RC_i = \sigma_p$ **exactly** (Euler, vol is homogeneous degree 1)
- expanding a *change* in both $w$ and $\Sigma$:
  $$\Delta V = \underbrace{2w_0'\Sigma_0\Delta w + \Delta w'\Sigma_0\Delta w}_{\text{position}} + \underbrace{w_0'\Delta\Sigma\,w_0}_{\text{risk model}} + \underbrace{2w_0'\Delta\Sigma\Delta w + \Delta w'\Delta\Sigma\Delta w}_{\text{interaction}}$$
  - just $(a+b)(c+d)$ expanded; the interaction term is the "corner square" and is order-dependent

## Matrix calculus — the ones worth memorising

| expression | gradient w.r.t. $x$ |
|---|---|
| $b'x$ | $b$ |
| $x'Ax$ ($A$ sym.) | $2Ax$ |
| $\|x\|^2$ | $2x$ |
| $\|y - Ax\|^2$ | $-2A'(y-Ax)$ |

- MVO: $\max_w \alpha'w - \frac{\lambda}{2}w'\Sigma w$ $\Rightarrow$ $\alpha - \lambda\Sigma w = 0$ $\Rightarrow$ $w^* = \frac{1}{\lambda}\Sigma^{-1}\alpha$
  - first-order condition $\Sigma w = \alpha/\lambda$ says **marginal risk per unit alpha is constant across positions**
  - that ratio is a diagnostic you can run on *any* book, optimized or not

## SVD

- works for **any** $m\times n$ matrix, square or not, full rank or not
  $$A = U\Sigma V', \qquad U,V \text{ orthogonal},\ \Sigma \text{ diagonal} \ge 0$$
- $\sigma_i = \sqrt{\lambda_i(A'A)}$; columns of $V$ are eigenvectors of $A'A$, columns of $U$ of $AA'$
- rank = number of nonzero singular values
- **low-rank approximation** (Eckart–Young): truncating to the top $k$ singular values gives the best rank-$k$ approximation in Frobenius and spectral norm
  - outer-product view: $A = \sum_i \sigma_i u_i v_i'$, keep the biggest terms
- PCA *is* SVD on the demeaned data matrix — numerically better conditioned than forming $X'X$ first
- pseudoinverse $A^+ = V\Sigma^+U'$ — least-squares solution when $A$ isn't invertible
  - for full column rank, $A^+ = (A'A)^{-1}A'$, the OLS formula

## Condition number

$$\kappa(A) = \frac{\sigma_{\max}}{\sigma_{\min}} = \frac{\lambda_{\max}}{\lambda_{\min}} \text{ (symmetric PD)}$$

- measures how much $A^{-1}$ amplifies error in the input
- $\kappa \approx 10^3$: lose ~3 digits. $\kappa > 10^6$: the solution is noise
- **finance**: near-collinear assets $\Rightarrow$ tiny $\lambda_{\min}$ $\Rightarrow$ $\Sigma^{-1}$ explodes $\Rightarrow$ MVO **error-maximizes**
  - it loads into the direction estimated least reliably, because that's where apparent Sharpe is highest
  - two assets $\rho=0.99$, $\sigma=10\%$, $\alpha = 3\%, 2\%$: $SR = 1.73$; at $\rho=0.999$, $SR = 5.03$ — unbounded as $\rho\to1$
- fixes: Ledoit–Wolf shrinkage, factor model $\Sigma = B\Omega B' + D$ (diagonal $D$ floors the eigenvalues), position/gross limits
  - **always log the condition number** alongside any optimizer output

## Decompositions — what each is for

| | form | use |
|---|---|---|
| **LU** | $A = LU$ | solving $Ax=b$, general square |
| **Cholesky** | $A = LL'$, $A$ PD | ~2× faster than LU; **simulating correlated normals** ($x = Lz$); also a PD check — fails iff not PD |
| **QR** | $A = QR$ | least squares without forming $A'A$ (squares the condition number) |
| **Eigen** | $A = Q\Lambda Q'$ | symmetric only; PCA, matrix powers |
| **SVD** | $A = U\Sigma V'$ | anything; most numerically stable |

## Woodbury / Sherman–Morrison

$$(A + UCV)^{-1} = A^{-1} - A^{-1}U(C^{-1} + VA^{-1}U)^{-1}VA^{-1}$$

- turns an $n\times n$ inversion into an $m\times m$ one when the update has low rank $m$
- **factor models**: $\Sigma = B\Omega B' + D$ with $D$ diagonal
  - inverting directly is $O(n^3)$; Woodbury makes it $O(nm^2)$ — an $m\times m$ inverse plus diagonal ops
  - with $n = 5000$ bonds and $m = 50$ factors that's the difference between feasible and not
  - this is *why* risk models are built in factor form, not just for interpretation

## Trace

- $\text{tr}(A) = \sum_i A_{ii} = \sum_i \lambda_i$
- **cyclic**: $\text{tr}(ABC) = \text{tr}(BCA) = \text{tr}(CAB)$ — lets you move things around to simplify
- $\text{tr}(A'A) = \sum_{ij}A_{ij}^2 = \|A\|_F^2$
- used to define total variance in PCA: $\text{tr}(\Sigma) = \sum_i\lambda_i$, so variance share $= \lambda_j/\text{tr}(\Sigma)$

## Determinant

- $\det(A) = \prod_i\lambda_i$ — signed volume scaling of the linear map
- $\det(AB) = \det A\det B$, $\quad \det(A^{-1}) = 1/\det A$
- $\det = 0 \iff$ singular $\iff$ some $\lambda = 0$ $\iff$ the map collapses a dimension
- rarely computed numerically (overflows, poor conditioning signal) — use the condition number instead

---

## PCA — the whole thing in one place

1. data $X$ is $T\times n$, **demean each column**: $\tilde X = X - \mathbf 1\bar x'$
2. $\Sigma = \frac{1}{T-1}\tilde X'\tilde X$ (or SVD $\tilde X$ directly — better conditioned)
3. $\Sigma = Q\Lambda Q'$; sort eigenvalues descending
4. **eigenvector = a portfolio**, **eigenvalue = that portfolio's variance**
5. scores $s = \tilde Xv$; variance share $= \lambda_j/\sum\lambda_k$
6. fix signs (eigenvectors defined up to $\pm$) by anchoring, e.g. force $\sum_i v_{i1} > 0$

- **covariance vs correlation PCA**: standardising first gives every variable equal weight
  - covariance $\to$ hedging, dollar P&L variance (high-vol names *should* dominate)
  - correlation $\to$ factor structure, regime/crowding signals (vol differences are a nuisance)
- **effective dimension**: $p_j = \lambda_j/\sum\lambda_k$, $\quad n_{\text{eff}} = 1/\sum_j p_j^2$
  - a yield curve with $\lambda$ shares 88/9/2 has $n_{\text{eff}} \approx 1.3$ — ten tenors, ~1.3 degrees of freedom
- **absorption ratio** $= p_1$ (or $\sum_{j\le k}p_j$): rises when everything moves together — a fragility/crowding indicator
- yield curve PCs are famously stable: **level / slope / curvature** at roughly 88 / 9 / 2 %
  - caution: a butterfly is PC1- and PC2-neutral *by construction*, so a 3-factor model reports ~zero risk on exactly the trade that has risk $\Rightarrow$ use KRDs for risk, PCA for trade construction

---

## Interview one-liners

- **why is correlation bounded by 1?** Cauchy–Schwarz; it's a cosine
- **why are PCs orthogonal?** spectral theorem on a symmetric matrix
- **why does the eigenvalue equal variance?** $\text{Var}(Xv) = v'\Sigma v = \lambda v'v = \lambda$ for unit $v$
- **why can't you invert the sample covariance with $T < n$?** rank $\le T-1 <n$, so it's singular — and you can build a portfolio it claims has zero risk
- **why does MVO blow up?** $\Sigma^{-1}$ amplifies $1/\lambda_{\min}$, and $\lambda_{\min}$ is the least reliably estimated direction
- **why factor models?** floors the eigenvalues (diagonal $D$), and Woodbury makes inversion tractable
- **why demean?** without it you're computing second moments, not covariance — the geometry (lengths and angles) is wrong
- **rank of $\Sigma = B\Omega B' + D$?** full, because of $D$ — that's precisely the point
