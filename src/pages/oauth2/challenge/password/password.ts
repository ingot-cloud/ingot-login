const formModel = reactive({
  username: "",
  password: "",
  code: "",
});

const loading = ref(false);

const init = () => {
  loading.value = false;
  formModel.username = "";
  formModel.password = "";
  formModel.code = "";
};

/**
 * 密码登录逻辑
 * @param formRef
 */
const handleLogin = () => {
  loading.value = true;
  return new Promise((resolve) => {
    loading.value = false;
  });
};

export default {
  loading,
  formModel,
  init,
  handleLogin,
};
