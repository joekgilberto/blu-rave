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