#!/usr/bin/env node

const path = require('path')
const createDMG = require('electron-installer-dmg')
const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const rimraf = require('rimraf');


deleteInstallerFolder()
    .then(getInstallerConfig)
    .then(createWindowsInstaller)
    .then(createDmgInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1)
    })

function createDmgInstaller() {
    const rootPath = path.join(__dirname, '..')
    const releasePath = path.join(rootPath, 'release')
    const appPath = path.join(releasePath, 'NEO\ Address\ Viewer-darwin-x64/NEO\ Address\ Viewer.app')
    const outPath = path.join(releasePath, 'installer')
    return new Promise((resolve, reject) =>  {
        const opts = {
            appPath: appPath,
            name: 'neo-address-viewer',
            out: outPath
        }
        createDMG(opts, function done (err) { err ? reject(err) : resolve() })
    })
}

function getInstallerConfig() {
    const rootPath = path.join(__dirname, '..')
    const releasePath = path.join(rootPath, 'release')
    const appDirectory = path.join(releasePath, 'NEO\ Address\ Viewer-win32-ia32')
    const outputDirectory = path.join(releasePath, 'installer')
    const iconDirectory = path.join(rootPath, 'assets', 'icon', 'win', 'icon.ico')
    return Promise.resolve({
        appDirectory: appDirectory,
        outputDirectory: outputDirectory,
        exe: 'NEO Address Viewer.exe',
        iconUrl: 'https://raw.githubusercontent.com/hyunchel/neo-address-viewer/master/assets/icon/win/icon.ico',
        authors: 'Hyunchel Kim',
        noMsi: true,
        setupExe: 'NEOAddressViewerSetup.exe',
        setupIcon: iconDirectory
    })
}

function deleteInstallerFolder() {
    const directory = path.join(__dirname, '..', 'release', 'installer')
    return new Promise((resolve, reject) => {
        rimraf(directory, (error) => {
            error ? reject(error) : resolve()
        })
    })
}