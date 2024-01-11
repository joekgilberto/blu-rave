// Stylizes titles starting with 'the' to ensure it is properly alphabetized
export function titlesWithThe(input) {
    if (input.startsWith("The ")) {
        let title = input.split('')
        title.splice(0, 4);
        title = title.concat([',', ' ', 'T', 'h', 'e'])
        const output = title.join('')
        return output
    } else {
        return input
    }
}

export function putTheBack(input) {
    if (input.endsWith(", The")) {
        let title = input.split('')
        title.splice(-5, 5);
        const newTitle = ['T', 'h', 'e', ' '].concat(title)
        const output = newTitle.join('')
        return output
    } else {
        return input
    }
}

export function encodeEmail(email) {
    let randInt = 0

    while (randInt === 0) {
        randInt = Math.floor(Math.random() * 4)
    }

    let encodedEmail;

    for (let i = 0; i < randInt; i++) {
        if (i === 0) {
            encodedEmail = btoa(email);
        } else {
            encodedEmail = btoa(encodedEmail);
        }
    }

    encodedEmail += randInt;

    return encodedEmail;
}

export function decodeEmail(email) {
    let emailArray = email.split('')

    let times = emailArray[emailArray.length-1]
    times = parseInt(times)
    
    emailArray.pop()

    let decodedEmail = emailArray.join('')
    let output;
    
    for(let j=0;j<times;j++){
      if (j === 0){
          output = atob(decodedEmail);
      } else {
          output = atob(output);
      }
    }
    
    return output;
}

// Sets auth header
export function authConfig(token, owner) {
    const auth = { headers: { Authorization: `Bearer ${token}`, owner: owner } }
    return auth
}

