/**
 * Return a random user from api.
 *
 * @returns {Object} - A user.
 */
export const fetchUser = async () => {
  const response = await fetch('https://randomuser.me/api');
  const body = await response.json();
  return body.results[0];
};
