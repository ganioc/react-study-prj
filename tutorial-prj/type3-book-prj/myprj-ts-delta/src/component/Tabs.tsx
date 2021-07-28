import React from "react";

// interface IProps {
// }
interface IState {
  activeName: string;
  activeContent: React.ReactNode;
}
interface ITabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | JSX.Element;
}
// to shared between components
interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name: string, content: React.ReactNode) => void;
}
const TabsContext = React.createContext<ITabsContext>({});
class Tabs extends React.Component<{}, IState> {
  private handleTabClick = (name: string, content: React.ReactNode) => {
    console.log("Tabs handleTabClick:", name);
    this.setState({ activeName: name, activeContent: content });
  };
  public static Tab: React.FC<ITabProps> = (props) => (
    <TabsContext.Consumer>
      {(context: ITabsContext) => {
        if (!context.activeName && props.initialActive) {
          if (context.handleTabClick) {
            context.handleTabClick(props.name, props.children);
            return null;
          }
        }

        const activeName = context.activeName
          ? context.activeName
          : props.initialActive
          ? props.name
          : "";
        console.log("activeName:", context.activeName);
        // console.log("handleTabClick:", context.handleTabClick);
        const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
          console.log("handleTabClick->");
          if (context.handleTabClick) {
            context.handleTabClick(props.name, props.children);
          }
        };
        return (
          <li
            onClick={handleTabClick}
            className={props.name === activeName ? "active" : ""}
          >
            {props.heading()}
          </li>
        );
      }}
    </TabsContext.Consumer>
  );

  public render() {
    return (
      <TabsContext.Provider
        value={{
          activeName: this.state ? this.state.activeName : "",
          handleTabClick: this.handleTabClick,
        }}
      >
        <ul className="tabs">{this.props.children}</ul>
        <div>{this.state && this.state.activeContent}</div>
      </TabsContext.Provider>
    );
  }
}

export default Tabs;
