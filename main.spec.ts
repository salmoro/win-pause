import { exec } from "child_process";
import { existsSync } from "fs";
import { pause, resume } from '.';

const pathToBin = './PSTools/pssuspend.exe';

it('should suspend and resume process (local binary)', async () => {
    const openProcess = exec('PAUSE');

    expect.assertions(2);

    const paused = await pause(openProcess.pid, pathToBin);
    expect(paused).toBeTruthy();

    const resumed = await resume(openProcess.pid, pathToBin);
    expect(resumed).toBeTruthy();

    openProcess.kill();
});

it('should suspend and resume process (remote binary)', async () => {
    const openProcess = exec('PAUSE');

    expect.assertions(2);

    const paused = await pause(openProcess.pid);
    expect(paused).toBeTruthy();

    const resumed = await resume(openProcess.pid);
    expect(resumed).toBeTruthy();

    openProcess.kill();
});
