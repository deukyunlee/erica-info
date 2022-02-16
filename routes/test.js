const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
var data = [];
const db = require("../app");
const router = require("express").Router();
const crawlPages = require("./crawlPages");
let sql;
router.post("/", function (req, res) {
  async function getData() {
    data[1] = await crawlPages.crawlUrl(
      "http://computing.hanyang.ac.kr/open/deptNotice.php"
    );

    data[2] = await crawlPages.crawlUrl(
      "http://computing.hanyang.ac.kr/open/notice.php"
    );

    data[3] = await crawlPages.crawlUrl(
      "http://computer.hanyang.ac.kr/news/job.php"
    );

    data[4] = await crawlPages.crawlUrl(
      "http://computer.hanyang.ac.kr/news/notice.php"
    );

    sql = "insert IGNORE into info(type, title, url, date) values(?)";

    for (var i = 1; i <= 4; i++) {
      data[i].forEach((element) => {
        const type = element.type;
        const title = element.title;
        const url = element.url;
        const date = element.date;
        const array = [type, title, url, date];
        db.query(sql, [array], function (err, rows, fields) {
          if (err) {
            return res.status(400).json({
              status: "error",
              error: "req cannot be empty",
            });
          }
        });
      });
    }
  }
  getData();

  // sql = "select * from info order by date desc";

  // db.query(sql, function (err, rows, fields) {
  //   if (err) {
  //     return res.status(400).json({
  //       status: "error",
  //       error: "req cannot be empty",
  //     });
  //   }
  //   res.status(200).json({
  //     status: "success",
  //     data: rows,
  //   });
  // });
});

router.get("/", function (req, res) {
  const sql = "select * from info order by date desc";
  db.query(sql, function (err, rows, fields) {
    if (err) {
      return res.status(400).json({
        status: "error",
        error: "req cannot be empty",
      });
    }
    res.status(200).json({
      status: "success",
      data: rows,
    });
  });
});

module.exports = router;
