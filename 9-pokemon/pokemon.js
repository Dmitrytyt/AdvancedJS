const LANGUAGE = 'en';

function isObject(item) {
    return typeof item === 'object' && item !== null;
}

function isString(val) {
    return typeof val === 'string' || val instanceof String;
}

function getUrl(req) {
    const {abilities} = req.response;

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

function getDescription(req) {
    const {effect_entries} = req.response;
    let description = '';

    if (Array.isArray(effect_entries) && effect_entries.length > 0) {
        for (const item of effect_entries) {
            const {language, effect = ''} = item;

            if (isObject(language)) {
                const {name} = language;

                if (isString(name) && name === LANGUAGE) {
                    description = effect;
                }
            }
        }
    }

    return description;
}

function send(url, method = 'GET', type = 'json') {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = type;
    xhr.send();

    return xhr;
}

(function () {
    const firstXhr = send('https://pokeapi.co/api/v2/pokemon/ditto');

    firstXhr.onload = function() {
        if (firstXhr.status === 200) {
            const url = getUrl(firstXhr);
    
            if (url) {
                const secondXhr = send(url);
                
                secondXhr.onload = function() {
                    if (secondXhr.status === 200) {
                        console.log(getDescription(secondXhr));
                    }
                }
            }
        }
    };
 }());
