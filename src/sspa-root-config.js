import { registerApplication, start } from "single-spa";

// Dynamic custom props that can change based on route
// customProps(appName, location) {
//   return {
//     authToken: "xc67f6as87f7s9d",
//   };
// },
registerApplication({
  name: "@sspa/profile",
  app: () => System.import("@sspa/profile"),
  activeWhen: (location) => {
    return location.pathname.startsWith('/profile')
  }
});

registerApplication({
  name: "@sspa/main",
  app: () => System.import("@sspa/main"),
  activeWhen: (location) => {
    return location.pathname.startsWith('/')
  }
});

// registerApplication({
//   name: "@sspa/auth",
//   app: () => System.import("@sspa/auth"),
//   activeWhen: (location) => {
//     return location.pathname.startsWith('/')
//   }
// });

// start({
//   urlRerouteOnly: true,
// });
start();
