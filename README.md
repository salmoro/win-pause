# Win Pause
Pause & resume windows processes with Node

A node wrapper for [PsSuspend](https://docs.microsoft.com/en-us/sysinternals/downloads/pssuspend)

> ATTENTION: By running this module you'll be be programmatically
> accepting the EULA of PsSuspend.
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
If you already have [PsSuspend](https://live.sysinternals.com/files/pssuspend.zip) on the machine:
```ts
import { pause, resume } from 'win-pause';

const binPath = 'my-path/pssuspend.exe';
const pid = 9020;

pause(pid, binPath)
    .then(() => console.log('successfully paused!'));

resume(pid, binPath)
    .then(() => console.log('successfully resumed!'));
```

Otherwise: 

```ts
import { pause, resume, downloadPsSuspend } from 'win-pause';

const pid = 9020;

downloadPsSuspend()
    .then(() => {
        pause(pid)
            .then(() => console.log('successfully paused!'));
        
        resume(pid)
            .then(() => console.log('successfully resumed!'));
    })

```

## Test
```sh
npm test
```