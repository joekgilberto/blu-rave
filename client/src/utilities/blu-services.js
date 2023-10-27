import * as bluAPI from './blu-api'

export async function getAllBluRays() {
    try {
        return await bluAPI.index().then((bluRays)=>{
            bluRays.sort((a,b) => (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0);
            return bluRays
        })
    } catch (err) {
        return err
    }
}

export async function getBluRay(id) {
    try {
        const response = await bluAPI.show(id)
        return response
    } catch (err) {
        return err
    }
}

export async function createBluRay(data) {
    try {
        await bluAPI.create(data).then((res)=>{
            return res
        })
        
    } catch (err) {
        return err
    }
}

export async function updateBluRay(id,data) {
    try {
        await bluAPI.update(id,data).then((res)=>{
            return res
        })
    } catch (err) {
        return err
    }
}

export async function destroyBluRay(id) {
    try {
        const response = await bluAPI.destroy(id)
        return response
    } catch (err) {
        return err
    }
}