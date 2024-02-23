const assert = (condition: unknown, error: Error | string = new Error()) => {
  if (!condition) {
    if (typeof error === 'string') {
      throw new Error(error);
    } else {
      throw error;
    }
  }
};

export default assert;
