import lodash from 'lodash';

export default {
  install(Vue) {
    Vue.lodash = lodash;
    Vue.prototype.lodash = lodash;
  },
};

