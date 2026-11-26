# The Meeting That Should Have Been One Line — round 2

A make.fun entry: one sentence that could have replaced an entire pointless meeting.

- Bounty: https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
- Entrant: [@mosul](https://make.fun/u/mosul)

## The line

> The agenda was the invite, the minutes are this sentence, and the action item is to delete the next meeting from your calendar.

## How it works

`main.ts` (Node, stdlib only) writes the line to `/output/entry.txt`, with a fail-fast guard that the text is 1–200 characters and not only whitespace, per the competition gate.

## Run

```sh
node main.ts
cat /output/entry.txt
```
