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
import ContactList from '../model/ContactList';
import ContactTagList from '../model/ContactTagList';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Entrylongstring from '../model/Entrylongstring';
import Error from '../model/Error';
import FullContact from '../model/FullContact';
import TagId from '../model/TagId';
import UpsertContact from '../model/UpsertContact';

/**
* Contact service.
* @module api/ContactApi
* @version V1.0
*/
export default class ContactApi {

    /**
    * Constructs a new ContactApi. 
    * @alias module:api/ContactApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the applyTagsToContactIdUsingPOST operation.
     * @callback module:api/ContactApi~applyTagsToContactIdUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Entrylongstring>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply Tags
     * Apply a list of tags to a given contact record
     * @param {Number} contactId contactId
     * @param {module:model/TagId} tagIds tagIds
     * @param {module:api/ContactApi~applyTagsToContactIdUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Entrylongstring>}
     */
    applyTagsToContactIdUsingPOST(contactId, tagIds, callback) {
      let postBody = tagIds;

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling applyTagsToContactIdUsingPOST");
      }

      // verify the required parameter 'tagIds' is set
      if (tagIds === undefined || tagIds === null) {
        throw new Error("Missing the required parameter 'tagIds' when calling applyTagsToContactIdUsingPOST");
      }


      let pathParams = {
        'contactId': contactId
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
      let returnType = [Entrylongstring];

      return this.apiClient.callApi(
        '/contacts/{contactId}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createContactUsingPOST operation.
     * @callback module:api/ContactApi~createContactUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Contact
     * Creates a new contact as the authenticated user. NB: Contact must contain at least one item in &#x60;email_addresses&#x60; or &#x60;phone_numbers&#x60;. NB: &#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.
     * @param {Object} opts Optional parameters
     * @param {module:model/FullContact} opts.contact contact
     * @param {module:api/ContactApi~createContactUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullContact}
     */
    createContactUsingPOST(opts, callback) {
      opts = opts || {};
      let postBody = opts['contact'];


      let pathParams = {
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
      let returnType = FullContact;

      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createOrUpdateContactUsingPUT operation.
     * @callback module:api/ContactApi~createOrUpdateContactUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or Update a Contact
     * Creates a new contact or updates a contact as the authenticated user. NB: New Contacts must contain at least one item in &#x60;email_addresses&#x60; or &#x60;phone_numbers&#x60;. NB: &#x60;country_code&#x60; is required if &#x60;region&#x60; is specified. Existing Contacts are updated with only the values provided in the request. Accepts a &#x60;duplicate_option&#x60; which performs duplicate checking by one of the following options: &#x60;Email&#x60;, &#x60;EmailAndName&#x60;, &#x60;EmailAndNameAndCompany&#x60;, if a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the &#x60;duplicate_option&#x60; provided, a new contact record will be created
     * @param {Object} opts Optional parameters
     * @param {module:model/UpsertContact} opts.contact contact
     * @param {module:api/ContactApi~createOrUpdateContactUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullContact}
     */
    createOrUpdateContactUsingPUT(opts, callback) {
      opts = opts || {};
      let postBody = opts['contact'];


      let pathParams = {
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
      let returnType = FullContact;

      return this.apiClient.callApi(
        '/contacts', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContactUsingDELETE operation.
     * @callback module:api/ContactApi~deleteContactUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Contact
     * Deletes the specified contact
     * @param {Number} contactId contactId
     * @param {module:api/ContactApi~deleteContactUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteContactUsingDELETE(contactId, callback) {
      let postBody = null;

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling deleteContactUsingDELETE");
      }


      let pathParams = {
        'contactId': contactId
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
      let returnType = null;

      return this.apiClient.callApi(
        '/contacts/{contactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAppliedTagsUsingGET operation.
     * @callback module:api/ContactApi~listAppliedTagsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactTagList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Applied Tags
     * Retrieves a list of tags applied to a given contact
     * @param {Number} contactId contactId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {module:api/ContactApi~listAppliedTagsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactTagList}
     */
    listAppliedTagsUsingGET(contactId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling listAppliedTagsUsingGET");
      }


      let pathParams = {
        'contactId': contactId
      };
      let queryParams = {
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
      let returnType = ContactTagList;

      return this.apiClient.callApi(
        '/contacts/{contactId}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listContactsUsingGET operation.
     * @callback module:api/ContactApi~listContactsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Contacts
     * Retrieves a list of all contacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {String} opts.email Optional email address to query on
     * @param {String} opts.givenName Optional first name or forename to query on
     * @param {String} opts.familyName Optional last name or surname to query on
     * @param {module:model/String} opts.order Attribute to order items by
     * @param {module:api/ContactApi~listContactsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactList}
     */
    listContactsUsingGET(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'email': opts['email'],
        'given_name': opts['givenName'],
        'family_name': opts['familyName'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContactList;

      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCustomFieldsUsingGET operation.
     * @callback module:api/ContactApi~listCustomFieldsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomFieldMetaData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Contact Custom Fields
     * Retrieves a list of custom fields for Contacts
     * @param {module:api/ContactApi~listCustomFieldsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomFieldMetaData>}
     */
    listCustomFieldsUsingGET(callback) {
      let postBody = null;


      let pathParams = {
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
      let returnType = [CustomFieldMetaData];

      return this.apiClient.callApi(
        '/contactCustomFields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loadUsingGET operation.
     * @callback module:api/ContactApi~loadUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Contact
     * Retrieves a single contact
     * @param {Number} id id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optionalProperties Comma-delimited list of Contact properties to include in the response. (Some fields such as &#x60;lead_source_id&#x60;, &#x60;custom_fields&#x60;, and &#x60;job_title&#x60; aren&#39;t included, by default.)
     * @param {module:api/ContactApi~loadUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullContact}
     */
    loadUsingGET(id, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling loadUsingGET");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'optional_properties': this.apiClient.buildCollectionParam(opts['optionalProperties'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FullContact;

      return this.apiClient.callApi(
        '/contacts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeTagsFromContactUsingDELETE operation.
     * @callback module:api/ContactApi~removeTagsFromContactUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Applied Tag
     * Removes a tag from the given contact
     * @param {Number} contactId contactId
     * @param {Number} tagId tagId
     * @param {module:api/ContactApi~removeTagsFromContactUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeTagsFromContactUsingDELETE(contactId, tagId, callback) {
      let postBody = null;

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling removeTagsFromContactUsingDELETE");
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling removeTagsFromContactUsingDELETE");
      }


      let pathParams = {
        'contactId': contactId,
        'tagId': tagId
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
      let returnType = null;

      return this.apiClient.callApi(
        '/contacts/{contactId}/tags/{tagId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeTagsFromContactUsingDELETE1 operation.
     * @callback module:api/ContactApi~removeTagsFromContactUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Applied Tags
     * Removes a list of tags from the given contact
     * @param {Number} contactId contactId
     * @param {String} ids ids
     * @param {module:api/ContactApi~removeTagsFromContactUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    removeTagsFromContactUsingDELETE1(contactId, ids, callback) {
      let postBody = null;

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling removeTagsFromContactUsingDELETE1");
      }

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling removeTagsFromContactUsingDELETE1");
      }


      let pathParams = {
        'contactId': contactId
      };
      let queryParams = {
        'ids': ids
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/contacts/{contactId}/tags', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContactUsingPATCH operation.
     * @callback module:api/ContactApi~updateContactUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Contact
     * Updates a contact with only the values provided in the request.
     * @param {Number} contactId contactId
     * @param {Object} opts Optional parameters
     * @param {module:model/FullContact} opts.contact contact
     * @param {module:api/ContactApi~updateContactUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullContact}
     */
    updateContactUsingPATCH(contactId, opts, callback) {
      opts = opts || {};
      let postBody = opts['contact'];

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling updateContactUsingPATCH");
      }


      let pathParams = {
        'contactId': contactId
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
      let returnType = FullContact;

      return this.apiClient.callApi(
        '/contacts/{contactId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
