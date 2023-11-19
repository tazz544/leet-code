type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	const value1 = await promise1;
    const value2 = await promise2;

    return new Promise((resolve) => resolve(value1 + value2));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
