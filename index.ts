window.onload = () => {
  class CustomDiv extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({mode: "open"});
      const tem = document.getElementById('custom-tem') as HTMLTemplateElement;

      shadow.appendChild(tem.content);
      console.log(this.getAttr("name"));
      console.log(this.getAttr("type"));
    }

    private getAttr(attr: string) {
      return this.getAttribute(attr);
    }

    // 生命周期
    // 插入
    connectedCallback() {
      console.log('Custom square element added to page.');
    }

    // 删除
    disconnectedCallback() {
      console.log('Custom square element removed from page.');
    }
    
    // 移动
    adoptedCallback() {
      console.log('Custom square element moved to new page.');
    }

    // 增加、删除、修改自身属性时，被调用。
    attributeChangedCallback() {
      console.log('Custom square element attributes changed.');
    }
  }
  window.customElements.define('custom-div', CustomDiv);
}

//
