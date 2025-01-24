type ToBeOrNotToBe = {
    toBe: (givenValue: any) => boolean;
    notToBe: (givenValue: any) => boolean;
};

function expect(expectedValue: any): ToBeOrNotToBe {
    return {
        toBe: (givenValue: any): boolean => {
            const areValuesEqual = expectedValue === givenValue;

            if (!areValuesEqual) {
                throw new Error('Not Equal');
            }

            return true;
        },
        notToBe: (givenValue: any): boolean => {
            const areValuesEqual = expectedValue === givenValue;

            if (areValuesEqual) {
                throw new Error('Equal');
            }

            return true;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
