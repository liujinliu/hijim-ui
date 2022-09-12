<template>
    <div>
        <el-table :data="apps">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="name">
            <template slot="header">{{ $t("market.app.name") }}</template>
          </el-table-column>
          <el-table-column prop="version">
            <template slot="header">{{ $t("market.app.version") }}</template>
          </el-table-column>
          <el-table-column prop="author">
            <template slot="header">{{ $t("market.app.author") }}</template>
          </el-table-column>
          <el-table-column prop="authorEmail">
            <template slot="header">{{ $t("market.app.authorEmail") }}</template>
          </el-table-column>
          <el-table-column prop="pubDate">
            <template slot="header">{{ $t("market.app.pubDate") }}</template>
          </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: "MarketView",
    data() {
        return {
            apps: [
                {
                    name: 'hop-on-http',
                    version: '0.0.1',
                    author: 'liujinliu',
                    authorEmail: 'xxxx@@xx.com',
                    pubDate: '2022-09-12',
                    description: '## VIA-HTTP'
                },
                {
                    name: 'via-selenium',
                    version: '0.0.1',
                    author: 'liujinliu',
                    authorEmail: 'xxxx@@xx.com',
                    pubDate: '2022-09-10',
                    description: '## BY SELENIUM'
                }
            ]
        }
    }
}
</script>
