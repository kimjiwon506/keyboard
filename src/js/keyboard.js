export class keyboard {
  // private class fields : 클래스 외부에서 접금 하지 않도록 : 변수, 메소드를 private하게 사용하도록
  #swichEl;
  constructor(){
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement(){
    this.#swichEl = document.getElementById("switch");
  }
  #addEvent(){
    this.#swichEl.addEventListener("change", (e)=>{
      document.documentElement.setAttribute (
        "theme", 
        e.target.checked ? "dark-mode" : ""
      )
      console.log(document.documentElement);
    });
  }
}