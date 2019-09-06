# Win Pause
Pause & resume windows processes with Node

A node wrapper for [PsSuspend](https://docs.microsoft.com/en-us/sysinternals/downloads/pssuspend)

> ATTENTION: By running this module you'll be using PsSuspend directly from [Sysinternals Live](https://docs.microsoft.com/en-us/sysinternals/#sysinternals-live)
> and you'll be programmatically accepting the EULA.
> Please be sure to read the Eula [here](https://docs.microsoft.com/en-us/sysinternals/license-terms) before proceeding.



## Supported OS

    Client: Windows Vista and higher.
    Server: Windows Server 2008 and higher.


## Installation

Install WinPause via NPM:
```sh
npm i win-pause
```

## Usage
```ts
import { pause, resume } from 'win-pause';

const pid = 9020

pause(pid)
    .then(() => console.log('successfully paused!'))

resume(pid)
    .then(() => console.log('successfully resumed!'))
```

Alternatively, to be network independent, Win Pause can be used with a local pssuspend binary:

First download and unzip [pssuspend](https://live.sysinternals.com/files/pssuspend.zip).

```ts
import { pause, resume } from 'win-pause';

const pid = 9020
const pathToLocalBinary = '../pssuspend.exe';

pause(pid, pathToLocalBinary)
    .then(() => console.log('successfully paused!'))

resume(pid, pathToLocalBinary)
    .then(() => console.log('successfully resumed!'))
```

## Test
```sh
npm test
```