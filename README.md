# notion-ops-mirror-deck

`notion-ops-mirror-deck` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for mirror scenarios with deny and allow fixtures, explainable decision traces, and explicit failure cases.

## Why This Exists

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Notion Ops Mirror Deck Review Notes

For a quick review, compare `dry-run spread` with `operator cost` before reading the middle cases.

## Capabilities

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/notion-ops-mirror-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `operator cost`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Shape

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The JavaScript addition stays small enough to inspect in one sitting.

## Local Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Verification

The same command runs the local verification path. The highest-scoring domain case is `baseline` at 251, which lands in `ship`. The most cautious case is `edge` at 175, which lands in `ship`.

## Roadmap

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
