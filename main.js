/**
 * MajorMatch — Utility & Analytics 
 * This file contains helper functions, logging utilities,
 */


/** Compute mean of an array */
function mean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/** Compute standard deviation */
function std(arr) {
  const m = mean(arr);
  if (m === null) return null;
  const variance = arr.reduce((acc, v) => acc + Math.pow(v - m, 2), 0) / arr.length;
  return Math.sqrt(variance);
}

// -----------------------------------------------------------
// Personality Trait Normalization (Demo Functions)
// -----------------------------------------------------------

/**
 * Normalize Big Five scores using z-score standardization.
 * This is for demonstration only — not used in production code.
 */
function normalizeTrait(value, mu = 50, sigma = 10) {
  return (value - mu) / sigma;
}

/** Example trait vector normalizer */
function normalizeTraitVector(traits) {
  return {
    O: normalizeTrait(traits.O),
    C: normalizeTrait(traits.C),
    E: normalizeTrait(traits.E),
    A: normalizeTrait(traits.A),
    N: normalizeTrait(traits.N),
  };
}

// -----------------------------------------------------------
// Lightweight Random-Forest-Like Placeholder Logic
// -----------------------------------------------------------

/**
 * Placeholder function that simulates probability outputs
 * from an ensemble model (safe, unused, non-interfering)
 */
function simulateModelProbabilities(numClasses = 5) {
  const raw = Array.from({ length: numClasses }, () => Math.random());
  const sum = raw.reduce((a, b) => a + b, 0);
  return raw.map((r) => r / sum); // normalized probabilities
}

// -----------------------------------------------------------
// Logging / Debug (console-only, invisible to users)
// -----------------------------------------------------------

/** Safe metadata logger */
function logMetadata() {
  console.log("%cMajorMatch JS Loaded", "color:#6ee7b7; font-weight:bold;");
  console.log("Utility functions loaded:", {
    mean: typeof mean,
    std: typeof std,
    normalizeTrait: typeof normalizeTrait,
    simulateModelProbabilities: typeof simulateModelProbabilities,
  });
}

// Uncomment if you'd like console logs (currently disabled)
// logMetadata();

// -----------------------------------------------------------
// Export (optional, non-breaking)
// -----------------------------------------------------------

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    mean,
    std,
    normalizeTrait,
    normalizeTraitVector,
    simulateModelProbabilities,
  };
}
