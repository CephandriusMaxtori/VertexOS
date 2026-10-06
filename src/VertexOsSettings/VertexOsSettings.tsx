import "./VertexOsSettings.css";
import { Dock, DockView } from "../Dock/Dock";

export interface IVertexOsSettingsProps {
  className?: string;
  onNavigate?: (view: DockView) => void;
  activeView?: DockView;
}

export const VertexOsSettings = ({
  className,
  onNavigate,
  activeView = "settings",
  ...props
}: IVertexOsSettingsProps): JSX.Element => {
  return (
    <div className={"vertex-os-settings " + className}>
      <div className="ambient-glow"></div>
      <div className="ambient-glow2"></div>
      <div className="ambient-glow3"></div>
      <div className="top-bar">
        <div className="brand">
          <div className="logo"></div>
          <div className="brand-name">VertexOS </div>
        </div>
        <div className="desktop-status">
          <div className="server-address">
            <div className="online-indicator"></div>
            <div className="address">vertex.local </div>
          </div>
          <div className="date-and-time">
            <div className="clock">Mon, Oct 5 · 9:41 PM </div>
          </div>
        </div>
      </div>
      <div className="settings-window">
        <div className="settings-navigation">
          <div className="navigation-heading">
            <div className="settings-emblem">
              <img
                className="sliders-horizontal"
                src="sliders-horizontal0.svg"
              />
            </div>
            <div className="title">Settings </div>
          </div>
          <div className="categories">
            <div className="settings-category">
              <img
                className="sliders-horizontal2"
                src="sliders-horizontal1.svg"
              />
              <div className="category">General </div>
            </div>
            <div className="settings-category2">
              <img className="network" src="network0.svg" />
              <div className="category2">Network </div>
            </div>
            <div className="settings-category2">
              <img className="hard-drive" src="hard-drive0.svg" />
              <div className="category2">Storage </div>
            </div>
            <div className="settings-category2">
              <img className="shield-check" src="shield-check0.svg" />
              <div className="category2">Security </div>
            </div>
            <div className="settings-category2">
              <img className="archive-restore" src="archive-restore0.svg" />
              <div className="category2">Backups </div>
            </div>
            <div className="settings-category2">
              <img className="refresh-cw" src="refresh-cw0.svg" />
              <div className="category2">Software updates </div>
            </div>
            <div className="settings-category2">
              <img className="palette" src="palette0.svg" />
              <div className="category2">Appearance </div>
            </div>
          </div>
          <div className="flexible-space"></div>
          <div className="server-connection">
            <div className="server-address2">vertex.local </div>
            <div className="health-status">
              <div className="status-indicator"></div>
              <div className="status">Connected to your server </div>
            </div>
          </div>
          <div className="help-link">
            <img className="circle-help" src="circle-help0.svg" />
            <div className="label">Help &amp; documentation </div>
          </div>
        </div>
        <div className="general-settings">
          <div className="header">
            <div className="heading">
              <div className="title2">General </div>
              <div className="subtitle">
                Manage your home server and make it your own.{" "}
              </div>
            </div>
            <div className="search-settings">
              <img className="search" src="search0.svg" />
              <div className="placeholder">Search settings </div>
            </div>
          </div>
          <div className="server-overview">
            <div className="server-identity">
              <div className="server-emblem">
                <img className="server" src="server0.svg" />
              </div>
              <div className="server-details">
                <div className="hostname">vertex.local </div>
                <div className="health-status">
                  <div className="status-indicator"></div>
                  <div className="status">Running smoothly </div>
                </div>
              </div>
            </div>
            <div className="resource-status">
              <div className="system-metric">
                <div className="metric-label">STORAGE </div>
                <div className="value">412 GB / 1 TB </div>
                <div className="detail">41% used · 588 GB free </div>
                <div className="usage-track">
                  <div className="usage"></div>
                </div>
              </div>
              <div className="system-metric">
                <div className="metric-label">MEMORY </div>
                <div className="value">5.2 GB / 8 GB </div>
                <div className="detail">65% in use </div>
                <div className="usage-track">
                  <div className="usage2"></div>
                </div>
              </div>
              <div className="system-metric">
                <div className="metric-label">ETHERNET </div>
                <div className="value">Connected </div>
                <div className="detail">192.168.1.42 · 1 Gbps </div>
              </div>
            </div>
          </div>
          <div className="settings-and-maintenance">
            <div className="server-preferences">
              <div className="section-title">Server preferences </div>
              <div className="preference">
                <div className="description">
                  <div className="setting-name">Server name </div>
                  <div className="supporting-text">
                    Your server’s name on the local network.{" "}
                  </div>
                </div>
                <div className="selected-value">
                  <div className="value2">vertex.local </div>
                  <img className="pencil" src="pencil0.svg" />
                </div>
              </div>
              <div className="preference">
                <div className="description">
                  <div className="setting-name">Time zone </div>
                  <div className="supporting-text">
                    Keep your server’s clock in sync.{" "}
                  </div>
                </div>
                <div className="selected-value">
                  <div className="value2">Automatic · UTC </div>
                  <img className="chevron-down" src="chevron-down0.svg" />
                </div>
              </div>
              <div className="preference">
                <div className="description">
                  <div className="setting-name">Language </div>
                  <div className="supporting-text">
                    Used across the desktop and system menus.{" "}
                  </div>
                </div>
                <div className="selected-value">
                  <div className="value2">English </div>
                  <img className="chevron-down2" src="chevron-down1.svg" />
                </div>
              </div>
              <div className="preference">
                <div className="description">
                  <div className="setting-name">System notifications </div>
                  <div className="supporting-text">
                    Get alerts about updates and server health.{" "}
                  </div>
                </div>
                <div className="enabled-switch">
                  <div className="handle"></div>
                </div>
              </div>
            </div>
            <div className="maintenance">
              <div className="software-updates">
                <div className="section-heading">
                  <img className="refresh-cw2" src="refresh-cw1.svg" />
                  <div className="title3">Software updates </div>
                </div>
                <div className="health-status">
                  <div className="status-indicator"></div>
                  <div className="status">Your system is up to date </div>
                </div>
                <div className="update-controls">
                  <div className="label2">Automatic checks </div>
                  <div className="enabled-switch">
                    <div className="handle"></div>
                  </div>
                </div>
                <div className="action">
                  <div className="label3">Check for updates </div>
                </div>
              </div>
              <div className="backup-settings">
                <div className="section-heading2">
                  <img
                    className="archive-restore2"
                    src="archive-restore1.svg"
                  />
                  <div className="title3">Backups </div>
                </div>
                <div className="backup-storage">18 local backups · 96 GB </div>
                <div className="scheduled-backup-state">
                  <div className="label2">Scheduled backups </div>
                  <div className="disabled-switch">
                    <div className="handle2"></div>
                  </div>
                </div>
                <div className="action2">
                  <div className="label3">Configure backups </div>
                </div>
              </div>
            </div>
          </div>
          <div className="system-actions">
            <div className="save-status">
              <img className="check" src="check0.svg" />
              <div className="saved-message">
                Changes are saved automatically{" "}
              </div>
            </div>
            <div className="power-controls">
              <div className="action">
                <img className="rotate-cw" src="rotate-cw0.svg" />
                <div className="label3">Restart </div>
              </div>
              <div className="action">
                <img className="power" src="power0.svg" />
                <div className="label3">Shut down </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dock activeView={activeView} onNavigate={onNavigate ?? (() => {})} />
    </div>
  );
};
