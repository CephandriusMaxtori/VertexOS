import "./DockHome.css";

export interface IDockHomeProps {
  className?: string;
}

export const DockHome = ({
  className,
  ...props
}: IDockHomeProps): JSX.Element => {
  return (
    <div className={"dock-home " + className}>
      <div className="tile">
        <img className="icon-home" src="icon-home0.svg" />
      </div>
      <div className="running"></div>
    </div>
  );
};
