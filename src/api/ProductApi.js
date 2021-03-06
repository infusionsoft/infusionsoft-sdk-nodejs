/**
 * Infusionsoft REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Product from '../model/Product';
import ProductList from '../model/ProductList';
import ProductStatusList from '../model/ProductStatusList';

/**
* Product service.
* @module api/ProductApi
* @version V1.0
*/
export default class ProductApi {

    /**
    * Constructs a new ProductApi. 
    * @alias module:api/ProductApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the loadProductUsingGET operation.
     * @callback module:api/ProductApi~loadProductUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Product
     * Retrieves a single product from the authorized Infusionsoft account
     * @param {Number} productId productId
     * @param {module:api/ProductApi~loadProductUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    loadProductUsingGET(productId, callback) {
      let postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling loadProductUsingGET");
      }


      let pathParams = {
        'productId': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Product;

      return this.apiClient.callApi(
        '/products/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET3 operation.
     * @callback module:api/ProductApi~searchUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Products
     * Retrieves a list of all products
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Boolean} opts.active Sets status of items to return
     * @param {module:api/ProductApi~searchUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductList}
     */
    searchUsingGET3(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'active': opts['active']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductList;

      return this.apiClient.callApi(
        '/products/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syncUsingGET1 operation.
     * @callback module:api/ProductApi~syncUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductStatusList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Synced Products
     * The Sync endpoint returns a set of products that have been updated or created since the last result set was retrieved, minus any products that have been deleted.
     * @param {Object} opts Optional parameters
     * @param {String} opts.syncToken sync_token
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {module:api/ProductApi~syncUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductStatusList}
     */
    syncUsingGET1(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'sync_token': opts['syncToken'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductStatusList;

      return this.apiClient.callApi(
        '/products/sync', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
