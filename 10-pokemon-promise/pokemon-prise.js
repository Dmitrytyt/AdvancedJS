const LANGUAGE = 'en';
const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';
const options = {method: 'GET'};

function isObject(item) {
    return typeof item === 'object' && item !== null;
}

function isString(val) {
    return typeof val === 'string' || val instanceof String;
}

function getUrl(response) {
    const {abilities} = response;

    if (Array.isArray(abilities) && abilities.length > 0) {
        const [firstAbility] = abilities;

        if (isObject(firstAbility)) {
            const {ability} = firstAbility;

            if (isObject(ability)) {
                const {url} = ability;

                if (isString(url) && url.length) {
                    return url;
                }
            }
        }
    }

    return '';
}

function getDescription(response) {
    const {effect_entries} = response;
    let description = '';

    if (Array.isArray(effect_entries) && effect_entries.length > 0) {
        for (const item of effect_entries) {
            const {language, effect = ''} = item;

            if (isObject(language)) {
                const {name} = language;

                if (isString(name) && name === LANGUAGE) {
                    description = effect;
                    break;
                }
            }
        }
    }

    return description;
}

fetch(URL, options)
    .then(response => response.json())
    .then((result) => {
        return fetch(getUrl(result), options);
    })
    .then(response => response.json())
    .then((result) => {
        console.log(getDescription(result));
    })
    .catch(error => console.log(error));
