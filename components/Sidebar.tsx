// NOTE: the real XCELTECH logo, Aman Admin's photo, and the real menu icons
// aren't available, so simple inline SVGs are used as close stand-ins.

const featuresMenu = [
  { name: "Dashboard", active: true },
  { name: "Messages", badge: 13 }
];

const recruitmentMenu = ["Jobs", "Candidates", "Resumes"];

const organizationMenu = [
  "Employee Management",
  "Leave Management",
  "Performance Management",
  "Payroll Management"
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.5" fill="white" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="white" strokeWidth="1.5" />
        </svg>
        <span>XCELTECH</span>
      </div>

      <div className="sidebar-profile">
        <div className="profile-img-wrap">
          <svg width="44" height="44" viewBox="0 0 24 24">
            <circle cx="12" cy="9" r="4" fill="#2b2f45" />
            <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" fill="#2b2f45" />
          </svg>
        </div>
        <div className="profile-text">
          <div className="profile-name">Aman Admin</div>
          <div className="profile-role">Admin</div>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-label">Features</p>

        <div className="menu-item">
          <span className="menu-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c7cbe0" strokeWidth="1.8">
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
          </span>
          <span>Dashboard</span>
        </div>

        <div className="menu-item">
          <span className="menu-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c7cbe0" strokeWidth="1.8">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M3 6l9 7 9-7" />
            </svg>
          </span>
          <span>Messages</span>
          <span className="badge">13</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-label">Recruitment</p>

        <div className="menu-item">
          <span className="menu-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c7cbe0" strokeWidth="1.8">
              <rect x="3" y="7" width="18" height="12" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </span>
          <span>Jobs</span>
        </div>

        <div className="menu-item">
          <span className="menu-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c7cbe0" strokeWidth="1.8">
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M3 20c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5" />
              <path d="M15 15c2.7 0.2 5 1.9 5 5" />
            </svg>
          </span>
          <span>Candidates</span>
        </div>

        <div className="menu-item">
          <span className="menu-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c7cbe0" strokeWidth="1.8">
              <rect x="4" y="2" width="16" height="20" rx="1.5" />
              <path d="M8 8h8M8 12h8M8 16h5" />
            </svg>
          </span>
          <span>Resumes</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-label">Organization</p>

        {organizationMenu.map(function (item) {
          const isCurrent = item === "Leave Management";
          const iconColor = isCurrent ? "#101a3d" : "#c7cbe0";

          return (
            <div className={isCurrent ? "menu-item active" : "menu-item"} key={item}>
              <span className="menu-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8">
                  {item === "Employee Management" && (
                    <>
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
                    </>
                  )}
                  {item === "Leave Management" && (
                    <path d="M4 5h7v15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM20 5h-7v15h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
                  )}
                  {item === "Performance Management" && (
                    <>
                      <path d="M12 3v18M5 8l-3 5a4 4 0 0 0 8 0zM19 8l-3 5a4 4 0 0 0 8 0z" />
                      <path d="M5 8h14M9 21h6" />
                    </>
                  )}
                  {item === "Payroll Management" && (
                    <>
                      <rect x="2" y="6" width="20" height="13" rx="2" />
                      <path d="M2 10h20" />
                    </>
                  )}
                </svg>
              </span>
              <span>{item}</span>
            </div>
          );
        })}
      </div>

      <button className="logout-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M9 4h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </svg>
        <span>Log Out</span>
      </button>
    </div>
  );
}
