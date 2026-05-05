import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 62,
    "capacity": 99,
    "latency": 23,
    "risk": 22,
    "weight": 5,
    "score": 99,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 88,
    "capacity": 80,
    "latency": 19,
    "risk": 25,
    "weight": 6,
    "score": 130,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 95,
    "capacity": 84,
    "latency": 26,
    "risk": 10,
    "weight": 5,
    "score": 192,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
