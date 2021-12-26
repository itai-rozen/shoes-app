import axios from 'axios'
const axiosUrl = axios.create({
    baseURL: 'https://61c4eb78f1af4a0017d9987f.mockapi.io/shoes'
})
export default class Api {
    static getShoes = () =>  axiosUrl.get()

    static addShoe = shoeObj => axiosUrl.post('/',shoeObj)

    static deleteShoe = async shoeId => {
        await axiosUrl.delete(`/${shoeId}`)
    }

    static editShoe = (shoeId,shoeObj) => axiosUrl.put(`/${shoeId}`,shoeObj)
}