
/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

/**
 * This object determines if a user is a member of a portfolio.
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function PortfolioMemberships(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(PortfolioMemberships, Resource);


/**
 * Returns the compact portfolio membership records for the portfolio. You must
 * specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
   * @param {Object} [params] Parameters for the request
   * @param {Gid} [params.portfolio] The portfolio for which to fetch memberships.
   * @param {Gid} [params.workspace] The workspace for which to fetch memberships.
   * @param {String} [params.user] The user to filter the memberships to.
   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
   * @return {Promise} The response from the API
 */
PortfolioMemberships.prototype.findAll = function(
    params,
    dispatchOptions
) {
  var path = util.format('/portfolio_memberships');
  
  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact portfolio membership records for the portfolio.
   * @param {Gid} portfolio The portfolio for which to fetch memberships.
   * @param {Object} [params] Parameters for the request
   * @param {String} [params.user] If present, the user to filter the memberships to.
   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
   * @return {Promise} The response from the API
 */
PortfolioMemberships.prototype.findByPortfolio = function(
    portfolio,
    params,
    dispatchOptions
) {
  var path = util.format('/portfolios/%s/portfolio_memberships', portfolio);
  
  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the portfolio membership record.
   * @param {Gid} portfolio_membership Globally unique identifier for the portfolio membership.
   * @param {Object} [params] Parameters for the request
   * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
   * @return {Promise} The requested resource
 */
PortfolioMemberships.prototype.findById = function(
    portfolioMembership,
    params,
    dispatchOptions
) {
  var path = util.format('/portfolio_memberships/%s', portfolioMembership);
  
  return this.dispatchGet(path, params, dispatchOptions);
};


module.exports = PortfolioMemberships;
/* jshint ignore:end */