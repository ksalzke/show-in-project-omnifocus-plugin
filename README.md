# About

This is an Omni Automation plug-in for OmniFocus that allows the user to quickly open the selected task in a focused project view in a new window/tab.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from the internet!)_

## Known issues 

Refer to ['issues'](https://github.com/ksalzke/show-in-project-omnifocus-plugin/issues) for known issues and planned changes/enhancements.

# Installation & Set-Up

1. Download the [latest release](https://github.com/ksalzke/show-in-project-omnifocus-plugin/releases/latest).
2. Unzip the downloaded file.
3. Move the `.omnifocusjs` file to your OmniFocus plug-in library folder (or open it to install).

# Actions

This plug-in contains the following action:

## Show Task In Project

This action can be run when one task is selected.

It runs the `showInProject` function described below, using the task as input.

# Functions

This function contains one function within the `showInProjectLib` library:

## `showInProject (task: Task)`

This function takes a task as input. It then shows this task within the Projects view in a new window (or, on macOS, a new tab, depending on the preference that the user has set at the macOS-level).

On macOS, the focus is set to the task's containing project.