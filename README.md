# NumerologyGateway Project

**Production-level Vedic Numerology educational website with tested calculation tools.**

Based on "Numerology: With Tantra, Ayurveda, and Astrology" by Harish Johari.

---

## 🚀 Quick Start

**For PM (Sameer):**

**Step 1:** Tell each AI their role:
- **Codex:** "You are Codex. Welcome to NumerologyGateway. Read README.md"
- **Gemini:** "You are Gemini. Welcome to NumerologyGateway. Read README.md"
- **Amazon Q:** "You are Amazon Q. Welcome to NumerologyGateway. Read README.md"

**Step 2:** Start dashboard:
```bash
cd dashboard
node dashboard_server.js
```
Open: http://localhost:3000

**Step 3:** Watch all 3 AIs work in parallel!

---

## 👥 Team Roles

### Amazon Q (Backend & Data + PM)
**Dual Role:** Worker (80%) + Project Manager (20%)  
**Directories:** `data/`, `tests/` (write), `status/`, `logs/` (read all)  
**Worker Tasks:**
1. Extract Numbers 1-9, create `data/numbers.json`
2. Run `node tests/numerology_tests.js`
3. Update `status/STATUS_AI1_BACKEND.md` every 10 min
4. Log to `logs/ai1_errors.log`

**PM Tasks (every 10 min):**
1. Read `status/STATUS_AI2_FRONTEND.md` and `status/STATUS_AI3_DESIGN.md`
2. Check for `status/BLOCKER_*.md` files
3. Verify critical path dependencies
4. Coordinate conflict resolution

### Codex (Frontend)
**Directories:** `website/html/`, `website/css/`, `website/js/`  
**Tasks:**
1. Verify `website/` directories exist
2. Create `website/html/index.html`
3. Wait for design from Gemini
4. Create `website/css/main.css`
5. Build calculator UI
6. Log to `logs/ai2_errors.log`
7. Update `status/STATUS_AI2_FRONTEND.md` every 10 min

### Gemini (Design & Content)
**Directories:** `design/`, `content/`, `website/assets/`  
**Tasks:**
1. Verify directories exist
2. 🚨 CRITICAL: Create `design/design_system.md` in 10 min
3. Create `design/mockups/homepage.md`
4. Write `content/homepage.md`
5. Write `content/numbers/number_1.md`
6. Log to `logs/ai3_errors.log`
7. Update `status/STATUS_AI3_DESIGN.md` every 10 min

---

## 📁 Structure

```
NumerologyGateway/
├── data/              ← Amazon Q
├── tests/             ← Amazon Q
├── website/           ← Codex
├── design/            ← Gemini
├── content/           ← Gemini
├── source/            ← Book (read-only)
├── status/            ← All update
├── logs/              ← All log errors
├── dashboard/         ← PM monitors
├── project-docs/      ← Documentation
└── ai-coordination/   ← Workflow files
```

---

## 🛡️ Rules & Coordination

**CRITICAL:** All files go in subdirectories!
- Structure rules: `.amazonq/rules/project-structure.md`
- Parallel AI system: `.amazonq/rules/parallel-ai-coordination.md`
- Amazon Q dual role: `.amazonq/rules/amazonq-dual-role.md`
- Status template: `.amazonq/rules/status-file-template.md`
- Root has ONLY: README.md, .gitignore, numerology_calculator.js

**Coordination Protocol:**
- Each AI updates their status file every 10 min
- Amazon Q checks all status files every 10 min (PM role)
- Create `status/BLOCKER_*.md` if blocked
- Zero file conflicts via strict directory ownership

---

## ⏱️ Timeline (~60 min)

**0-10 min:** Design system, HTML, extract 2 numbers  
**10-30 min:** CSS, mockups, extract 6 numbers  
**30-50 min:** Integration, content, extract 9 numbers  
**50-60 min:** Testing, polish, complete  

---

## 📊 Monitoring

**Dashboard:** http://localhost:3000  
**Status:** `status/STATUS_AI*.md`  
**Logs:** `logs/*.log`  
**Docs:** `project-docs/` and `ai-coordination/`

---

**Ready to execute!** 🎯
