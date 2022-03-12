import { reactive } from "vue";

// 类型
type InsertContent = {
   content: string,
   from: string,
   remove: boolean
}
type ObserverConfig = {
   root: HTMLElement | null,
   rootMargin: string,
   threshold: Array<number>
}
type ObserverCallBack = {
   (entries: object, observer: object): void
}

// 插入内容
export let insertContent: Array<InsertContent> = reactive([{
   content: "然则天下之事，但知其一，不知其二者多矣，可据理臆断欤？",
   from: "河中石兽",
   remove: false
}, {
   content: "信心这个东西，什么时候都像个高楼大厦，但是里面会长白蚁。",
   from: "沉默的大多数",
   remove: false
}, {
   content: "我有故人抱剑去，斩尽春风未曾归。",
   from: "孤山不孤",
   remove: false
}, {
   content: "浮世三千，吾有三爱，日月与卿，日为朝，月为暮，卿为朝朝暮暮。",
   from: "飞鸟集",
   remove: false
}, {
   content: "也许是把一些事物看太重了，然而失去了才患于恋恋不舍。",
   from: "安世",
   remove: false
}, {
   content: "就算是自私⋯⋯我也希望那些人能够永远都有笑容⋯⋯",
   from: "夏目友人帐",
   remove: false
}]);

// 工具类
class Utils {
   // Observer 实例对象数组
   protected observerList: Array<any> = [];

   // observer 监听
   // traverse 是否遍历元素
   protected Observer<T>(el: T, callback: ObserverCallBack, traverse: boolean, config?: ObserverConfig) {
      // 配置项
      config = config || { root: null, rootMargin: "0px 0px 0px 0px", threshold: [0.01] };
      // 创建 Observer 实例
      let observer = new IntersectionObserver((entries, observer) => {
         callback(entries, observer);
      }, config);

      // 绑定监听对象
      if (traverse) {
         // 使用一言API
         // insertContent.map((item, index) => {
         //    this.HitokotoAPI().then(res => {
         //       item.content = res.content;
         //       item.from = res.from;
         //    }).then(() => {
         //       observer.observe((el as any).children[index]);
         //    })
         // })

         // 使用死数据
         Array.from((el as any).children).map(item => {
            observer.observe((item as any));
         })
      } else {
         observer.observe(el as any);
      }

      // 将监听实例加入数组中
      this.observerList.push(observer);
   }


   // hitokoto 一言API
   protected async HitokotoAPI() {
      let res = await fetch("https://v1.hitokoto.cn").then(response => response.json());
      return { content: res.hitokoto, from: res.from };
   }
}

// Marquee类
export default class Marquee<T> extends Utils {
   private contentEL: T;
   constructor(contentEL: T) {
      super()
      this.contentEL = contentEL;
   }

   // Wrapper 处理函数
   private handleWrapper(entries: any) {
      // Wrapper 可见
      if (entries[0]?.isIntersecting == true) {
         // 开启动画
         (this.contentEL as any).style.animationName = "Marquee";
      }

      // Wrapper 不可见
      if (entries[0].isIntersecting == false) {
         // 去掉动画
         (this.contentEL as any).style.animationName = "null";
         // 去除多余的数组元素
         insertContent.splice(6);
      }
   }

   // Content 处理函数
   private handleContent(entries: any) {
      let target = entries[0].target;
      // Content Item 不可见
      if (entries[0].isIntersecting == false) {
         // 向 insertContent 数组追加元素
         let content: string = (target as any).firstElementChild?.textContent;
         let from: string = (target as any).lastElementChild?.textContent;
         insertContent.push({
            content, from, remove: true
         })
      }
   }

   // 初始化 Marquee
   Init() {
      // 处理 Wrapper
      let wrapperEL: HTMLElement = (this.contentEL as any).parentElement;
      this.Observer(wrapperEL, this.handleWrapper.bind(this), false);

      // 处理 Content
      this.Observer(this.contentEL, this.handleContent.bind(this), true);
   }

   // 取消 Observer 的监听
   Stop() {
      this.observerList[0].disconnect();
      this.observerList[1].disconnect();
   }
}
