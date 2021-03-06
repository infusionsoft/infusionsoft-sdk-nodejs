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
* The Entrylongstring model module.
* @module model/Entrylongstring
* @version V1.0
*/
export default class Entrylongstring {
    /**
    * Constructs a new <code>Entrylongstring</code>.
    * @alias module:model/Entrylongstring
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Entrylongstring</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Entrylongstring} obj Optional instance to populate.
    * @return {module:model/Entrylongstring} The populated <code>Entrylongstring</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entrylongstring();

            
            
            

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Entrylongstring.KeyEnum} key
    */
    key = undefined;






    /**
    * Allowed values for the <code>key</code> property.
    * @enum {String}
    * @readonly
    */
    static KeyEnum = {
    
        /**
         * value: "SUCCESS"
         * @const
         */
        "SUCCESS": "SUCCESS",
    
        /**
         * value: "DUPLICATE"
         * @const
         */
        "DUPLICATE": "DUPLICATE",
    
        /**
         * value: "CONTACT_NOT_FOUND"
         * @const
         */
        "CONTACT_NOT_FOUND": "CONTACT_NOT_FOUND",
    
        /**
         * value: "TAG_ID_NOT_FOUND"
         * @const
         */
        "TAG_ID_NOT_FOUND": "TAG_ID_NOT_FOUND",
    
        /**
         * value: "FAILURE"
         * @const
         */
        "FAILURE": "FAILURE"    
    };



}


