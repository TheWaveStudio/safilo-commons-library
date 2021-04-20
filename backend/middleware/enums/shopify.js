export const endpoints = {
  CUSTOMERS: 'customers'
}

export const entities = {
  CUSTOMER: 'customer'
}

export const apiVersions = {
  releaseCandidate: '2021-07',
  latest: '2021-04'
}

export const uri = (domain, version = null) => { 
  return {
  ADMIN: `https://${domain}/admin/api/${version}/`,
  LOGIN: `https://${domain}/account/login/multipass/`,
  LANDING: `https://${domain}/home`
  }
}