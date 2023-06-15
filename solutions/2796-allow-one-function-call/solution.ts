type Fn = (...args: any[]) => any

function once(fn: Fn): Fn {

    return function (...args) {
        const result = fn(...args);

        if (result.calls > 1) {
            return;
        }

        return result;
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
