<template>
  <div>
    <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <span>
          <img
              src="https://s3.ap-northeast-1.amazonaws.com/media.taro-hida.tk/hatsune_face_mask.jpg"
              alt=""
              class="user-avatar-md rounded-circle"
              width="40"
              height="40"
          >
          </span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><span class="dropdown-item">@tarohida</span></li>
        <li><a class="dropdown-item" href="#">ログアウト</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>