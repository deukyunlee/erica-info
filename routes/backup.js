// router.get("/2", function (req, res) {
//   request(
//     "http://computing.hanyang.ac.kr/open/notice.php",
//     (error, response, html) => {
//       if (!error && response.statusCode === 200) {
//         const $ = cheerio.load(html);
//         const $symbolResults = $(".bbs_con").find("tbody").find("tr");
//         $symbolResults.each(function (i, result) {
//           List[i] = {
//             type: $(this).find("td:nth-of-type(1)").text(),
//             title: $(this).find("td.left").find("a").text(),
//             url:
//               "http://computing.hanyang.ac.kr/open/notice.php" +
//               $(this).find("td.left").find("a").attr("href"),
//             date: $(this).find("td:nth-of-type(3)").text(),
//           };
//           List[i].date = List[i].date.split(".").join("-");
//         });
//         const data = List.filter((n) => n.title); // 같이 바꾸기
//         // const jsonData = JSON.stringify(data);
//         // jsonData2 = "{" + '"' + "symbols" + '"' + ":" + jsonData + "}";
//         // fs.writeFileSync("./symbol.json", jsonData2);
//         // console.log("JSON created");
//         res.send(data);
//       }
//     }
//   );
// });

// router.get("/3", function (req, res) {
//   request(
//     "http://computing.hanyang.ac.kr/open/notice.php",
//     (error, response, html) => {
//       if (!error && response.statusCode === 200) {
//         const $ = cheerio.load(html);
//         const $symbolResults = $(".bbs_con").find("tbody").find("tr");
//         $symbolResults.each(function (i, result) {
//           List[i] = {
//             type: $(this).find("td:nth-of-type(1)").text(),
//             title: $(this).find("td.left").find("a").text(),
//             url:
//               "http://computing.hanyang.ac.kr/open/notice.php" +
//               $(this).find("td.left").find("a").attr("href"),
//             date: $(this).find("td:nth-of-type(3)").text(),
//           };
//           List[i].date = List[i].date.split(".").join("-");
//         });
//         const data = List.filter((n) => n.title); // 같이 바꾸기
//         // const jsonData = JSON.stringify(data);
//         // jsonData2 = "{" + '"' + "symbols" + '"' + ":" + jsonData + "}";
//         // fs.writeFileSync("./symbol.json", jsonData2);
//         // console.log("JSON created");
//         res.send(data);
//       }
//     }
//   );
// });

// router.get("/4", function (req, res) {
//     request(
//       "http://computer.hanyang.ac.kr/news/notice.php",
//       (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//           const $ = cheerio.load(html);
//           const $symbolResults = $(".bbs_con").find("tbody").find("tr");
//           $symbolResults.each(function (i, result) {
//             List[i] = {
//               type: $(this).find("td:nth-of-type(1)").text(),
//               title: $(this).find("td.left").find("a").text(),
//               url:
//                 "http://computer.hanyang.ac.kr/news/notice.php" +
//                 $(this).find("td.left").find("a").attr("href"),
//               date: $(this).find("td:nth-of-type(3)").text(),
//             };
//             List[i].date = List[i].date.split(".").join("-");
//           });
//           const data = List.filter((n) => n.title); // 같이 바꾸기
//           // const jsonData = JSON.stringify(data);
//           // jsonData2 = "{" + '"' + "symbols" + '"' + ":" + jsonData + "}";
//           // fs.writeFileSync("./symbol.json", jsonData2);
//           // console.log("JSON created");
//           res.send(data);
//         }
//       }
//     );
//   });
