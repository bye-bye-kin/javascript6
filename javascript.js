//pushメソッド
//配列の最後に新しい要素を追加するメソッドです。後の()の中に追加したい要素を入力します。


const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];
console.log(characters);
// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
characters.push("とりずきん");
// 配列charactersを出力してください
console.log(characters);



//forEachメソッド
//配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッドです。
//forEach((引数)=>｛処理｝);
//例
const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];
// forEachメソッドを使って、配列charactersの中身をすべて出力してください
characters.forEach((character)=>{console.log(character)});

//findメソッド
//コールバック関数の処理部分に記述した条件式に合う1つ目の要素を配列の中から取り出すメソッドです。
//配列numbersの要素が1つずつ引数numberに代入されて処理が進みます。
//コールバック関数の中は { return 条件 } と書くことで、条件に合う要素が戻り値となります。
//findメソッドは条件に合う要素が見つかった時に終了するので、条件に合う最初の1つの要素しか取り出せません。
//例
const numbers = [1, 3, 5, 7, 9];
// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
const foundNumber=numbers.find((number)=>{return number%3===0});
// foundNumberを出力してください
console.log(foundNumber);

//filter
//配列から条件に合うすべての要素を取り出すことができる。
//例
const numbers = [1, 2, 3, 4];
// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入してください
const evenNumbers=numbers.filter((number)=>{return number%2===0});
// evenNumbersを出力してください
console.log(evenNumbers);


//map
//配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成する.
//例
const names = [
    {firstName: "Kate", lastName: "Jones"},
      {firstName: "John", lastName: "Smith"},
      {firstName: "Denis", lastName: "Williams"},
      {firstName: "David", lastName: "Black"}
  ]
  // 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
  const fullNames=names.map((name)=>{return name.firstName+name.lastName});
  // 定数fullNamesを出力してください
  console.log(fullNames);

//例その２
const numbers = [1, 2, 3, 4];
// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入してください
const doubledNumbers=numbers.map((number)=>{return number*2});
// 定数doubledNumbersを出力してください
console.log(doubledNumbers);






