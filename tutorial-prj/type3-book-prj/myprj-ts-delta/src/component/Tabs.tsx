import React from "react";

// interface IProps {
// }
interface IState {
  activeName: string;
}
interface ITabProps {
  name: string;
  initialActive?: boolean;
}
// to shared between components
interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name: string) => void;
}
const TabsContext = React.createContext<ITabsContext>({});
class Tabs extends React.Component<{}, IState> {
  private handleTabClick = (name: string) => {
    console.log("Tabs handleTabClick:", name);
    this.setState({ activeName: name });
  };
  public static Tab: React.FC<ITabProps> = (props) => (
    <TabsContext.Consumer>
      {(context: ITabsContext) => {
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
            context.handleTabClick(props.name);
          }
        };
        return (
          <li
            onClick={handleTabClick}
            className={props.name === activeName ? "active" : ""}
          >
            {props.children}
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
      </TabsContext.Provider>
    );
  }
}

export default Tabs;
