import * as bluAPI from './blu-api'
import * as tools from '../tools'

export async function getAllBluRays(token) {
    try {
        return await bluAPI.index(token).then((bluRays) => {
            bluRays.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0);
            return bluRays
        }).catch((err)=>{
            console.log(err)
        })
    } catch (err) {
        return err
    }
}

export async function getBluRay(token,id) {
    try {
        const response = await bluAPI.show(token,id)
        return response
    } catch (err) {
        return err
    }
}

export async function createBluRay(token,data) {
    try {
        
        const newTitle = tools.titlesWithThe(data.title);
        data.title = newTitle;

        await bluAPI.create(token,data).then((res) => {
            return res
        })

    } catch (err) {
        return err
    }
}

export async function updateBluRay(token, id, data) {
    try {
        await bluAPI.update(token, id, data).then((res) => {
            return res
        })
    } catch (err) {
        return err
    }
}

export async function destroyBluRay(token, id) {
    try {
        const response = await bluAPI.destroy(token, id)
        return response
    } catch (err) {
        return err
    }
}