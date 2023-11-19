const rtf = new Intl.RelativeTimeFormat('ru');

const timeParts = [
    {
        start: 11,
        dateMethod: 'getMonth',
        formatName: 'month',
    },{
        start: nowDate => 32 - new Date(nowDate.getFullYear(), nowDate.getMonth(), 32).getDate(),
        dateMethod: 'getDate',
        formatName: 'day',
    },{
        start: 23,
        dateMethod: 'getHours',
        formatName: 'hour',
    },{
        start: 59,
        dateMethod: 'getMinutes',
        formatName: 'minute',
    },{
        start: 59,
        dateMethod: 'getSeconds',
        formatName: 'second',
    },
];

function run(elem, timeParts) {
    const nowDate = new Date();
    const list = [];

    for (item of timeParts) {
        let start = item.start;

        if (typeof start === 'function') {
            start = start(nowDate);
        }

        const num = start - nowDate[item.dateMethod]();
        const formatName = rtf.format(num, item.formatName);

        list.push(formatName.replace(/через/i, ''));
    }

    elem.innerHTML = list.join(', ');
}

(function render() {
    const elem = document.getElementById('root');
    run(elem, timeParts);

    let timerId = setTimeout(function tick() {
        run(elem, timeParts);
        timerId = setTimeout(tick, 1000);
    }, 1000);
})();
