/* 🚀🔥
黃綠紅 你要哪一個？

此專案涵蓋的概念
- DOM 操作
- 事件監聽器
- 迴圈 forEach 
- 變數
- 條件語句 (if else if)
- 樣板字面值
*/


// 將 title 文字改成 '報告阿柴，標題已經切換！' 並將字體顏色改成藍色
function clickEventHandler(){
  // 取得 title 元素
  let titleDiv = document.getElementById('title')
  console.log('before: ', titleDiv.innerText)
  let message = '報告班長，標題已經切換！'
  titleDiv.innerText = message;
  console.log('after: ', titleDiv.innerText)
  titleDiv.innerHTML = `<p>${message}</p>`
  titleDiv.style.color = 'blue'
}

let changeButton = document.getElementById('changeButton')
changeButton.addEventListener("click", clickEventHandler);


// 將三個方塊綁定
const squares = document.querySelectorAll('.colorSquare')
const output = document.getElementById('output')

// 將每個元素綁定
squares.forEach(square => {
  square.onclick = () => {
    console.log("click")
    output.innerText = "你選擇了 " + square.id

    // 透過 id 判斷是哪一個方塊
    _id = square.getAttribute('id')
    output.innerHTML = `<div class='colorSquare' id='${_id}'></div>`
  }
})

function resetScore() {

}

const resetGameBtn = document.getElementById('reset')
// 綁定 reset 事件
resetGameBtn.onclick = () => resetScore()

