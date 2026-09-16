/**
 * Soft fade from the dark section color (#0E1410) to transparent, used to
 * blend the seam between a dark section and a light section next to it.
 * `180deg` fades from the top edge downward; `0deg` fades from the bottom
 * edge upward.
 */
export function darkFade(direction: "180deg" | "0deg"): string {
  return `linear-gradient(${direction},#0E1410 0%,rgba(14,20,16,.729) 10%,rgba(14,20,16,.512) 20%,rgba(14,20,16,.343) 30%,rgba(14,20,16,.216) 40%,rgba(14,20,16,.125) 50%,rgba(14,20,16,.064) 60%,rgba(14,20,16,.027) 70%,rgba(14,20,16,.008) 80%,rgba(14,20,16,.001) 90%,rgba(14,20,16,0) 100%)`;
}
