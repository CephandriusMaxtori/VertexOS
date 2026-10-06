import './styles.css';

import { useState } from 'react';
import { VertexOsAppStore } from './VertexOsAppStore/VertexOsAppStore';import { VertexOsSettings } from './VertexOsSettings/VertexOsSettings';
type View = 'home' | 'app-store' | 'settings';

type AppIconProps = {
  text?: string;
  text2?: string;
  className?: string;
};

const AppIcon = ({ text = 'A', text2 = 'App', className = '' }: AppIconProps) => {
  return (
    <div className={`app-icon ${className}`}>
      <div className="icon">
        <div className="glyph">{text}</div>
      </div>
      <div className="label">{text2}</div>
    </div>
  );
};

function App() {
  const [view, setView] = useState<View>('home');

  if (view === 'app-store') {
    return (
      <VertexOsAppStore
        onHomeClick={() => setView('home')}
        isHomeActive={false}
        isAppStoreActive={true}
      />
    );
  }

  if (view === 'settings') {
    return (
      <VertexOsSettings
        onHomeClick={() => setView('home')}
        isHomeActive={false}
        isSettingsActive={true}
      />
    );
  }

  return (
    <div className="umbrel-os-home">
      <div className="glow" />
      <div className="glow2" />
      <div className="glow3" />

      <div className="top-bar">
        <div className="brand">
          <div className="logo" />
          <div className="vertex-os">VertexOS</div>
        </div>

        <div className="status">
          <div className="pill">
            <div className="ellipse" />
            <div className="vertex-local">vertex.local</div>
          </div>
          <div className="pill">
            <div className="mon-oct-5-9-41-pm">Mon, Oct 5 · 9:41 PM</div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="greeting">
          <div className="good-evening">Good evening</div>
          <div className="your-home-server-is-running-smoothly">
            Your home server is running smoothly.
          </div>
        </div>

        <div className="widgets">
          <div className="widget-storage">
            <div className="storage">STORAGE</div>
            <div className="frame">
              <div className="_412">412</div>
              <div className="gb-of-1-tb">GB of 1 TB</div>
            </div>
            <div className="_41-used-588-gb-free">41% used · 588 GB free</div>
            <div className="track">
              <div className="fill" />
            </div>
          </div>

          <div className="widget-memory">
            <div className="memory">MEMORY</div>
            <div className="frame">
              <div className="_5-2">5.2</div>
              <div className="gb-of-8-gb">GB of 8 GB</div>
            </div>
            <div className="_65-in-use-12-apps-running">65% in use · 12 apps running</div>
            <div className="track">
              <div className="fill2" />
            </div>
          </div>

          <div className="widget-ethernet">
            <div className="ethernet">ETHERNET</div>
            <div className="frame">
              <div className="connected">Connected</div>
            </div>
            <div className="network-name">192.168.1.42 · 1 Gbps</div>
            <div className="track">
              <div className="fill3" />
            </div>
          </div>
        </div>

        <div className="app-grid">
          <div className="row-1">
            <AppIcon text="E" text2="Ethernet" className="app-ethernet-instance" />
            <AppIcon text="L" text2="Lightning" className="app-lightning-instance" />
            <AppIcon text="N" text2="Nextcloud" className="app-nextcloud-instance" />
            <AppIcon text="I" text2="Immich" className="app-immich-instance" />
            <AppIcon text="J" text2="Jellyfin" className="app-jellyfin-instance" />
          </div>
          <div className="row-2">
            <AppIcon text="H" text2="Home Assistant" className="app-home-assistant-instance" />
            <AppIcon text="P" text2="Pi-hole" className="app-pi-hole-instance" />
            <AppIcon text="V" text2="Vaultwarden" className="app-vaultwarden-instance" />
            <AppIcon text="S" text2="Syncthing" className="app-syncthing-instance" />
            <AppIcon text="▶" text2="Plex" className="app-plex-instance" />
          </div>
        </div>
      </div>

      <div className="dock">
        <button type="button" className="dock-home" onClick={() => setView('home')} aria-label="Home">
          <div className="tile">
            <img className="icon-home" src="/icon-home0.svg" alt="" />
          </div>
          <span className="dock-indicator active" aria-hidden="true" />
        </button>
        <button type="button" className="dock-app-store" onClick={() => setView('app-store')} aria-label="App Store">
          <div className="tile2">
            <img className="icon-app-store" src="/icon-app-store0.svg" alt="" />
          </div>
          <span className="dock-indicator" aria-hidden="true" />
        </button>
        <button type="button" className="dock-settings" onClick={() => setView('settings')} aria-label="Settings">
          <div className="tile2">
            <img className="icon-settings" src="/icon-settings0.svg" alt="" />
          </div>
          <span className="dock-indicator" aria-hidden="true" />
        </button>
        <div className="dock-files">
          <div className="tile2">
            <img className="icon-files" src="/icon-files0.svg" alt="Files" />
          </div>
          <div className="running2" />
        </div>
        <div className="divider" />
        <div className="dock-ethernet">
          <div className="tile3">
            <div className="e">E</div>
          </div>
          <div className="running" />
        </div>
        <div className="dock-nextcloud">
          <div className="tile4">
            <div className="n">N</div>
          </div>
          <div className="running" />
        </div>
      </div>
    </div>
  );
}

export default App;
