module.exports.setPayload = (entity, payload) => {
  return { [entity]: payload }
}

module.exports.getCustomerData = (req, domain) => {
  return {
    email: req.body.email,
    remote_ip: req.ip,
    return_to: `${domain}/home`
  }
}
