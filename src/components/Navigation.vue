<style scoped>
.container {
  max-width: 960px;
}

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #8e8e8e;
  transition: color .15s ease-in-out;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}
</style>

<template>
  <header class="site-header sticky-top py-1">
    <nav class="container d-flex flex-column flex-md-row justify-content-between">
      <a class="py-2" href="#" aria-label="Product">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      </a>
      <a class="py-2 d-none d-md-inline-block" href="#">ツアー</a>
      <a class="py-2 d-none d-md-inline-block" href="#">プロダクト</a>
      <a class="py-2 d-none d-md-inline-block" href="#">特徴</a>
      <a class="py-2 d-none d-md-inline-block" href="#">エンタープライズ</a>
      <a class="py-2 d-none d-md-inline-block" href="#">サポート</a>
      <a class="py-2 d-none d-md-inline-block" href="#">価格</a>
      <a class="py-2 d-none d-md-inline-block" href="#">カート</a>
    </nav>
  </header>
</template>
