import { exec } from "child_process";
import { downloadPsSuspend } from './download';
import { pause, resume } from './suspend';

it('should suspend and resume process', async () => {
    const openProcess = exec('PAUSE');

    expect.assertions(2);

    await downloadPsSuspend();

    const paused = await pause(openProcess.pid);
    expect(paused).toBeTruthy();

    const resumed = await resume(openProcess.pid);
    expect(resumed).toBeTruthy();

    openProcess.kill();
});
