// small gear icon used on the blue "Actions" buttons
function ActionsIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

// -------------------- default banner (shown when no tab is selected) --------------------
function BannerSection() {
  return (
    <div className="leave-banner">
      <svg className="deco-plane-1" width="40" height="40" viewBox="0 0 24 24" fill="white">
        <path d="M2 12l19-9-6 19-4-7-7-3z" />
      </svg>
      <svg className="deco-dashed-1" width="70" height="70" viewBox="0 0 70 70" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 4">
        <path d="M65 5C40 5 10 25 5 60" />
      </svg>

      <svg className="deco-plane-2" width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M2 12l19-9-6 19-4-7-7-3z" />
      </svg>
      <svg className="deco-dashed-2" width="90" height="50" viewBox="0 0 90 50" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 4">
        <path d="M2 5C40 5 70 20 88 45" />
      </svg>

      <div className="banner-text">
        <h1>
          Manage ALL <span className="highlight">Leave Applications</span>
        </h1>
        <p>A relaxed employee is a performing employee.</p>
      </div>

      <div className="banner-illustration">
        <svg width="90" height="60" viewBox="0 0 90 60" className="deco-calendar">
          <rect x="0" y="0" width="90" height="60" rx="4" fill="white" />
          <rect x="0" y="0" width="90" height="14" rx="4" fill="#e0e4f0" />
          {[0, 1, 2, 3].map(function (row) {
            return [0, 1, 2, 3, 4].map(function (col) {
              return (
                <rect
                  key={row + "-" + col}
                  x={6 + col * 17}
                  y={20 + row * 10}
                  width="10"
                  height="6"
                  fill="#c7cbe0"
                />
              );
            });
          })}
        </svg>

        <svg width="60" height="80" viewBox="0 0 60 80" className="deco-notebook">
          <rect x="0" y="0" width="60" height="80" rx="4" fill="white" />
          <circle cx="30" cy="20" r="10" fill="none" stroke="#c7cbe0" strokeWidth="2" />
        </svg>

        <svg width="22" height="22" viewBox="0 0 24 24" className="deco-flower" fill="#ef4d5e">
          <circle cx="12" cy="12" r="9" />
        </svg>

        <svg width="220" height="220" viewBox="0 0 220 220" className="person-illustration">
          <rect x="30" y="150" width="150" height="8" fill="#101a3d" />
          <rect x="40" y="158" width="6" height="45" fill="#101a3d" />
          <rect x="164" y="158" width="6" height="45" fill="#101a3d" />

          <rect x="60" y="120" width="55" height="32" rx="2" fill="#e8e8e8" />
          <rect x="65" y="124" width="45" height="24" fill="#101a3d" />

          <rect x="150" y="120" width="14" height="30" fill="#2f4bd0" />
          <circle cx="157" cy="110" r="16" fill="#2fae6b" />

          <rect x="175" y="135" width="14" height="16" rx="2" fill="white" stroke="#101a3d" strokeWidth="1.5" />

          <circle cx="110" cy="55" r="22" fill="#2b2f45" />
          <circle cx="110" cy="60" r="17" fill="#e8a374" />
          <rect x="90" y="72" width="40" height="55" rx="18" fill="#e8846b" />
          <rect x="95" y="80" width="30" height="45" rx="14" fill="white" />
          <rect x="80" y="120" width="60" height="20" rx="10" fill="#1a1a2e" />
        </svg>
      </div>
    </div>
  );
}

// -------------------- Leave Settings tab --------------------
function LeaveSettingsSection() {
  return (
    <div className="settings-grid">
      <div className="panel">
        <h3 className="panel-title">Create Leave Settings</h3>

        <div className="form-row">
          <div className="form-group">
            <label>Leave Plan Name</label>
            <input type="text" placeholder="Maternity" />
          </div>
          <div className="form-group">
            <label>Duration (days)</label>
            <input type="number" placeholder="60" />
          </div>
        </div>

        <div className="form-group full">
          <label>Do you want to activate Leave Recall for this plan ?</label>
          <select>
            <option>Select option from dropdown</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Would you like to activate leave bonus ?</label>
            <select>
              <option>Select option from dropdown</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>How much percentage of leave bonus</label>
            <input type="text" placeholder="Percentage (%)" />
          </div>
        </div>

        <div className="form-group full">
          <label>Select Leave Allocation</label>
          <select>
            <option>Senior Level</option>
            <option>Junior Level</option>
            <option>All Levels</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Reason for Recall</label>
          <textarea rows="3"></textarea>
        </div>

        <button className="create-btn">Create</button>
      </div>

      <div className="panel">
        <h3 className="panel-title">Manage Leave Settings</h3>

        <table className="leave-table">
          <thead>
            <tr>
              <th>Leave Plan</th>
              <th>Duration(s)</th>
              <th>Recall /Autorenew</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveSettingsPlans.map(function (plan, index) {
              return (
                <tr key={index}>
                  <td>{plan.planName}</td>
                  <td>{plan.duration}</td>
                  <td>{plan.recallAutoRenew}</td>
                  <td>
                    <button className="action-btn">
                      Actions <ActionsIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// -------------------- Leave Recall tab --------------------
function LeaveRecallSection() {
  return (
    <div className="panel">
      <h3 className="panel-title">Ongoing Leave Applications</h3>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Name(s)</th>
            <th>Duration(s)</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Type</th>
            <th>Reason(s)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ongoingLeaves.map(function (row, index) {
            return (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.duration}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>{row.type}</td>
                <td>{row.reason}</td>
                <td>
                  <button className="recall-btn">Recall</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// -------------------- Leave History tab --------------------
function LeaveHistorySection() {
  return (
    <div className="panel">
      <div className="panel-header-row">
        <h3 className="panel-title">Leave History</h3>

        <div className="panel-header-actions">
          <span className="filter-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#101a3d" strokeWidth="2">
              <path d="M3 5h18l-7 9v5l-4 2v-7z" />
            </svg>
          </span>
          <button className="export-btn">
            Export <ActionsIcon />
          </button>
        </div>
      </div>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Name(s)</th>
            <th>Duration(s)</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Type</th>
            <th>Reason(s)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveHistory.map(function (row, index) {
            return (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.duration}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>{row.type}</td>
                <td>{row.reason}</td>
                <td>
                  <button className="action-btn">
                    Actions <ActionsIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// -------------------- main component --------------------
function LeaveManagement() {
  const [activeTab, setActiveTab] = React.useState("none");

  const tabs = [
    { key: "settings", label: "Leave Settings" },
    { key: "recall", label: "Leave Recall" },
    { key: "history", label: "Leave History" },
    { key: "officers", label: "Relief Officers" }
  ];

  function handleTabClick(key) {
    if (key === "officers") {
      return;
    }
    setActiveTab(key);
  }

  return (
    <div className="leave-management">
      <div className="leave-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#101a3d" strokeWidth="1.8">
          <path d="M4 5h7v15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM20 5h-7v15h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
        </svg>
        <h2>Leave Management</h2>
      </div>

      <div className="leave-buttons">
        {tabs.map(function (tab) {
          const isActive = activeTab === tab.key;

          return (
            <button
              className={isActive ? "leave-btn active" : "leave-btn"}
              key={tab.key}
              onClick={function () {
                handleTabClick(tab.key);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "none" && <BannerSection />}
      {activeTab === "settings" && <LeaveSettingsSection />}
      {activeTab === "recall" && <LeaveRecallSection />}
      {activeTab === "history" && <LeaveHistorySection />}
    </div>
  );
}
