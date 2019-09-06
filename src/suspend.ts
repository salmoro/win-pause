
import { execFile } from 'child_process';
import { PsSuspendPaths as paths} from './constants';

type Pid = number | string;

/**
 * Pause a process
 * @param pid
 * @param binPath
 */
function pause(
    pid: Pid,
    binPath?: string,
) {
    return psSuspend(pid, binPath);
}

/**
 * Resume a paused a process
 * @param pid
 * @param binPath
 */
function resume(
    pid: Pid,
    binPath?: string,
) {
    return psSuspend(pid, binPath, true);
}

function psSuspend(
    pid: Pid,
    binPath = paths.binary,
    isResume = false,
) {
    const pidStr = String(pid);

    return new Promise((resolve, reject) => {
        const args = [
            '/accepteula',
            (isResume ? '-r' : ''),
            pidStr,
        ].filter(Boolean);

        execFile(
            binPath,
            args,
            (error, stdOut) => {
                if (error) {
                    reject(error);
                }
                resolve(stdOut);
            });
    });
}

export {
    pause,
    resume,
};
