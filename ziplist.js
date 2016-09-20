/**
 * Created by Minako on 2016/09/19.
 */

const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(list1, list2) {
  const combine = [];
  for (let i = 0; i < list1.length; i + 1) {
    combine.push(list1[i]);
    combine.push(list2[i]);
  }
  return combine;
}

function zipListTheSimpleWay(list1, list2) {
  const ziplist = _.zip(list1, list2);
  return _.flatten(ziplist);
}

console.log(zipList(test1, test2));

console.log(zipListTheSimpleWay(test1, test2));
