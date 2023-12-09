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