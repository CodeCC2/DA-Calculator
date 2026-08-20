# ZZZ Deadly Assault Damage & DPS Calculator

A web-based calculator for estimating **actual Damage and DPS from Deadly Assault HP Score** in **Zenless Zone Zero**, with boss information, historical HP inflation tracking, Future/Beta DA support, and Selectable Buff data.

> Supports both **Thai / English UI** and is designed for Desktop, Mobile, and iPad.

---

## Features

- Estimate **actual damage** from Deadly Assault HP Score
- Calculate **DPS** from estimated damage and clear time
- Supports **Normal DA** and **DA Hard**
- Automatically loads Deadly Assault season data
- Supports **Future / Beta Deadly Assault**
- Browse and calculate with **historical DA seasons**
- Displays boss information such as:
  - Max HP
  - DEF
  - ATK
  - Daze / Stun
  - Elemental Weakness / Resistance
- Displays **Selectable Buffs**
- Supports automatic Thai translation for Selectable Buffs
- Built-in **TH / EN language switch**
- Historical **HP Inflation analysis**
- Compare the same boss across multiple seasons
- Graph modes:
  - Trend
  - Bar Chart
- Compare multiple teams by Damage / DPS
- Choose a Baseline to compare team performance
- Responsive UI for Desktop / Mobile / iPad
- Manual boss HP input as a fallback when automatic data loading is unavailable

---

## How It Works

Deadly Assault HP Score does not scale linearly across the entire fight.

The calculator reads the **HP Segment / Score Curve** for the selected DA season and converts the entered HP Score back into an approximate amount of real damage dealt.

Example:

```text
HP Score
   ↓
Deadly Assault HP Segment Curve
   ↓
Estimated Damage
   ↓
Damage ÷ Time
   ↓
DPS
```

If the score ends in the middle of an HP segment, damage is estimated using linear interpolation within that segment.

---

## HP Score vs Total DA Score

Deadly Assault's total score may include more than just damage-related points.

This calculator uses only:

```text
HP / Damage Score
```

Operation Score is not included.

For Normal DA, the HP Score cap is commonly:

```text
60,000
```

However, the calculator attempts to read the actual Score Cap and HP Curve directly from the selected season data.

---

## Future / Beta Deadly Assault

The website checks both live and latest/beta game-data channels.

Future seasons are shown separately from current and historical seasons:

```text
Future / Beta
Live / History
```

Beta data may change before the content reaches the live server.

---

## HP Inflation History

The calculator can scan historical DA seasons and identify returning bosses, primarily by Monster ID.

It then compares each appearance to show how the boss's Max HP has changed over time.

Displayed information includes:

```text
First HP
Latest HP
Total Inflation
Average Increase / Return
Appearances
```

Historical data can be viewed using either a Trend graph or Bar Chart.

---

## Selectable Buffs

Selectable Buffs are loaded from the selected Deadly Assault room data.

When Thai is selected, the website will:

1. Try to use native Thai data from the source
2. If unavailable, use an automatic translation fallback
3. Cache translated text in the browser to reduce repeated translation requests

If translation fails, the original English text is shown instead without affecting the rest of the website.

---

## Language Support

Supported languages:

- 🇹🇭 Thai
- 🇬🇧 English

The selected language is stored in `localStorage`.

When the website is opened again, it automatically restores the previously selected language.

---

## Data Sources

Deadly Assault and game information are loaded from public game-data sources directly from the browser.

Data may include:

- Deadly Assault Seasons
- Boss information
- HP / ATK / DEF / Stun
- HP Curves
- Weakness / Resistance
- Selectable Buffs
- Historical boss data

Some older seasons may not have complete historical raw-data snapshots, so certain values may be unavailable.

---

## Resistance Data

Elemental affinity is displayed as:

```text
Weak
Neutral
Resist
```

If an exact resistance value is available from the source, the website displays it as a percentage.

Example:

```text
Ice
-20%
Weak
```

If the source only provides a Weak / Resist state without an exact numeric value, the calculator does not guess the percentage.

Example:

```text
Ice
—
Weak
```

---

## Responsive Design

The interface is designed to support:

- Desktop
- Laptop
- iPad
- Tablet
- Mobile

On smaller screens, multi-column layouts automatically collapse into a vertical layout.

Large tables and historical charts can scroll horizontally when needed.

---

## Browser UI Guard

The website blocks several common browser shortcuts, including:

```text
F12
Ctrl + Shift + I
Ctrl + Shift + J
Ctrl + Shift + C
Ctrl + U
Ctrl + S
Right Click
```

Some related macOS shortcuts are also blocked.

Normal text interaction is still allowed:

```text
Select text
Drag to highlight
Ctrl / Cmd + C
```

> This is only a browser UI guard and is not complete source-code protection.  
> Frontend code must still be delivered to the user's browser in order to run.

---

## Deployment

This project can be deployed for free using **GitHub Pages**.

Repository:

```text
https://github.com/CodeCC2/DA-Calculator
```

Place the main website file at:

```text
index.html
```

Then open:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
→ Save
```

The website will be available at:

```text
https://codecc2.github.io/DA-Calculator/
```

---

## Local Usage

You can open `index.html` directly in a browser.

For better compatibility, especially with browser API restrictions, running a local server is recommended.

Example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using a local server is recommended over `file://`, because some browsers restrict API requests from local files.

---

## Tech Stack

This project uses:

```text
HTML
CSS
Vanilla JavaScript
Public JSON APIs
LocalStorage
GitHub Pages
```

No large framework or backend is required for the main calculator features.

---

## Disclaimer

This project is a community-made tool and is **not affiliated with HoYoverse**.

Zenless Zone Zero and all related game assets, names, and trademarks belong to their respective owners.

Future / Beta data may change before release on the live server.

Damage values calculated from HP Score are estimates based on the HP Curve and publicly available source data.

---

## Credits

Created for the Zenless Zone Zero community.

Repository:

**CodeCC2 / DA-Calculator**
