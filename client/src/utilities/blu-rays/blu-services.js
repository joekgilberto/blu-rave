import * as bluAPI from './blu-api'
import * as tools from '../tools'

export async function getAllBluRays(token,owner) {
    try {
        return await bluAPI.index(token,owner).then((bluRays) => {
            bluRays.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0);
            return bluRays
        }).catch((err)=>{
            console.log(err)
        })
    } catch (err) {
        return err
    }
}

export async function getBluRay(token,owner,id) {
    try {
        const response = await bluAPI.show(token,owner,id)
        return response
    } catch (err) {
        return err
    }
}

export async function createBluRay(token,owner,data) {
    try {
        
        const newTitle = tools.titlesWithThe(data.title);
        data.title = newTitle;

        await bluAPI.create(token,owner,data).then((res) => {
            return res
        })

    } catch (err) {
        return err
    }
}

export async function updateBluRay(token,owner, id, data) {
    try {
        await bluAPI.update(token,owner, id, data).then((res) => {
            return res
        })
    } catch (err) {
        return err
    }
}

export async function destroyBluRay(token,owner, id) {
    try {
        const response = await bluAPI.destroy(token,owner, id)
        return response
    } catch (err) {
        return err
    }
}