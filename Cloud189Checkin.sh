#!/usr/bin/env bash
# cron:0 9 * * *
# new Env("天翼网盘自动签到")
npm install || {
    echo "安装依赖失败!"
    exit -1;
}

npm start || {
    echo "执行失败!"
    exit -1;
}
