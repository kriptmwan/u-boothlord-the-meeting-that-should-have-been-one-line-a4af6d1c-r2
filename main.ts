// The Meeting That Should Have Been One Line — round 2 entry.
// One line, written to /output/entry.txt. The gate wants UTF-8 text of
// 1 to 200 characters; anything outside that fails fast here, before the
// judge ever sees it. The line itself does the killing: agenda, minutes
// and action item are all the meeting's own paperwork, and the action
// item deletes the next meeting.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The agenda was the invite, the minutes are this sentence, and the action item is to delete the next meeting from your calendar.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
