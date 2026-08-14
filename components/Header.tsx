function Header() {
  return (
    <div className="header">
      <div className="hamburger">
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="#1a1a2e" strokeWidth="2">
          <path d="M0 1h20M0 8h20M0 15h20" />
        </svg>
      </div>

      <div className="header-search-group">
        <div className="candidate-dropdown">
          <span>All Candidates</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b90ad" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
      </div>

      <div className="header-icons">
        <div className="icon-circle blue">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2a6 6 0 0 0-6 6v4l-2 4h16l-2-4V8a6 6 0 0 0-6-6z" />
            <path d="M10 20a2 2 0 0 0 4 0" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
          <span className="badge">13</span>
        </div>

        <div className="icon-circle yellow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3z" />
          </svg>
        </div>

        <div className="icon-circle green">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M3 6l9 7 9-7" />
          </svg>
          <span className="badge">13</span>
        </div>
      </div>
    </div>
  );
}
