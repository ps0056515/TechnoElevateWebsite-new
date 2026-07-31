# Newsroom - proof requirements

**Route:** `/newsroom`  
**Source:** `src/content/pages/newsroom.js`

Each news item needs:

| File                                | Description                       |
| ----------------------------------- | --------------------------------- |
| `{date}-{slug}-press-release.pdf`   | Internal or external announcement |
| `{date}-{slug}-client-approval.pdf` | If client named                   |
| `{date}-{slug}-fact-check.pdf`      | Delivery lead sign-off            |

**Do not publish future-dated items without proof.**

## Items on site (verify against live page)

Review `newsroom.js` and add one subfolder per item as you collect proof.
