import React, {useState} from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'



const Add = ({url}) => {

    const[image,setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        category:"",
        price:"",
        category:"Shell"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('price', Number(data.price));
        formData.append('category',data.category);
        formData.append('image',image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                category:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        } 
        else {
            toast.error(response.data.message)
        }
    }

  return (
    <div className='page-add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p className='img-upload'> 1. Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p className='product-name'> 2. Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description fex-col">
                <p className='desc'> 3. Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p> 4. Product category</p>
                    <select onChange={onChangeHandler} name ="category">
                        <option value="Shell">Shell</option>
                        <option value="Mobil">Mobil</option>
                        <option value="Castrol">Castrol</option>
                        <option value="Yamaha">Yamaha </option>
                        <option value="Honda ">Honda </option>
                        <option value="Petrolimex ">Petrolimex </option>
                        <option value="Saigon Petro">Saigon Petro</option>
                        <option value="MobiPet">MobiPet</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p> 5. Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>
                </div>
            </div>
            <button type='submit' className='add-btn'> ADD </button>
        </form>
    </div>
  )
}

export default Add
