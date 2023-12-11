//Imports tools and API calls
import * as bluAPI from './blu-api'
import * as tools from '../tools'

// Function to get all blu-rays
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

// Function to get a specific blu-ray
export async function getBluRay(token,owner,id) {
    try {
        const response = await bluAPI.show(token,owner,id)
        return response
    } catch (err) {
        return err
    }
}

// Function to get create a blu-ray
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

// Function to update a specific blu-ray
export async function updateBluRay(token,owner, id, data) {
    try {
        await bluAPI.update(token,owner, id, data).then((res) => {
            return res
        })
    } catch (err) {
        return err
    }
}

// Function to delete a specific blu-ray
export async function destroyBluRay(token,owner, id) {
    try {
        const response = await bluAPI.destroy(token,owner, id)
        return response
    } catch (err) {
        return err
    }
}

// Function to get all blu-rays for feed
export async function getBluRayFeed(token,owner) {
    try {
        return await bluAPI.feed(token,owner).then((bluRays) => {
            bluRays.sort((a, b) => (a.dateAdded > b.dateAdded) ? -1 : (a.dateAdded < b.dateAdded) ? 1 : 0);
            return bluRays
        }).catch((err)=>{
            console.log(err)
        })
    } catch (err) {
        return err
    }
}

// Function to get a single other blu-ray
// Function to get a specific blu-ray
export async function getOtherBluRay(token,owner,id) {
    try {
        const response = await bluAPI.other(token,owner,id)
        return response
    } catch (err) {
        return err
    }
}