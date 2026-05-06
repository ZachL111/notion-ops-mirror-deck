import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 68, slack: 48, drag: 8, confidence: 91 };
assert.equal(domainReviewScore(item), 251);
assert.equal(domainReviewLane(item), "ship");
