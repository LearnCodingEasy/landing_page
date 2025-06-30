import comp from "D:/landing_page/project_docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"landing page\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Github\",\"slug\":\"github\",\"link\":\"#github\",\"children\":[]},{\"level\":2,\"title\":\"LICENSE\",\"slug\":\"license\",\"link\":\"#license\",\"children\":[]},{\"level\":2,\"title\":\"Vite Press\",\"slug\":\"vite-press\",\"link\":\"#vite-press\",\"children\":[]},{\"level\":2,\"title\":\"Vue\",\"slug\":\"vue\",\"link\":\"#vue\",\"children\":[{\"level\":3,\"title\":\"🖥️ Create Vue Project\",\"slug\":\"🖥️-create-vue-project\",\"link\":\"#🖥️-create-vue-project\",\"children\":[]},{\"level\":3,\"title\":\"📚 Install Vue Libraries\",\"slug\":\"📚-install-vue-libraries\",\"link\":\"#📚-install-vue-libraries\",\"children\":[]},{\"level\":3,\"title\":\"📦 Setup Vue Libraries\",\"slug\":\"📦-setup-vue-libraries\",\"link\":\"#📦-setup-vue-libraries\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
