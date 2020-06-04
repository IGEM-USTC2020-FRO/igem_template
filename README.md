# iem 前端项目的模板文件
**任何人不得**修改此项目，此项目只是工程的示范模板文件，不是最终开发文件。
具体配置请见 [https://igem-ustc2020-fro.github.io/](https://igem-ustc2020-fro.github.io/)

## 开始
```G
cnpm install
```

### 运行开发模式
```
cnpm run dev
```

### 运行 mock 模式
```
cnpm run mock
```

### 构建生产环境包
```
cnpm run build
```
> 这会同时构建两次，分别对应 gzip 与普通，具体见文档
> 这样可以同时观察 gzip 压缩效率。
> 如果你发现构建时间过久，你可以考虑修改配置。
> 请不要将配置上传

### 使用 eslint 语法检查项目
```
cnpm run lint
```
