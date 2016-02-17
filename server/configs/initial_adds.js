import {Urls} from '/lib/collections';

export default function () {
  if (!Urls.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const url = `http://www.MyWebsite${lc}.com`;
      Urls.insert({url});
    }
  }
}
