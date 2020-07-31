// import Vue from 'vue'

// Vue.filter('timefilter',function(value){
// 	let d1 = new Date(value)
// 	let year = d1.getFullYear().toString().padStart(2,0)
// 	let month = d1.getMonth().toString().padStart(2,0)
// 	 let day = d1.getDay().toString().padStart(2,0)
// 	 return year +"-"+month+"-"+day
	 
// })
let timefilter = (value)=>{
		let d1 = new Date(value)
		let year = d1.getFullYear().toString().padStart(2,0)
		let month = d1.getMonth().toString().padStart(2,0)
		 let day = d1.getDay().toString().padStart(2,0)
		 return year +"-"+month+"-"+day
		 
}

// const isNullOrEmpty = function(val) {
//     if (val == null || val == "" || typeof(val) == undefined) {
//         return true;
//     } else {
//         return false;
//     }
// }
 
// const timeFormat = (value, format) => {
//     let date = new Date(value);
//     let y = date.getFullYear();
//     let m = date.getMonth() + 1;
//     let d = date.getDate();
//     let h = date.getHours();
//     let min = date.getMinutes();
//     let s = date.getSeconds();
//     let result = "";
//     if (format == undefined) {
//         result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d} ${
//         h < 10 ? "0" + h : h
//       }:${min < 10 ? "0" + min : min}:${s < 10 ? "0" + s : s}`;
//     }
//     if (format == "yyyy-mm-dd") {
//         result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
//     }
//     if (format == "yyyy-mm") {
//         result = `${y}-${m < 10 ? "0" + m : m}`;
//     }
//     if (format == "mm-dd") {
//         result = ` ${mm < 10 ? "0" + mm : mm}:${ddmin < 10 ? "0" + dd : dd}`;
//     }
//     if (format == "hh:mm") {
//         result = ` ${h < 10 ? "0" + h : h}:${min < 10 ? "0" + min : min}`;
//     }
//     if (format == "yyyy") {
//         result = `${y}`;
//     }
//     return result;
// };
 
 
export {
    timefilter
}