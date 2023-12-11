// Stylizes titles starting with 'the' to ensure it is properly alphabetized
export function titlesWithThe(input){
    if (input.startsWith("The ")) {
        let title = input.split('')
        title.splice(0, 4);
        title = title.concat([',', ' ', 'T', 'h', 'e'])
        const output = title.join('')
        return output
    } else{
        return input
    }
}

// Sets auth header
export function authConfig(token, owner){
    const auth = {headers: {Authorization: `Bearer ${token}`, owner: owner}}
    return auth
}

export function putTheBack(input){
    if (input.endsWith(", The")) {
        let title = input.split('')
        title.splice(-5, 5);
        const newTitle = ['T','h','e',' '].concat(title)
        const output = newTitle.join('')
        return output
    } else{
        return input
    }
}