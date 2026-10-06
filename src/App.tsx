import { useMemo, useState } from 'react';

type ViewName = 'Home' | 'Files' | 'Settings' | 'App Store';

type AppTile = {
  name: string;
  category: string;
  accent: string;
  icon: string;
  status: string;
  description: string;
};

const navItems = ['Home', 'Files', 'Settings', 'App Store'];

const appTiles: AppTile[] = [
  { name: 'Jellyfin', category: 'Media', accent: 'purple', icon: '◉', status: 'Running', description: 'Movie, TV, and home library.' },
  { name: 'Immich', category: 'Photos', accent: 'pink', icon: '✦', status: 'Synced', description: 'Private photo backup and gallery.' },
  { name: 'Syncthing', category: 'Sync', accent: 'cyan', icon: '↻', status: 'Healthy', description: 'Device syncing and file replication.' },
  { name: 'Home Assistant', category: 'Smart Home', accent: 'green', icon: '⌂', status: 'Online', description: 'Automation and sensors.' },
  { name: 'Plex', category: 'Media', accent: 'orange', icon: '▣', status: 'Ready', description: 'Streaming and remote access.' },
  { name: 'Nextcloud', category: 'Cloud', accent: 'blue', icon: '☁', status: 'Mounted', description: 'Private file collaboration.' },
  { name: 'Bitnode', category: 'Node', accent: 'gold', icon: '₿', status: 'Synced', description: 'Bitcoin and wallet node.' },
  { name: 'Code Server', category: 'Dev', accent: 'indigo', icon: '</>', status: 'Connected', description: 'Remote coding workspace.' },
];

const fileRows = [
  { name: 'Photos/Travel-2026', type: 'Folder', size: '2.4 GB', modified: 'Today' },
  { name: 'Movies/4K/Matrix-Resurrections', type: 'Video', size: '18.2 GB', modified: '2 hours ago' },
  { name: 'Backups/Weekly.tar', type: 'Archive', size: '820 MB', modified: 'Yesterday' },
  { name: 'Music/Chill', type: 'Folder', size: '135 MB', modified: 'Mon' },
  { name: 'Documents/VertexOS-Config', type: 'File', size: '486 KB', modified: 'Wed' },
];

const folderCards = [
  { name: 'Photos', count: '1,248', type: 'Images', icon: '🖼' },
  { name: 'Movies', count: '318', type: 'Videos', icon: '🎞' },
  { name: 'Music', count: '2,140', type: 'Audio', icon: '♫' },
  { name: 'Documents', count: '842', type: 'Files', icon: '📄' },
];

const settingsItems = [
  { label: 'Automatic updates', enabled: true },
  { label: 'Night mode', enabled: true },
  { label: 'Backup schedule', enabled: true },
  { label: 'Remote access', enabled: false },
  { label: 'Usage analytics', enabled: false },
];

const statCards = [
  { label: 'SSD health', value: '96%', tone: 'green' },
  { label: 'Memory', value: '68%', tone: 'amber' },
  { label: 'Network', value: '1.2 Gbps', tone: 'cyan' },
  { label: 'Uptime', value: '18d 4h', tone: 'purple' },
];

function App() {
  const [activeView, setActiveView] = useState<ViewName>('Home');
  const [selectedApp, setSelectedApp] = useState<AppTile>(appTiles[0]);
  const [installOpen, setInstallOpen] = useState(false);

  const viewContent = useMemo(() => {
    if (activeView === 'Files') {
      return (
        <div className="panel-grid files-layout">
          <aside className="sidebar-panel glass-panel">
            <div className="panel-title-row">
              <span className="eyebrow">Workspace</span>
            </div>
            <nav className="nav-list">
              {['All files', 'Photos', 'Movies', 'Downloads', 'Backups', 'Shared'].map((item) => (
                <button key={item} className={`nav-item ${item === 'All files' ? 'active' : ''}`}>
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          <div className="content-stack">
            <div className="glass-panel file-toolbar">
              <div className="tool-left">
                <span className="eyebrow">Vault</span>
                <h2>Files & Storage</h2>
              </div>
              <div className="tool-actions">
                <button className="soft-button">Search</button>
                <button className="primary-button">+ New Folder</button>
              </div>
            </div>

            <div className="folder-grid">
              {folderCards.map((folder) => (
                <div key={folder.name} className="glass-panel folder-card">
                  <div className="folder-icon">{folder.icon}</div>
                  <div>
                    <strong>{folder.name}</strong>
                    <p>{folder.count} {folder.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel table-panel">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Modified</th>
                  </tr>
                </thead>
                <tbody>
                  {fileRows.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.type}</td>
                      <td>{row.size}</td>
                      <td>{row.modified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Settings') {
      return (
        <div className="panel-grid settings-layout">
          <aside className="sidebar-panel glass-panel">
            <div className="panel-title-row">
              <span className="eyebrow">System</span>
            </div>
            <nav className="nav-list">
              {['General', 'Security', 'Network', 'Appearance', 'Storage', 'Updates'].map((item, index) => (
                <button key={item} className={`nav-item ${index === 0 ? 'active' : ''}`}>
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          <div className="content-stack">
            <div className="glass-panel settings-header">
              <div>
                <span className="eyebrow">Preferences</span>
                <h2>VertexOS Settings</h2>
              </div>
              <button className="primary-button">Save changes</button>
            </div>

            <div className="metrics-grid">
              {statCards.map((stat) => (
                <div key={stat.label} className={`glass-panel metric-card ${stat.tone}`}>
                  <label>{stat.label}</label>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="glass-panel settings-panel">
              {settingsItems.map((item) => (
                <div key={item.label} className="toggle-row">
                  <span>{item.label}</span>
                  <button className={`toggle ${item.enabled ? 'on' : 'off'}`}>
                    <span className="toggle-thumb" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'App Store') {
      return (
        <div className="content-stack app-store-layout">
          <div className="glass-panel app-store-header">
            <div>
              <span className="eyebrow">Marketplace</span>
              <h2>App Store</h2>
            </div>
            <button className="soft-button">Browse all</button>
          </div>

          <div className="store-grid">
            {appTiles.map((app) => (
              <button key={app.name} className="glass-panel app-card" onClick={() => { setSelectedApp(app); setInstallOpen(true); }}>
                <div className={`app-icon ${app.accent}`}>{app.icon}</div>
                <div className="app-meta">
                  <h3>{app.name}</h3>
                  <span>{app.category}</span>
                  <small>{app.status}</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="content-stack home-layout">
        <div className="glass-panel top-banner">
          <div>
            <span className="eyebrow">System overview</span>
            <h2>Your home server is running normally.</h2>
          </div>
          <span className="status-pill">Active</span>
        </div>

        <div className="metrics-grid">
          {statCards.map((stat) => (
            <div key={stat.label} className={`glass-panel metric-card ${stat.tone}`}>
              <label>{stat.label}</label>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>

        <div className="app-grid">
          {appTiles.map((app, index) => (
            <button key={app.name} className={`glass-panel app-tile ${index === 1 ? 'featured' : ''}`} onClick={() => { setSelectedApp(app); setActiveView('App Store'); }}>
              <div className={`app-icon ${app.accent}`}>{app.icon}</div>
              <div className="app-meta">
                <h3>{app.name}</h3>
                <span>{app.category}</span>
              </div>
              <small>{app.status}</small>
            </button>
          ))}
        </div>
      </div>
    );
  }, [activeView]);

  return (
    <div className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <aside className="sidebar glass-panel">
        <div className="brand-block">
          <div className="brand-mark">V</div>
          <div>
            <strong>VertexOS</strong>
            <small>Home control</small>
          </div>
        </div>

        <div className="sidebar-section">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeView === item ? 'active' : ''}`}
              onClick={() => setActiveView(item as ViewName)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="sidebar-section mini-list">
          <span className="eyebrow">Connected devices</span>
          <div className="mini-item"><span className="dot online" /> Syncthing</div>
          <div className="mini-item"><span className="dot online" /> NAS</div>
          <div className="mini-item"><span className="dot idle" /> Retropie</div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar glass-panel">
          <div>
            <span className="eyebrow">Operational</span>
            <h1>{activeView}</h1>
          </div>
          <div className="topbar-actions">
            <button className="soft-button">Search</button>
            <button className="soft-button">Backup</button>
            <button className="primary-button">Restart</button>
          </div>
        </header>

        {viewContent}
      </main>

      {installOpen && (
        <div className="modal-backdrop" onClick={() => setInstallOpen(false)}>
          <div className="modal-card glass-panel" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">Install</span>
                <h3>{selectedApp.name}</h3>
              </div>
              <button className="close-button" onClick={() => setInstallOpen(false)}>×</button>
            </div>

            <div className="modal-body">
              <div className={`modal-art ${selectedApp.accent}`}>
                <span>{selectedApp.icon}</span>
              </div>
              <div className="modal-copy">
                <p>{selectedApp.description}</p>
                <ul>
                  <li>One-click deployment</li>
                  <li>Auto-updates enabled</li>
                  <li>Secure local storage</li>
                </ul>
              </div>
            </div>

            <div className="modal-actions">
              <button className="soft-button" onClick={() => setInstallOpen(false)}>Cancel</button>
              <button className="primary-button" onClick={() => setInstallOpen(false)}>Install app</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
