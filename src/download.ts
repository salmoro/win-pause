import { default as AdmZip } from 'adm-zip';
import { createWriteStream, existsSync } from "fs";
import { get } from 'https';
import { PsSuspendPaths as paths } from './constants';

/**
 * Downloads and extracts pssuspend.exe if not already existent.
 */
function downloadPsSuspend() {
    const psSuspendUrl = 'https://live.sysinternals.com/files/pssuspend.zip';
    const writeStream = createWriteStream(paths.zipped);

    return new Promise((resolve, reject) => {
        if (existsSync(paths.unzipped)) {
            return resolve();
        }

        writeStream.on('close', () => {
            const zip = new AdmZip(paths.zipped);
            zip.extractAllTo(paths.unzipped);
            resolve();
        });

        get(psSuspendUrl, (res) => {
            res.pipe(writeStream);
        }).on('error', reject);
    });

}

export {
    downloadPsSuspend,
};
