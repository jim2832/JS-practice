let seconds = 0
let m_seconds = 0

// 綁定顯示時間的元素
const displaySeconds = document.getElementById('seconds')
const displayMSeconds = document.getElementById('m_seconds')

// 綁定按鈕元素
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')

// 宣告一個全域變數 interval 用來存放 setInterval 的 ID
let interval

// 綁定 Start 按鈕的觸發事件
buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(timer, 10)
}

// 綁定 Stop 按鈕的觸發事件
buttonStop.onclick = () => {
  clearInterval(interval)
}

// 綁定 Reset 按鈕的觸發事件
buttonReset.onclick = () => {
  clearInterval(interval)
  m_seconds = 0
  seconds = 0
  displayMSeconds.innerHTML = `0${m_seconds}`
  displaySeconds.innerHTML = `0${seconds}`
}

// 碼錶讀取方法
const timer = () => {
  m_seconds++

  if (Number(m_seconds) <= 9) {
    displayMSeconds.innerHTML = `0${m_seconds}`
  }

  if (Number(m_seconds) > 9) {
    displayMSeconds.innerHTML = m_seconds
  }

  if (Number(m_seconds) > 99) {
    console.log('seconds')

    // 累加 seconds
    seconds++
    displaySeconds.innerHTML = `0${seconds}`

    // 重置 m_seconds
    m_seconds = 0
    displayMSeconds.innerHTML = `0${m_seconds}`
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds
  }
}
