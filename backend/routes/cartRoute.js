import express from 'express';
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);

/**
 * @api {POST} /cart/add Add Item to Cart
 * @apiVersion 1.0.0
 * @apiName addToCart
 * @apiGroup Cart
 * @apiPermission Authorized user
 * 
 * @apiDescription Adds an item to the user's cart. If the item is already in the cart, its quantity is incremented by 1. Requires user authentication.
 * 
 * @apiHeader {String} Authorization Bearer token obtained upon user login.
 * 
 * @apiParam {String} userId The ID of the user whose cart is to be updated.
 * @apiParam {String} itemId The ID of the item to be added to the cart.
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *   "userId": "12345",
 *   "itemId": "67890"
 * }
 * 
 * @apiSuccess {Boolean} success Indicates if the item was successfully added.
 * @apiSuccess {String} message Status message.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "Added To Cart"
 *     }
 * 
 * @apiError (Error 400) BadRequest Error adding item to cart.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "success": false,
 *       "message": "Error"
 *     }
 */
// router.post("/add", authMiddleware, addToCart);

cartRouter.post("/remove",authMiddleware, removeFromCart);

/**
 * @api {POST} /cart/remove Remove Item from Cart
 * @apiVersion 1.0.0
 * @apiName removeFromCart
 * @apiGroup Cart
 * @apiPermission Authorized user
 * 
 * @apiDescription Removes an item from the user's cart or decreases its quantity by 1 if present. Requires user authentication.
 * 
 * @apiHeader {String} Authorization Bearer token obtained upon user login.
 * 
 * @apiParam {String} userId The ID of the user whose cart is to be updated.
 * @apiParam {String} itemId The ID of the item to be removed from the cart.
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *   "userId": "12345",
 *   "itemId": "67890"
 * }
 * 
 * @apiSuccess {Boolean} success Indicates if the item was successfully removed.
 * @apiSuccess {String} message Status message.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "Removed From Cart"
 *     }
 * 
 * @apiError (Error 400) BadRequest Error removing item from cart.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "success": false,
 *       "message": "Error"
 *     }
 */
// router.post("/remove", authMiddleware, removeFromCart);

cartRouter.post("/get", authMiddleware, getCart);

/**
 * @api {POST} /cart/get Get Cart
 * @apiVersion 1.0.0
 * @apiName getCart
 * @apiGroup Cart
 * @apiPermission Authorized user
 * 
 * @apiDescription Retrieves the current contents of the user's cart. Requires user authentication.
 * 
 * @apiHeader {String} Authorization Bearer token obtained upon user login.
 * 
 * @apiParam {String} userId The ID of the user whose cart data is to be fetched.
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *   "userId": "12345"
 * }
 * 
 * @apiSuccess {Boolean} success Indicates if the cart data was successfully retrieved.
 * @apiSuccess {Object} cartData An object where keys are item IDs and values are the quantities of each item in the cart.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "cartData": {
 *         "67890": 2,
 *         "12345": 1
 *       }
 *     }
 * 
 * @apiError (Error 400) BadRequest Error retrieving cart data.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "success": false,
 *       "message": "Error"
 *     }
 */
// router.post("/get", authMiddleware, getCart);

export default cartRouter;