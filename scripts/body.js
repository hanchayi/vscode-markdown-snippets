const code = `---
title: 自我介绍
description: 简单介绍下自己，简历上的项目经历，有什么想问的。
type: posts
---`

console.log(JSON.stringify(code.split('\n'), null, ' '))
