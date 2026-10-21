# Sieve Capital Platform — Product Requirements and Technical Architecture (v1.0)

Once approved, this document will be saved to the project as `docs/PRD.md`, plus a formatted PDF copy in Files. The website and certificate tool stay as they are.

---

## 1. Product vision

Sieve Capital is building an India-first quantitative market-intelligence platform. It will turn domestic market data (NSE/BSE cash and F&O, IPO and SME filings, SEBI/RBI disclosures, multilingual Indian news) and relevant global macro news into ranked, explainable signals. Institutional users will reach those signals through a research terminal, an API, and later through risk-aware execution workflows.

**Positioning against existing institutional tools**

| Product | Strength | Gap Sieve targets |
|---|---|---|
| Bloomberg Terminal / LSEG Workspace | Broad global data and news | Expensive, global-first, weak on Indic-language news and SME/IPO filings, no native signal scoring |
| Capitaline / ACE Equity / CMIE Prowess | Indian fundamentals | Fundamentals-focused, batch updates, no real-time event intelligence |
| Sensibull / Opstra / Quantsapp | Retail F&O analytics | Retail-focused, not institutional-grade, no news-to-signal layer |
| RavenPack / AlphaSense | NLP on news and documents | Global coverage, thin on India and Indic languages, no exchange-native F&O context |
| In-house desk stacks | Fully custom | Costly to build and maintain; Sieve provides this as a managed platform |

**Differentiators:** Indic NLP (Hindi, Marathi, Gujarati, Tamil, Bengali and more), filing-to-signal latency measured in seconds, F&O-aware context (OI, PCR, IV, India VIX regimes), explainable scores with source links, and audit trails designed for SEBI compliance.

## 2. Users and personas

1. **Quant researcher (AIF Cat III / prop desk):** needs clean history, a feature store, backtesting, and API access.
2. **Fundamental PM (PMS / mutual fund):** needs event alerts, filing summaries, and IPO/SME diligence.
3. **Risk officer:** needs exposure, concentration, event-risk dashboards, and audit logs.
4. **Compliance officer:** needs access logs, data lineage, restricted lists, and report exports.
5. **Platform admin (Sieve):** handles tenants, entitlements, billing, data-vendor health, and certificates (already built).

## 3. Scope by phase

| Phase | Deliverable | Exit criteria |
|---|---|---|
| 0 — Now | Public site, certificate verification | Live |
| 1 — Research MVP (4–6 months) | Ingestion of NSE/BSE end-of-day and corporate filings, news NLP, signal scoring v1, internal research terminal | Signals backtested on 5+ years of history; latency measured |
| 2 — Private beta | Multi-tenant terminal, REST/WebSocket API, Python SDK, alerts | 3–5 design partners under NDA; 99.5% uptime |
| 3 — Institutional | Real-time feeds from an authorised vendor, risk module, compliance pack, SSO, SOC 2 Type I | Legal and regulatory readiness, signed contracts |
| 4 — Execution (optional) | OMS/EMS integration through a registered broker, pre-trade risk | Only after SEBI approvals and broker partnership |

Regulatory note: distributing signals may require registration as a SEBI Research Analyst (RA Regulations 2014), or acting as a tech vendor to registered entities. Live exchange data needs NSE/BSE data-vendor licences. Algo execution must go through a broker under SEBI's algo framework. Legal counsel must confirm this before Phase 2.

## 4. Functional requirements

### 4.1 Data ingestion
- Exchange data: NSE/BSE bhavcopy, F&O bhavcopy, OI, participant-wise OI, FII/DII flows, bulk/block deals, index constituents, India VIX. Phase 3 adds tick/snapshot feeds through a licensed vendor (e.g. TrueData, Global Datafeeds, NSE Data & Analytics).
- Filings: NSE/BSE corporate announcements (XBRL + PDF), SEBI orders and circulars, RBI press releases and MPC statements, DRHP/RHP for IPO and SME issues, MCA data.
- News: licensed Indian wires plus RSS from Indian publishers (English and Indic), global macro wires (Reuters/Bloomberg-class vendors via licence), and an economic calendar.
- Alternative data (later): GST/e-way bill aggregates, satellite/port activity, app/web traffic, job postings.
- Requirements: idempotent ingestion, schema versioning, per-source SLAs, dead-letter queues, and lineage IDs on every record.

### 4.2 Intelligence and NLP
- Language detection and translation (IndicTrans2-class models).
- Entity resolution to ISIN, NSE symbol, BSE code and the corporate group graph.
- Event classification taxonomy: earnings, guidance, M&A, pledge changes, promoter buying/selling, auditor resignation, SEBI action, rating change, order wins, plant shutdowns, policy and regulatory events.
- Sentiment and novelty scoring, deduplication, and source credibility weighting.
- LLM summarisation with citations, guarded against hallucination (summaries must trace back to their source).

### 4.3 Signal engine
- Feature store: price/volume, F&O (OI change, PCR, IV skew, max pain), flows, and event features.
- Models: event-impact regression, regime detection (India VIX, breadth), and cross-asset correlation (USDINR, crude, US yields, GIFT Nifty).
- Output: `signal {instrument, horizon, direction, score 0–100, confidence, drivers[], sources[], model_version}`.
- Backtesting with point-in-time data, no look-ahead bias, realistic costs (STT, stamp duty, exchange fees, GST, slippage), and walk-forward validation.
- Model registry, champion/challenger testing, drift monitoring.

### 4.4 Research terminal (web app)
- Watchlists, an instrument page (chart, events timeline, filings, signals, F&O chain), and a global event feed with filters.
- IPO/SME centre: DRHP summaries, subscription data, peer comparisons, red-flag checklist.
- Screener, an alert builder (rules plus signal thresholds) delivered by email, webhook, Slack/Teams or Telegram, and notebooks (hosted JupyterHub) for quants.
- Keyboard-first UI, sub-second search, and the current design system (paper/ink, serif display, monospace for numbers).

### 4.5 API and SDK
- REST (`/v1/instruments`, `/v1/signals`, `/v1/events`, `/v1/filings`, `/v1/fno/chain`, `/v1/backtests`), WebSocket streams, and bulk Parquet exports to S3.
- Python SDK (`sieve`), with TypeScript to follow. OpenAPI spec and per-tier rate limits.

### 4.6 Risk and compliance
- Portfolio upload/sync, exposure by sector/group/factor, event-risk heatmap, and F&O margin estimates (SPAN-like).
- Restricted/insider lists, a Chinese-wall entitlement model, immutable audit logs, data-retention policy, and report exports.

### 4.7 Platform and admin
- Multi-tenant orgs, RBAC (owner, admin, analyst, viewer, compliance), SSO (SAML/OIDC), MFA, and IP allowlists.
- Entitlements per dataset/feature, usage metering, and billing with GST-compliant invoices.
- Certificate service: the existing verification feature, extended with signed QR proofs (see 6.6).

## 5. Non-functional requirements

| Area | Target |
|---|---|
| Filing-to-signal latency | p95 under 5 s (Phase 3) |
| Market tick to feature | p95 under 50 ms (Phase 3) |
| API latency | p95 under 150 ms (REST), under 30 ms fan-out (WebSocket) |
| Availability | 99.5% beta, 99.9% institutional, during 09:00–16:00 IST |
| Data residency | Primary in India (AWS ap-south-1 Mumbai, DR ap-south-2 Hyderabad) |
| Security | ISO 27001 / SOC 2 path, encryption at rest (KMS) and in transit (TLS 1.3), secrets in a vault |
| Compliance | DPDP Act 2023, SEBI cyber-security and cyber-resilience framework (CSCRF), CERT-In 6-hour incident reporting |
| Recovery | RPO 5 min, RTO 1 h |

## 6. System architecture

```text
             +-------------------- Edge ---------------------+
 Users ----> | CDN/WAF (CloudFront + Shield) -> API Gateway  |
             +-----------------------------------------------+
                     |                         |
              Web terminal (React)     Public API / WebSocket
                     |                         |
             +---------------- Service mesh (EKS) ------------------+
             | identity | entitlements | instrument-master          |
             | ingest-*  -> Kafka -> normalizer -> nlp-pipeline     |
             | feature-svc -> signal-svc -> alert-svc -> notify-svc |
             | backtest-svc | risk-svc | compliance-audit-svc       |
             | search-svc | billing-svc | certificate-svc           |
             +------------------------------------------------------+
                     |
   Data: Kafka/Redpanda | PostgreSQL | ClickHouse/TimescaleDB | S3 + Iceberg
         Redis | OpenSearch | Feature store (Feast) | Model registry (MLflow)
```

### 6.1 Microservices

| Service | Responsibility | Stack | Store |
|---|---|---|---|
| gateway | Auth, rate limits, routing | Envoy / Kong | Redis |
| identity-svc | Users, orgs, SSO, MFA | Keycloak or Auth0/WorkOS | Postgres |
| entitlement-svc | Dataset/feature permissions, metering | Go | Postgres, Redis |
| instrument-master | ISIN/symbol/code mapping, corporate actions, index membership | Go | Postgres |
| ingest-exchange | Bhavcopy, OI, flows, vendor ticks | Go / Rust | Kafka, S3 |
| ingest-filings | NSE/BSE/SEBI/RBI/MCA scraping + XBRL parse | Python | Kafka, S3 |
| ingest-news | Wires, RSS, Indic publishers | Python | Kafka |
| normalizer | Schema validation, dedupe, lineage | Python (Faust) / Flink | Kafka |
| nlp-pipeline | Translation, NER, event classification, sentiment, summarisation | Python, PyTorch, vLLM on GPU | OpenSearch, Postgres |
| feature-svc | Online/offline features | Python, Feast | Redis, Iceberg |
| signal-svc | Model inference, scoring, explanations | Python / Rust | ClickHouse |
| backtest-svc | Point-in-time simulation, cost model | Python (Polars, vectorbt-style) on Ray | Iceberg |
| alert-svc | Rule evaluation on streams | Go / Flink | Postgres |
| notify-svc | Email, webhook, Slack, Telegram | Node | Postgres |
| market-stream-svc | WebSocket fan-out | Go / Elixir | Redis Streams |
| search-svc | Full-text and semantic search | OpenSearch + pgvector | — |
| risk-svc | Exposure, margin estimates, event risk | Python | ClickHouse |
| compliance-audit-svc | Immutable audit logs, restricted lists | Go | Append-only Postgres + S3 Object Lock |
| billing-svc | Plans, usage, GST invoices | Stripe/Razorpay | Postgres |
| certificate-svc | Intern certificate issue/verify, signed QR | Existing Lovable Cloud backend | Postgres |
| research-notebooks | Hosted Jupyter for quants | JupyterHub on K8s | S3 |

### 6.2 Data platform
- Streaming: Kafka (MSK) or Redpanda, Avro schemas in a schema registry.
- Time series: ClickHouse for ticks and signals; TimescaleDB as an alternative.
- Lakehouse: S3 + Apache Iceberg, point-in-time snapshots, queried with Trino/DuckDB.
- Orchestration: Dagster or Airflow for batch (EOD, filings backfill).
- Data quality: Great Expectations checks; lineage via OpenLineage.

### 6.3 ML/LLM platform
- MLflow model registry, Ray for training, GPU inference (L4/A10G) through vLLM.
- Self-hosted open models for confidentiality, with an LLM gateway for vendor models where contracts allow.
- Evaluation sets per event type; human-in-the-loop labelling (Label Studio).

### 6.4 Frontend
- React + TypeScript, TanStack Query, AG Grid for tables, TradingView Lightweight Charts, WebSocket client, and the existing design system.
- The marketing site stays separate from the app (`app.sievecapital.in`).

### 6.5 Infrastructure and DevOps
- AWS Mumbai, Terraform, EKS, ArgoCD (GitOps), GitHub Actions CI.
- Observability: OpenTelemetry, Prometheus/Grafana, Loki, Sentry; latency SLO dashboards.
- Environments: dev, staging, prod, with a separate sandbox tenant for prospects.

### 6.6 Certificate verification resilience (immediate item)
- Issue each certificate with an Ed25519-signed payload encoded in the QR (`/verify/CODE#proof=...`).
- The verify page checks the signature in the browser using the public key → "Authentic as issued", even when the database is offline.
- It then does a live status lookup → "Currently valid / revoked"; if unreachable, it shows "Status check unavailable".
- Add a scheduled keep-alive ping so the database does not pause from inactivity.

## 7. Security model
- Zero-trust between services (mTLS), least-privilege IAM, per-tenant row-level isolation.
- Secrets in AWS Secrets Manager; KMS envelope encryption.
- Yearly third-party pentests, a bug bounty after GA, dependency and container scanning.
- Data licences enforced in entitlement-svc, so vendor data never leaks past what the contract allows.

## 8. Data model (core entities)
`org, user, role, entitlement, instrument, corporate_action, index_membership, raw_document, event, entity_mention, feature, signal, model_version, backtest_run, watchlist, alert_rule, alert_delivery, portfolio, position, audit_log, invoice, certificate`.

## 9. Success metrics
- Signal quality: information coefficient, hit-rate by event class, and decay curve, all reported out-of-sample.
- Latency SLOs met at least 99% of trading days.
- Beta: at least 3 design partners, weekly active analysts, alert precision.
- Commercial: pilot-to-paid conversion, net revenue retention.

## 10. Team and cost (indicative)
- Phase 1 team (8–10): 2 data engineers, 2 ML/NLP engineers, 1 quant researcher, 2 full-stack engineers, 1 DevOps/SRE, 1 product/compliance.
- Phase 1 infrastructure: about ₹3–6 lakh/month (GPU inference is the main cost); data licences are extra and vendor-dependent.

## 11. Risks
| Risk | Mitigation |
|---|---|
| Regulatory classification | Early SEBI counsel; tech-vendor model first |
| Data licensing cost and limits | Start with public filings and EOD data, licence real-time data later |
| LLM hallucination | Source-cited outputs, eval gates, human review for high-impact events |
| Overfitting | Point-in-time data, walk-forward tests, out-of-sample holdout |
| Vendor lock-in | Open formats (Iceberg, Parquet), Terraform |

## 12. Open questions for the founder
1. Distribution model: tech vendor to SEBI-registered entities, or Sieve's own RA/PMS registration?
2. Budget and timeline for Phase 1 hires.
3. Preferred cloud and whether data must stay India-only.
4. Should the certificate signed-QR work (6.6) be built now on the current site?

## Delivery
- Save this PRD as `docs/PRD.md` in the project.
- Create a formatted PDF version in Files, checking every page visually.
- Make no changes to site code in this step.
