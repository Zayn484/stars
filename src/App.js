// import React, { Component } from "react";
// import { Switch, Route } from "react-router";
// import Toolbar from "./components/Toolbar/Toolbar";
// import SideDrawer from "./components/SideDrawer/SideDrawer";
// import Backdrop from "./components/Backdrop/Backdrop";

// class App extends Component {
//   state = {
//     sideDrawerOpen: false
//   };

//   drawerToggleClickHandler = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen };
//     });
//   };

//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false });
//   };

//   render() {
//     const { sideDrawerOpen } = this.state;

//     const { children } = this.props;

//     return (
//       <div className="app-container">
//           {children}    
//       </div>
//     );
//   }
// }

// export default App;
