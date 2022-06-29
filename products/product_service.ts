import status from 'http-errors'

import { Products } from "./product_models";

class ProductService
{
    async addProduct(name: string, price: number, description: string, count: number, image: any){
        if(!name || !price){
            throw status(203)
        }
        let prod = Products.build({
            name: name,
            price: price,
            description: description,
            count: count
        })
        if(image){
            prod.image_url = String(prod.id)
            let type_img = image.name.split('.')
            image.mv(`./products/media/${prod.image_url}.${type_img[type_img.length-1]}`)
        }

        prod.save()
    }

    async getAllProducts(){
    
        return await Products.findAll()
    }


    async getOneProduct(p_id: string){
        
        return await Products.findOne({
            where:{
                id: p_id
            }
        })
    }
    async getMedia(){
        let prods = await Products.findAll()
        let links: Array<string> = Array<string>()

        for (let id in prods){
            links.push('/products/media/'+prods[id].image_url) 
        }
        console.log(links)
    }
}

export default new ProductService()