import fs from 'fs'

import productService from './product_service'
class ProductController
{
    async addProduct(req: any, res: any, next: any){
        try{
            const {price, name, description, count} = req.body
            const {image} = req.files
            await productService.addProduct(name, price, description, count, image)
            res.json().status(304)
        }catch(e){
            next(e)
        }
    }

    async getAllProducts(req: any, res: any, next: any){
        try{
            let products = await productService.getAllProducts()
            res.json(products).status(200)
        }catch(e){
            next(e)
        }
    }
    async getOneProduct(req: any, res: any, next: any){
        try{
            let {p_id} = req.query
            let product = await productService.getOneProduct(p_id)
            res.json(product).status(200)
        }catch(e){
            next(e)
        }
    }

    async getMedia(req: any, res: any, next: any){
        try{
            
        }catch(e){
            next(e)
        }
    }
}

export default new ProductController()