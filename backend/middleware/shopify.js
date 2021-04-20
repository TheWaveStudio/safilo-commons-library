module.exports.setPayload = (entity, payload) => {
  return { [entity]: payload }
}

export const getUri = (domain, version = null, key = '') => {
  const getKey = (domain, version, key) => {
    const basePath = `https://${domain}/`
    const upperKey = key.toUpperCase();
    const map = {
      ADMIN: `admin/api/${version}/`,
      LOGIN: `account/login/multipass/`,
      LANDING: `home`
    };
    return `${basePath}${map[upperKey]}`
  }
  return (domain && version && key)
    ? getKey(domain, version, key)
    : (key) => getKey(domain, version, key);
}