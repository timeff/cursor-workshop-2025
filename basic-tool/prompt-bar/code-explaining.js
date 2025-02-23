// Legacy function that processes user transaction data
// WARNING: This legacy code has multiple issues and needs refactoring
function processUserTxn(d, cfg, f) {
  let r = [];
  let t = 0;

  for (let i = 0; i < d.length; i++) {
    let x = d[i];
    if (x.typ === "A") {
      t += x.amt * (cfg.rateA || 1.5);
      if (x.flg && !f) {
        let p = x.amt * 0.25;
        t += p;
        r.push({
          id: x.id,
          amount: x.amt,
          premium: p,
          status: "P",
        });
      } else {
        r.push({
          id: x.id,
          amount: x.amt,
          status: "R",
        });
      }
    } else if (x.typ === "B") {
      let m = cfg.rateB || 1.2;
      if (x.amt > 1000) {
        m += 0.1;
      }
      t += x.amt * m;
      r.push({
        id: x.id,
        amount: x.amt * m,
        status: x.flg ? "H" : "L",
      });
    }
  }

  if (t > 5000) {
    t *= 0.95; // 5% discount
  }

  return {
    items: r,
    total: Number(t.toFixed(2)),
    timestamp: new Date().getTime(),
  };
}
