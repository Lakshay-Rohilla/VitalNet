/**
 * VitalNet Logic Engine (Simulation)
 * This module handles the "AI" decision making for the capstone demo.
 */

export type Priority = "P1" | "P2" | "P3";

export interface TriageResult {
  priority: Priority;
  assessment: string;
  recommendedAction: string;
}

const CRITICAL_KEYWORDS = ["chest pain", "breathless", "bleeding", "unconscious", "heart", "stroke"];
const MODERATE_KEYWORDS = ["fever", "pain", "dizzy", "headache", "vomiting"];

/**
 * Simulates AI Symptom Triage
 */
export function analyzeSymptoms(input: string): TriageResult {
  const text = input.toLowerCase();
  
  if (CRITICAL_KEYWORDS.some(k => text.includes(k))) {
    return {
      priority: "P1",
      assessment: "CRITICAL: Potential life-threatening condition detected.",
      recommendedAction: "Dispatch Advanced Life Support (ALS) immediately. Alert Trauma Team at City ER."
    };
  }

  if (MODERATE_KEYWORDS.some(k => text.includes(k))) {
    return {
      priority: "P2",
      assessment: "MODERATE: Signs of distress requiring urgent medical evaluation.",
      recommendedAction: "Dispatch standard ambulance. Monitor vitals continuously."
    };
  }

  return {
    priority: "P3",
    assessment: "STABLE: Minor symptoms detected.",
    recommendedAction: "Telehealth consultation recommended. Advise rest and monitoring."
  };
}

/**
 * Simulates Vitals Anomaly Detection
 */
export function detectVitalsAnomaly(vitals: { hr: number; spo2: number }) {
  if (vitals.hr > 120 || vitals.hr < 45 || vitals.spo2 < 90) {
    return {
      alert: true,
      message: "Vitals falling outside safe parameters. Automatic SOS calibration required.",
      level: "CRITICAL"
    };
  }
  
  if (vitals.hr > 100 || vitals.spo2 < 94) {
    return {
      alert: true,
      message: "Mild physiological stress detected. Observing trends.",
      level: "WARNING"
    };
  }

  return { alert: false };
}

/**
 * Mock dispatcher logic to simulate coordination
 */
export const missionState = {
    patientId: "P-102",
    assignedAmbulance: "V-102",
    targetHospital: "City ER Hub",
    startTime: Date.now(),
    etaMinutes: 12
};
