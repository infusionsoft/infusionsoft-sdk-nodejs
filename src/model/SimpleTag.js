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


import ApiClient from '../ApiClient';





/**
* The SimpleTag model module.
* @module model/SimpleTag
* @version V1.0
*/
export default class SimpleTag {
    /**
    * Constructs a new <code>SimpleTag</code>.
    * @alias module:model/SimpleTag
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SimpleTag</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SimpleTag} obj Optional instance to populate.
    * @return {module:model/SimpleTag} The populated <code>SimpleTag</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleTag();

            
            
            

            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} category
    */
    category = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;








}


