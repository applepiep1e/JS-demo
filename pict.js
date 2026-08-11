const {pict} = require("pict-pairwise-testing");

// 定义模型：参数列表
const model = {
  parameters: [
    {property: "status", values: ["open", "closed"]},
    {property: "threshold", values: [10, 100, 500]},
    {property: "approved", values: ["yes", "no"]}
  ]
};

// 生成成对测试用例
const ret = pict(model);

console.log("生成用例数量: ", ret.testCases.length);
console.log(ret.testCases);

const ret1 = pict(model, { 
  options: { 
    order_of_combinations: 2, // 默认2：两两；3代表三三组合 
    randomize_generation: 42, // 随机种子 
    show_model_statistics: false 
    } 
});

console.log(" ^t^= ^h^p ^t   ^k ^u  ^g^o: ", ret1.testCases.length);
console.log(ret1.testCases);


const model1 = {
  parameters: [
    {property: "status", values: ["open", "closed"]},
    {property: "threshold", values: [10, 100, 500]},
    {property: "approved", values: ["yes", "no"]}
  ],
  //constraints: [
    // IN 集合内部，逗号后禁止空格
  //  `IF [status] = "closed" THEN [threshold] IN {"100","500"}`
  //]
};

const ret2 = pict(model1);

// JS层过滤：剔除 status="closed" && threshold = "10"
const filtered = ret2.testCases.filter(item => {
  return !(item.status === "closed"  && item.threshold === "10");
});

console.log("生成用例数量: ", filtered);
console.log(filtered);


