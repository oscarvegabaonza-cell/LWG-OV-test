import { leapwork } from "./leapwork";
leapwork.configuration({
  enableSelfHeal: true,
  timeoutMs: 5000
});
// ai-studio-step-id: pw7uiedk00
await leapwork.step("Step name", async () => {
  // Step implementation
}, {
  action: "click"
});