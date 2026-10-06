import "./VertexOsAppStore.css";
import { Dock, DockView } from "../Dock/Dock";

export interface IVertexOsAppStoreProps {
  className?: string;
  onNavigate?: (view: DockView) => void;
  activeView?: DockView;
}

export const VertexOsAppStore = ({
  className,
  onNavigate,
  activeView = "app-store",
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
      <Dock activeView={activeView} onNavigate={onNavigate ?? (() => {})} />
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
