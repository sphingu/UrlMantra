import { Links } from '/lib/collections';

export default function() {
    if (!Links.findOne()) {
        for (let lc = 1; lc <= 5; lc++) {
            const title = `sample blog title ${lc}`;
           Links.insert({ title });
        }
    } else {
        console.log('Seeding not require');
    }
}
