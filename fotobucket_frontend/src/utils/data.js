export const userQuery = (userId) => {
  // get document of type user of specific userID
  const query = `*[_type == 'user' && _id=='${userId}']`;
  return query;
};
