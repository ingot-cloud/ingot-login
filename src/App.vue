<template>
  <el-config-provider
    :button="buttonConfig"
    :size="componentSize"
    :locale="zhCn"
  >
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const componentSize = "default";
const buttonConfig = reactive({
  autoInsertSpace: false,
});
</script>
