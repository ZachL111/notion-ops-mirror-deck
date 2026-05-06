# notion-ops-mirror-deck

`notion-ops-mirror-deck` packages a practical automation exercise in JavaScript. The emphasis is on deterministic behavior, a small public API, and examples that explain the tradeoffs.

## How I Read Notion Ops Mirror Deck

The useful thing to inspect here is how the same score rule is represented in code, metadata, and examples. If those three pieces disagree, the audit script should make the drift visible.

## Problem Shape

I use this kind of project to make a rule visible before adding more machinery around it. The important part here is not the size of the codebase. It is that the input signals, scoring rule, fixture data, and expected output can all be checked in one sitting.

## Scenario Walkthrough

The examples are meant to be readable before they are exhaustive. They cover enough variation to show how latency and risk can pull a decision below the threshold.

## Internal Model

The interesting part is the boundary between accepted and reviewed scenarios. Extended examples sit near that boundary so future edits can show whether the model became more permissive or more cautious. The JavaScript version uses native modules and a small Node test path.

## Main Behaviors

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `surge` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## How To Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Validation

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Repository Map

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Follow-Up Work

- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add a short report command that prints the score breakdown for a single scenario.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Known Edges

The examples cover useful edges, not every edge. A larger version would add malformed-input tests, richer reports, and deeper domain parsers.

## Run It Locally

Install JavaScript and run the commands from the repository root. The project does not need credentials or a hosted service.
