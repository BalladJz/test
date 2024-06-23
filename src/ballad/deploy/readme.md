# github_deploy

# 两个文件夹和一个文件 .github/workflows/test.yml(或者cicd.yml 文件名可以自定义 推送至github)

### 需要定义事件 on 来触发工作流 （可以使用 push、workflow_dispatch）

### 修改 事件 on 触发方式为 workflow_dispatch

### 定义 jobs: 并定义两项 job1 job2 工作流

### 利用 yml 数组来表示步骤 在steps 中用小横杠 表示执行步骤 -run (执行两个步骤 pwl/--ls 、 node --version)