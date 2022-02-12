/* global PlugIn Version Task folderNamed Folder Project Data */
/* eslint spaced-comment: ["error", "always", { "exceptions": ["{"] }] */
(() => {
  const showInProjectLib = new PlugIn.Library(new Version('1.0'))

  showInProjectLib.showInProject = async (task) => {
    await document.newWindow()

    URL.fromString('omnifocus:///task/' + task.containingProject.id.primaryKey).call(() => {})
    URL.fromString('omnifocus:///task/' + task.id.primaryKey).call(() => {})

    // set focus - Mac only as focus not yet supported on iOS API
    if (Device.current.mac) {
      document.windows[0].focus = [task.containingProject]
    }
  }

  return showInProjectLib
})()
