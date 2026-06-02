// ===== NEURALGRID — CONSOLIDATED PRESENTATION ENGINE =====

// SESSION GUARD LAYER
if (!window.location.pathname.includes('index') && window.location.pathname !== '/') {
  if (!sessionStorage.getItem('ng_auth')) {
    window.location.href = 'index.html';
  }
}

// ===== NEURALGRID — CONSOLIDATED PRESENTATION ENGINE =====

// SESSION GUARD LAYER
if (!window.location.pathname.includes('index') && window.location.pathname !== '/') {
  if (!sessionStorage.getItem('ng_auth')) {
    window.location.href = 'index.html';
  }
}

// SECURE PRESENTATION CREDENTIALS
function handleLogin() {
  const u = document.getElementById('username')?.value;
  const p = document.getElementById('password')?.value;
  const err = document.getElementById('loginError');
  
  // Set your new, professional presentation credentials here
  if (u === 'comedkares' && p === 'bughunters2026') {
    sessionStorage.setItem('ng_auth', '1');
    window.location.href = 'dashboard.html';
  } else {
    if (err) { 
      err.style.display = 'block'; 
      err.textContent = "INVALID OPERATOR ID OR SECURITY KEY";
    }
  }
}

function logout() {
  sessionStorage.removeItem('ng_auth');
  window.location.href = 'index.html';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('username')) handleLogin();
});

// NATIVE VIEW MODE CONFIGURATOR (LIGHT/DARK TRIPPING ENGINE)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', targetTheme);
  showToast(`Interface switched to ${targetTheme.toUpperCase()} mode processing layout`);
}

// SINGLE PAGE APPLICATION SECTION TAB SWITCHER
function switchSection(sectionId, element) {
  // Toggle navigation list item states
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');

  // Toggle active content frame panes
  document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active-section'));
  const targetSection = document.getElementById(`section-${sectionId}`);
  if (targetSection) targetSection.classList.add('active-section');

  // Dynamic UI state normalization per panel context
  const titleEl = document.getElementById('sectionTitle');
  const tagEl = document.getElementById('sectionTag');
  const thresholdPanel = document.getElementById('globalThresholdPanel');

  thresholdPanel.style.display = (sectionId === 'live') ? 'flex' : 'none';

  if (sectionId === 'live') {
    titleEl.textContent = "Live Monitor";
    tagEl.innerHTML = `<span class="pulse-dot"></span> FEEDER SUBSYSTEM`;
  } else if (sectionId === 'analytics') {
    titleEl.textContent = "Analytics Logs";
    tagEl.textContent = "HISTORICAL DATA AGGREGATION";
  } else if (sectionId === 'alerts') {
    titleEl.textContent = "Alerts Desk";
    tagEl.textContent = "ACTIVE FIELD EVENTS";
  } else if (sectionId === 'config') {
    titleEl.textContent = "Hardware Configuration";
    tagEl.textContent = "MICRO-CONTROLLER IO PORT MAPPING";
  }
}

// GLOBAL CLOCK REFRESH PIPELINE
function updateClock() {
  const el = document.getElementById('headerTime');
  if (el) el.textContent = new Date().toLocaleTimeString('en-IN');
}
setInterval(updateClock, 1000);
updateClock();

// CUSTOM UTILITY SYSTEM TOASTS
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// GLOBAL CRITICAL THRESHOLD STORAGE PARAMETERS
let threshold = 15;
function updateThreshold(val) {
  threshold = parseInt(val);
  const displayVal = document.getElementById('thresholdVal');
  if (displayVal) displayVal.textContent = val + '%';
  writeTerminalLine(`System Config update: Critical comparator mismatch altered to global ${val}% boundary.`, 'warn');
}

// SHARED SYSTEM INCIDENT LOG SEED DATA
let mockIncidents = [
  { time: '10:14 AM', zone: 'Feeder Line 3', mismatch: '28.4%', status: 'FLAGGED', isTheft: true },
  { time: '09:52 AM', zone: 'Feeder Line 7', mismatch: '19.1%', status: 'FLAGGED', isTheft: true },
  { time: '08:30 AM', zone: 'Feeder Line 1', mismatch: '11.3%', status: 'NORMAL', isTheft: false },
  { time: 'Yesterday', zone: 'Feeder Line 3', mismatch: '33.7%', status: 'FLAGGED', isTheft: true }
];

// SYNCHRONIZED LOG BUILDER ENGINE
function rebuildIncidentTables() {
  const table = document.getElementById('incidentLogTable');
  const desk = document.getElementById('activeAlertsDeskLog');
  if (!table) return;

  // Initialize headings
  table.innerHTML = `<div class="table-row table-head"><span>TIMESTAMP</span><span>ZONE</span><span>MISMATCH</span><span>STATUS</span></div>`;
  if (desk) {
    desk.innerHTML = `<div class="table-row table-head"><span>TIMESTAMP</span><span>ALARM STATUS</span><span>MISMATCH DETECTED</span><span>ACTION DESK</span></div>`;
  }

  let totalAlertsCount = 0;

  mockIncidents.forEach(item => {
    // Analytics Table Population
    const row = document.createElement('div');
    row.className = 'table-row';
    row.innerHTML = `
      <span class="mono">${item.time}</span>
      <span>${item.zone}</span>
      <span class="${item.isTheft ? 'danger-text' : 'safe-text'}">${item.mismatch}</span>
      <span class="${item.isTheft ? 'badge-danger' : 'badge-safe'}">${item.status}</span>
    `;
    table.appendChild(row);

    // Active Alerts Desk Table Population
    if (desk && item.isTheft) {
      totalAlertsCount++;
      const alertRow = document.createElement('div');
      alertRow.className = 'table-row';
      alertRow.innerHTML = `
        <span class="mono">${item.time}</span>
        <span class="danger-text">BUZZER + LED ACTIVE</span>
        <span class="danger-text">${item.mismatch} Mismatch</span>
        <button class="config-btn" style="padding: 0.25rem 0.5rem; font-size: 0.65rem;" onclick="dispatchFieldTeam('${item.zone}')">DISPATCH TRUCK</button>
      `;
      desk.appendChild(alertRow);
    }
  });

  const sidebarCount = document.getElementById('sidebarAlertCount');
  if (sidebarCount) sidebarCount.textContent = totalAlertsCount;
}

function dispatchFieldTeam(zone) {
  showToast(`GESCOM field unit dispatched to inspect tap line at ${zone}`);
  writeTerminalLine(`Field Dispatches: Squad routed to investigate theft anomaly tracking loop at ${zone}`, 'warn');
}

// SIMULATOR CONTROL TERMINAL APPEND ENGINE
function writeTerminalLine(text, statusType = 'normal') {
  const tBox = document.getElementById('hardwareTerminalLog');
  if (!tBox) return;
  const ln = document.createElement('div');
  ln.className = 'term-ln';
  if (statusType === 'success') ln.className += ' term-success';
  if (statusType === 'warn') ln.className += ' term-warn';
  ln.textContent = `[${new Date().toLocaleTimeString('en-IN')}] ${text}`;
  tBox.appendChild(ln);
  tBox.scrollTop = tBox.scrollHeight;
}

// FORCE USER INTERACTIVE EVALUATION OVERRIDE FLAGGING SPIKE
function forceTheftSimulation() {
  window.forcedTheftActive = true;
  switchSection('live', document.querySelectorAll('.nav-item')[0]);
  showToast('Injecting artificial high line-impedance theft tap drop...');
}

// ===== REAL-TIME PROCESS SIMULATION PROCESSING LOOP =====
let theftCount = 2;
let transformerBase = 12.4;
let liveLabels = [];
let liveTransData = [];
let liveMeterData = [];
let liveMismatchData = [];
let liveChartInstance = null;

function getDynamicReadings() {
  const transformer = +(transformerBase + (Math.random() * 0.4 - 0.2)).toFixed(2);
  let mismatch = +(Math.random() * 4 + 2).toFixed(1); // Standard baseline leakage loss

  // Check if standard random generator spikes an error OR user clicked evaluate simulation button
  if ((Math.random() < 0.08) || window.forcedTheftActive) {
    mismatch = +(22.0 + Math.random() * 8).toFixed(1);
    window.forcedTheftActive = false; // Reset trigger variable logic
  }

  const meter = +(transformer * (1 - (mismatch / 100))).toFixed(2);
  return { transformer, meter, mismatch };
}

// CHART ENGINE SCHEDULERS
function initChartPipelines() {
  const liveCtx = document.getElementById('liveChart');
  if (!liveCtx) return;

  // Pre-fill trailing historic runtime array variables
  for (let i = 15; i > 0; i--) {
    const d = getDynamicReadings();
    const t = new Date(Date.now() - i * 3000);
    liveLabels.push(t.toLocaleTimeString('en-IN'));
    liveTransData.push(d.transformer);
    liveMeterData.push(d.meter);
    liveMismatchData.push(d.mismatch);
  }

  liveChartInstance = new Chart(liveCtx, {
    type: 'line',
    data: {
      labels: liveLabels,
      datasets: [
        { label: 'Transformer (A)', data: liveTransData, borderColor: '#00b37e', borderWidth: 2, pointRadius: 0, tension: 0.3, fill: false },
        { label: 'Consumer (A)', data: liveMeterData, borderColor: '#d97706', borderWidth: 2, pointRadius: 0, tension: 0.3, fill: false }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: false } } }
  });

  // Render Static Performance Evaluation Charts in Analytics tab
 // 1. MONTHLY HISTORICAL CHART — SMOOTH, ROUNDED & SOPHISTICATED
  const monthlyCtx = document.getElementById('monthlyChart');
  if (monthlyCtx) {
    new Chart(monthlyCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Verified Theft Flags Inflicted',
          data: [14, 19, 8, 26, 31, 12],
          backgroundColor: 'rgba(100, 116, 139, 0.75)', // Elegant Slate Gray
          borderColor: '#64748b',
          borderWidth: 1.5,
          borderRadius: 6,       // Rounds the top corners beautifully
          borderSkipped: false,  // Makes the rounding apply uniformly
          barThickness: 28       // Gives the bars breathing room to avoid that "boxed" feel
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { font: { family: 'Syne', weight: '600' } }
          }
        },
        scales: {
          x: { grid: { display: false } }, // Removes cluttering vertical grid lines
          y: { grid: { color: 'rgba(0, 0, 0, 0.04)' }, beginAtZero: true }
        }
      }
    });
  }

  // 2. HIGH-RISK ZONE CHART — BALANCED RADAR/POLAR SYSTEM
  const zoneCtx = document.getElementById('zoneChart');
  if (zoneCtx) {
    new Chart(zoneCtx, {
      type: 'polarArea',
      data: {
        labels: ['Feeder 1', 'Feeder 3 (High Risk)', 'Feeder 5', 'Feeder 7'],
        datasets: [{
          data: [6.2, 28.4, 11.1, 19.5],
          backgroundColor: [
            'rgba(0, 179, 126, 0.6)',  // Soft Emerald Green (Safe)
            'rgba(223, 34, 53, 0.65)', // Clean Crimson Coral (Alert Zone - soft, not harsh)
            'rgba(217, 119, 6, 0.6)',  // Soft Amber Yellow (Warning)
            'rgba(148, 163, 184, 0.6)' // Medium Slate (Baseline)
          ],
          borderWidth: 2,
          borderColor: 'var(--surface)' // Separates slices cleanly with the background color
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right', // Moves legends to the side to give the circle room to breathe
            labels: { font: { family: 'Syne', size: 11 } }
          }
        },
        scales: {
          r: {
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { display: false } // Hides the ugly concentric numeric rings
          }
        }
      }
    });
  }

  rebuildIncidentTables();
}

// ACTIVE SAMPLING PIPELINE EXECUTION INTERVAL
function runDynamicSystemLoop() {
  const data = getDynamicReadings();
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN');

  // Push updates into variable stacks
  liveLabels.push(timeStr);
  liveTransData.push(data.transformer);
  liveMeterData.push(data.meter);
  liveMismatchData.push(data.mismatch);

  if (liveLabels.length > 20) {
    liveLabels.shift(); liveTransData.shift(); liveMeterData.shift(); liveMismatchData.shift();
  }

  // Reload graphical interface metrics dynamically
  if (liveChartInstance) liveChartInstance.update();

  // Populate dynamic textual panel readouts
  document.getElementById('statTransformer').innerHTML = `${data.transformer}<span>A</span>`;
  document.getElementById('statMeter').innerHTML = `${data.meter}<span>A</span>`;
  
  const mismatchValEl = document.getElementById('statMismatch');
  const mismatchCard = document.getElementById('mismatchCard');
  const mismatchStatus = document.getElementById('mismatchStatus');
  const banner = document.getElementById('alertBanner');

  mismatchValEl.textContent = `${data.mismatch}%`;

  if (data.mismatch > threshold) {
    mismatchCard.className = "stat-card highlight-card danger";
    mismatchStatus.textContent = "⚠ CRITICAL MISMATCH DETECTED";
    banner.classList.add('show');
    
    theftCount++;
    document.getElementById('statEvents').innerHTML = `${theftCount}<span>flags</span>`;

    // Write trace to serial monitor data structures
    writeTerminalLine(`ADC PROBE REPORT: Mismatch threshold broken (${data.mismatch}% > ${threshold}% parameter). Asserting Hardware Buzzer Relay Pin HIGH.`, 'warn');

    // Dynamically insert into the execution arrays if it isn't an overlapping record
    mockIncidents.unshift({ time: now.toLocaleTimeString('en-IN'), zone: 'Feeder Line 3', mismatch: `${data.mismatch}%`, status: 'FLAGGED', isTheft: true });
    if (mockIncidents.length > 8) mockIncidents.pop();
    rebuildIncidentTables();
  } else {
    mismatchCard.className = "stat-card highlight-card";
    mismatchStatus.textContent = "✔ Balancing Normal";
    banner.classList.remove('show');
    if (Math.random() < 0.2) {
      writeTerminalLine(`ADC PROBE REPORT: Comparator checking system status... T: ${data.transformer}A, M: ${data.meter}A. Delta balanced within margin.`, 'success');
    }
  }
}

// TRIGGER ONLOAD BOOTSTRAPPING PROCESSES
window.addEventListener('DOMContentLoaded', () => {
  initChartPipelines();
  if (document.getElementById('liveChart')) {
    setInterval(runDynamicSystemLoop, 3000);
  }
});




