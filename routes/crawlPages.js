const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
var List = [];
const crawlUrl = function (url) {
  return new Promise(function (resolve, reject) {
    request(url, (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const $symbolResults = $(".bbs_con").find("tbody").find("tr");
        $symbolResults.each(function (i, result) {
          List[i] = {
            type: $(this).find("td:nth-of-type(1)").text(),
            title: $(this).find("td.left").find("a").text(),
            url: url + $(this).find("td.left").find("a").attr("href"),
            date: $(this).find("td:nth-of-type(3)").text(),
          };
          List[i].date = List[i].date.split(".").join("-");
        });
        const data = List.filter((n) => n.title); // 같이 바꾸기

        resolve(data);
      }
    });
  });
};

// const crawlUrl2 = function (url) {
//   return new Promise(function (resolve, reject) {
//     request(url, (error, response, html) => {
//       if (!error && response.statusCode === 200) {
//         const $ = cheerio.load(html);
//         const $symbolResults = $(".bbs_con").find("tbody").find("tr");
//         $symbolResults.each(function (i, result) {
//           List[i] = {
//             type: $(this).find("td:nth-of-type(1)").text(),
//             // title: $(this).find("td.left").find("a").text(),
//             // url: url + $(this).find("td.left").find("a").attr("href"),
//             // date: $(this).find("td:nth-of-type(3)").text(),
//           };
//           List[i].date = List[i].date.split(".").join("-");
//         });
//         const data = List.filter((n) => n.title); // 같이 바꾸기
//         // const jsonData = JSON.stringify(data);
//         // jsonData2 = "{" + '"' + "symbols" + '"' + ":" + jsonData + "}";
//         // fs.writeFileSync("./symbol.json", jsonData2);
//         // console.log("JSON created");
//         resolve(data);
//       }
//     });
//   });
// };

module.exports = { crawlUrl };
