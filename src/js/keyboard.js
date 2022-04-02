export class keyboard {
  // private class fields : 클래스 외부에서 접금 하지 않도록 : 변수, 메소드를 private하게 사용하도록
  #switchEl;
  #fontSelectEl;
  #containerEl;
  constructor(){
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement(){
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
  }

  // #addEvent(){
  //   this.#switchEl.addEventListener("change", (e)=>{
  //     document.documentElement.setAttribute (
  //       "theme", 
  //       e.target.checked ? "dark-mode" : ""
  //     )
  //   });
  //   this.#fontSelectEl.addEventListener("change", (e)=>{
  //     document.body.style.fontFamily = e.target.value;
  //     console.log(e.target.value);
  //   });
  // }
  // 리팩토링 onChange는 빼주는것이 좋다.

  #addEvent(){
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);

    // 키보드 눌렀을때 나오도록 
    document.addEventListener("keydown", (e)=>{console.log("keydown")});
    document.addEventListener("keyup", (e)=>{console.log("keyup")});
  }

  #onChangeTheme(e) {
    document.documentElement.setAttribute(
      "theme",
      e.target.checked ? "dark-mode" : ""
    )
  }

  #onChangeFont(e) {
    document.body.style.fontFamily = e.target.value;
      console.log(e.target.value);
  }
}