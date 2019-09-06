import { existsSync } from "fs";
import { PsSuspendPaths as paths } from './constants';
import { downloadPsSuspend } from './download';

it('should download PsSuspend binary', async () => {
    await downloadPsSuspend();
    expect(existsSync(paths.binary)).toBeTruthy();
});
