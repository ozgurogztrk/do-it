export const notContains = (array: any, target: any) => {
  return array.every((object: any) => {
    return object.title !== target;
  });
};
