import { default as AdmZip} from 'adm-zip';
import { createWriteStream } from "fs";
import { default as request } from 'request';

const psToolsUrl = 'https://download.sysinternals.com/files/PSTools.zip';

const zippedPath = './PSTools.zip';
const unzippedPath = './PSTools';
const writeStream = createWriteStream(zippedPath);
const headers = {
    ['Content-Security-Policy']: `default-src 'none'`,
};

request({
    headers,
    url: psToolsUrl,
}, () => {
    const zip = new AdmZip(zippedPath);
    zip.extractAllTo(unzippedPath);
}).pipe(writeStream);
