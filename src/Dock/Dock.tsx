import "./Dock.css";

export type DockView = "home" | "app-store" | "settings";

export interface IDockProps {
  activeView: DockView;
  onNavigate: (view: DockView) => void;
}

export const Dock = ({ activeView, onNavigate }: IDockProps): JSX.Element => {
  return (
    <div className="dock">
      <button
        type="button"
        className="dock-home"
        onClick={() => onNavigate("home")}
        aria-label="Home"
      >
        <div className={`tile ${activeView === "home" ? "active-tile" : ""}`}>
          <img className="icon-home" src="/icon-home0.svg" alt="" />
        </div>
        <span
          className={`dock-indicator ${activeView === "home" ? "active" : ""}`}
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className="dock-app-store"
        onClick={() => onNavigate("app-store")}
        aria-label="App Store"
      >
        <div className={`tile ${activeView === "app-store" ? "active-tile" : ""}`}>
          <img className="icon-app-store" src="/icon-app-store0.svg" alt="" />
        </div>
        <span
          className={`dock-indicator ${activeView === "app-store" ? "active" : ""}`}
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className="dock-settings"
        onClick={() => onNavigate("settings")}
        aria-label="Settings"
      >
        <div className={`tile ${activeView === "settings" ? "active-tile" : ""}`}>
          <img className="icon-settings" src="/icon-settings0.svg" alt="" />
        </div>
        <span
          className={`dock-indicator ${activeView === "settings" ? "active" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div className="dock-files">
        <div className="tile">
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
  );
};

