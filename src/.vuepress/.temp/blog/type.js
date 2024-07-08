export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-184f4da6","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-3c86f090","v-6626ae84","v-14583d80","v-55e1b348","v-2ab5d7d0","v-d9f9be26","v-b0139926","v-21387464","v-33037841","v-1a9838da","v-39f91aea","v-52577d81","v-a0d678ee","v-0a5ac2c2","v-2a2cfc73","v-2cdd8cba","v-147bdc25","v-0d5e2b1b","v-e8653bfa","v-770ec5d5","v-f5f52750","v-23454630","v-f5a36842","v-7a9c31a0","v-00c20287","v-232184c2","v-4cef7227","v-a24d3496","v-ada5e9c2","v-6fce4bfc","v-3616b7b6","v-96f9b37c","v-3d6822ac","v-3461901d","v-663d999e","v-9744bfb6"]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

