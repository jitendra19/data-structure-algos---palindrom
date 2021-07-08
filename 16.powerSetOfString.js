export default function powerSet(input) {
  const a = [];
  util(input, 0, '', a);
  return a;
}
function util(str, index, current, tempArr) {
  if (index === str.length) {
    tempArr.push(current);
    return;
  }
  util(str, index + 1, current + str.charAt(index), tempArr);
  util(str, index + 1, current, tempArr);
}


// Java implementation

// static ArrayList<String> powerSet(String s) {
// 	ArrayList<String> ans = new ArrayList<String>();
// 	util(s, 0, "", ans);
// 	return ans;
// }
// static void util(String s, int index, String current, ArrayList<String> v) {
// 	if(index == s.length()) {
// 		v.add(current);
// 		return;
// 	}
// 	util(s, index+1, current+s.charAt(index), v);
// 	util(s, index+1, current, v);
// }
