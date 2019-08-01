export default class TooManyResultsError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'TooManyResultsError';
    }
}
