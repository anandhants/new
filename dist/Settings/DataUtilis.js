"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMenusData = exports.notifiData = exports.headerTitles = exports.headerSubMenu = exports.headerSelectData = exports.headerMenus = exports.headerIcons = void 0;
const headerMenus = exports.headerMenus = [{
  id: 1,
  name: "Rooms"
}, {
  id: 2,
  name: "Children"
}, {
  id: 3,
  name: "My Work"
}];
const headerIcons = exports.headerIcons = [{
  name: 'clock'
}, {
  name: 'bell'
}, {
  name: 'search'
}];
const headerSubMenu = exports.headerSubMenu = [{
  name: "Bluebells",
  id: 1,
  icons: "home",
  options: true,
  selectData: [{
    items: [{
      id: 5,
      name: "Lilies Baby"
    }, {
      id: 2,
      name: "Waratahs"
    }, {
      id: 3,
      name: "Sunrays"
    }, {
      id: 4,
      name: "Tea Trees"
    }, {
      id: 1,
      name: "Bluebells"
    }, {
      id: 6,
      name: "Wattle"
    }, {
      id: 7,
      name: "Orchids"
    }, {
      id: 8,
      name: "Schoolies"
    }]
  }],
  items: [{
    id: 1,
    name: "Notes"
  }, {
    id: 2,
    name: "Attendance"
  }, {
    id: 3,
    name: "Daily Care"
  }, {
    id: 4,
    name: "Activities"
  }]
}, {
  name: "Sarah Smith",
  id: 2,
  options: false,
  icons: "squarehouse",
  selectData: [{
    items: [{}]
  }],
  items: [{
    id: 1,
    name: "About"
  }, {
    id: 2,
    name: "Learning"
  }, {
    id: 3,
    name: "Daily Care"
  }, {
    id: 4,
    name: "Activities"
  }]
}, {
  name: "Smith Sarah",
  id: 3,
  options: false,
  icons: "bell",
  selectData: [{
    items: [{}]
  }],
  items: [{
    id: 1,
    name: "My Data"
  }, {
    id: 2,
    name: "Learning"
  }, {
    id: 3,
    name: "DailyCare"
  }, {
    id: 4,
    name: "Activities"
  }]
}];
const headerSelectData = exports.headerSelectData = [{
  id: 1,
  name: "Rooms"
}, {
  id: 2,
  name: "Children"
}, {
  id: 3,
  name: "Work"
}];
const toggleMenusData = exports.toggleMenusData = [{
  id: 1,
  label: "Application",
  items: [{
    name: "Settings",
    icon: "settings"
  }, {
    name: "Message",
    icon: "message"
  }, {
    name: "Photo",
    icon: "photo"
  }]
}, {
  id: 2,
  label: "Danger zone",
  items: [{
    name: " Transfer my data",
    icon: "LeftRigh"
  }, {
    name: " Delete my account",
    icon: "trash",
    colorShade: true
  }]
}];
const notifiData = exports.notifiData = [{
  id: 1,
  title: "Rooms selected",
  Description: "justify notify"
}, {
  id: 2,
  title: "Children selected",
  Description: "justify notify"
}, {
  id: 3,
  title: "My Work selected",
  Description: "justify notify"
}];
const headerTitles = exports.headerTitles = [{
  id: 1,
  name: "Kindy Funding"
}, {
  id: 2,
  name: "Daily Task"
}, {
  id: 3,
  name: "Staff SignIn"
}, {
  id: 3,
  name: "Admin Site"
}];