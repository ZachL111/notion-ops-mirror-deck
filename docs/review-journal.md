# Review Journal

The repository goal stays the same: develop a JavaScript command-oriented project for mirror scenarios with deny and allow fixtures, explainable decision traces, and explicit failure cases. This note explains the added review angle.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 251, lane `ship`
- `stress`: `rename risk`, score 221, lane `ship`
- `edge`: `operator cost`, score 175, lane `ship`
- `recovery`: `idempotence`, score 242, lane `ship`
- `stale`: `dry-run spread`, score 197, lane `ship`

## Note

The repository should be understandable without pretending it is larger than it is.
