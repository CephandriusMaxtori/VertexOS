import "./VertexOsAppStore.css";

export interface IVertexOsAppStoreProps {
  className?: string;
  onHomeClick?: () => void;
  isHomeActive?: boolean;
  isAppStoreActive?: boolean;
}

export const VertexOsAppStore = ({
  className,
  onHomeClick,
  isHomeActive = true,
  isAppStoreActive = false,
  ...props
}: IVertexOsAppStoreProps): JSX.Element => {
  return (
    <div className={"vertex-os-app-store " + className}>
      <div className="glow"></div>
      <div className="glow2"></div>
      <div className="glow3"></div>
      <div className="top-bar">
        <div className="brand">
          <div className="logo"></div>
          <div className="vertex-os">VertexOS </div>
        </div>
        <div className="status">
          <div className="pill">
            <div className="ellipse"></div>
            <div className="vertex-local">Vertex.local </div>
          </div>
          <div className="pill">
            <div className="mon-oct-5-9-41-pm">Mon, Oct 5 · 9:41 PM </div>
          </div>
        </div>
      </div>
      <div className="dock">
        <button type="button" className="dock-home" onClick={onHomeClick} aria-label="Home">
          <div className="tile">
            <img className="icon-home" src="icon-home0.svg" alt="" />
          </div>
          <span className={`dock-indicator ${isHomeActive ? 'active' : ''}`} aria-hidden="true" />
        </button>
        <div className="dock-app-store">
          <div className="tile2">
            <img className="icon-app-store" src="icon-app-store0.svg" />
          </div>
          <span className={`dock-indicator ${isAppStoreActive ? 'active' : ''}`} aria-hidden="true" />
        </div>
        <div className="dock-files">
          <div className="tile">
            <img className="icon-files" src="icon-files0.svg" />
          </div>
          <div className="running2"></div>
        </div>
        <div className="dock-settings">
          <div className="tile">
            <img className="icon-settings" src="icon-settings0.svg" />
          </div>
          <div className="running2"></div>
        </div>
        <div className="divider"></div>
        <div className="dock-bitcoin-node">
          <div className="tile3">
            <div className="b">B </div>
          </div>
          <div className="running"></div>
        </div>
        <div className="dock-nextcloud">
          <div className="tile4">
            <div className="n">N </div>
          </div>
          <div className="running"></div>
        </div>
      </div>
      <div className="back-tile"></div>
      <div className="icon-appstore-jellyfin">
        <div className="tile5">
          <img
            className="jellyfin-svgrepo-com-1"
            src="jellyfin-svgrepo-com-10.svg"
          />
          <div className="icon-home2"></div>
        </div>
      </div>
      <div className="jellyfin">Jellyfin </div>
      <div className="stream-to-any-device-from-your-own-server-with-no-strings-attached-your-media-your-server-your-way">
        Stream to any device from your own server, with no strings attached.
        Your media, your server, your way.{" "}
      </div>
      <div className="back-tile2"></div>
      <div className="icon-appstore-jellyfin2">
        <div className="tile6">
          <div className="immich-logo-stacked-light-1">
            <img className="group" src="group0.svg" />
          </div>
        </div>
      </div>
      <div className="immich">Immich </div>
      <div className="self-hosted-photo-and-video-management-solution-back-up-organize-and-manage-your-photos-with-ease">
        Self-hosted photo and video management solution. Back up, Organize, and
        manage your photos with ease.{" "}
      </div>
    </div>
  );
};
