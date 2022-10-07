<template>
  <div>
    <el-form :rules="rules" ref="form" :model="form" label-width="100px">
      <el-form-item :label="$t('formLabel.appName')" prop="name">
        <el-input class="app-name-input" v-model="form.name" size="mini"></el-input>
      </el-form-item>
      <el-form-item :label="$t('formLabel.appIniFile')" prop="fileIni">
        <el-upload :limit="1" action="/api/v1/upload" :on-success="onIniFileUploadSuccess">
          <el-button icon="el-icon-upload2" type="primary" plain size="mini"></el-button>
        </el-upload>
      </el-form-item>
      <el-form-item :label="$t('formLabel.appMainFile')" prop="fileMain">
        <el-upload :limit="1" action="/api/v1/upload" :on-success="onMainFileUploadSuccess">
          <el-button icon="el-icon-upload2" type="primary" plain size="mini"></el-button>
        </el-upload>
      </el-form-item>
      <div><el-button type="primary" plain @click="onConfirmClick">{{ $t("button.confirm") }}</el-button></div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AppNewComponent",
  data() {
    const checkIniFile = (rule, value, callback) => {
      if(!value) {
        callback(new Error(this.$t("formMessage.iniFileRequired")))
      } else {
        callback()
      }
    }
    const checkMainFile = (rule, value, callback) => {
      if(!value) {
        callback(new Error(this.$t("formMessage.mainFileRequired")))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: null,
        fileIni: null,
        fileMain: null
      },
      rules: {
        name: [{required: true, message: this.$t("formMessage.appNameRequired"), trigger: 'blur'}],
        fileIni: [{required: true, validator: checkIniFile, trigger: 'blur'}],
        fileMain: [{required: true, validator: checkMainFile, trigger: 'blur'}]
      }
    }
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    onIniFileUploadSuccess(res, file, fileList) {
      this.form.fileIni = res.data.tmpFileName
    },

    // eslint-disable-next-line no-unused-vars
    onMainFileUploadSuccess(res, file, fileList) {
      this.form.fileMain = res.data.tmpFileName
    },

    onConfirmClick() {
      this.$refs["form"].validate((valid) => {
        if(valid) {
          const paras = {
            name: this.form.name,
            fileIni: this.form.fileIni,
            fileMain: this.form.fileMain
          }
          this.$api.app.create(paras).then(() => {
            this.$message({
              message: this.$t("formMessage.appCreateSuccess"),
              type: "success"
            })
            this.$emit('on-success')
          }).catch(() => {
            this.$message({
              message: this.$t("formMessage.appCreateError"),
              type: "warning"
            })
          })
        } else {
          return false
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.app-name-input {
  width: 60%
}
</style>
