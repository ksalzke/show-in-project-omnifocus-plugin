/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {
    const lib = this.showInProjectLib

    await lib.showInProject(selection.tasks[0])
  })

  action.validate = function (selection, sender) {
    return selection.tasks.length === 1
  }

  return action
})()
