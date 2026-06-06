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
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');

  document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active-section'));
  const targetSection = document.getElementById(`section-${sectionId}`);
  if (targetSection) targetSection.classList.add('active-section');

  const titleEl = document.getElementById('sectionTitle');
  const tagEl = document.getElementById('sectionTag');
  const thresholdPanel = document.getElementById('globalThresholdPanel');

  thresholdPanel.style.display = (sectionId === 'live') ? 'flex' : 'none';

  if (sectionId === 'live') {
    titleEl.textContent = "Live Monitor";
    tagEl.innerHTML = `<span class="pulse-dot"></span> LT DISTRIBUTOR SUBSYSTEM`;
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

// SHARED SYSTEM INCIDENT LOG SEED DATA (UPDATED WITH BROAD GEOGRAPHIC DETAILS)
let mockIncidents = [
  { 
    time: '10:34:21 AM', 
    title: "ALERT — DTC-01 LT Distributor, Transformer T-07, Nehru Gunj",
    area: "Nehru Gunj, Kalaburagi — 585102",
    ward: "Ward No. 12, Kalaburagi City Corporation",
    division: "Kalaburagi Urban Division",
    mismatch: '24%', 
    transformerCurrent: '48.3A',
    meterCurrent: '36.7A',
    status: 'FLAGGED', 
    isTheft: true 
  },
  { 
    time: '11:02:15 AM', 
    title: "ALERT — DTC-04 LT Distributor, Transformer T-12, MSK Mill Area",
    area: "MSK Mill Road, Kalaburagi — 585103",
    ward: "Ward No. 18, Kalaburagi City Corporation",
    division: "Kalaburagi Urban Division",
    mismatch: '31%', 
    transformerCurrent: '62.5A',
    meterCurrent: '43.1A',
    status: 'FLAGGED', 
    isTheft: true 
  },
  { 
    time: '11:15:47 AM', 
    title: "ALERT — DTC-09 LT Distributor, Transformer T-03, Khaja Bazar",
    area: "Khaja Bazar, Kalaburagi — 585104",
    ward: "Ward No. 05, Kalaburagi City Corporation",
    division: "Kalaburagi Urban Division",
    mismatch: '19%', 
    transformerCurrent: '39.0A',
    meterCurrent: '31.6A',
    status: 'FLAGGED', 
    isTheft: true 
  },
  { 
    time: '11:42:03 AM', 
    title: "ALERT — DTC-02 LT Distributor, Transformer T-21, Jewargi Road",
    area: "Jewargi Cross Area, Kalaburagi — 585102",
    ward: "Ward No. 31, Kalaburagi City Corporation",
    division: "Kalaburagi Urban Division",
    mismatch: '28%', 
    transformerCurrent: '55.8A',
    meterCurrent: '40.2A',
    status: 'FLAGGED', 
    isTheft: true 
  },
  { 
    time: '12:01:10 PM', 
    title: "ALERT — DTC-07 LT Distributor, Transformer T-15, Shah Bazar",
    area: "Shah Bazar Main Road, Kalaburagi — 585101",
    ward: "Ward No. 09, Kalaburagi City Corporation",
    division: "Kalaburagi Urban Division",
    mismatch: '15%', 
    transformerCurrent: '42.1A',
    meterCurrent: '35.8A',
    status: 'FLAGGED', 
    isTheft: true 
  }
];

// SYNCHRONIZED LOG BUILDER ENGINE
function rebuildIncidentTables() {
  const table = document.getElementById('incidentLogTable');
  const desk = document.getElementById('activeAlertsDeskLog');
  if (!table) return;

  // Initialize content layouts
  table.innerHTML = `<div class="table-row table-head"><span>TIMESTAMP</span><span>DISTRIBUTOR/ZONE</span><span>MISMATCH</span><span>STATUS</span></div>`;
  if (desk) {
    desk.innerHTML = ``; // Completely re-written for custom card components layout rather than generic tables
  }

  let totalAlertsCount = 0;

  mockIncidents.forEach(item => {
    // Analytics Table Infrastructure Row
    const row = document.createElement('div');
    row.className = 'table-row';
    const cleanZoneLabel = item.title ? item.title.split(',')[0].replace("ALERT — ", "") : "LT Distributor Line";
    row.innerHTML = `
      <span class="mono">${item.time}</span>
      <span>${cleanZoneLabel}</span>
      <span class="${item.isTheft ? 'danger-text' : 'safe-text'}">${item.mismatch}</span>
      <span class="${item.isTheft ? 'badge-danger' : 'badge-safe'}">${item.status}</span>
    `;
    table.appendChild(row);

    // Deep Detailed Presentation Mapping on Active Alerts Desk
    if (desk && item.isTheft) {
      totalAlertsCount++;
      const alertCard = document.createElement('div');
      alertCard.className = 'alert-card critical';
      alertCard.style.cssText = "background: #fff8f8; border-left: 5px solid #dc3545; padding: 15px; margin-bottom: 15px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); text-align: left;";
      
      alertCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(220,53,69,0.15); padding-bottom: 6px; margin-bottom: 8px;">
          <strong style="color: #dc3545; font-size: 0.9rem;">${item.title}</strong>
          <span class="mono" style="font-weight: bold; font-size: 0.8rem; background: #dc3545; color: #fff; padding: 2px 6px; border-radius: 3px;">${item.time}</span>
        </div>
        <div style="font-size: 0.8rem; line-height: 1.5; color: #333;">
          <p style="margin: 2px 0;"><strong>Area:</strong> ${item.area}</p>
          <p style="margin: 2px 0;"><strong>Ward:</strong> ${item.ward}</p>
          <p style="margin: 2px 0;"><strong>GESCOM Division:</strong> ${item.division}</p>
          <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #ccc; display: flex; gap: 15px; font-weight: 600;">
            <span style="color: #dc3545;">Mismatch: ${item.mismatch}</span>
            <span>Transformer Current: ${item.transformerCurrent}</span>
            <span>Meter Current: ${item.meterCurrent}</span>
          </div>
          <div style="margin-top: 10px; text-align: right;">
            <button class="config-btn" style="padding: 0.35rem 0.75rem; font-size: 0.7rem; cursor: pointer; background: #dc3545; color: white; border: none; border-radius: 3px;" onclick="dispatchFieldTeam('${cleanZoneLabel}')">DISPATCH FIELD TRUCK</button>
          </div>
        </div>
      `;
      desk.appendChild(alertCard);
    }
  });

  const sidebarCount = document.getElementById('sidebarAlertCount');
  if (sidebarCount) sidebarCount.textContent = totalAlertsCount;
}

function dispatchFieldTeam(zone) {
  showToast(`GESCOM utility truck dispatched to inspect tap line on ${zone}`);
  writeTerminalLine(`Field Dispatches: Operations unit routed to investigate line drop on ${zone}`, 'warn');
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
let theftCount = 5;
let transformerBase = 45.0; // Scaled to mimic regional transformer metrics provided
let liveLabels = [];
let liveTransData = [];
let liveMeterData = [];
let liveMismatchData = [];
let liveChartInstance = null;

function getDynamicReadings() {
  const transformer = +(transformerBase + (Math.random() * 4 - 2)).toFixed(2);
  let mismatch = +(Math.random() * 3 + 1).toFixed(1); // Standard baseline leakage loss

  if ((Math.random() < 0.08) || window.forcedTheftActive) {
    mismatch = +(20.0 + Math.random() * 12).toFixed(1);
    window.forcedTheftActive = false;
  }

  const meter = +(transformer * (1 - (mismatch / 100))).toFixed(2);
  return { transformer, meter, mismatch };
}

// CHART ENGINE SCHEDULERS
function initChartPipelines() {
  const liveCtx = document.getElementById('liveChart');
  if (!liveCtx) return;

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
  const monthlyCtx = document.getElementById('monthlyChart');
  if (monthlyCtx) {
    new Chart(monthlyCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Verified Theft Flags Inflicted',
          data: [14, 19, 8, 26, 31, 12],
          backgroundColor: 'rgba(100, 116, 139, 0.75)',
          borderColor: '#64748b',
          borderWidth: 1.5,
          borderRadius: 6,
          borderSkipped: false,
          barThickness: 28
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { font: { family: 'Syne', weight: '600' } } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(0, 0, 0, 0.04)' }, beginAtZero: true }
        }
      }
    });
  }

  const zoneCtx = document.getElementById('zoneChart');
  if (zoneCtx) {
    new Chart(zoneCtx, {
      type: 'polarArea',
      data: {
        labels: ['LT Dist-01', 'LT Dist-04 (High Risk)', 'LT Dist-09', 'LT Dist-02'],
        datasets: [{
          data: [24.0, 31.0, 19.0, 28.0],
          backgroundColor: [
            'rgba(0, 179, 126, 0.6)',
            'rgba(223, 34, 53, 0.65)',
            'rgba(217, 119, 6, 0.6)',
            'rgba(148, 163, 184, 0.6)'
          ],
          borderWidth: 2,
          borderColor: 'var(--surface)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { font: { family: 'Syne', size: 11 } }
          }
        },
        scales: {
          r: {
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { display: false }
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

  liveLabels.push(timeStr);
  liveTransData.push(data.transformer);
  liveMeterData.push(data.meter);
  liveMismatchData.push(data.mismatch);

  if (liveLabels.length > 20) {
    liveLabels.shift(); liveTransData.shift(); liveMeterData.shift(); liveMismatchData.shift();
  }

  if (liveChartInstance) liveChartInstance.update();

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
    if (banner) banner.classList.add('show');
    
    theftCount++;
    document.getElementById('statEvents').innerHTML = `${theftCount}<span>flags</span>`;

    writeTerminalLine(`ADC PROBE REPORT: LT Line mismatch threshold broken (${data.mismatch}% > ${threshold}% parameter). Asserting Hardware Buzzer Relay Pin HIGH.`, 'warn');

    // Generate dynamic runtime alerts using standard parameters requested
    const dynamicAlertNum = Math.floor(Math.random() * 3) + 10;
    mockIncidents.unshift({ 
      time: timeStr, 
      title: `ALERT — DTC-${dynamicAlertNum} LT Distributor, Transformer T-05, Urban Core Line`,
      area: "Adarsh Nagar, Kalaburagi — 585102",
      ward: "Ward No. 15, Kalaburagi City Corporation",
      division: "Kalaburagi Urban Division",
      mismatch: `${data.mismatch}%`, 
      transformerCurrent: `${data.transformer}A`,
      meterCurrent: `${data.meter}A`,
      status: 'FLAGGED', 
      isTheft: true 
    });
    
    if (mockIncidents.length > 10) mockIncidents.pop();
    rebuildIncidentTables();
  } else {
    mismatchCard.className = "stat-card highlight-card";
    mismatchStatus.textContent = "✔ Balancing Normal";
    if (banner) banner.classList.remove('show');
    if (Math.random() < 0.2) {
      writeTerminalLine(`ADC PROBE REPORT: Comparator checking LT Line status... T: ${data.transformer}A, M: ${data.meter}A. Delta balanced within margin.`, 'success');
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