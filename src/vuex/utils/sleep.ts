export const sleep: (milliseconds: number) => Promise<void> = milliseconds =>
    new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
